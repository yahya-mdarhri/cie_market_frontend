import { useEffect, useState, useRef } from "react";
import { FaTimes, FaRedo, FaUserTie, FaBuilding, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./InnovationDiagnosis.css";
import axios from 'axios';
import { HashLink } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';
import { getPhases, getQuestionsByPhase, getIcons, getScoreRanges, getConsentText, getInfoQuestions, getProfileQuestions, getProfileAnswers } from "./data";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



interface Response {
  note: number;
  evidence: string;
}

interface ProfileResponse {
	option: string;
	comment: string;
}

interface Responses {
  [key: number]: Response;
}

interface ProfileResponses {
	[key: number]: ProfileResponse
}

interface QuizResult {
  total: number;
  type: string;
  description: string;
}

interface UserInfo {
  name: string;
  email: string;
  organization: string;
  position: string;
  phone: string;
}

interface Question {
  phase: string;
  question: string;
}

const createUserInfoSchema = (t: (key: string) => string) => yup.object().shape({
  name: yup.string()
    .min(3, t('innovationDiagnosis.form.validation.name.min'))
    .max(50, t('innovationDiagnosis.form.validation.name.max'))
    .required(t('innovationDiagnosis.form.validation.name.required')),
  email: yup.string()
    .email(t('innovationDiagnosis.form.validation.email.invalid'))
    .required(t('innovationDiagnosis.form.validation.email.required')),
  organization: yup.string()
    .min(3, t('innovationDiagnosis.form.validation.organization.min'))
    .required(t('innovationDiagnosis.form.validation.organization.required')),
  position: yup.string()
    .min(3, t('innovationDiagnosis.form.validation.position.min'))
    .required(t('innovationDiagnosis.form.validation.position.required')),
  phone: yup.string()
    .min(10, t('innovationDiagnosis.form.validation.phone.min'))
    .max(15, t('innovationDiagnosis.form.validation.phone.max'))
    .required(t('innovationDiagnosis.form.validation.phone.required')),
});

function InnovationDiagnosis() {
  const { t } = useTranslation('innovationDiagnosis');
  const [responses, setResponses] = useState<Responses>({});
	const [profileResponses, setProfileResponses] = useState<ProfileResponses>({})
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const infoQuestionsData = getInfoQuestions(t)
  const [infoQuestions, setInfoQuestions] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    organization: '',
    position: '',
    phone: '',
  });
  const [hasStarted, setHasStarted] = useState(false);
  const [filledSecondForm, setFilledSecondForm] = useState(false);
  const [userType, setUserType] = useState('person');
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;

    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#1a1a2e',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = userType === 'company' 
        ? `innovation-diagnosis-${userInfo.organization}.pdf`
        : `innovation-profile-${userInfo.name}.pdf`;
      
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.value);
    const companyFields = document.getElementById('companyFields');
    if (companyFields) {
      companyFields.style.display = e.target.value === 'company' ? 'flex' : 'none';
    }
  };

  const phases = getPhases(t);
  const questionsByPhase = getQuestionsByPhase(t);
  const icons = getIcons(t);
  const scoreRanges = getScoreRanges(t);
  const consentText = getConsentText(t);

  const questions: Question[] = phases.flatMap(phase => 
    questionsByPhase[phase].map(question => ({
      phase,
      question
    }))
  );

	const profileQuestions: string[] =  getProfileQuestions(t);
	const profileQuestionOptions = getProfileAnswers(t)
  const { register, handleSubmit, formState: { errors } } = useForm<UserInfo>({
    resolver: yupResolver(createUserInfoSchema(t))
  });

  const handleExit = () => {
    window.history.back();
  };

  const handleReset = () => {
		setResponses({});
		setProfileResponses({});
		setStep(0);
		setIsComplete(false);
		setHasStarted(false);
		setFilledSecondForm(false);
		setUserType('person');
		setUserInfo({
			name: '',
			email: '',
			organization: '',
			position: '',
			phone: '',
		});
		setInfoQuestions([]);
		};

  const handleChange = (index: number, field: keyof Response, value: string | number) => {
    setResponses(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value
      }
    }));
  };
	const handleProfileChange = (index: number, field: keyof ProfileResponse, value: string | number) => {
		setProfileResponses(prev => ({
			...prev,
			[index]: {
				...prev[index],
				[field]: value
			}
		}))
	}

  const handleMoreInfoSubmit = (data: string[]) => {
    setInfoQuestions(data);
    setFilledSecondForm(true);
  };

  const handleUserInfoSubmit = (data: UserInfo) => {
    setUserInfo(data);
    setHasStarted(true);
  };

	const globalIndex = step + 1;
	
  const totalQuestions = questions.length;
  const currentQuestion = questions[step];
  const currentPhase = currentQuestion?.phase;
  const selectedNote = responses[globalIndex]?.note ?? "";
  const evidence = responses[globalIndex]?.evidence ?? "";


	const totalProfileQuestions = profileQuestions.length;
  const currentProfileQuestion = profileQuestions[step];
  const selectedOption = profileResponses[globalIndex]?.option ?? "";
  const comment = profileResponses[globalIndex]?.comment ?? "";
	

  const calculateScore = (): QuizResult => {
    const total = Object.values(responses).reduce(
      (sum: number, r: Response) => sum + Number(r.note || 0),
      0
    );
    const result = scoreRanges.find(range => total <= range.max);
    return {
      total,
      type: result?.type || "Unknown",
      description: result?.description || "No description available."
    };
  };

  const handleNext = () => {
    if (step < totalQuestions - 1) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };

	const handleProfileNext = () => {
    if (step < totalProfileQuestions - 1) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const { type, description } = calculateScore();


	useEffect(() => {
		if (isComplete) {
			const payload = {
				name: userInfo.name,
				email: userInfo.email,
				organization: userInfo.organization,
				position: userInfo.position,
				phone: userInfo.phone,
				user_type: userType,
				info_questions: infoQuestions,
				responses: responses,
				profile_responses: profileResponses,
			};

			const submitPayload = async () => {
				await axios.post('/api/public/innovation-submition/', payload);
			};
	
			submitPayload();
	
		}
	}, [isComplete]);
  // basic  information form
  if (!hasStarted) {
    return (
      <div className="audit-container">
        <button className="exit-button" onClick={handleExit}>
          <FaTimes />
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="audit-content"
        >
          <h1 className="audit-title">{t('innovationDiagnosis.title')}</h1>
          <form onSubmit={handleSubmit(handleUserInfoSubmit)} className="user-info-form">
            <div className="contact-type-toggle">
              <button 
                type="button"
                className={`toggle-option ${userType === 'person' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange({ target: { value: 'person' } } as React.ChangeEvent<HTMLInputElement>)}
              >
                <FaUserTie className="toggle-icon" />
                <span className="toggle-text">{t('innovationDiagnosis.form.person')}</span>
              </button>
              <button 
                type="button"
                className={`toggle-option ${userType === 'company' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange({ target: { value: 'company' } } as React.ChangeEvent<HTMLInputElement>)}
              >
                <FaBuilding className="toggle-icon" />
                <span className="toggle-text">{t('innovationDiagnosis.form.company')}</span>
              </button>
              <input 
                type="hidden" 
                name="userType" 
                value={userType}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('innovationDiagnosis.form.fullName')} *</label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder={t('innovationDiagnosis.form.placeholders.fullName')}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t('innovationDiagnosis.form.phone')} *</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  placeholder={t('innovationDiagnosis.form.placeholders.phone')}
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="organization">{t('innovationDiagnosis.form.organization')} *</label>
                <input
                  type="text"
                  id="organization"
                  {...register("organization")}
                  placeholder={t('innovationDiagnosis.form.placeholders.organization')}
                />
                {errors.organization && <span className="error-message">{errors.organization.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="position">{t('innovationDiagnosis.form.position')} *</label>
                <input
                  type="text"
                  id="position"
                  {...register("position")}
                  placeholder={t('innovationDiagnosis.form.placeholders.position')}
                />
                {errors.position && <span className="error-message">{errors.position.message}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="email">{t('innovationDiagnosis.form.email')} *</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder={t('innovationDiagnosis.form.placeholders.email')}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
            </div>
            <p className="consent-text">
              {consentText}
            </p>
            <div className="form-submit">
              <button type="submit" className="audit-nav-button next">
                {t('innovationDiagnosis.form.start')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  // more question info for company 
  if (hasStarted && !isComplete && userType === 'person' && !filledSecondForm) {
    return (
      <div className="audit-container">
        <button className="exit-button" onClick={handleExit}>
          <FaTimes />
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="audit-content"
        >
          <h1 className="audit-title">{t('innovationDiagnosis.title')}</h1>
          <form onSubmit={e => {
            e.preventDefault();
            handleMoreInfoSubmit(infoQuestions);
            }} className="user-info-form">
            {
              infoQuestionsData.map((question, index) => (
                <div className="form-row" key={index}>
                <div className="form-group full-width">
                  <label htmlFor={`question-${index}`}>{question}</label>
                  <input
                    type="text"
                    value={infoQuestions[index] || ''}
                    onChange={e => {
                      const newInfoQuestions = [...infoQuestions];
                      newInfoQuestions[index] = e.target.value;
                      setInfoQuestions(newInfoQuestions);
                    }}
                    placeholder={t('innovationDiagnosis.form.info.placeholder', { index: index + 1 })}
                    id={`question-${index}`}
                  />
                </div>
              </div>
              ))
            }
            <p className="consent-text">
              {consentText}
            </p>
            <div className="form-submit">
              <button type="submit" className="audit-nav-button next">
                {t('innovationDiagnosis.form.start')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  // result of like-seek for company
  if (userType === 'company') {
    if (isComplete) {
      return (
        <div className="audit-container">
          <button className="exit-button" onClick={handleExit}>
            <FaTimes />
          </button>
          <button className="reset-button" onClick={handleReset}>
            <FaRedo />
          </button>
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="results-container"
          >
            <h2 className="results-title">{t('innovationDiagnosis.results.title')}</h2>
            <p className="results-greeting">
              {t('innovationDiagnosis.results.greeting')} <span className="user-name">{userInfo.name}</span>
            </p>
            <div className="results-type">
              <h3 className="type-label">{t('innovationDiagnosis.results.type')}</h3>
              <div className="type-value">{type}</div>
              <p className="type-description">{description}</p>
            </div>
            
            <div className="results-actions">
              <button onClick={handleDownloadPDF} className="action-button download">
                <FaDownload /> {t('innovationDiagnosis.results.downloadPDF')}
              </button>
              <HashLink smooth to="/#contact" className="action-button contact">
                {t('innovationDiagnosis.results.contact')}
              </HashLink>
            </div>
          </motion.div>
        </div>
      );
    }
  
    return (
      <div className="audit-container">
        <button className="exit-button" onClick={handleExit}>
          <FaTimes />
        </button>
        <h1 className="audit-title">{t('innovationDiagnosis.title')}</h1>
  
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="audit-content"
        >
          <div className="audit-progress">
            <div className="progress-header">
              <div className="phase-badge">{currentPhase}</div>
              <div className="question-number">
                <span className="number">{globalIndex}</span>
                <span className="separator">/</span>
                <span className="total">{totalQuestions}</span>
              </div>
            </div>
            <p className="audit-question">{currentQuestion.question}</p>
          </div>
  
          <div className="audit-answers-grid">
            {icons.map((item, index) => (
              <button
                key={index}
                onClick={() => handleChange(globalIndex, "note", index)}
                className={`audit-answer-button ${selectedNote === index ? 'selected' : ''} ${item.className}`}
              >
                <item.icon />
                <span className="answer-label">{item.label}</span>
              </button>
            ))}
          </div>
  
          <div className="audit-evidence">
            <label>{t('innovationDiagnosis.form.evidence.label')}</label>
            <textarea
              placeholder={t('innovationDiagnosis.form.evidence.placeholder')}
              value={evidence}
              onChange={e => handleChange(globalIndex, "evidence", e.target.value)}
            />
          </div>
  
          <div className="audit-navigation">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="audit-nav-button back"
            >
              {t('innovationDiagnosis.navigation.back')}
            </button>
            <button
              onClick={handleNext}
              disabled={!(globalIndex in responses) || responses[globalIndex].note === undefined}
              className="audit-nav-button next"
            >
              {step === totalQuestions - 1 ? t('innovationDiagnosis.navigation.finish') : t('innovationDiagnosis.navigation.next')}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

	if (isComplete) {
		const profileCounts: Record<'a' | 'b' | 'c' | 'd' | 'e', number> = {
			a: 0,
			b: 0,
			c: 0,
			d: 0,
			e: 0,
		};
		
		Object.values(profileResponses).forEach(response => {
			if (response.option in profileCounts) {
				profileCounts[response.option as keyof typeof profileCounts]++;
			}
		});
		
		const maxProfile = (Object.keys(profileCounts) as Array<keyof typeof profileCounts>)
					.reduce((a, b) => profileCounts[a] > profileCounts[b] ? a : b);
		const radarData = Object.entries(profileCounts).map(([key, value]) => ({
			profile: t(`innovationDiagnosis.profile.profiles.titles.${key}`),
			count: value,
		}));

		const description = t(`innovationDiagnosis.profile.profiles.descriptions.${maxProfile}`);
		const formattedDescription = description.split('.').map((sentence, index) => (
			sentence.trim() && (
				<span key={index}>
					{sentence.trim()}.
					<br />
				</span>
			)
		));

		return (
			<div className="audit-container">
				<button className="exit-button" onClick={handleExit}><FaTimes /></button>
				<button className="reset-button" onClick={handleReset}><FaRedo /></button>
				<motion.div
					ref={resultsRef}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="radar-results results-container "
				>
					<h2 className="results-title">{t('innovationDiagnosis.results.title')}</h2>
					<p className="results-greeting">
						{t('innovationDiagnosis.results.greeting')} <span className="user-name">{userInfo.name}</span>
					</p>
					<div className="results-type">
						<div className="type-value">{t(`innovationDiagnosis.profile.profiles.titles.${maxProfile}`)}</div>
						<p className="type-description profile-des">{formattedDescription}</p>
						<ResponsiveContainer width="100%" height={300}>
							<RadarChart data={radarData}>
								<PolarGrid />
								<PolarAngleAxis dataKey="profile" tick={{ fill: '#fff' }}/>
								<PolarRadiusAxis  tick={false} axisLine={false}/>
								<Radar name="Profile" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
							</RadarChart>
						</ResponsiveContainer>
					</div>
					<div className="results-actions">
						<button onClick={handleDownloadPDF} className="action-button download">
							<FaDownload /> {t('innovationDiagnosis.results.downloadPDF')}
						</button>
						<HashLink smooth to="/#contact" className="action-button contact">
							{t('innovationDiagnosis.results.contact')}
						</HashLink>
					</div>
				</motion.div>
			</div>
		);
	}

  return (
    <div className="audit-container">
      <button className="exit-button" onClick={handleExit}>
        <FaTimes />
      </button>
      <h1 className="audit-title">{t('innovationDiagnosis.title')}</h1>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="audit-content"
      >
        <div className="audit-progress">
          <div className="progress-header">
            {
						// <div className="phase-badge">{currentPhase}</div>
						}
            <div className="question-number">
              <span className="number">{globalIndex}</span>
              <span className="separator">/</span>
              <span className="total">{totalProfileQuestions}</span>
            </div>
          </div>
          <p className="audit-question">{currentProfileQuestion}</p>
        </div>

        <div className="flex w-full flex-row flex-wrap justify-center-safe gap-2 ">
          {profileQuestionOptions[step].map((item, index) => (
            <button
              key={index}
              onClick={() => handleProfileChange(globalIndex, "option", "abcde"[index])}
              className={`audit-answer-button w-[49%] ${selectedOption === "abcde"[index] ? 'selected' : ''}`}
            >
              <span className="answer-label">{item}</span>
            </button>
          ))}
        </div>

        <div className="audit-evidence">
          <label>{t('innovationDiagnosis.profile.comment.label')}</label>
          <textarea
            placeholder={t('innovationDiagnosis.profile.comment.placeholder')}
            value={comment}
            onChange={e => handleProfileChange(globalIndex, "comment", e.target.value)}
          />
        </div>

        <div className="audit-navigation">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="audit-nav-button back"
          >
            {t('innovationDiagnosis.navigation.back')}
          </button>
          <button
            onClick={handleProfileNext}
            disabled={!(globalIndex in profileResponses) || profileResponses[globalIndex].option === undefined}
            className="audit-nav-button next"
          >
            {step === totalProfileQuestions - 1 ? t('innovationDiagnosis.navigation.finish') : t('innovationDiagnosis.navigation.next')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}


export default InnovationDiagnosis;
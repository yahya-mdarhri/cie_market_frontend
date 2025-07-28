import { useState } from "react";
import { FaTimes, FaRedo, FaUserTie, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./InnovationDiagnosis.css";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';
import { getPhases, getQuestionsByPhase, getIcons, getScoreRanges, getConsentText } from "./data";

interface Response {
  note: number;
  evidence: string;
}

interface Responses {
  [key: number]: Response;
}

interface QuizResult {
  total: number;
  type: string;
  description: string;
}

interface UserInfo {
  name: string;
  email: string;
  organisation: string;
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
  organisation: yup.string()
    .min(3, t('innovationDiagnosis.form.validation.organization.min'))
    .required(t('innovationDiagnosis.form.validation.organization.required')),
  position: yup.string()
    .min(3, t('innovationDiagnosis.form.validation.position.min'))
    .required(t('innovationDiagnosis.form.validation.position.required')),
  phone: yup.string()
    .min(10, t('innovationDiagnosis.form.validation.phone.min'))
    .max(15, t('innovationDiagnosis.form.validation.phone.max'))
    .required(t('innovationDiagnosis.form.validation.phone.required'))
});

function InnovationDiagnosis() {
  const { t } = useTranslation('innovationDiagnosis');
  const [responses, setResponses] = useState<Responses>({});
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [_userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    organisation: '',
    position: '',
    phone: ''
  });
  const [hasStarted, setHasStarted] = useState(false);
  const [userType, setUserType] = useState('person');

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

  const { register, handleSubmit, formState: { errors } } = useForm<UserInfo>({
    resolver: yupResolver(createUserInfoSchema(t))
  });

  const handleExit = () => {
    window.history.back();
  };

  const handleReset = () => {
    setResponses({});
    setStep(0);
    setIsComplete(false);
    setHasStarted(false);
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

  const handleUserInfoSubmit = (data: UserInfo) => {
    setUserInfo(data);
    setHasStarted(true);
  };

  const totalQuestions = questions.length;
  const currentQuestion = questions[step];
  const currentPhase = currentQuestion.phase;
  const globalIndex = step + 1;
  const selectedNote = responses[globalIndex]?.note ?? "";
  const evidence = responses[globalIndex]?.evidence ?? "";

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

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const { type, description } = calculateScore();

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
                <span className="toggle-text">{t('form.person')}</span>
              </button>
              <button 
                type="button"
                className={`toggle-option ${userType === 'company' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange({ target: { value: 'company' } } as React.ChangeEvent<HTMLInputElement>)}
              >
                <FaBuilding className="toggle-icon" />
                <span className="toggle-text">{t('form.company')}</span>
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
                <label htmlFor="organisation">{t('innovationDiagnosis.form.organization')} *</label>
                <input
                  type="text"
                  id="organisation"
                  {...register("organisation")}
                  placeholder={t('innovationDiagnosis.form.placeholders.organization')}
                />
                {errors.organisation && <span className="error-message">{errors.organisation.message}</span>}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="results-container"
        >
          <h2 className="results-title">{t('innovationDiagnosis.results.title')}</h2>
          <div className="results-type">
            <h3 className="type-label">{t('innovationDiagnosis.results.type')}</h3>
            <div className="type-value">{type}</div>
            <p className="type-description">{description}</p>
          </div>
          
          <div className="results-actions">
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
            disabled={selectedNote === undefined}
            className="audit-nav-button next"
          >
            {step === totalQuestions - 1 ? t('innovationDiagnosis.navigation.finish') : t('innovationDiagnosis.navigation.next')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}


export default InnovationDiagnosis;
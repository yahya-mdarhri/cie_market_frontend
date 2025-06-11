import { useState } from "react";
import { FaThumbsDown, FaThumbsUp, FaRegMeh, FaThumbsUp as FaSolidThumbsUp, FaThumbsDown as FaSolidThumbsDown, FaTimes, FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./InnovationDiagnosis.css";
  import { HashLink } from "react-router-hash-link";

const phases = [
  "Phase 1 - Launch",
  "Phase 2 - Progress",
  "Phase 3 - Acceleration",
  "Phase 4 - Realization"
];

const questionsByPhase = {
  [phases[0]]: [
    "Leadership acknowledges and communicates the importance of innovation",
    "A shared vision for a better future is formalized",
    "An innovation audit has been conducted to identify obstacles",
    "A budget is allocated to innovation, training, and initiatives",
    "Entrepreneurship, empowerment, and risk-taking are part of the desired culture",
    "Innovation ambassadors are appointed in different departments"
  ],
  [phases[1]]: [
    "Clear goals are set (e.g., number of ideas, revenue from innovation, etc.)",
    "Training sessions are organized for managers and ambassadors",
    "An internal suggestion system is in place and actively managed",
    "Regular brainstorming sessions are held with diverse teams and a facilitator",
    "Innovation objectives are included in individual evaluations",
    "Innovation successes are shared and celebrated"
  ],
  [phases[2]]: [
    "An open innovation strategy is defined and being deployed",
    "An incubation or experimentation unit is operational",
    "Validation processes have been simplified to accelerate implementation",
    "More than 2 suggestions per employee per year are implemented",
    "A blame culture has been replaced with a culture of openness and questioning",
    "The concept of minimum viable product (MVP) is fully integrated"
  ],
  [phases[3]]: [
    "An open innovation program is fully integrated and generates external innovations",
    "New products/services represent a significant portion of revenue",
    "Employees are encouraged to try new initiatives — and they do",
    "Risk-taking is encouraged, failure is accepted and analyzed",
    "More than 5 suggestions per employee per year are implemented",
    "The company is recognized as an innovation leader and a stimulating workplace"
  ]
};

const questions = phases.flatMap(phase => 
  questionsByPhase[phase].map(question => ({
    phase,
    question
  }))
);

const icons = [
  { icon: FaSolidThumbsDown, label: "Strongly Disagree", className: "strongly-disagree" },
  { icon: FaThumbsDown, label: "Disagree", className: "disagree" },
  { icon: FaRegMeh, label: "Neutral", className: "neutral" },
  { icon: FaThumbsUp, label: "Agree", className: "agree" },
  { icon: FaSolidThumbsUp, label: "Strongly Agree", className: "strongly-agree" }
];

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

const userInfoSchema = yup.object().shape({
  name: yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  organisation: yup.string()
    .min(3, "Organization must be at least 3 characters")
    .required("Organization is required"),
  position: yup.string()
    .min(3, "Position must be at least 3 characters")
    .required("Position is required"),
  phone: yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be at most 15 characters")
    .required("Phone number is required")
});

function InnovationDiagnosis() {
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

  const { register, handleSubmit, formState: { errors } } = useForm<UserInfo>({
    resolver: yupResolver(userInfoSchema)
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
    if (total <= 30) return { 
      total, 
      type: "Embryonic Innovation",
      description: "High potential but few structures in place."
    };
    if (total <= 60) return { 
      total, 
      type: "Innovation in Development",
      description: "A solid foundation, but further effort needed."
    };
    if (total <= 90) return { 
      total, 
      type: "Active Innovation",
      description: "Many projects and practices are in place."
    };
    return { 
      total, 
      type: "Mature Innovation",
      description: "A well-established culture and visible results."
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
          <h1 className="audit-title">Innovation Diagnosis</h1>
          <form onSubmit={handleSubmit(handleUserInfoSubmit)} className="user-info-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="organisation">Organization *</label>
                <input
                  type="text"
                  id="organisation"
                  {...register("organisation")}
                  placeholder="Enter your organization name"
                />
                {errors.organisation && <span className="error-message">{errors.organisation.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="position">Position *</label>
                <input
                  type="text"
                  id="position"
                  {...register("position")}
                  placeholder="Enter your position"
                />
                {errors.position && <span className="error-message">{errors.position.message}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
            </div>
            <p className="consent-text">
              By clicking on 'Start Assessment', I consent to the collection and processing of the information I have provided for evaluation purposes.
            </p>
            <div className="form-submit">
              <button type="submit" className="audit-nav-button next">
                Start Assessment
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
          <h2 className="results-title">Your Innovation Assessment</h2>
          <div className="results-type">
            <h3 className="type-label">Innovation Assessment</h3>
            <div className="type-value">{type}</div>
            <p className="type-description">{description}</p>
          </div>
          
          <div className="results-actions">
          <HashLink smooth to="/#contact" className="action-button contact">
            Contact Our Experts
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
      <h1 className="audit-title">Innovation Diagnosis</h1>

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
          <label>Supporting Evidence</label>
          <textarea
            placeholder="Describe any supporting evidence or examples..."
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
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={selectedNote === undefined}
            className="audit-nav-button next"
          >
            {step === totalQuestions - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}


export default InnovationDiagnosis;
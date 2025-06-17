
import { FaThumbsDown, FaThumbsUp, FaRegMeh, FaThumbsUp as FaSolidThumbsUp, FaThumbsDown as FaSolidThumbsDown, FaTimes, FaRedo } from "react-icons/fa";

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


const icons = [
    { icon: FaSolidThumbsDown, label: "Strongly Disagree", className: "strongly-disagree" },
    { icon: FaThumbsDown, label: "Disagree", className: "disagree" },
    { icon: FaRegMeh, label: "Neutral", className: "neutral" },
    { icon: FaThumbsUp, label: "Agree", className: "agree" },
    { icon: FaSolidThumbsUp, label: "Strongly Agree", className: "strongly-agree" }
  ];

export { questionsByPhase, phases , icons};
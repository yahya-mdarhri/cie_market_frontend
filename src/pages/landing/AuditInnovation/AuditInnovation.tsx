import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import "./AuditInnovation.css";
import { FaRegSadTear, FaRegFrown, FaRegMeh, FaRegSmile, FaRegLaughBeam } from "react-icons/fa";

function AuditInnovation() {
    return (
        <LandingLayout noHero={true} noFooter={true}>
            <div className="audit-container">
                <h1>Innovation Diagnosis</h1>
                <div className="audit-content">
                    <div className="audit-questions">
                        <h2>Des formations sont organisées pour les cadres dirigeants et ambassadeurs?</h2>
                    </div>
                    <div className="audit-answers">
                        <div className="audit-answer"><FaRegSadTear /></div>
                        <div className="audit-answer"><FaRegFrown /></div>
                        <div className="audit-answer"><FaRegMeh /></div>
                        <div className="audit-answer"><FaRegSmile /></div>
                        <div className="audit-answer"><FaRegLaughBeam /></div>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <button className="audit-next-previous-button">{"<"} Previous</button>
                        <button className="audit-next-previous-button">Next {">"}</button>
                    </div>
                </div>
            </div>
        </LandingLayout>
    )
}

export default AuditInnovation;
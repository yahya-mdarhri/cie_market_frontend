import "./InventionInfo.css";
import { useEffect } from "react";

interface Invention {
  title: string;
  nationalId: string;
  internationalId?: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
}

interface InventionInfoProps {
  isOpen: boolean;
  onClose: () => void;
  invention?: Invention| null;
}

function InventionInfo({ isOpen, onClose, invention }: InventionInfoProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !invention) return null;

  return (
    <div className="InventionInfo">
      <div className="InventionInfoBackdrop" onClick={onClose} />
      <div className="InventionInfoContainer">
        <button className="InventionInfoClose" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        <div className="InventionInfoHeader">
          <div className="InventionInfoTitle">
            <h2>{invention.title}</h2>
          </div>
          <div className="InventionInfoIDs">
            <div className="IDCard">
              <div className="IDCardContent">
                <span className="IDLabel">National ID</span>
                <span className="IDValue">{invention.nationalId}</span>
              </div>
            </div>
            <div className="IDCard">
              <div className="IDCardContent">
                <span className="IDLabel">International ID</span>
                {invention.internationalId ? (
                  <span className="IDValue">{invention.internationalId}</span>
                ) : (
                  <span className="IDStatus in-progress">
                    <span className="IDStatusIcon"></span>
                    In Progress
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="InventionInfoContent">
          <div className="InventionInfoImage">
            <img src={invention.image} alt={invention.title} />
          </div>
          <div className="InventionInfoSection">
            <h3>Problem Statement</h3>
            <p>{invention.problem}</p>
          </div>
          <div className="InventionInfoSection">
            <h3>Solution</h3>
            <p>{invention.solution}</p>
          </div>
          <div className="InventionInfoSection">
            <h3>Impact</h3>
            <p>{invention.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export type { Invention, InventionInfoProps };
export default InventionInfo;
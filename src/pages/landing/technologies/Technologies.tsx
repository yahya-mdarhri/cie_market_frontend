import "./Technologies.css";
import LandingLayout, { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import { useTranslation } from "react-i18next";
import { getHeroProps, getTechnologies, type Technology } from "./data";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Technologies() {
  const navigator = useNavigate()
  const { t } = useTranslation("technologies");

  const heroProps: HeroProps = getHeroProps(t);
  heroProps.onFirstActionClick = () => {
      navigator("/#contact")
  }
  const technologies: Technology[] = useMemo(() => getTechnologies(), []);

  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  function getAffiliations(tech: Technology): string[] {
    const raw = (tech.inventors ?? []).map((inv) => inv.affiliation).filter(Boolean) as string[];
    return Array.from(new Set(raw));
  }

  function renderAffiliations(tech: Technology) {
    const affiliations = getAffiliations(tech);
    if (affiliations.length === 0) return <>—</>;
    const maxToShow = 2;
    const shown = affiliations.slice(0, maxToShow);
    const remaining = affiliations.length - shown.length;
    return (
      <>
        {shown.join(", ")}
        {remaining > 0 && <span> +{remaining}</span>}
      </>
    );
  }

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedTech(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <LandingLayout heroProps={heroProps}>
      <section className="TechnologiesHeader">
        <h2 className="tech-title">{t("hero.title")}</h2>
        <p className="tech-subtitle">{t("hero.description")}</p>
      </section>
      <section className="TechnologiesGrid">
        {technologies.map((tech) => (
          <article
            key={tech.id}
            className="TechnologiesGridItem tech-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedTech(tech)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedTech(tech);
              }
            }}
          >
            <div className="tech-card-media">
              {tech.image && (
                <img src={tech.image} alt={tech.name} loading="lazy" />
              )}
              <div className="tech-card-badge">
                <span>{tech.patents?.length ?? 0}</span>
                <span>patents</span>
              </div>
            </div>
            <div className="tech-card-content">
              <h3 className="tech-card-title">{tech.name}</h3>
              {(tech.sector || (tech.tags && tech.tags.length > 0)) && (
                <div className="tech-card-tags">
                  {tech.sector && (
                    <span className="tech-tag">{tech.sector}</span>
                  )}
                  {(tech.tags ?? []).map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="tech-card-summary">{tech.summary}</p>

              <div className="meta-row-two">
                <div className="meta-box">
                  <span className="meta-label">Affiliation</span>
                  <span className="meta-value">{renderAffiliations(tech)}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Inventors</span>
                  <span className="meta-value">
                    {tech.inventors?.length ?? 0}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
      {selectedTech && (
        <div className="modal-overlay">
          <div className="modal-overlay-inner" onClick={() => setSelectedTech(null)}>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="tech-modal-title"
              aria-describedby="tech-modal-desc"
              onClick={(e) => e.stopPropagation()}
            >
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setSelectedTech(null)}
            >
              ×
            </button>
            <div className="modal-header">
              <div className="modal-media">
                {selectedTech.image && (
                  <img
                    src={selectedTech.image}
                    alt={selectedTech.name}
                    loading="lazy"
                  />
                )}
                {/* hide patents count in modal */}
              </div>
              <div className="modal-title-wrap">
                <h3 id="tech-modal-title" className="modal-title">
                  {selectedTech.name}
                </h3>
                <div className="modal-title-meta">
                  {selectedTech.sector && (
                    <span className="tech-tag">{selectedTech.sector}</span>
                  )}
                  {selectedTech.tags && selectedTech.tags.length > 0 && (
                    <div className="modal-tags-inline">
                      {(selectedTech.tags ?? []).map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {selectedTech.summary && (
                  <p className="modal-summary header-summary">
                    {selectedTech.summary}
                  </p>
                )}
              </div>
            </div>
            <div className="modal-body">
              <p id="tech-modal-desc" className="visually-hidden">
                {selectedTech.summary}
              </p>

              <div className="modal-sections">
                {selectedTech.problem && (
                  <div className="modal-section">
                    <h4 className="section-title">Problem</h4>
                    <p className="section-text">{selectedTech.problem}</p>
                  </div>
                )}
                {selectedTech.solution && (
                  <div className="modal-section">
                    <h4 className="section-title">Solution</h4>
                    <p className="section-text">{selectedTech.solution}</p>
                  </div>
                )}
                {selectedTech.impact && (
                  <div className="modal-section">
                    <h4 className="section-title">Impact</h4>
                    <p className="section-text">{selectedTech.impact}</p>
                  </div>
                )}

                {selectedTech.inventors &&
                  selectedTech.inventors.length > 0 && (
                    <div className="modal-section">
                      <h4 className="section-title">Inventors</h4>
                      <div className="chips">
                        {(selectedTech.inventors ?? []).map((inv) => (
                          <span key={inv.name} className="chip">
                            <span className="chip-main">{inv.name}</span>
                            {inv.affiliation && (
                              <span className="chip-sub">
                                {inv.affiliation}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {selectedTech.patents && selectedTech.patents.length > 0 && (
                  <div className="modal-section">
                    <h4 className="section-title">Patents</h4>
                    <div className="gallery-grid">
                      {(selectedTech.patents ?? []).map((p) => (
                        <div key={p.id} className="gallery-card">
                          <div className="gallery-card-body">
                            <div className="gallery-card-title">{p.name}</div>
                            <div className="gallery-badges">
                              <span className="badge">ID: {p.id}</span>
                              <span className="badge badge-outline">IntID: {p.internationalId ?? p.id}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </LandingLayout>
  );
}

export default Technologies;

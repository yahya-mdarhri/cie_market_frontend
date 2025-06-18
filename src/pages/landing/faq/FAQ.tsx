import { useState } from "react";
import "./FAQ.css";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import { getFaqItems } from "./data";
import { useTranslation } from "react-i18next";

function FAQ() {
    useDocumentTitle('FAQ | Centre for Innovation and Entrepreneurship');
    const { t } = useTranslation("faq");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const faqItems = getFaqItems(t);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // filter the question and answer based on search query
    const filteredFaqItems = faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        // reset active index when searching
        setActiveIndex(null); // hide the answer when searching
    };

    return (
        <LandingLayout
        heroProps={{
            heroTitle: <>{t('faq.title')}</>,
            heroDescription: t('faq.description'),
        }}
        >
        <div className="faq-container">
            <div className="faq-wrapper">
                <div className="faq-header">
                    <div className="faq-title">
                        <h1>{t('faq.title')}</h1>
                        <h3>{t('faq.subtitle')}</h3>
                    </div>
                    <div className="faq-search">
                        <div className="search-container">
                            <input 
                                type="text" 
                                placeholder={t('faq.searchPlaceholder')} 
                                className="search-input"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <button className="search-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="faq-content">
                    {filteredFaqItems.length > 0 ? (
                        filteredFaqItems.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="faq-question"
                                >
                                    <h3>{faq.question}</h3>
                                    <svg 
                                        className={`arrow-icon ${activeIndex === index ? 'active' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>{t('faq.noResults')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </LandingLayout>
    )
}
export default FAQ;
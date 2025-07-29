// This file contains the data for the Innovation Diagnosis page of the landing page.

import { FaThumbsDown, FaThumbsUp, FaRegMeh, FaThumbsUp as FaSolidThumbsUp, FaThumbsDown as FaSolidThumbsDown } from "react-icons/fa";

// Functions that take translation parameter t and return localized data
export const getPhases = (t: any) => [
    t('innovationDiagnosis.phases.phase1'),
    t('innovationDiagnosis.phases.phase2'),
    t('innovationDiagnosis.phases.phase3'),
    t('innovationDiagnosis.phases.phase4')
];

export const getQuestionsByPhase = (t: any) => {
    const phases = getPhases(t);
    return {
        [phases[0]]: [
            t('innovationDiagnosis.questions.phase1.question_1'),
            t('innovationDiagnosis.questions.phase1.question_2'),
            t('innovationDiagnosis.questions.phase1.question_3'),
            t('innovationDiagnosis.questions.phase1.question_4'),
            t('innovationDiagnosis.questions.phase1.question_5'),
            t('innovationDiagnosis.questions.phase1.question_6')
        ],
        [phases[1]]: [
            t('innovationDiagnosis.questions.phase2.question_1'),
            t('innovationDiagnosis.questions.phase2.question_2'),
            t('innovationDiagnosis.questions.phase2.question_3'),
            t('innovationDiagnosis.questions.phase2.question_4'),
            t('innovationDiagnosis.questions.phase2.question_5'),
            t('innovationDiagnosis.questions.phase2.question_6')
        ],
        [phases[2]]: [
            t('innovationDiagnosis.questions.phase3.question_1'),
            t('innovationDiagnosis.questions.phase3.question_2'),
            t('innovationDiagnosis.questions.phase3.question_3'),
            t('innovationDiagnosis.questions.phase3.question_4'),
            t('innovationDiagnosis.questions.phase3.question_5'),
            t('innovationDiagnosis.questions.phase3.question_6')
        ],
        [phases[3]]: [
            t('innovationDiagnosis.questions.phase4.question_1'),
            t('innovationDiagnosis.questions.phase4.question_2'),
            t('innovationDiagnosis.questions.phase4.question_3'),
            t('innovationDiagnosis.questions.phase4.question_4'),
            t('innovationDiagnosis.questions.phase4.question_5'),
            t('innovationDiagnosis.questions.phase4.question_6')
        ]
    };
};

export const getIcons = (t: any) => [
    { icon: FaSolidThumbsDown, label: t('innovationDiagnosis.rating.strongly_disagree'), className: "strongly-disagree" },
    { icon: FaThumbsDown, label: t('innovationDiagnosis.rating.disagree'), className: "disagree" },
    { icon: FaRegMeh, label: t('innovationDiagnosis.rating.neutral'), className: "neutral" },
    { icon: FaThumbsUp, label: t('innovationDiagnosis.rating.agree'), className: "agree" },
    { icon: FaSolidThumbsUp, label: t('innovationDiagnosis.rating.strongly_agree'), className: "strongly-agree" }
];

export const getScoreRanges = (t: any) => [
    {
        max: 30,
        type: t('innovationDiagnosis.results.embryonic.type'),
        description: t('innovationDiagnosis.results.embryonic.description')
    },
    {
        max: 60,
        type: t('innovationDiagnosis.results.development.type'),
        description: t('innovationDiagnosis.results.development.description')
    },
    {
        max: 90,
        type: t('innovationDiagnosis.results.active.type'),
        description: t('innovationDiagnosis.results.active.description')
    },
    {
        max: Infinity,
        type: t('innovationDiagnosis.results.mature.type'),
        description: t('innovationDiagnosis.results.mature.description')
    }
];

export const getInfoQuestions = (t: any) => [
    t('innovationDiagnosis.form.info.question_1'),
    t('innovationDiagnosis.form.info.question_2'),
    t('innovationDiagnosis.form.info.question_3'),
    t('innovationDiagnosis.form.info.question_4'),
    t('innovationDiagnosis.form.info.question_5'),
    t('innovationDiagnosis.form.info.question_6'),
    t('innovationDiagnosis.form.info.question_7'),
    t('innovationDiagnosis.form.info.question_8'),
];

export const getConsentText = (t: any) => t('innovationDiagnosis.form.consent');
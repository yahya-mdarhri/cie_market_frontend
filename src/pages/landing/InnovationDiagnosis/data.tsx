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

export const getProfileQuestions = (t: any) => [
	t('innovationDiagnosis.profile.questions.question_1.question'),
	t('innovationDiagnosis.profile.questions.question_2.question'),
	t('innovationDiagnosis.profile.questions.question_3.question'),
	t('innovationDiagnosis.profile.questions.question_4.question'),
	t('innovationDiagnosis.profile.questions.question_5.question'),
	t('innovationDiagnosis.profile.questions.question_6.question'),
	t('innovationDiagnosis.profile.questions.question_7.question'),
	t('innovationDiagnosis.profile.questions.question_8.question'),
	t('innovationDiagnosis.profile.questions.question_9.question'),
	t('innovationDiagnosis.profile.questions.question_10.question'),
	t('innovationDiagnosis.profile.questions.question_11.question'),
	t('innovationDiagnosis.profile.questions.question_12.question'),
	t('innovationDiagnosis.profile.questions.question_13.question'),
	t('innovationDiagnosis.profile.questions.question_14.question'),
	t('innovationDiagnosis.profile.questions.question_15.question'),
	t('innovationDiagnosis.profile.questions.question_16.question'),
	t('innovationDiagnosis.profile.questions.question_17.question'),
	t('innovationDiagnosis.profile.questions.question_18.question'),
	t('innovationDiagnosis.profile.questions.question_19.question'),
	t('innovationDiagnosis.profile.questions.question_20.question'),
	t('innovationDiagnosis.profile.questions.question_21.question'),
	t('innovationDiagnosis.profile.questions.question_22.question'),
	t('innovationDiagnosis.profile.questions.question_23.question'),
	t('innovationDiagnosis.profile.questions.question_24.question'),
	t('innovationDiagnosis.profile.questions.question_25.question'),
]

export const getProfileAnswers = (t: any) => [
	[
		t('innovationDiagnosis.profile.questions.question_1.option_a'),
		t('innovationDiagnosis.profile.questions.question_1.option_b'),
		t('innovationDiagnosis.profile.questions.question_1.option_c'),
		t('innovationDiagnosis.profile.questions.question_1.option_d'),
		t('innovationDiagnosis.profile.questions.question_1.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_2.option_a'),
		t('innovationDiagnosis.profile.questions.question_2.option_b'),
		t('innovationDiagnosis.profile.questions.question_2.option_c'),
		t('innovationDiagnosis.profile.questions.question_2.option_d'),
		t('innovationDiagnosis.profile.questions.question_2.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_3.option_a'),
		t('innovationDiagnosis.profile.questions.question_3.option_b'),
		t('innovationDiagnosis.profile.questions.question_3.option_c'),
		t('innovationDiagnosis.profile.questions.question_3.option_d'),
		t('innovationDiagnosis.profile.questions.question_3.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_4.option_a'),
		t('innovationDiagnosis.profile.questions.question_4.option_b'),
		t('innovationDiagnosis.profile.questions.question_4.option_c'),
		t('innovationDiagnosis.profile.questions.question_4.option_d'),
		t('innovationDiagnosis.profile.questions.question_4.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_5.option_a'),
		t('innovationDiagnosis.profile.questions.question_5.option_b'),
		t('innovationDiagnosis.profile.questions.question_5.option_c'),
		t('innovationDiagnosis.profile.questions.question_5.option_d'),
		t('innovationDiagnosis.profile.questions.question_5.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_6.option_a'),
		t('innovationDiagnosis.profile.questions.question_6.option_b'),
		t('innovationDiagnosis.profile.questions.question_6.option_c'),
		t('innovationDiagnosis.profile.questions.question_6.option_d'),
		t('innovationDiagnosis.profile.questions.question_6.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_7.option_a'),
		t('innovationDiagnosis.profile.questions.question_7.option_b'),
		t('innovationDiagnosis.profile.questions.question_7.option_c'),
		t('innovationDiagnosis.profile.questions.question_7.option_d'),
		t('innovationDiagnosis.profile.questions.question_7.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_8.option_a'),
		t('innovationDiagnosis.profile.questions.question_8.option_b'),
		t('innovationDiagnosis.profile.questions.question_8.option_c'),
		t('innovationDiagnosis.profile.questions.question_8.option_d'),
		t('innovationDiagnosis.profile.questions.question_8.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_9.option_a'),
		t('innovationDiagnosis.profile.questions.question_9.option_b'),
		t('innovationDiagnosis.profile.questions.question_9.option_c'),
		t('innovationDiagnosis.profile.questions.question_9.option_d'),
		t('innovationDiagnosis.profile.questions.question_9.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_10.option_a'),
		t('innovationDiagnosis.profile.questions.question_10.option_b'),
		t('innovationDiagnosis.profile.questions.question_10.option_c'),
		t('innovationDiagnosis.profile.questions.question_10.option_d'),
		t('innovationDiagnosis.profile.questions.question_10.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_11.option_a'),
		t('innovationDiagnosis.profile.questions.question_11.option_b'),
		t('innovationDiagnosis.profile.questions.question_11.option_c'),
		t('innovationDiagnosis.profile.questions.question_11.option_d'),
		t('innovationDiagnosis.profile.questions.question_11.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_12.option_a'),
		t('innovationDiagnosis.profile.questions.question_12.option_b'),
		t('innovationDiagnosis.profile.questions.question_12.option_c'),
		t('innovationDiagnosis.profile.questions.question_12.option_d'),
		t('innovationDiagnosis.profile.questions.question_12.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_13.option_a'),
		t('innovationDiagnosis.profile.questions.question_13.option_b'),
		t('innovationDiagnosis.profile.questions.question_13.option_c'),
		t('innovationDiagnosis.profile.questions.question_13.option_d'),
		t('innovationDiagnosis.profile.questions.question_13.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_14.option_a'),
		t('innovationDiagnosis.profile.questions.question_14.option_b'),
		t('innovationDiagnosis.profile.questions.question_14.option_c'),
		t('innovationDiagnosis.profile.questions.question_14.option_d'),
		t('innovationDiagnosis.profile.questions.question_14.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_15.option_a'),
		t('innovationDiagnosis.profile.questions.question_15.option_b'),
		t('innovationDiagnosis.profile.questions.question_15.option_c'),
		t('innovationDiagnosis.profile.questions.question_15.option_d'),
		t('innovationDiagnosis.profile.questions.question_15.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_16.option_a'),
		t('innovationDiagnosis.profile.questions.question_16.option_b'),
		t('innovationDiagnosis.profile.questions.question_16.option_c'),
		t('innovationDiagnosis.profile.questions.question_16.option_d'),
		t('innovationDiagnosis.profile.questions.question_16.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_17.option_a'),
		t('innovationDiagnosis.profile.questions.question_17.option_b'),
		t('innovationDiagnosis.profile.questions.question_17.option_c'),
		t('innovationDiagnosis.profile.questions.question_17.option_d'),
		t('innovationDiagnosis.profile.questions.question_17.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_18.option_a'),
		t('innovationDiagnosis.profile.questions.question_18.option_b'),
		t('innovationDiagnosis.profile.questions.question_18.option_c'),
		t('innovationDiagnosis.profile.questions.question_18.option_d'),
		t('innovationDiagnosis.profile.questions.question_18.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_19.option_a'),
		t('innovationDiagnosis.profile.questions.question_19.option_b'),
		t('innovationDiagnosis.profile.questions.question_19.option_c'),
		t('innovationDiagnosis.profile.questions.question_19.option_d'),
		t('innovationDiagnosis.profile.questions.question_19.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_20.option_a'),
		t('innovationDiagnosis.profile.questions.question_20.option_b'),
		t('innovationDiagnosis.profile.questions.question_20.option_c'),
		t('innovationDiagnosis.profile.questions.question_20.option_d'),
		t('innovationDiagnosis.profile.questions.question_20.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_21.option_a'),
		t('innovationDiagnosis.profile.questions.question_21.option_b'),
		t('innovationDiagnosis.profile.questions.question_21.option_c'),
		t('innovationDiagnosis.profile.questions.question_21.option_d'),
		t('innovationDiagnosis.profile.questions.question_21.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_22.option_a'),
		t('innovationDiagnosis.profile.questions.question_22.option_b'),
		t('innovationDiagnosis.profile.questions.question_22.option_c'),
		t('innovationDiagnosis.profile.questions.question_22.option_d'),
		t('innovationDiagnosis.profile.questions.question_22.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_23.option_a'),
		t('innovationDiagnosis.profile.questions.question_23.option_b'),
		t('innovationDiagnosis.profile.questions.question_23.option_c'),
		t('innovationDiagnosis.profile.questions.question_23.option_d'),
		t('innovationDiagnosis.profile.questions.question_23.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_24.option_a'),
		t('innovationDiagnosis.profile.questions.question_24.option_b'),
		t('innovationDiagnosis.profile.questions.question_24.option_c'),
		t('innovationDiagnosis.profile.questions.question_24.option_d'),
		t('innovationDiagnosis.profile.questions.question_24.option_e'),
	],
	[
		t('innovationDiagnosis.profile.questions.question_25.option_a'),
		t('innovationDiagnosis.profile.questions.question_25.option_b'),
		t('innovationDiagnosis.profile.questions.question_25.option_c'),
		t('innovationDiagnosis.profile.questions.question_25.option_d'),
		t('innovationDiagnosis.profile.questions.question_25.option_e'),
	],
]

export const getConsentText = (t: any) => t('innovationDiagnosis.form.consent');
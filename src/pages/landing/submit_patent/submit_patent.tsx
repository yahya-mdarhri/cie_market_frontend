import LandingLayout from '@components/layouts/LandingLayout/LandingLayout';
import './submit_patent.css';
import { useTranslation } from 'react-i18next';

export const getHeroProps = (t: any)  => {
    return {
        heroTitle: t('hero.title'),
        heroDescription: t('hero.description'),
        firstAction: t('hero.firstAction'),
        secondAction: t('hero.secondAction'),
        onFirstActionClick?: () => window.open("https://inn2market-inventor-frontend.pages.dev", "_blank", "noopener,noreferrer"),
        onSecondActionClick?: () => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=hirXO-qopkSomfPMy-3wJ7DyQY263ttEtDBgnhjOXoNUNlI0UFVTV1BWTDNTQTlFN0dWMVEyNUlBTS4u", "_blank", "noopener,noreferrer")
    };
};

function SubmitPatent() {
    const { t } = useTranslation('SubmitPatent');
    const heroProps = getHeroProps(t);


    return (
        <LandingLayout heroProps={heroProps}>
            
        </LandingLayout>
    )
}

export default SubmitPatent;

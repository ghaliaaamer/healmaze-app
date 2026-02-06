import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Conditions from './components/Conditions';
import HowItWorks from './components/HowItWorks';
import AlbertaStats from './components/AlbertaStats';
import Validation from './components/Validation';
import Services from './components/Services';
import IBSManagement from './components/IBSManagement';
import InterstitialCystitis from './components/InterstitialCystitis';
import PCOSCare from './components/PCOSCare';
import MigraineTreatment from './components/MigraineTreatment';
import Resources from './components/Resources';
import SupportCommunity from './components/SupportCommunity';
import Booking from './components/Booking';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import HealthInformationAct from './components/HealthInformationAct';
import PrimaryCareTeam from './components/PrimaryCareTeam';

const AppRouter: React.FC = () => {
  let ComponentToRender;
  const path = window.location.pathname;

  switch (path) {
    case '/':
      ComponentToRender = () => (
        <>
          <Hero />
          <Conditions />
          <HowItWorks />
          <AlbertaStats />
          <Validation />
        </>
      );
      break;
    case '/services':
      ComponentToRender = Services;
      break;
    case '/ibs-management':
      ComponentToRender = IBSManagement;
      break;
    case '/interstitial-cystitis':
      ComponentToRender = InterstitialCystitis;
      break;
    case '/pcos-care':
      ComponentToRender = PCOSCare;
      break;
    case '/migraine-treatment':
      ComponentToRender = MigraineTreatment;
      break;
    case '/resources':
      ComponentToRender = Resources;
      break;
    case '/community':
      ComponentToRender = SupportCommunity;
      break;
    case '/booking':
      ComponentToRender = Booking;
      break;
    case '/terms-of-service':
      ComponentToRender = TermsOfService;
      break;
    case '/privacy-policy':
      ComponentToRender = PrivacyPolicy;
      break;
    case '/health-information-act':
      ComponentToRender = HealthInformationAct;
      break;
    case '/primary-care-team':
      ComponentToRender = PrimaryCareTeam;
      break;
    default:
      ComponentToRender = () => (
        <>
          <Hero />
          <Conditions />
          <HowItWorks />
          <AlbertaStats />
          <Validation />
        </>
      );
  }

  return (
    <div className="App">
      <Header />
      {ComponentToRender && <ComponentToRender />}
      <Footer />
    </div>
  );
};

export default AppRouter;

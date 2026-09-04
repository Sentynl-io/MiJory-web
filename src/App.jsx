import { useEffect, useState } from 'react';
import { COMPANY_TABS } from './data/portfolio';
import { textStyles } from './components/SectionTag';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Footer, { MobileNav } from './components/Footer';
import ContactModal from './components/ContactModal';
import EcosystemOverview from './components/EcosystemOverview';
import Leadership from './components/Leadership';
import CompanyDetail from './components/CompanyDetail';

export default function App() {
  const [activeTab, setActiveTab] = useState('ecosystem');
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isContactModalOpen) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
  }, [isContactModalOpen]);

  return (
    <div className={`min-h-screen text-mj-text flex flex-col ${textStyles.fontFamily}`}>
      {isContactModalOpen && <ContactModal onClose={() => setContactModalOpen(false)} />}

      <Header
        activeTab={activeTab}
        onNavigate={setActiveTab}
        onOpenContact={() => setContactModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-14 pb-28 md:pb-16 w-full">
        {activeTab === 'ecosystem' && <EcosystemOverview onNavigate={setActiveTab} />}
        {activeTab === 'team' && <Leadership />}
        {COMPANY_TABS.includes(activeTab) && <CompanyDetail companyId={activeTab} />}
      </main>

      <Footer />
      <MobileNav activeTab={activeTab} onNavigate={setActiveTab} />
    </div>
  );
}

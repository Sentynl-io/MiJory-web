import { ShieldCheck, LinkedinIcon } from '../icons';
import { portfolioList, INVESTOR_DECK_URL, MIJORY_LINKEDIN } from '../data/portfolio';
import { brand } from '../data/assets';

export default function Footer() {
  const linkedCompanies = portfolioList.filter((c) => c.linkedin);

  return (
    <footer className="hidden md:block border-t border-mj px-4 md:px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 text-sm text-mj-faint">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 logo-plate">
            <img src={brand.mijory} alt="" className="h-6 w-auto" />
            <p className="text-xs text-mj-muted">Health &amp; longevity infrastructure</p>
          </div>
          <p className="text-xs tracking-wide">TrakPath · RxPath · Sentynl · BioTide USA</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={MIJORY_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-mj-faint hover:text-mj-accent transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" /> MiJory
            </a>
            {linkedCompanies.map((company) => (
              <a
                key={company.id}
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-mj-faint hover:text-mj-accent transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> {company.name}
              </a>
            ))}
          </div>
          <a
            href={INVESTOR_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-wide text-mj-faint/70 hover:text-mj-faint transition-colors"
            title="Confidential investor materials"
          >
            Investor brief
          </a>
        </div>
      </div>
    </footer>
  );
}

export function MobileNav({ activeTab, onNavigate }) {
  const idle = 'bg-mj-elevated text-mj-muted border-mj';
  const active = 'bg-mj-accent/15 text-mj-accent border-mj-accent/30';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-mj p-3 flex flex-col gap-2.5 z-40 backdrop-blur-md bg-[color:var(--mj-header)]">
      <div className="flex justify-center items-center gap-1.5 w-full">
        <ShieldCheck className="w-3.5 h-3.5 text-mj-accent" />
        <span className="text-[10px] uppercase tracking-widest text-mj-faint font-semibold">
          SOC 2 Compliance Focused
        </span>
      </div>
      <div className="flex overflow-x-auto gap-2 hide-scrollbar">
        <button
          onClick={() => onNavigate('ecosystem')}
          className={`px-4 py-2.5 whitespace-nowrap text-sm font-semibold rounded border ${
            activeTab === 'ecosystem' ? active : idle
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => onNavigate('team')}
          className={`px-4 py-2.5 whitespace-nowrap text-sm font-semibold rounded border ${
            activeTab === 'team' ? active : idle
          }`}
        >
          Leadership
        </button>
        {portfolioList.map((company) => (
          <button
            key={company.id}
            onClick={() => onNavigate(company.id)}
            className={`px-4 py-2.5 whitespace-nowrap text-sm font-semibold rounded border ${
              activeTab === company.id ? active : idle
            }`}
          >
            {company.name}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href={INVESTOR_DECK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] tracking-widest uppercase text-mj-faint/70 hover:text-mj-faint transition-colors"
          title="Confidential investor materials"
        >
          Investor brief
        </a>
      </div>
    </div>
  );
}

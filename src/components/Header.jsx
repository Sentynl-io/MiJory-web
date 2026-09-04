import { ShieldCheck, LinkedinIcon, Sun, Moon } from '../icons';
import { portfolioList, MIJORY_LINKEDIN } from '../data/portfolio';
import { brand } from '../data/assets';

export default function Header({ activeTab, onNavigate, onOpenContact, theme, onToggleTheme }) {
  const goHome = () => onNavigate('ecosystem');

  const onBrandKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goHome();
    }
  };

  const tabBase =
    'px-3.5 py-2 text-sm font-semibold rounded transition-colors border border-transparent';
  const tabIdle = 'text-mj-muted hover:text-mj-text hover:bg-mj-subtle/60';
  const tabActive = 'bg-mj-accent/15 text-mj-accent border-mj-accent/30';

  return (
    <header className="sticky top-0 z-30 border-b border-mj bg-[color:var(--mj-header)] backdrop-blur-md px-4 md:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center justify-between gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5">
            <div
              className="flex items-center cursor-pointer rounded outline-none focus-visible:ring-1 focus-visible:ring-mj-accent/60 logo-plate"
              onClick={goHome}
              onKeyDown={onBrandKeyDown}
              tabIndex={0}
              role="button"
              aria-label="MiJory LLC home"
            >
              <img
                src={brand.mijory}
                alt="MiJory"
                className="h-7 md:h-8 w-auto"
              />
            </div>
            <a
              href={MIJORY_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 rounded text-mj-faint hover:text-mj-accent transition-colors"
              aria-label="MiJory LLC on LinkedIn"
              title="MiJory LLC on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="mj-theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-3xl justify-center">
          <nav className="flex items-center gap-0.5 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => onNavigate('ecosystem')}
              className={`${tabBase} ${activeTab === 'ecosystem' ? tabActive : tabIdle}`}
            >
              Overview
            </button>
            <button
              onClick={() => onNavigate('team')}
              className={`${tabBase} ${activeTab === 'team' ? tabActive : tabIdle}`}
            >
              Leadership
            </button>
            {portfolioList.map((company) => (
              <button
                key={company.id}
                onClick={() => onNavigate(company.id)}
                className={`${tabBase} ${activeTab === company.id ? tabActive : tabIdle}`}
              >
                {company.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex gap-2 items-center justify-end">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-mj-muted text-[11px] font-semibold tracking-wide uppercase"
            title="Building toward formal SOC 2 controls and audit readiness"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-mj-accent" />
            SOC 2 Focused
          </div>
          <button
            onClick={onOpenContact}
            className="mj-btn-ghost px-4 py-2 text-sm font-semibold"
          >
            Contact
          </button>
          <button
            type="button"
            className="mj-theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

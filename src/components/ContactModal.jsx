import { Users } from '../icons';
import { leadershipTeam } from '../data/team';

export default function ContactModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center md:p-6 backdrop-blur-sm"
      style={{ backgroundColor: 'var(--mj-overlay)' }}
      onClick={onClose}
    >
      <div
        className="bg-mj-elevated w-full h-full md:h-auto md:border md:border-mj md:rounded md:max-w-4xl flex flex-col md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 md:p-6 border-b border-mj shrink-0 pt-8 md:pt-6">
          <h3 className="text-xl md:text-2xl font-bold text-mj-text flex items-center gap-2">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-mj-accent" /> Contact
          </h3>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-mj-faint hover:text-mj-text transition-colors hidden md:block"
            aria-label="Close contact directory"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-5 md:p-6 overflow-y-auto overscroll-contain flex-1">
          <p className="text-sm md:text-base text-mj-muted mb-6">
            Reach out to discuss portfolio companies, investment opportunities, or strategic
            partnerships.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leadershipTeam.map((member) => (
              <div key={member.id} className="p-4 border border-mj rounded bg-mj-bg/40">
                <h4 className="font-semibold text-mj-text mb-1 border-b border-mj pb-2">
                  {member.name}
                </h4>
                <p className="text-xs text-mj-faint mb-3">{member.title}</p>
                <div className="space-y-2 text-sm text-mj-muted">
                  {member.email && (
                    <p className="flex justify-between flex-wrap gap-1">
                      <span>Email</span>{' '}
                      <a href={`mailto:${member.email}`} className="text-mj-accent hover:underline">
                        {member.email}
                      </a>
                    </p>
                  )}
                  {member.phone && (
                    <p className="flex justify-between flex-wrap gap-1">
                      <span>Phone</span>{' '}
                      <a href={`tel:${member.phoneTel}`} className="text-mj-accent hover:underline">
                        {member.phone}
                      </a>
                    </p>
                  )}
                  {!member.email && member.linkedin && (
                    <p className="flex justify-between flex-wrap gap-1">
                      <span>LinkedIn</span>{' '}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mj-accent hover:underline"
                      >
                        Profile
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden p-5 border-t border-mj shrink-0 pb-12">
          <button
            onClick={onClose}
            className="w-full py-3.5 mj-btn-ghost text-mj-text font-semibold flex justify-center items-center gap-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

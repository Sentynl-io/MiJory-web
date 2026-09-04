import { Users, LinkedinIcon, Mail } from '../icons';
import { leadershipTeam, advisors } from '../data/team';

function PersonCard({ person }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-2">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-mj-elevated border border-mj overflow-hidden">
        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-mj-text">{person.name}</h3>
        <p className="text-sm text-mj-accent font-medium mt-1">{person.title}</p>
      </div>
      {person.linkedin ? (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mj-btn-ghost mt-auto px-4 py-2 text-sm font-semibold inline-flex items-center gap-2"
        >
          <LinkedinIcon className="w-4 h-4" /> LinkedIn
        </a>
      ) : person.email ? (
        <a
          href={`mailto:${person.email}`}
          className="mj-btn-ghost mt-auto px-4 py-2 text-sm font-semibold inline-flex items-center gap-2"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
      ) : null}
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="space-y-14 pt-4 md:pt-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-2.5 border border-mj rounded-full text-mj-accent mb-2">
          <Users className="w-6 h-6" />
        </div>
        <h2 className="font-jakarta text-3xl md:text-4xl font-extrabold text-mj-text tracking-tight">
          Leadership
        </h2>
        <p className="text-base md:text-lg text-mj-muted font-normal leading-relaxed">
          Proven builders and serial executors—founder credibility first, asset-light vertical
          infrastructure next.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {leadershipTeam.map((member) => (
          <PersonCard key={member.id} person={member} />
        ))}
      </div>

      {advisors.length > 0 && (
        <div className="pt-10 border-t border-mj">
          <div className="text-center mb-10">
            <h3 className="font-jakarta text-2xl font-bold text-mj-text tracking-tight">
              Strategic Partners
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 justify-center">
            {advisors.map((advisor) => (
              <PersonCard key={advisor.id} person={advisor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

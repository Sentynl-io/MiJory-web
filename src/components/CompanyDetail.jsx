import { Network, LinkedinIcon } from '../icons';
import { portfolio } from '../data/portfolio';
import { textStyles, SectionTag } from './SectionTag';

export default function CompanyDetail({ companyId }) {
  const company = portfolio[companyId];
  if (!company) return null;

  return (
    <div className="space-y-10 md:space-y-12 pt-2 md:pt-6">
      {company.banner && (
        <div className="overflow-hidden rounded border border-mj bg-mj-elevated -mx-1">
          <img
            src={company.banner}
            alt=""
            className="w-full h-28 md:h-40 object-cover object-center"
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-mj pb-8">
        <div className="flex items-center gap-4 md:gap-5 min-w-0">
          {company.logo && (
            company.logoCard ? (
              <div className="shrink-0 w-36 md:w-44 overflow-hidden rounded border border-mj">
                <img
                  src={company.logo}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="shrink-0 h-14 md:h-16 px-3 flex items-center bg-white border border-mj rounded">
                <img
                  src={company.logo}
                  alt=""
                  className="max-h-10 md:max-h-12 max-w-[160px] w-auto object-contain"
                />
              </div>
            )
          )}
          <div className="min-w-0">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-mj-text">
              {company.name}
            </h2>
            <p className="text-sm md:text-base text-mj-accent mt-2 font-medium">{company.tagline}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {company.linkedin && (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mj-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          )}
          {company.link?.url && (
            <a
              href={company.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mj-btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              {company.link.text}
            </a>
          )}
        </div>
      </div>

      {company.productShot && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-8 overflow-hidden rounded border border-mj bg-mj-elevated">
            <img
              src={company.productShot}
              alt={`${company.name} platform`}
              className="w-full h-full object-cover object-top min-h-[220px] max-h-[420px]"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 mj-panel-soft p-5 md:p-6">
            <div>
              <SectionTag text="Live platform" />
              <h3 className="font-display text-xl font-semibold text-mj-text tracking-tight">
                See the product in context
              </h3>
              <p className="text-sm text-mj-muted mt-2 leading-relaxed">
                Visuals from the operating stack—aligned with MiJory’s investor narrative and
                commercial footprint.
              </p>
            </div>
            {company.productShotAlt && (
              <img
                src={company.productShotAlt}
                alt={`${company.name} mobile experience`}
                className="w-full max-h-48 object-contain rounded border border-mj bg-white"
              />
            )}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-8 space-y-10">
          <section className="mj-panel">
            <h3 className={textStyles.sectionTitle}>Overview</h3>
            <p className={textStyles.body}>{company.description}</p>
          </section>

          <section className="mj-panel">
            <h3 className={`${textStyles.sectionTitle} flex items-center gap-2`}>
              <Network className="w-4 h-4 text-mj-accent" /> Ecosystem role
            </h3>
            <p className={textStyles.body}>{company.synergy}</p>
          </section>

          {company.advantages?.length > 0 && (
            <section className="mj-panel">
              <h3 className={textStyles.sectionTitle}>Advantages</h3>
              <ul className="space-y-3">
                {company.advantages.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base text-mj-muted leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-mj-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="mj-panel-soft p-5 md:p-6 space-y-2">
            <h4 className={textStyles.metricLabel}>Traction</h4>
            <p className="text-sm text-mj-text leading-relaxed font-medium">{company.traction}</p>
          </div>
          <div className="mj-panel-soft p-5 md:p-6 space-y-2">
            <h4 className={textStyles.metricLabel}>Market</h4>
            <p className="text-lg font-semibold text-mj-text leading-snug">{company.tam}</p>
          </div>
          {company.forecast && (
            <div className="space-y-2 pt-2 border-t border-mj">
              <h4 className={textStyles.metricLabel}>Outlook</h4>
              <p className="text-sm text-mj-muted leading-relaxed">{company.forecast}</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

import { brand, companyLogos, logoIsCard, productShots, strategicPartners } from '../data/assets';
import { SectionTag } from './SectionTag';

const pillars = [
  { id: 'trakpath', name: 'TrakPath', role: 'Verification & provenance', logo: companyLogos.trakpath },
  { id: 'rxpath', name: 'RxPath', role: 'Clinical & telehealth', logo: companyLogos.rxpath },
  { id: 'sentynl', name: 'Sentynl', role: 'Trust Graph™ intelligence', logo: companyLogos.sentynl },
  { id: 'biotide', name: 'BioTide USA', role: 'Commerce & supply', logo: companyLogos.biotide },
];

function PillarLogo({ id, src, name }) {
  const isCard = logoIsCard[id];
  return (
    <div
      className={`mb-5 -mx-5 -mt-5 md:-mx-6 md:-mt-6 overflow-hidden rounded-t border-b border-mj ${
        isCard ? 'bg-mj-subtle' : 'bg-white'
      }`}
    >
      <img
        src={src}
        alt={name}
        className={`w-full h-28 md:h-32 object-center ${
          isCard ? 'object-cover' : 'object-contain p-4 md:p-5'
        }`}
      />
    </div>
  );
}

export default function EcosystemOverview({ onNavigate }) {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-2 md:pt-6">
        <div className="lg:col-span-6 space-y-7 text-center lg:text-left mj-reveal">
          <div className="inline-flex logo-plate mx-auto lg:mx-0">
            <img src={brand.mijory} alt="MiJory" className="h-12 md:h-16 w-auto" />
          </div>
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-mj-accent">
            Health &amp; longevity infrastructure
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-mj-text tracking-tight leading-[1.15] max-w-xl mx-auto lg:mx-0">
            The operating system for high-growth health and longevity
          </h1>
          <p className="text-sm md:text-base text-mj-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
            A unified stack for cryptographic supply verification, specialized clinical care, and
            real-world data intelligence—anchored by BioTide USA, RxPath, TrakPath, and Sentynl.
          </p>
        </div>

        <div className="lg:col-span-6 mj-reveal-delay">
          <div className="relative overflow-hidden rounded border border-mj bg-mj-elevated shadow-sm">
            <img
              src={productShots.hero}
              alt="Precision biologics and global health infrastructure"
              className="w-full h-auto object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionTag text="Wholly owned platforms" colorClass="text-mj-accent" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-mj-text tracking-tight">
            Four pillars. One trust layer.
          </h2>
          <p className="text-sm md:text-base text-mj-muted leading-relaxed">
            BioTide USA and RxPath drive commercial and clinical scale; TrakPath and Sentynl expand
            high-margin software and data economics across the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => onNavigate(pillar.id)}
              className="group text-left bg-mj-elevated border border-mj rounded overflow-hidden p-5 md:p-6 hover:border-mj-strong transition-all duration-200 hover:-translate-y-0.5"
            >
              <PillarLogo id={pillar.id} src={pillar.logo} name={pillar.name} />
              <p className="text-sm font-semibold text-mj-text group-hover:text-mj-accent transition-colors">
                {pillar.name}
              </p>
              <p className="text-xs text-mj-faint mt-1 leading-relaxed">{pillar.role}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded border border-mj bg-mj-elevated mj-reveal-delay-2">
        <img
          src={brand.portfolioWall}
          alt="MiJory brand portfolio — BioTide, RxPath, Sentynl, and TrakPath"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <SectionTag text="Market" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-mj-text tracking-tight">
            $65.0B serviceable market
          </h2>
          <p className="text-sm md:text-base text-mj-muted leading-relaxed">
            MiJory takes a high-margin fee slice of transaction volume across wellness, clinical
            labs, peptide therapeutics, and adjacent longevity verticals—without bearing
            manufacturing CapEx.
          </p>
          <dl className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mj-faint font-semibold">
                Longevity &amp; wellness
              </dt>
              <dd className="text-xl font-semibold text-mj-text mt-1">$1.8T</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mj-faint font-semibold">
                Peptide therapeutics
              </dt>
              <dd className="text-xl font-semibold text-mj-text mt-1">$299B</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mj-faint font-semibold">
                Clinical lab services
              </dt>
              <dd className="text-xl font-semibold text-mj-text mt-1">$308B</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mj-faint font-semibold">
                MiJory SAM
              </dt>
              <dd className="text-xl font-semibold text-mj-accent mt-1">$65.0B</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded border border-mj bg-mj-elevated p-3 md:p-5">
            <img
              src={productShots.samGraph}
              alt="MiJory TAM to SAM market analysis"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="space-y-8 border-t border-mj pt-12 md:pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionTag text="Strategic scale partners" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-mj-text tracking-tight">
            Partners own the physical stack
          </h2>
          <p className="text-sm md:text-base text-mj-muted leading-relaxed">
            Enterprise fulfillment, diagnostics, and manufacturing capacity—so MiJory remains an
            asset-light trust and routing layer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {strategicPartners.map((partner) => {
            const inner = (
              <>
                <div className="h-14 flex items-center mb-4 rounded bg-white px-2 py-1.5 w-fit">
                  <img
                    src={partner.logo}
                    alt=""
                    className="max-h-11 max-w-[160px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-mj-text">{partner.name}</p>
                <p className="text-xs text-mj-faint mt-1 leading-relaxed">{partner.role}</p>
              </>
            );
            const className =
              'group block bg-mj-elevated border border-mj rounded p-5 md:p-6 hover:border-mj-strong transition-all duration-200 hover:-translate-y-0.5';
            return partner.url ? (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <div key={partner.id} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

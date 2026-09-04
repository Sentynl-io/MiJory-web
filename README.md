# MiJory LLC — Web

Public portfolio site for **MiJory LLC**, hosted at [mijory.com](https://mijory.com).

## Ecosystem

| Company | Focus |
| --- | --- |
| **BioTide USA** | Wholesale commerce & supply ([wholesale.biotideusa.com](https://wholesale.biotideusa.com) · [LinkedIn](https://www.linkedin.com/company/biotide-usa)) |
| **TrakPath** | Cryptographic verification & provenance ([trakpath.io](https://trakpath.io) · [LinkedIn](https://www.linkedin.com/company/trakpath-llc)) |
| **RxPath** | Clinical & telehealth routing ([rxpath.ai](https://rxpath.ai) · [LinkedIn](https://www.linkedin.com/company/rxpathai)) |
| **Sentynl** | Trust Graph™ RWE / data intelligence |

MiJory company page: [linkedin.com/company/mijory](https://www.linkedin.com/company/mijory)

Investor deck (confidential): [mijory-deck](https://sentynl-io.github.io/mijory-deck/index.html) — also linked discreetly in the site footer as “Investor brief”.

## Stack

- Vite + React 18
- Tailwind CSS (built, not CDN)
- GitHub Pages deploy via Actions (`.github/workflows/deploy.yml`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Layout

```
├── index.html              # Vite HTML shell
├── public/
│   ├── CNAME               # mijory.com
│   └── images/             # leadership headshots
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── icons.jsx
│   ├── data/
│   │   ├── portfolio.js
│   │   └── team.js
│   └── components/
├── package.json
└── .github/workflows/deploy.yml
```

## Deploy note

After the first Actions deploy, set the repo Pages source to **GitHub Actions** (Settings → Pages). The workflow builds on every push to `main`.

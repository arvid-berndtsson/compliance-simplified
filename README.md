# Audit.arvid.tech

A jargon-free, practitioner-oriented site that demystifies ISO/IEC 27001:2022 and SOC 2 Trust Services Criteria.

## 🎯 Mission

Provide actionable compliance guidance for tech founders, early-stage CISOs, sysadmins, and developers without consultant fees.

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0).

### What this means:
- ✅ **You can use, share, and modify** this software for any purpose
- ✅ **You can use it commercially** (even for profit)
- ✅ **You can distribute** modified versions

### Requirements:
- 🔗 **Attribution**: You must preserve copyright notices and license information
- 🔄 **ShareAlike**: If you modify the software, you must share your modifications under AGPL-3.0
- 🌐 **Network Use**: If you run the software on a server and make it available to users, you must provide the source code
- 📦 **Source Code**: You must provide the complete source code when distributing

**Example attribution:**
```
Based on "Audit.arvid.tech" by Arvid Berndtsson (https://github.com/arvid-berndtsson/audit-site) 
licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl-3.0.en.html)
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm 8.15.0 or higher

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/arvid-berndtsson/audit-site.git
   cd audit-site
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
pnpm run build
```

The built site will be in the `build/` directory.

### Type Checking

```bash
pnpm run typecheck
```

## 📁 Project Structure

```
audit-site/
├── docs/                    # Documentation pages
│   ├── intro.md            # Landing page
│   ├── basics/             # Overview pages
│   ├── iso27001/           # ISO 27001 guide
│   ├── soc2/               # SOC 2 guide
│   └── tools/              # Interactive tools
├── src/
│   ├── css/                # Custom styles with Tailwind
│   └── components/         # React components (TypeScript)
├── static/                 # Static assets
├── docusaurus.config.ts    # Docusaurus configuration (TypeScript)
├── sidebars.ts            # Documentation sidebar (TypeScript)
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Framework**: Docusaurus v3
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS + daisyUI
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 Content Guidelines

- Keep sentences under 14 words
- Use Oxford commas
- Include checklists and visual summaries
- Avoid consultant jargon
- Focus on actionable guidance

## 🤝 Contributing

We welcome contributions! Please ensure you follow the AGPL-3.0 license terms.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

- **Production URL**: https://audit.arvid.tech
- **GitHub Pages URL**: https://arvid-berndtsson.github.io/audit-site

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/arvid-berndtsson/audit-site/issues)
- **Discussions**: [GitHub Discussions](https://github.com/arvid-berndtsson/audit-site/discussions)
- **Licensing**: arvid@arvid.tech

## 🗺️ Roadmap

- [ ] Complete ISO 27001 step-by-step guide
- [ ] Interactive Controls Explorer
- [ ] Gap self-assessment tool
- [ ] Policy template library
- [ ] SOC 2 implementation guide
- [ ] Community forum integration 
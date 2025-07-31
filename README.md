# Compliance Simplified

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
Based on "Compliance Simplified" by Arvid Berndtsson (https://github.com/arvid-berndtsson/compliance-simplified)
licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl-3.0.en.html)
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm 8.15.0 or higher

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/arvid-berndtsson/compliance-simplified.git
   cd compliance-simplified
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

The built site will be in the `out/` directory.

### Type Checking

```bash
pnpm run typecheck
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Content**: MDX for documentation
- **Deployment**: Static export to GitHub Pages
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

- **Production URL**: https://compliance.arvid.tech
- **GitHub Pages URL**: https://arvid-berndtsson.github.io/compliance-simplified

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/arvid-berndtsson/compliance-simplified/issues)
- **Discussions**: [GitHub Discussions](https://github.com/arvid-berndtsson/compliance-simplified/discussions)
- **Licensing**: arvid@arvid.tech

## 🗺️ Roadmap

- [x] Complete ISO 27001 documentation (overview, quick-start, implementation, controls)
- [x] Complete SOC 2 documentation (overview, quick-start, implementation, criteria)
- [x] Interactive Gap self-assessment tool
- [x] Collapsible sidebar navigation
- [x] Search functionality across documentation
- [ ] Policy template library
- [ ] Interactive Controls Explorer
- [ ] Community forum integration
- [ ] Additional compliance frameworks (NIST, GDPR, etc.)

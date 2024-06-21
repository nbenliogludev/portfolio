<div align="center">
  My personal portfolio website to show my skills, experience, and articles I published
</div>

## Built with
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Highlight Blog Content**: [prismjs](https://prismjs.com/)
- **Markdown Processor**: [remark](https://remark.js.org/)
- **ORM**: [prisma](https://www.prisma.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Api's**:
  - [Dev.to](https://dev.to/api)
  - [Github](https://api.github.com)

## Overview

- `components/*` - Contains all components related to pages (blog, projects, about, etc).
  - `shared/*` - All reusable components like header, footer etc.
  - `layouts/*` - The different page layouts.
  -  `theme/*` - Manage theme of site. 
- `data/*` - Data that used for blog posts, projects etc.
- `lib/*` - Collection of helpful utilities or code for external services like devto api.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction).
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a Postgresql database.
- `public/*` - Static assets including audios, fonts and images.

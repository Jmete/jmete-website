# James Mete Personal Website

A modern, responsive personal website built with Next.js, Tailwind CSS, and shadcn/ui.

## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- pnpm (>= 9.x)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jmete/jmete-website.git
cd jmete-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Environment Variables:
   - Copy the template to create your local environment file:
   ```bash
   cp .env.template .env.local
   ```
   - Edit `.env.local` and fill in the required values:
   ```
   CONTACT_FORM_ENDPOINT=your_lambda_ses_endpoint_url
   ```

4. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment on Vercel

This website is designed to be deployed on Vercel. When deploying, make sure to add the environment variables in the Vercel dashboard:

1. Go to your project in the Vercel dashboard
2. Navigate to **Settings > Environment Variables**
3. Add the required variables listed in `.env.template`

## Features

- Responsive design for all device sizes
- Dark mode support
- Dynamic project showcase
- Contact form with AWS SES integration
- SEO optimized

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Hook Form with Zod validation

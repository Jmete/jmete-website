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
pnmp install
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

## AWS SES Integration

The contact form integrates with AWS SES through a Lambda function. The file `lambdases.awslambda` in this repository contains the Lambda function code that needs to be deployed to AWS.

### Deploying the Lambda Function:

1. Open the AWS Lambda console
2. Create a new Lambda function (if not already created)
3. Copy the entire contents of `lambdases.awslambda` file
4. Paste it into the Lambda function code editor
5. Click "Deploy" to save the changes
6. Note down the API Gateway URL for your Lambda function
7. Use this URL as the value for `CONTACT_FORM_ENDPOINT` in your environment variables

**Important**: The `lambdases.awslambda` file is only a template - it must be manually copied and deployed to AWS Lambda to work.

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

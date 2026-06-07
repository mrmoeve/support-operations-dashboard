# Support Operations Dashboard

A production-ready mock Support Operations Dashboard built with Next.js 15, TypeScript, Tailwind CSS, and realistic support operations datasets.

## Features

- Executive dashboard with support KPIs
- SLA monitoring with searchable, sortable operational tables
- Escalation tracking for critical incidents
- Ticket analytics by queue and region
- Customer health and renewal risk views
- Team performance and capacity reporting
- Mobile-responsive layout with dark mode
- Unit tests for metric and table logic

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Recharts
- Vitest + Testing Library

## Project Structure

```text
app/                  Next.js app router pages
components/           Shared UI, charts, tables, and screen components
lib/                  Mock data, types, metrics, navigation, formatting
tests/                Unit tests
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run test
```

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Use the default build command: `npm run build`.
4. Use the default output from Next.js.

### Manual production run

```bash
npm install
npm run build
npm run start
```

## Notes

- All data is mocked and stored locally in [`lib/mock-data.ts`](/Users/mrmoeve/Documents/support-operations-dashboard/lib/mock-data.ts:1).
- The design direction is inspired by support analytics products such as Zendesk Explore, Salesforce Service Cloud, and Gainsight.

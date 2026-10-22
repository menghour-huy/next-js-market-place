# Next.js MarketPlace

A marketplace frontend built with **Next.js**, **React**, and **TypeScript**. This project uses the Next.js App Router and is structured to keep authentication and API integration logic separate from the UI.

> **Project status:** In development. The current implementation includes a marketplace landing page and a login flow integrated with the MarketPlace .NET API. Additional marketplace features should be treated as planned until implemented.

## Overview

This repository contains the web frontend for the MarketPlace platform. It is intended to provide a fast, search-friendly web experience and communicate with the backend API for authentication and future commerce features.

### Current implementation

- Next.js App Router application.
- Marketplace landing page.
- Login page and login form.
- Server action for submitting login credentials.
- Authentication application use case and domain contracts.
- HTTP repository and shared HTTP client for backend communication.
- Environment-based API configuration.

Product browsing, individual store storefronts, shopping cart, checkout, order management, and payment workflows are potential future features and are not represented here as completed functionality.

## Technology stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16 |
| UI library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Linting | ESLint 9, eslint-config-next |
| Backend integration | HTTP client calling the MarketPlace .NET API |
| Package manager | npm (lockfile included) |

## Architecture and project structure

The codebase separates UI routes from application use cases, domain contracts, and API integration.

```text
src/
├── app/                         # Next.js App Router routes and layouts
│   ├── login/
│   │   ├── page.tsx              # Login route
│   │   ├── LoginForm.tsx         # Login form UI
│   │   └── actions.ts            # Login server action
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Marketplace landing page
├── application/
│   └── auth/
│       └── LoginUser.ts          # Login use case
├── di/
│   └── container.ts              # Dependency wiring
├── domain/
│   └── auth/
│       ├── AuthRepository.ts     # Authentication repository contract
│       ├── AuthSession.ts        # Authentication session model
│       └── User.ts               # User model
└── infrastructure/
    ├── dtos/                     # API data-transfer objects
    ├── http/                    # Shared HTTP client
    ├── mappers/                 # API-to-domain mapping
    └── repositories/            # HTTP repository implementations

public/                           # Static assets
.env.example                      # Example local API configuration
package.json                      # Scripts and dependencies
next.config.ts                    # Next.js configuration
tsconfig.json                     # TypeScript configuration
eslint.config.mjs                 # ESLint configuration
```

### Authentication request flow

```text
Login page / LoginForm
        |
        v
Next.js Server Action
        |
        v
LoginUser application use case
        |
        v
AuthRepository contract
        |
        v
AuthHttpRepository / HTTP client
        |
        v
MarketPlace .NET Web API
        |
        v
Authentication response mapping
```

This separation helps keep UI concerns, application behavior, domain contracts, and API communication maintainable as the project grows.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) compatible with your installed Next.js version.
- npm.
- The [MarketPlace .NET backend](https://github.com/menghour-huy/MarketPlace) running locally or at a reachable API URL if you want to test login.

### 1. Clone the repository

```bash
git clone https://github.com/menghour-huy/next-js-market-place.git
cd next-js-market-place
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Copy the example environment file:

**Windows PowerShell**
```powershell
Copy-Item .env.example .env.local
```

**macOS / Linux**
```bash
cp .env.example .env.local
```

Review `.env.local` and set the backend API values:

```dotenv
API_BASE_URL=https://localhost:7149/
API_LOGIN_PATH=/api/auth/login
```

These values match the checked-in example configuration. Update the base URL and login path to match your backend environment. The local HTTPS API must be running and trusted by your development machine.

> Do not commit `.env.local`, credentials, access tokens, or production secrets to source control.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build and run for production

Create an optimized production build:

```bash
npm run build
npm run start
```

The production server uses the environment configuration appropriate to your deployment.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Related repository

This frontend is designed to work with the companion backend:

- **Backend API:** [menghour-huy/MarketPlace](https://github.com/menghour-huy/MarketPlace)

The API base URL and authentication endpoint are configured through environment variables so the frontend can target a local or deployed backend.

## Development notes

- Keep API URLs and environment-specific configuration outside source code.
- Add new routes under `src/app` using the App Router conventions.
- Keep use-case logic in `src/application`, business-facing contracts in `src/domain`, and external API integration in `src/infrastructure`.
- Run `npm run lint` and `npm run build` before opening a pull request.
- Before production release, review authentication/session handling, error states, accessibility, SEO metadata, and deployment configuration.

## Roadmap

Potential next steps for the marketplace frontend include:

- Registration and account lifecycle screens.
- Store-specific storefront routes and product detail pages.
- Product search, filtering, and category navigation.
- Shopping cart and checkout experience.
- Customer order history and order status.
- SEO metadata and structured product data.
- Automated tests and CI checks.

These items are roadmap ideas and should not be interpreted as implemented features.

## License

No license has currently been specified in this repository. Add a license file to clarify the terms under which others may use, modify, or redistribute this project.

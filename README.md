## bolajiVerse-web

bolajiVerse-web is the frontend of BolajiVerse, a modern fashion e-commerce platform designed to showcase stylish products, smooth shopping experiences, and a refined user interface.
This repository contains the full frontend codebase built with Next.js, focused on providing a fast, secure, and responsive shopping experience.

## Project Overview 🚀 

BolajiVerse is a full-stack fashion web store created as part of a portfolio development project.
The frontend (bolajiVerse-web) is responsible for:

Displaying product catalogs, product pages, and categories

Handling all user-facing interactions (auth, cart, checkout)

Providing a clean and responsive UI built with modern React patterns

Seamlessly communicating with the backend API

Supporting authenticated user flows via NextAuth

Optimizing images, SEO metadata, and page performance

This project emphasizes scalability, performance, and developer best practices, making it a strong portfolio piece to demonstrate full-stack skills.

## Tech Stack 🧰 
Frontend Framework

Next.js (React 18) – App Router, Server Components, File-based routing

TypeScript

Styling & UI

Tailwind CSS – Utility-first responsive styling

Reusable UI components (custom components library)

CSS Modules / ShadCN UI (if included)

State Management

Zustand or React Context for cart + UI state

Authentication

NextAuth.js – Secure OAuth + Credentials authentication

Session handling on both client and server routes

API Communication

REST API integration via backend (bolajiVerse-api)

Fetch or Axios (depending on setup)

Images

Cloudinary for optimized image delivery

Next.js <Image /> for responsive image optimization

Testing

Jest – Unit and component testing

React Testing Library – UI behavior testing

Additional Tooling

ESLint + Prettier – Code formatting & linting

Husky + lint-staged – Pre-commit hooks

GitHub Actions (optional) – CI/CD pipeline

## Project Structure (high-level) 📁 
```
bolajiVerse-web/
│
├── app/          # Next.js App Router pages
├── components/   # Reusable UI + layout components
├── context/      # Cart/User context or Zustand stores
├── lib/          # API utils, helpers, config
├── public/       # Static assets
├── styles/       # Global styles
└── tests/        # Jest + RTL tests
```

## Getting Started 🔧 
Clone the repo
```
git clone https://github.com/Omobolajiolanrewaju/bolajiVerse-web.git
```
```
cd bolajiVerse-web
```

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Your app should now be running at **[http://localhost:3000](http://localhost:3000)**

---

## 🔐 Environment Variables

Create a `.env.local` file with:

```
NEXTAUTH_URL=
NEXT_PUBLIC_API_URL=
NEXTAUTH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_UPLOAD_PRESET=
```

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 📜 License

This project is for portfolio and learning purposes.
You may modify or adapt parts of the code for your own personal projects.

---

## ✨ Author

**Omobolaji Olanrewaju**
Creator & Developer of **BolajiVerse**

```

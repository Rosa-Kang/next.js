This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

## Full Stack Web Application
* an Airbnb clone with seamless navigation and user experience. It is utilizing Next.js 13 App Router, which is the latest addition to the Next.js framework.

* with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Key Concept of Next.JS I learned throughout this project:
With Server-first Approach, Next.js makes the initial page load is faster, and reduces the client-side JavaScript bundle size. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. Additional JavaScript is only added as client-side interactivity is used in your application through Client Components.

* In Next.js, Client Components are pre-rendered on the server and hydrated on the client. The "use client" directive is a convention to declare a boundary between a Server and Client Component module graph.
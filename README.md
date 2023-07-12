This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

## Full Stack Web Application
* an Airbnb clone with seamless navigation and user experience. It is utilizing Next.js 13 App Router, which is the latest addition to the Next.js framework.

* with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Key Concept of Next.JS I learned throughout this project:
With Server-first Approach, Next.js makes the initial page load is faster, and reduces the client-side JavaScript bundle size. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. Additional JavaScript is only added as client-side interactivity is used in your application through Client Components.

* In Next.js, Client Components are pre-rendered on the server and hydrated on the client. The "use client" directive is a convention to declare a boundary between a Server and Client Component module graph.

* What is Zustand?
I have used the Zustand for state management in this app inside the hook. Zustand is a small unopinionated state management library built by Jotai and React-spring. It has a comfy API based on hooks, and isn't opinionated. Zustand is open-source with a large community of users and support developers working round the clock to make Zustand stable.

To use zustand, we have to import a create function:

```
import { create } from "zustand";
```

and then a callback function should follow

```
 const useCounter = create((set) => {
    return {
        counter: 0,
        incrCounter: () => set((state) => ({ counter: state.counter + 1 })),
    };
  });
```
# This is a note taking app really just a Notion clone.

## This is the setup you need if you want to build the project from scratch.
```
create-next-app@14.1.4
Ok to proceed? (y) y
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /home/slimy/Documents/note-taking-app.
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## We going to need to install shadcn ui as well for this project
```
npx shadcn-ui@latest init                                     ✔ 
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Neutral
✔ Would you like to use CSS variables for colors? … no / yes

```

## setting up convex and clerk
- We start by login and getting ```npm install convex``` into your nextjs project and run npx convex dev and follow the instruction and do not close the terminal for your need convex to be runing.
- after ```npm install @clerk/next.js``` and create new project on clerk and after copy the env.local in your .env and after create a conex JWT template.
# cloud-hosting-project
Cloud Hosting Project created by Next.JS for educational purpose

<img src="./public/course-nextjs.png">

# Usage
- Install Postgresql DB on your local machine or use Postgresql from remote server

## Environment Variables
Create `.env` file in the root folder and add the following
```
DATABASE_URL= your database uri
JWT_SECRET=your JWT secret key
NODE_ENV=development
```

## Install Dependencies
```
npm install
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## app folder to router 
## all folders in the same level is a component
## utils contain 
-- types 
-- data 
-- interfaces 
-- tokens 
-- constants = const value as DEVMODE
-- Dto => data transfer ob 
-- validation schema

## rout grouping
(folderName)   ==>> grouping 
_folderName    ==>> private as css folder
[...folderName]   ==>> catch all routing segments if all routs not found go to source page and it as params
[[...folderName]] ==>> optional catch all routing segments take any one from rout

## server component contain the client comp

## .next folder is a final desterbution and contain some helping in development

##  use prisma in server com only



## reserved names
-- page          file
-- loading       file
-- globals       file
-- not-found     file
-- error         file
-- api           folder
-- route         file in api folder
-- middleware    file

## library 
-- react-icons
-- prisma 
-- tailwind
-- zod == joi
-- jsonwebtoken
-- bcryptjs
-- react-toastify
-- cookie
-- axios
-- autoprefixer
-- eslint
-- eslint-config-next
-- postcss
-- cookie



## prisma  cli
-- npx prisma@latest init --db =>  make folder prisma and .env file  --1
-- npx prisma format  =>  format style in file                       --2
-- npx prisma migrate dev => migrate to DB                           --3
-- npx prisma studio => alternative to bgAdmin

## deploying
-- 1 build ==> npm run build
-- 2 start ==> npm start
-- 3 BD in clouding  by neon sit
-- 4 new migration


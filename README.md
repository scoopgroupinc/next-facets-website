This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Download node_modules
`yarn install`

Run the development server:

```bash
yarn dev
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

## Website

uses assets in `public/assets`

## App

Starts in `src/app` uses tailwind for css

azure token
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

# webapp

frontend web app to handle getting feedback from users that are not logged in

Prettier Eslint Typescript setup:
https://www.youtube.com/watch?v=kBk_367zbkQ
Note: https://prettier.io/docs/en/integrating-with-linters.html
Let your IDE handle formatting using prettier, and turn off formatting in your eslint. It's not recommended

## Environmental Variables

Note: we only use one .env file and use REACT_APP_ENV to determine which variables to read since react does not let us set NODE_ENV

We are not using multiple .env files. Which would use the following:
By default `yarn start` sets NODE_ENV='development', and `yarn build` to NODE_ENV='production', with env priority from left to right
`yarn start`: .env.development.local, .env.local, .env.development, .env
`yarn build`: .env.production.local, .env.local, .env.production, .env
https://create-react-app.dev/docs adding-custom-environment-variables/

## Pre-commit

Note because we added in package.json scripts.postinstall: "husky install" you will not need to install husky manually.
Else you would run `yarn husky install` to enable git hooks.

.husky/pre-commit runs during every commit

## AdSense Tutorial

https://www.mridul.tech/blogs/how-to-add-google-adsense-in-next-js

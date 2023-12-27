# Short URL generator

This is a URL shortener built using the following:

- MongoDB (via Docker)
- Prisma
- Remix
- Tamagui UI library

---

## Database setup

You need a running MongoDB instance named `short-urls` and a `.env` file with `DATABASE_URL='PATH_TO_YOUR_DATABASE'` .

Then, generate the Prisma Client with the following command:

```sh
npm install prisma --save-dev
npx prisma generate
```

## Development

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

---

### Links

- [Remix Docs](https://remix.run/docs)
# Personal Website

Modern personal website built with React 19, TypeScript and Vite.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

The app runs on http://localhost:5173.

## Production Build

```bash
npm run build
```

Output is generated in the `dist` directory.

## Docker (Nginx)

Build image:

```bash
docker build -t personal-website .
```

Run container:

```bash
docker run -p 8080:80 personal-website
```

Then open http://localhost:8080.

# Yigim App

Modern web application built with Next.js, featuring a responsive design and seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-✓-blue?style=for-the-badge&logo=docker)

## 🚀 Live Demo

Check out the live application: [yigim-app.vercel.app](https://yigim-app.vercel.app/)

# 🛠 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

# 🐳 Docker Deployment

### Option 1: Docker Only (Next.js App)

```bash
# Build the image
docker build -t yigim-app .

# Run the container
docker run -p 3000:3000 yigim-app

# Run in background
docker run -d -p 3000:3000 yigim-app
```

Access the application at: http://localhost:3000

### Option 2: Full Stack with Docker Compose

```bash
# Start all services
docker compose up --build

# Start in background
docker compose up -d --build

# View logs
docker compose logs

# Stop services
docker compose down
```

Access the application at: http://localhost (port 80 via nginx)

### Docker Commands Reference

```bash
# List running containers
docker ps

# View container logs
docker logs <container-id>

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# Remove image
docker rmi yigim-app

# Remove all images
docker rmi $(docker images -a -q)
```

## Project Structure

```bash
yigim-app/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── public/             # Static assets
├── components/         # React components
├── lib/               # Utility libraries
├── dockerfile         # Docker configuration
├── docker-compose.yml # Multi-container setup
└── package.json       # Dependencies and scripts
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

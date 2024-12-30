FROM node:22-bookworm

WORKDIR /app

USER node

CMD ["npm", "run", "dev"]

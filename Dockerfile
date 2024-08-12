FROM node:20-bookworm

WORKDIR /app

USER node

CMD ["npm", "run", "dev"]

FROM node:17.0.1 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:17.0.1 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:17.0.1 AS runner
WORKDIR /app
COPY --from=builder /app/tsconfig.json /app/next-env.d.ts ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]

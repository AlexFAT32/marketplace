
FROM node:18-alpine
WORKDIR /app
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update && apk add --no-cache libc6-compat
RUN npm install --global --no-update-notifier --no-fund pnpm@^8.0.0 typescript@5.4.2

# First install the dependencies (as they change less often)
COPY . .

RUN pnpm install --ignore-scripts



RUN pnpm turbo run build



EXPOSE 3001

#CMD ["/bin/sh","-c","ash"]
CMD ["node", "apps/api/dist/src/app.js"]

FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
# create persistent dirs for sessions and tmp
RUN mkdir -p /app/sessions /app/tmp && chown node:node -R /app/sessions /app/tmp
COPY . .
EXPOSE 3000
VOLUME ["/app/sessions", "/app/tmp"]
CMD [ "npm", "start" ]

FROM node as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/RecipeBook /usr/share/nginx/html


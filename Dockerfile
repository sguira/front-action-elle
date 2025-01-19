#Etape 1 : Build de l'application Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Excecution de l'application dans nginx
FROM nginx:alpine
COPY --from=build /app/dist/app-front-actionelle /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/defaut.conf
EXPOSE 4200
CMD ["nginx","-g","daemon off;"]

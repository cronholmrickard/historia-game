FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY data.js /usr/share/nginx/html/data.js
COPY happy.png /usr/share/nginx/html/happy.png
COPY sad.png /usr/share/nginx/html/sad.png
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

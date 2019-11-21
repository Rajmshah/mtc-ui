server {
       listen 80;
       server_name mtcmarudharcup.com www.mtcmarudharcup.com;
       location / {
               root /home/projects/mtc-ui/dist;
               index index.html index.htm;
               try_files $uri $uri/ /index.html =404;
       }
}
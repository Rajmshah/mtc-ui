server {
       listen 80;
       server_name mtcmarudharcup.com www.mtcmarudharcup.com;
       location / {
               root /home/projects/bitswap24/dist;
               index index.html index.htm;
       }
}
git pull
cp landing.html ./html/
mv ./html/landing.html ./html/index.html
cp fspo-nginx.conf /etc/nginx/sites-enabled/
nginx -s reload
cd final2

echo "npm install"
npm install

echo "npm run build"
npm run build

echo "copying build to /var/www/html"
sudo cp -r build/* /var/www/html/   

echo "restarting nginx"
sudo systemctl restart nginx

echo "Deployment completed successfully!"


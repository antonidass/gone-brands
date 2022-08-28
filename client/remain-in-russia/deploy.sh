echo "Switching to branch master"
git checkout master

echo "Building app.."
npm run build


echo "Deploying files to server..."
scp -r build/* akrik@185.68.21.180:/var/www/185.68.21.180/

echo "Done!"
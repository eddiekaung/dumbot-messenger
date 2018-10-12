m = "Update commands" # Commit message parameter option in invocation

all:
	git add .
	git commit -m $(m)
	git push origin
enable:
	heroku ps:scale web=1 -a dumbot-messenger
disable:
	heroku ps:scale web=0 -a dumbot-messenger
restart:
	heroku ps:restart web -a dumbot-messenger
logs:
	heroku logs -n 100 -a dumbot-messenger
start:
	npm start
archive:
	node archive.js
restore:
	node archive.js --restore
bash:
	heroku run bash -a dumbot-messenger
debug: disable start

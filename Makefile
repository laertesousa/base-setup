run:
	npm start

dev:
	npm run dev

get-data:
	mongodump -h [db-host] -d [db-name] -u [user-name] -o ./db-backup

make clean:
	mongo pwa ./scripts/cleanDB.js

restore:
	mongorestore -d pwa ./db-backup

DB_NAME=bolonki_test
HOST=localhost:27017
COLLECTION=$1

mongo $DB_NAME --host $HOST --eval "db.getCollection('$COLLECTION').remove({})";
touch src/db/seeds/$COLLECTION.json;
mongoimport --host $HOST --db $DB_NAME --collection $COLLECTION --type JSON --file src/db/seeds/$COLLECTION.json;

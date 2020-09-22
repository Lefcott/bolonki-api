TEST_DB_URI=mongodb://127.0.0.1:27017/bolonki_test
DB_URI=$1
COLLECTION=$2

mongo "$TEST_DB_URI" --eval "db.getCollection('$COLLECTION').remove({})";
touch src/db/seeds/$COLLECTION.json;
mongoexport --uri "$DB_URI" --collection $COLLECTION --type JSON --out src/db/seeds/$COLLECTION.json --query '{}';
mongoimport --uri "$TEST_DB_URI" --collection $COLLECTION --type JSON --file src/db/seeds/$COLLECTION.json;

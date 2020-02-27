
const Datastore = require('nedb');
const db = new Datastore({ filename: 'insults.db', autoload: true });
let insultsList = require('./insults.json')

db.remove({}).then(() => {
    db.insert(insultList.insults);
})


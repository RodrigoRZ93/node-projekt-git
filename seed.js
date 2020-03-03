
const Datastore = require('nedb-promise');
const insults = new Datastore({ filename: 'insults.db', autoload: true });
let insultsList = require('./insults.json')

insults.remove({}).then(() => {
    insults.insert(insultsList.insults);
})

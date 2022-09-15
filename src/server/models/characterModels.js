const mongoose = require('mongoose');

// mongoose.connect(MONGO_URI, {
//     //parses URI
//     useNewUrlParse: true,
//     useUnifiedTopology: true,
//     dbName: 'DnD Campaign'
// })
//     .then(() => console.log('Connected to Mongo DB'))
//     .catch(err => console.log(err));

const characterSchema = new mongoose.Schema({
    playerName: String,
    charName: String,
    race: String,
    class: {
        className: String,
        classLevel: Number
    },
    background: String,
    alignment: String,
    abilities: {
        str: Number,
        dex: Number,
        con: Number,
        int: Number,
        wis: Number,
        cha: Number
    }
});


module.exports = mongoose.model('Character', characterSchema);

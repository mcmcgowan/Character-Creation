const mongoose = require('mongoose');

const MONGO_URI = 'ADD CHARACTER CREATOR MONGO DB URI';

mongoose.connect(MONGO_URI, {
    //parses URI
    useNewUrlParse: true,
    useUnifiedTopology: true,
    dbName: 'DnD Campaign'
})
    .then(() => console.log('Connected to Mongo DB'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const characterSchema = new Schema({
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
        str: {
            rawScore: Number, 
            raceBonus: Number,
            totalBonus: Number,
        },
        dex: {
            rawScore: Number, 
            raceBonus: Number,
            totalBonus: Number,
        },
        con: {
            rawScore: Number, 
            raceBonus: Number,
            totalBonus: Number,
        },
        int: {
            rawScore: Number, 
            raceBonus: Number,
            totalBonus: Number,
        },
        wis: {
            rawScore: Number, 
            raceBonus: Number,
            totalBonus: Number,
        },
        cha: {
            rawScore: Number, 
            raceBonus: Number,
            totalBonus: Number,
        },
    }
});

const Character = mongoose.model('characters', characterSchema);

module.exports = Character;
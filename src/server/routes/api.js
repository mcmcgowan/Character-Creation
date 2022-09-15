const express = require ('express');
const { route } = require('../server');
const Character = require('../models/characterModels')
//require controllers

const router = express.Router();

//TODO functions should be split into controllers?

//route for getting all characters
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//route for getting one character
router.get('/:id', getCharacter, (req, res) => {
    res.send(res.character)

});

//route for creating
router.post('/', async (req, res) => {
    const character = new Character({
        playerName: req.body.playerName,
        charName: req.body.charName,
        race: req.body.race,
        class: {
            className: req.body.class.className,
            classLevel: req.body.class.classLevel
        },
        background: req.body.background,
        alignment: req.body.alignment,
        abilities: {
            str: req.body.abilities.str,
            dex: req.body.abilities.dex,
            con: req.body.abilities.con,
            int: req.body.abilities.int,
            wis: req.body.abilities.wis,
            cha: req.body.abilities.cha
        }
    })
    try {
        const newCharacter = await character.save()
        res.status(201).json(newCharacter)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//route for updating one
//TODO issue with(accessing non-existent property 'route' of module exports inside circular dependency)
router.patch('/:id', getCharacter, async (req, res) => {
    if (req.body.playerName !== null){
        res.character.playerName = req.body.playerName
    }
    if (req.body.charName !== null){
        res.character.charName = req.body.charName
    }
    if (req.body.race !== null){
        res.character.race = req.body.race
    }
    if (req.body.class.className !== null){
        res.character.class.className = req.body.class.className
    }
    if (req.body.class.classLevel !== null){
        res.character.class.classLevel = req.body.class.classLevel
    }
    if (req.body.background !== null){
        res.character.background = req.body.background
    }
    if (req.body.alignment !== null){
        res.character.alignment = req.body.alignment
    }
    if (req.body.abilities.str !== null){
        res.character.abilities.str = req.body.abilities.str
    }
    if (req.body.abilities.dex !== null){
        res.character.abilities.dex = req.body.abilities.dex
    }
    if (req.body.abilities.con !== null){
        res.character.abilities.con = req.body.abilities.con
    }
    if (req.body.abilities.int !== null){
        res.character.abilities.int = req.body.abilities.int
    }
    if (req.body.abilities.wis !== null){
        res.character.abilities.wis = req.body.abilities.wis
    }
    if (req.body.abilities.cha !== null){
        res.character.abilities.cha = req.body.abilities.cha 
    }
    try {
        const updatedCharacter = await res.character.save()
        res.json(updatedCharacter)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//route for deleting
router.delete('/:id', getCharacter, async (req, res) => {
    try{
        await res.character.remove()
        res.json({message: 'Deleted Character'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//TODO move this to controller func?
async function getCharacter (req, res, next){
    let character
    try {
        character = await Character.findById(req.params.id)
        if(character === null){
            return res.status(404).json({message: 'cannot find character'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.character = character
    next()
}


module.exports = router;
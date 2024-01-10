const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');

router.get('/', petsController.getAllPets);
router.post('/', petsController.createPet);
router.delete('/:id', petsController.archivePet);

module.exports = router;

// Pavyzdinio gyvūno duomenys
const samplePetData = {
    name: 'Rex',
    dob: '2022-01-01',
    client_email: 'rex.owner@example.com',
    isArchived: false, // Nauji gyvūnai nebūtų archyvuoti
  };
  
  // Kontrolerio funkcija gyvūno sukūrimui
  exports.createSamplePet = async (req, res) => {
    try {
      // Patikriname, ar toks gyvūnas jau neegzistuoja
      const existingPet = await Pet.findOne({ where: { name: samplePetData.name } });
  
      if (existingPet) {
        return res.status(400).json({ error: 'Sample pet already exists' });
      }
  
      // Sukuriame naują gyvūną
      const newPet = await Pet.create(samplePetData);
  
      res.json(newPet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
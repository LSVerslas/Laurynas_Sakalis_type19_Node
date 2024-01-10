const express = require('express');
const bodyParser = require('body-parser');
const petsRoutes = require('./src/routes/v1/pets');
const medicationsRoutes = require('./src/routes/v1/medications');
const logsRoutes = require('./src/routes/v1/logs');
const prescriptionsRoutes = require('./src/routes/v1/prescriptions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/v1/pets', petsRoutes);
app.use('/v1/meds', medicationsRoutes);
app.use('/v1/logs', logsRoutes);
app.use('/v1/prescriptions', prescriptionsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const petsController = require('./src/controllers/petsController');

// ...

// Sukurkite pavyzdinį gyvūną
app.post('/createSamplePet', petsController.createSamplePet);

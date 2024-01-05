const validateMiddleware = (req, res, next) => {
    // Patikrinimas ir validacija laukų
    // ...
  
    // Jei yra klaidų:
    // res.status(400).json({ error: 'Invalid data', details: errors });
  
    // Jei viskas gerai:
    next();
  };
  
  // Pavyzdinė middleware naudojimas:
  app.post('/api/auth/register', validateMiddleware, (req, res) => {
    // Įrašyti vartotoją į duomenų bazę
    // ...
  });
  
// Implement your frontend scripts here, such as AJAX requests to interact with the server
// Example:

// Fetch all pets
fetch('/v1/pets')
  .then(response => response.json())
  .then(data => {
    // Handle the data and update the UI
    console.log('All Pets:', data);
  })
  .catch(error => console.error('Error fetching pets:', error));

// Implement other AJAX requests based on your application requirements

// Fetch all pets and update the UI
function fetchAndDisplayPets() {
    fetch('/v1/pets')
      .then(response => response.json())
      .then(data => {
        const petList = document.getElementById('petList');
        petList.innerHTML = ''; // Išvalyti turinį prieš atnaujinant
  
        data.forEach(pet => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${pet.id}</td>
            <td>${pet.name}</td>
            <td>${pet.dob}</td>
            <td>${pet.client_email}</td>
            <td>
              <button class="archive-btn" onclick="archivePet(${pet.id})">Archive</button>
              <button onclick="viewHealthLog(${pet.id})">View Log</button>
            </td>
          `;
  
          petList.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching pets:', error));
  }
  
  // Archyvuoti gyvūną
  function archivePet(petId) {
    // Įvykdykite atitinkamą AJAX užklausą (pvz., DELETE)
    // Atnaujinkite sąrašą po sėkmingo ištrinimo
  }
  
  // Atvaizduoti gyvūno medicininius įrašus
  function viewHealthLog(petId) {
    // Įvykdykite atitinkamą AJAX užklausą (pvz., GET)
    // Atvaizduokite medicininius įrašus log.html puslapyje
  }
  
  // Pradinis gyvūnas gali būti sukurtas, kai puslapis užkraunamas
  // Ši funkcija gali būti iškviesta iš mygtuko arba automatiškai
  function createSamplePet() {
    fetch('/createSamplePet', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Sample Pet Created:', data);
        // Atnaujinti gyvūnų sąrašą
        fetchAndDisplayPets();
      })
      .catch(error => console.error('Error creating sample pet:', error));
  }
  
  // Pradinis gyvūnas gali būti sukurtas automatiškai
  createSamplePet();
  
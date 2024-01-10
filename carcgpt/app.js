document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const carsPerPage = 3;
  
    // Fetch data from the backend API and update the DOM
    const fetchData = async () => {
      try {
        const response = await fetch(`/cars?_page=${currentPage}&_limit=${carsPerPage}`);
        const data = await response.json();
        updateCarList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Update the car list on the View Cars page
    const updateCarList = (cars) => {
      const carListContainer = document.getElementById('car-list');
      carListContainer.innerHTML = '';
  
      if (cars.length === 0) {
        carListContainer.innerHTML = '<p>No cars available.</p>';
        return;
      }
  
      cars.forEach((car) => {
        const carItem = document.createElement('div');
        carItem.innerHTML = `
          <p>${car.title} - ${car.numberPlates}</p>
          <img src="${car.image}" alt="${car.title}">
          <p>Price: ${car.price}</p>
          <button onclick="deleteCar(${car.ID})">Delete</button>
        `;
        carListContainer.appendChild(carItem);
      });
    };
  
    // Pagination buttons
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
  
    // Event listeners for pagination
    prevPageButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        fetchData();
      }
      return;
    });
  
    nextPageButton.addEventListener('click', () => {
      currentPage += 1;
      fetchData();
    });
  
    // Fetch initial data
    fetchData();
  });
  
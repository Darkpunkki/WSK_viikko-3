const restaurantRow = (restaurant) => {
  // extract name and company properties from restaurant object
  const {name, city} = restaurant;
  // create a new table row element using document.createElement method
  const row = document.createElement('tr');
  // Set the innerHTML of the tr element to create the table row content with the extracted properties (name and company).
  row.innerHTML = `<td>${name}</td><td>${city}</td>`;
  return row;
};

const restaurantModal = (restaurant, menu) => {
  const {name, city, phone, _id, address, postalCode, companyId} = restaurant;
  const {courses} = menu;

  let menuHtml = '';

  courses.forEach((course) => {
    menuHtml += `
    <div class="course">
      <p><strong>Name:</strong> ${course.name}</p>
      <p><strong>Price:</strong> ${course.price}</p>
      <p><strong>Diets:</strong> ${course.diets}</p>
    </div>
  `;
  });

  const completeHtml = `
  <div class="restaurant-modal">
    <h2>${name}</h2>
    <p><strong>Address:</strong> ${address}, ${city}, ${postalCode}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Menu</h3>
    ${menuHtml} <!-- Inserting the generated menu items HTML -->
  </div>
`;

  // Return the complete HTML content
  return completeHtml;
};

export {restaurantRow, restaurantModal};

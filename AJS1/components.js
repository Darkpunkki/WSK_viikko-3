const restaurantRow = (restaurant) => {
  const {name, city} = restaurant;
  const row = document.createElement('tr');
  row.innerHTML = `<td>${name}</td><td>${city}</td>`;
  return row;
};

const restaurantModal = (restaurant, menu) => {
  const {name, city, phone, _id, address, postalCode, company} = restaurant;
  const {courses} = menu;

  let menuHtml = '';
  if (!courses || courses.length === 0) {
    menuHtml = '<p>Menu details not available.</p>';
  } else {
    courses.forEach((course) => {
      // Handle undefined or null price
      const priceInfo =
        course.price !== null &&
        course.price !== undefined &&
        course.price !== ''
          ? `${course.price} `
          : 'Not available';

      const dietsInfo = course.diets ? course.diets : 'Not specified';

      menuHtml += `
        <ul class="course">
          <li><strong>Meal:</strong> <span class="course-name">${course.name}</span></li>
          <li><strong>Price:</strong> <span class="course-price">${priceInfo}</span></li>
          <li><strong>Diets:</strong> <span class="course-diets">${dietsInfo}</span></li>
        </ul>
      `;
    });
  }

  const closeButtonHtml = '<button id="closeButton">Close</button>';
  const completeHtml = `
    <div class="restaurant-modal">
      <h2>${name}</h2>
      <p><strong>Address:</strong> ${address}, ${city}, ${postalCode}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <h3>Menu</h3>
      ${menuHtml}
      ${closeButtonHtml}
    </div>
  `;

  return completeHtml;
};

export {restaurantRow, restaurantModal};

const restaurantRow = (restaurant) => {
  // extract name and company properties from restaurant object
  const {name, city} = restaurant;
  // create a new table row element using document.createElement method
  const row = document.createElement('tr');
  // Set the innerHTML of the tr element to create the table row content with the extracted properties (name and company).
  row.innerHTML = `<td>${name}</td><td>${city}</td>`;
  return row;
};

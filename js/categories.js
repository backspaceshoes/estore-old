function loadCategories() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      displayData(this);
    }
  };
  xhttp.open("GET", "./xml/categories.xml", true);
  xhttp.send();
}

function displayData(xml) {
  var xmlDoc = xml.responseXML;
  var categories = ['sneakers', 'sports', 'slipers'];
  categories.forEach(category => {
    let items = xmlDoc.getElementsByTagName(category)[0].getElementsByTagName("categoriesItem");
    createMenu(`#${category}`, items);
  });
}

function createMenu(containerId, items) {
  let container = document.querySelector(containerId);
  container.innerHTML = '';
  for (let i = 0; i < items.length; i++) {
    container.innerHTML += createMenuCard(items[i]);
  }
}

function createMenuCard(item) {
  let name = item.getElementsByTagName("name")[0]?.childNodes[0]?.nodeValue || "";
  let price = item.getElementsByTagName("price")[0]?.childNodes[0]?.nodeValue || "";
  let description = item.getElementsByTagName("description")[0]?.childNodes[0]?.nodeValue || "";
  let imageURL = item.getElementsByTagName("imageURL")[0]?.childNodes[0]?.nodeValue || "";
  let size = item.getElementsByTagName("size")[0]?.childNodes[0]?.nodeValue || "";

  return `
    <div class="col mb-4">
      <div class="card">
        <img src="images/categories/${imageURL}" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <p class="card-text">RM${price}</p>
          <h6 class="card-subtitle">${size}</h6>
        </div>
      </div>
    </div>`;
}

window.onload = loadCategories;
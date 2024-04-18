var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    displayData(this);
  }
};
xhttp.open("GET", "./xml/categories.xml", true);
xhttp.send();

function displayData(xml) {
  var xmlDoc = xml.responseXML;
  var sneakers = xmlDoc
    .getElementsByTagName("sneakers")[0]
    .getElementsByTagName("categoriesItem");

  var sports = xmlDoc
    .getElementsByTagName("sports")[0]
    .getElementsByTagName("categoriesItem");

  var slipers = xmlDoc
    .getElementsByTagName("slipers")[0]
    .getElementsByTagName("categoriesItem");

  createMenu("#sneakers", sneakers);
  createMenu("#sports", sports);
  createMenu("#slipers", slipers);
}

function createMenu(containerName, categoriesLists) {
  for (var i = 0; i < categoriesLists.length; i++) {
    var name = categoriesLists[i].innerHTML.includes("name")
      ? categoriesLists[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
      : "";

    var price = categoriesLists[i].innerHTML.includes("price")
      ? categoriesLists[i].getElementsByTagName("price")[0].childNodes[0].nodeValue
      : "";

    var description = categoriesLists[i].innerHTML.includes("description")
      ? categoriesLists[i].getElementsByTagName("description")[0].childNodes[0]
          .nodeValue
      : "";

    var imageURL = categoriesLists[i].innerHTML.includes("imageURL")
      ? categoriesLists[i].getElementsByTagName("imageURL")[0].childNodes[0].nodeValue
      : "";

    var size = categoriesLists[i].innerHTML.includes("size")
      ? categoriesLists[i].getElementsByTagName("size")[0].childNodes[0].nodeValue
      : "";

    createMenuCard(name, price, description, imageURL, size, containerName);
  }
}

function createMenuCard(
  name,
  price,
  description,
  imageURL,
  size,
  containerName
) {
  let div = document.querySelector(containerName);

  let colNode = createNodeWithAttribuites("div", {
    class: "col mb-1",
    style: "height:300;",
  });
  let cardNode = createNodeWithAttribuites("div", {
    class: "card",
  });

  let imgNode = createNodeWithAttribuites("img", {
    class: "card-img-top rounded mx-auto w-50 h-50",
    src: "images/categories/" + imageURL,
    alt: "image",
  });

  let cardBodyNode = createNodeWithAttribuites("div", {
    class: "card-body text-center",
  });

  let cardTitleNode = createNodeWithAttribuites("h5", { class: "card-title" });
  cardTitleNode.appendChild(document.createTextNode(name));

  let cardDescriptionNode = createNodeWithAttribuites("p", {
    class: "card-text",
  });
  cardDescriptionNode.appendChild(document.createTextNode(description));

  let cardPriceNode = createNodeWithAttribuites("p", { class: "card-text" });
  cardPriceNode.appendChild(document.createTextNode("RM" + price));

  let cardSizeNode = createNodeWithAttribuites("h5", { class: "card-title" });
  cardSizeNode.appendChild(document.createTextNode(size));

  cardBodyNode.appendChild(cardTitleNode);
  cardBodyNode.appendChild(cardSizeNode);
  cardBodyNode.appendChild(cardDescriptionNode);
  cardBodyNode.appendChild(cardPriceNode);

  cardNode.appendChild(imgNode);
  cardNode.appendChild(cardBodyNode);

  colNode.appendChild(cardNode);
  div.appendChild(colNode);
}

function createNodeWithAttribuites(element, attributes) {
  let node = document.createElement(element);

  for (att in attributes) {
    const thisAttribute = document.createAttribute(att);
    thisAttribute.value = attributes[att];
    node.setAttributeNode(thisAttribute);
  }

  return node;
}

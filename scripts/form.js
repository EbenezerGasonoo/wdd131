const products = [
  {
    "id": "cp-1024",
    "name": "cloud processor",
    "averagerating": 4.8
  },
  {
    "id": "mr-2048",
    "name": "machine learning module",
    "averagerating": 4.7
  },
  {
    "id": "db-5120",
    "name": "distributed blockchain node",
    "averagerating": 4.5
  },
  {
    "id": "ai-3072",
    "name": "AI neural network unit",
    "averagerating": 4.4
  },
  {
    "id": "vr-5121",
    "name": "virtual reality headset",
    "averagerating": 4.9
  }
];

function updateProducts(productList) {
  const selectBox = document.getElementById("product-name");

  productList.forEach((product) => {
    const tech = document.createElement("option");
    tech.value = product.averagerating;
    tech.innerText = product.name;
    tech.id = product.id;

    selectBox.appendChild(tech);
  });
}

updateProducts(products);


const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();


if (!localStorage.getItem("reviewcounter")) {
  localStorage.setItem("reviewcounter", 0);
}


let currentCounter = parseInt(localStorage.getItem("reviewcounter"), 10);
currentCounter += 1;
localStorage.setItem("reviewcounter", currentCounter);


const reviewCount = document.querySelector("#review-count");
reviewCount.innerText = currentCounter;


const reviewform = document.getElementById("reviewform");
reviewform.style.display = "none"; 
const thankYouMessage = document.createElement("p");
thankYouMessage.innerText = "Thank you for your submission!";
document.body.appendChild(thankYouMessage);


setTimeout(() => {
  window.location.href = "form.html"; 
}, 3000);


const lastmodified = document.querySelector("#lastModified");
lastmodified.innerHTML = document.lastModified;

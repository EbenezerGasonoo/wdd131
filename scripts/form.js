const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastmodified.innerHTML = document.lastModified;

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
]
  
  function updateProducts(productList) {
    const selectBox = document.getElementById("product-name");
  
    productList.forEach((product) => {
      const bob = document.createElement("option");
      bob.value = product.averagerating;
      bob.innerText = product.name;
      bob.id = product.id;
  
      selectBox.appendChild(bob);
    });
  }
  
  updateProducts(products);
  
  if (!localStorage.getItem("reviewcounter")) {
    localStorage.setItem("reviewcounter", 0);
  }
  
  const reviewform = document.getElementById("reviewform");
  reviewform.addEventListener("submit", () => {
    let currentCounter = parseInt(localStorage.getItem("reviewcounter"), 10);
    currentCounter += 1;
    localStorage.setItem("reviewcounter", currentCounter);
  });
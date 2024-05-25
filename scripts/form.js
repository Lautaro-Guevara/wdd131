const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("product-name");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Incrementa el contador de revisiones en localStorage
  if (localStorage.getItem("reviewCounter")) {
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter"));
    reviewCounter++;
    localStorage.setItem("reviewCounter", reviewCounter);
  } else {
    localStorage.setItem("reviewCounter", 1);
  }

  // Mostrar el contador en la consola (puedes mostrarlo en la página si es necesario)
  console.log("Total Reviews: " + localStorage.getItem("reviewCounter"));
});

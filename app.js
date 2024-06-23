const ModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const Modal = document.getElementById("modal");
const form = document.getElementById("formProduct");
const inputValueProduct = document.getElementsByName("#valor-produto");
const listProduct = document.querySelector("#listProduct");
const productName = document.getElementById("nomeProduto");
const productValue = document.getElementById("valorProduto");
const descriptionValue = document.getElementById("descriptionProduct");
const tBody = document.getElementById("table");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    document.querySelector('input[name="disponibilidadeProduto"]:checked')
      .value == "Não"
  ) {
    ModalButton.classList.toggle("active");
    Modal.close();
    return;
  }
  Modal.close();
  ModalButton.classList.remove("active");
  store();
  getItem();
  creatListProduct(
    productName.value,
    descriptionValue.value,
    productValue.value
  );
});
ModalButton.addEventListener("click", (event) => {
  Modal.showModal();
  ModalButton.classList.add("active");
});
closeModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  Modal.close();
  ModalButton.classList.remove("active");
});

function store() {
  const productName = document.getElementById("nomeProduto").value;
  localStorage.setItem("productName", productName);

  const productValue = document.getElementById("valorProduto").value;
  localStorage.setItem("productValue", productValue);

  const descriptionValue = document.getElementById("descriptionProduct").value;
  localStorage.setItem("descriptionValue", descriptionValue);
}
function creatListProduct(nameProduct, description, valueProduct) {
  const divList = document.createElement("div");
  const trProducts = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdValue = document.createElement("td");
  const tdDescription = document.createElement("td");

  tBody.appendChild(trProducts);
  listProduct.appendChild(divList);
  trProducts.appendChild(tdName);
  trProducts.appendChild(tdValue);
  trProducts.appendChild(tdDescription);

  tdName.innerText = productName.value;
  tdDescription.innerHTML = descriptionValue.value;
  tdValue.innerHTML = productValue.value;

  divList.classList.add("divList");
}

function getItem() {
  const storageProductName = localStorage.getItem("productName");
  if (storageProductName) {
    console.log(storageProductName);
  }
}
function clearCampos() {
  document.querySelectorAll(".inputText").forEach((input) => {
    input.value = "";
  });
  document.querySelector(".inputNumber").value = "";
  document.querySelectorAll(".inputRadio").forEach((radio) => {
    radio.checked = false;
  });
  document.querySelectorAll(".inputText")[0].focus();
}

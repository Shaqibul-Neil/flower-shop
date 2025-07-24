//Elements
const cartButtons = document.querySelectorAll(".btn");
const cartAmount = document.querySelector("#cart_amount");

//cart button alert and cart amount update
cartButtons.forEach((cartButton) => {
  cartButton.addEventListener("click", function () {
    alert("Flower Added to Cart");
    const itemPrice = parseFloat(
      cartButton.closest(".item").querySelector(".item_details p").textContent
    );

    cartAmount.textContent = +cartAmount.textContent + itemPrice;
  });
});

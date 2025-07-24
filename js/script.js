//Elements
const cartButtons = document.querySelectorAll(".btn");
const cartAmount = document.querySelector("#cart_amount");

//cart button alert and cart amount update
cartButtons.forEach((cartButton) => {
  cartButton.addEventListener("click", function () {
    //getting the value of the product
    const itemPrice = parseFloat(
      this.closest(".item").querySelector(".item_details p").textContent
    );

    //updating the cart amount
    cartAmount.textContent = (+cartAmount.textContent + itemPrice).toFixed(2);

    //update cart alert
    alert(
      `💐 Flower Added to Cart. New Cart Value: $${cartAmount.textContent}`
    );
  });
});

var swiper = new Swiper(".card_slider", {
  // Optional parameters
  slidesPerView: 6,
  // spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});



// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));


// Khởi tạo giỏ hàng
let cart = [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(item) {
  // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
  let cartItem = cart.find(i => i.id === item.id);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({id: item.id, name: item.name, price: item.price, quantity: 1});
  }
  // Cập nhật số lượng sản phẩm trong giỏ hàng
  updateCartCount();
}

// Hiển thị giỏ hàng
function showCart() {
  let cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";
  let total = 0;
  for (let item of cart) {
    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `${item.name} - ${item.quantity} x ${item.price}$ = ${item.quantity * item.price}$`;
    cartItemsDiv.appendChild(itemDiv);
    total += item.quantity * item.price;
  }
  document.getElementById("cart-total").innerHTML = `${total}$`;
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-button").innerHTML = `Giỏ hàng (${count})`;
}

// Mở/đóng giỏ hàng
function toggleCart() {
  let cartModal = document.getElementById("cart-modal");
  if (cartModal.style.display === "block") {
    cartModal.style.display = "none";
  } else {
    showCart();
    cartModal.style.display = "block";
  }
}

// Thanh toán
function checkout() {
  alert("Cảm ơn bạn đã mua hàng!");
  cart = [];
  updateCartCount

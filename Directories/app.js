const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
	{
		id: 1,
		title: "Air Force",
		price: 473.53,
		colors: [
			{
				code: "black",
				img: "./Media & Images/air.png",
			},
			{
				code: "darkblue",
				img: "./Media & Images/air2.png",
			},
		],
	},
	{
		id: 2,
		title: "Air Jordan",
		price: 592.91,
		colors: [
			{
				code: "lightgray",
				img: "../Media & Images/jordan.png",
			},
			{
				code: "green",
				img: "./Media & Images/jordan2.png",
			},
		],
	},
	{
		id: 3,
		title: "Blazer",
		price: 433.74,
		colors: [
			{
				code: "lightgray",
				img: "./Media & Images/blazer.png",
			},
			{
				code: "green",
				img: "./Media & Images/blazer2.png",
			},
		],
	},
	{
		id: 4,
		title: "Crater",
		price: 513.33,
		colors: [
			{
				code: "black",
				img: "./Media & Images/crater.png",
			},
			{
				code: "lightgray",
				img: "./Media & Images/crater2.png",
			},
		],
	},
	{
		id: 5,
		title: "Hippie",
		price: 393.95,
		colors: [
			{
				code: "gray",
				img: "./Media & Images/hippie.png",
			},
			{
				code: "black",
				img: "./Media & Images/hippie2.png",
			},
		],
	},
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		//change the current slide
		wrapper.style.transform = `translateX(${-100 * index}vw)`;

		//change the choosen product
		choosenProduct = products[index];

		//change texts of currentProduct
		currentProductTitle.textContent = choosenProduct.title;
		currentProductPrice.textContent = "PLN " + choosenProduct.price;
		currentProductImg.src = choosenProduct.colors[0].img;

		//assing new colors
		currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = choosenProduct.colors[index].code;
		});
	});
});

currentProductColors.forEach((color, index) => {
	color.addEventListener("click", () => {
		currentProductImg.src = choosenProduct.colors[index].img;
	});
});

currentProductSizes.forEach((size, index) => {
	size.addEventListener("click", () => {
		currentProductSizes.forEach((size) => {
			size.style.backgroundColor = "white";
			size.style.color = "black";
		});
		size.style.backgroundColor = "black";
		size.style.color = "white";
	});
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
	payment.style.display = "flex";
});

close.addEventListener("click", () => {
	payment.style.display = "none";
});

// Znajdujemy elementy koszyka
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");
const total = document.querySelector(".total");

// Funkcja dodająca produkt do koszyka
function addToCart(title, price) {
	const item = document.createElement("li");
	item.classList.add("cart-item");
	item.innerHTML = `<span>${title}</span> - ${price} PLN`;
	cartItems.appendChild(item);

	// Aktualizujemy sumę
	updateTotal(price);
}

// Funkcja aktualizująca sumę w koszyku
function updateTotal(price) {
	const currentTotal = parseFloat(total.textContent.replace(" PLN", ""));
	total.textContent = (currentTotal + price).toFixed(2) + " PLN";
}

// Po kliknięciu przycisku "Kup teraz" dodajemy produkt do koszyka
const buyButtons = document.querySelectorAll(".buyButton");
buyButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const productContainer = button.closest(".sliderItem");
		const title = productContainer.querySelector(".sliderTitle").textContent;
		const price = parseFloat(
			productContainer.querySelector(".sliderPrice").textContent
		);
		addToCart(title, price);
	});
});

// Pokazywanie i ukrywanie koszyka po najechaniu na ikonę koszyka
cart.addEventListener("mouseenter", () => {
	cartItems.style.display = "block";
});

cart.addEventListener("mouseleave", () => {
	cartItems.style.display = "none";
});

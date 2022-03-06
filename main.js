/* Modal section */

let modal = document.querySelector(".js-modal");
let modalContainer = document.querySelector(".js-modal-container")

// Open modal
let buyTickets = document.querySelectorAll('.js-buy-ticket');
for (let element of buyTickets) {
    element.addEventListener('click', function () {
        modal.classList.add("modal--open")
    })
}

function closeModal() {
    modal.classList.remove("modal--open")
}

// Close modal with button
let closeButtonModal = document.querySelectorAll(".js-close-modal");
for (let element of closeButtonModal) {
    element.addEventListener('click', closeModal)
}

// Close modal without button
modal.addEventListener('click', closeModal)

// Stop Propagation
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

/* Menu button section */

let menuButton = document.querySelector(".header__menu-button");
let moreButton = document.querySelector(".nav li:last-child");
let header = document.querySelector("#header");

// Auto close when click children

let menuItems = document.querySelectorAll('.nav a[href*="#"]');
console.log(menuItems);
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function (e) {
        console.log(this);
        
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-nav');
        if (isParentMenu) {
            e.preventDefault();
        }
        else {
            header.style.height = null;
        }
    })
}

// Toggle menu with button
menuButton.addEventListener("click", function () {
    if (header.style.height == "auto") {
        header.style.height = null;

        // moreButton.innerHTML =
        //     `<a href="#">More</a>
        // <!-- Sub navigation -->
        // <ul class="sub-nav no-bullet">
        //     <li><a href="#">Merchandise</a></li>
        //     <li><a href="#">Extras</a></li>
        //     <li><a href="#">Media</a></li>
        //     </ul>`
    }
    else {
        header.style.height = "auto";

        // moreButton.innerHTML =
        //     `<a href="#">Merch</a>`
    }
})










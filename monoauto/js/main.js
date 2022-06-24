

// const MARKI = ["Audi", "BMW", "Chevrolet","Chrysler","Citroen","Dodge","Fiat","Ford","Geely","Haval","Honda","Hyundai","Kia","Lada","Land Rover","Lexus","Mazda","Mercedes-Benz","Mitsubishi","Nissan","Opel","Peugeot","Renault","Skoda","Subaru","Tesla","Toyota","Volkswagen","Volvo"]

console.log(42);

const openMenu = document.querySelector(".item-open-icon");
const openMenuList= document.querySelector(".open-menu-list");
console.log(openMenuList);

openMenu.addEventListener('click', () => {
  console.log('click')
  openMenuList.classList.toggle("open-menu-item-active")
})


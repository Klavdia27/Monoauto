

console.log(42);

//меню "еще"
const openMenu = document.querySelector(".item-open-icon");
const openMenuList= document.querySelector(".open-menu-list");
const navMenuList = ["Автосервисы", "Шиномонтаж", "Автомойки", 
"Детейлинг", "Тюнинг", "Кузовной & покраска", 
"Эвакуаторы", "Выездной сервис", 
"Автоподбор", "доп.услуги1"]

const navItems = document.querySelectorAll('.nav-header-item');

openMenu.addEventListener('click', () => {
  openMenuList.classList.toggle("open-menu-item-active");
});

if (navItems.length >= 11) {
  for(let i = 9; i<= navItems.length-1; i++) {
    navItems[i].classList.add('disable');
    let openMenuListItem = document.querySelector('.open-menu-list-items');
    let li = document.createElement('li');
    li.innerHTML = `${navMenuList[i-1]}`
    li.classList.add('open-menu-item')
    openMenuListItem.appendChild(li)
  }
  document.getElementById('also-nav-item').classList.add('active') 

}




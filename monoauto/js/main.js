const ALLMARKS = [
  {
    marka: "Acura", 
    countServise: 23,
  },
  {
    marka: "Alfa Romeo", 
    countServise: 3,
  },
  {
    marka: "Audi", 
    countServise: 19,
  },
  {
    marka: "Bentley", 
    countServise: 22,
  },
  {
    marka: "BMW", 
    countServise: 3,
  },
  {
    marka: "Buick", 
    countServise: 34,
  },
  {
    marka: "BYD", 
    countServise: 45,
  },
  {
    marka: "Cadillac", 
    countServise: 23,
  },
  {
    marka: "Changan", 
    countServise: 3,
  },
  {
    marka: "Chery", 
    countServise: 19,
  },
  {
    marka: "Chevrolet", 
    countServise: 22,
  },
  {
    marka: "Chrysler", 
    countServise: 3,
  },
  {
    marka: "Citroen", 
    countServise: 34,
  },
  {
    marka: "Dacia", 
    countServise: 45,
  },
  {
    marka: "Daewoo", 
    countServise: 34,
  },
  {
    marka: "Daihatsu", 
    countServise: 45,
  },
  {
    marka: "Datsun", 
    countServise: 23,
  },
  {
    marka: "Dodge", 
    countServise: 3,
  },
  {
    marka: "Dongfeng", 
    countServise: 19,
  },
  {
    marka: "Fiat", 
    countServise: 22,
  },
  {
    marka: "Ford", 
    countServise: 3,
  },
  {
    marka: "Geely", 
    countServise: 34,
  },
  {
    marka: "Genesis", 
    countServise: 45,
  },
  {
    marka: "GMC", 
    countServise: 23,
  },
  {
    marka: "Great Wall", 
    countServise: 3,
  },
  {
    marka: "Haval", 
    countServise: 19,
  },
  {
    marka: "Honda", 
    countServise: 22,
  },
  {
    marka: "Hummer", 
    countServise: 3,
  },
  {
    marka: "Hyundai", 
    countServise: 34,
  },
  {
    marka: "Infiniti", 
    countServise: 45,
  },
  {
    marka: "Iran Khodro", 
    countServise: 34,
  },
  {
    marka: "Isuzu", 
    countServise: 45,
  },
  {
    marka: "JAC", 
    countServise: 45,
  },
  {
    marka: "Jaguar", 
    countServise: 34,
  },
  {
    marka: "Jeep", 
    countServise: 45,
  },
  {
    marka: "Kia", 
    countServise: 45,
  },
  {
    marka: "LADA", 
    countServise: 34,
  },
  {
    marka: "Lancia", 
    countServise: 45,
  },
  {
    marka: "Land Rover", 
    countServise: 45,
  },
  {
    marka: "Lexus", 
    countServise: 34,
  },
  {
    marka: "Lifan", 
    countServise: 45,
  },
  {
    marka: "Lincoln", 
    countServise: 45,
  },
  {
    marka: "Maserati", 
    countServise: 34,
  },
  {
    marka: "Mazda", 
    countServise: 45,
  },
  {
    marka: "Mercedes-Benz", 
    countServise: 45,
  },
  {
    marka: "Mercury", 
    countServise: 45,
  },
  {
    marka: "MG", 
    countServise: 45,
  },
  {
    marka: "MINI", 
    countServise: 45,
  },
  {
    marka: "Mitsubishi", 
    countServise: 45,
  },
  {
    marka: "Nissan", 
    countServise: 45,
  },
  {
    marka: "Opel", 
    countServise: 45,
  },
  {
    marka: "Peugeot", 
    countServise: 45,
  },
  {
    marka: "Plymouth", 
    countServise: 45,
  },
  {
    marka: "Pontiac", 
    countServise: 45,
  },
  {
    marka: "Porsche", 
    countServise: 45,
  },
  {
    marka: "Proton", 
    countServise: 45,
  },
  {
    marka: "Ravon", 
    countServise: 45,
  },
  {
    marka: "Renault", 
    countServise: 45,
  },
  {
    marka: "Rover", 
    countServise: 45,
  },
  {
    marka: "Saab", 
    countServise: 45,
  },
  {
    marka: "Saturn", 
    countServise: 45,
  },
  {
    marka: "Scion", 
    countServise: 45,
  },
  {
    marka: "SEAT", 
    countServise: 45,
  },
  {
    marka: "Skoda", 
    countServise: 45,
  },
  {
    marka: "Smart", 
    countServise: 45,
  },
  {
    marka: "SsangYong", 
    countServise: 45,
  },
  {
    marka: "Subaru", 
    countServise: 45,
  },
  {
    marka: "Suzuki", 
    countServise: 45,
  },
  {
    marka: "Tesla", 
    countServise: 45,
  },
  {
    marka: "Toyota", 
    countServise: 45,
  },
  {
    marka: "Volkswagen", 
    countServise: 45,
  },
  {
    marka: "Volvo", 
    countServise: 45,
  },
  {
    marka: "Zotye", 
    countServise: 45,
  },
  {
    marka: "ГАЗ", 
    countServise: 45,
  },
  {
    marka: "УАЗ", 
    countServise: 45,
  },
  {
    marka: "Эксклюзив", 
    countServise: 45,
  },
]

console.log(42);



// открытие всех марок авто
const btnAllMarks = document.querySelector('.all-item-auto');
const marks = document.querySelector('.items-auto');
const allMarks = document.querySelector('.items-auto-all');
const bntDisable = document.querySelector('.btn-disable');

btnAllMarks.addEventListener('click', () => {
openAllMarks();  
})
let ulAutoAll = document.querySelectorAll('.item-auto-all')

function openAllMarks() {
  marks.classList.add('disable'); 
  allMarks.classList.remove('items-auto-all')
  let y = 0; 
  ulAutoAll.forEach((elem) => {
    for (let i = 1; i <= 16; i++) {
      let li = document.createElement('li');
      li.innerHTML = `${ALLMARKS[y+i-1].marka} <span class="auto-count-servise">${ALLMARKS[y+i-1].countServise}</span>`;
      elem.appendChild(li);
    }
    y=y+16;
  });
}
bntDisable.addEventListener('click', () => {
  closeAllMarks();
})

function closeAllMarks() {
  console.log('disable')
  allMarks.classList.add('items-auto-all');
  marks.classList.remove('disable');
}

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
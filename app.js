const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHa3HzKbZZ_46VYs1OCOrlGHpvQj6Lj7mC5G1Fk1ydQ&s",
    desc: `Chicken noodle soup, serving with <br> vegetables such as soy bean, green onion.<br> In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:"https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc:`Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let buttonDOM = document.querySelector(".btn-container");
let alBut = [ 'Menu','All', 'Korea', 'Japan', 'China'];



alBut.forEach((currentValue, index) => {
  let buttons =document.createElement('button');
  buttons.id = currentValue
  buttons.innerText = currentValue
  buttons.classList = 'btn-item btn btn-outline-dark d-inline'
  
  const butonsLoc = document.querySelector(".btn-container")
  butonsLoc.appendChild(buttons)
});
let ShowBut = document.querySelector('#Menu').addEventListener('click',click);
let allBtn = document.querySelector('#All').addEventListener('click',click)
let KoreaBtn = document.querySelector('#Korea').addEventListener('click',click)
let JapanBtn = document.querySelector('#Japan').addEventListener('click',click)
let ChinaBtn = document.querySelector('#China').addEventListener('click',click)

function array(Name) {
     Name.map(index => {
      let menuDOM = document.querySelector('.section-center') 

      let divGeneral = document.createElement('div');
      divGeneral.classList = 'menu-items col-lg-6 col-sm-12';
      menuDOM.appendChild(divGeneral);

      let img = document.createElement('img')
      img.classList = 'photo';
      img.src = index.img;
      divGeneral.appendChild(img);

      let divInfo =document.createElement('div');
      divInfo.classList = 'menu-info';
      divGeneral.appendChild(divInfo);

      let divTitle = document.createElement('div');
      divTitle.classList = 'menu-title';
      divInfo.appendChild(divTitle);

      let tiTle = document.createElement('h4');
      let price = document.createElement('h4');
      tiTle.innerHTML =index.title;

      price.classList = 'price';
      price.innerHTML = index.price;
      divTitle.appendChild(tiTle);
      divTitle.appendChild(price);

      let divText =document.createElement('div');
      divText.classList = 'menu-text';
      divText.innerHTML = index.desc;
      divInfo.appendChild(divText)
     });
} 

let grup = 'category';
sorting = menu.reduce((acc,menuElemanı) => {
  let key = menuElemanı[grup];

  if (!acc[key]){
    acc[key] = []
  }
  acc[key].push(menuElemanı);
  return acc;
}, ["#All"])


let section = document.querySelector(".section-center")
function click() {
    while(section.hasChildNodes()){
      section.removeChild(section.firstChild)
    };
    if(this.id == 'All'){
      array(menu)
    }else if(this.id == 'Korea'){
      array(sorting.Korea)
    }else if(this.id == 'Japan'){
      array(sorting.Japan)
    }else if(this.id == 'China'){
      array(sorting.China)
    }else if (this.id == 'Menu'){
      array(menu)
    }
}
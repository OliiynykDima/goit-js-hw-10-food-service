import css from "./css/style.css";
import menuTemp from "./templates/menu.hbs";
import menuDB from "./data-bases/menu.json";

const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const menu = document.querySelector('.menu');

insertElement(menuTemp, menuDB, menu);
function insertElement(template, data, place){
  const elem = template(data);
  place.insertAdjacentHTML("beforeend", elem);
}

sessionStorage.setItem('theme', 'day');

function swap(){
  if(sessionStorage.getItem('theme') === 'day'){
    document.body.style.backgroundColor = 'gray';
    sessionStorage.setItem('theme', 'night');
  }
  else if(sessionStorage.getItem('theme') === 'night'){

    document.body.style.backgroundColor = 'white';
    sessionStorage.setItem('theme', 'day');
  }
}

themeSwitchToggle.addEventListener('click', swap);




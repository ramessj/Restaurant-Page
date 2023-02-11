let container = document.getElementById("container");





let header = document.createElement('div');
header.classList.add('header');

let headerHome =document.createElement('div');
headerHome.classList.add('headerHome');
headerHome.classList.add('headerSelected');
headerHome.innerHTML = '<p>Inicio</p>'
header.appendChild(headerHome);

let headerMenu = document.createElement('div');
headerMenu.classList.add('headerMenu');
headerMenu.innerHTML = '<p>Menú<p>'
header.appendChild(headerMenu);

let headerContacto = document.createElement('div');
headerContacto.classList.add('headerContacto');
headerContacto.innerHTML = '<p>Contacto</p>';
header.appendChild(headerContacto)



container.prepend(header)




// INDEX CONTENT

let showHome = ()=>{
 
  container.innerHTML = '';
  container.prepend(header);
  clearHeader();
  
 
headerHome.classList.add('headerSelected')



let contentIndex = document.createElement('div');
contentIndex.classList.add('contentIndex');
contentIndex.setAttribute('id', 'contentIndex');

contentIndex.innerHTML = `<p class="bienvenidos">Bienvenidos</p>
<p class="matadero">El Matadero</p>
<button type="button" class="buttonMenu" id="buttonMenuOnIndex">Ver el Menú</button>`;


container.append(contentIndex)
container.append(footer)
 let buttonMenuOnIndex = document.getElementById('buttonMenuOnIndex')
 buttonMenuOnIndex.addEventListener('click', showMenu)



}

headerHome.addEventListener('click', showHome);








// MENU CONTENT

let showMenu = ()=>{


container.innerHTML = '';
container.prepend(header);
clearHeader()
headerMenu.classList.add('headerSelected')


let contentMenu = document.createElement('div');
contentMenu.classList.add('contentMenu');
contentMenu.setAttribute('id', 'contentMenu');

contentMenu.innerHTML = `<div class="contentMenu">
<div class="menuItem" id="menuItem1">
    <img class="menuImg" src="/src/img/asado-tira.jpg" alt="Asado de Tira">
    <p class="menuText">Asado de Tira &bull; <span class="menuPrice">$550</span></p>
</div>
<div class="menuItem" id="menuItem2">
    <img class="menuImg" src="/src/img/chorizo.jpg" alt="Chorizo">
    <p class="menuText">Chorizo &bull; <span class="menuPrice">$350</span></p>
</div>
<div class="menuItem" id="menuItem3">
    <img class="menuImg" src="/src/img/colita-cuadril.jpg" alt="Colita de Cuadril">
    <p class="menuText">Colita de cuadril &bull; <span class="menuPrice">$650</span></p>
</div>
<div class="menuItem" id="menuItem4">
    <img class="menuImg" src="/src/img/Cordero.jpg" alt="Cordero">
    <p class="menuText">Cordero &bull; <span class="menuPrice">$400</span></p>
</div>
<div class="menuItem" id="menuItem5">
    <img class="menuImg" src="/src/img/entrecote.jpg" alt="Entrecote">
    <p class="menuText">Entrecote &bull; <span class="menuPrice">$790</span></p>
</div>
<div class="menuItem" id="menuItem6">
    <img class="menuImg" src="/src/img/pamplona.jpg" alt="Pamplona">
    <p class="menuText">Pamplona &bull; <span class="menuPrice">$470</span></p>
</div>
<div class="menuItem" id="menuItem7">
  <img class="menuImg" src="/src/img/hamburguesa.jpg" alt="Hamburguesa">
  <p class="menuText">Hamburguesa &bull; <span class="menuPrice">$420</span></p>
</div>
<div class="menuItem" id="menuItem8">
  <img class="menuImg" src="/src/img/panchos.jpg" alt="Pancho">
  <p class="menuText">Panchos &bull; <span class="menuPrice">$330</span></p>
</div>
</div>`;


container.append(contentMenu)
container.append(footer)

}

headerMenu.addEventListener('click', showMenu);








//  FOOTER
let footer = document.createElement('footer');
footer.classList.add('footer');
footer.setAttribute('id', 'footer')
footer.innerHTML = `<p>
  Creado por
  <a href="https://github.com/ramessj" target="blank">Ramiro Quesada</a>
  • Hosteado en
  <a href="https://github.com/ramessj/Restaurant-Page" target="blank">GitHub</a>
</p>`;

container.append(footer);





// funcion para eliminar la clase de todos los elementos del header

let clearHeader = ()=>{

headerHome.classList.remove('headerSelected');
headerMenu.classList.remove('headerSelected')
headerContacto.classList.remove('headerSelected')




}






//showHome()
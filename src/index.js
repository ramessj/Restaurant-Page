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

let contentIndex = document.createElement('div');
contentIndex.classList.add('contentIndex');
contentIndex.setAttribute('id', 'contentIndex');

contentIndex.innerHTML = `<p class="bienvenidos">Bienvenidos</p>
<p class="matadero">El Matadero</p>
<button type="button" class="buttonMenu">Ver el Menú</button>`;

//container.append(contentIndex)



// MENU CONTENT


let contentMenu = document.createElement('div');
contentMenu.classList.add('contentMenu');
contentMenu.setAttribute('id', 'contentMenu');

contentMenu.innerHTML = `<p class="bienvenidos">Bienvenidos</p>
<p class="matadero">El Matadero</p>
<button type="button" class="buttonMenu">Ver el Menú</button>`;


//container.append(contentMenu)




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
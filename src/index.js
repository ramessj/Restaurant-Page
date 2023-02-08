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

let headerAbout = document.createElement('div');
headerAbout.classList.add('headerAbout');
headerAbout.innerHTML = '<p>Contacto</p>';
header.appendChild(headerAbout)



container.append(header)




// INDEX CONTENT

let content = document.createElement('div');
content.classList.add('content');
content.setAttribute('id', 'content');

content.innerHTML = `<p class="bienvenidos">Bienvenidos</p>
<p class="matadero">El Matadero</p>
<button type="button" class="buttonMenu">Ver el Menú</button>`

container.append(content)





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
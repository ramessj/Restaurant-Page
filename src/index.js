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
headerMenu.innerHTML = '<p>Menu<p>'
header.appendChild(headerMenu);

let headerAbout = document.createElement('div');
headerAbout.classList.add('headerAbout');
headerAbout.innerHTML = '<p>Sobre Nosotros</p>';
header.appendChild(headerAbout)



container.append(header)

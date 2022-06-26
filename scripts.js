const cards = [
    {
        titulo: 'Zero to Hero in CSS by Styling a Website from Scratch',
        idioma: 'English',
        fecha: ' 2020 - ',
        curso: 'CSS',
        duracion: ' - 6hr 17min',
        maestro: 'Jad Khalili, ',
        plataforma: 'Udemy',
        puntuacion: '<i class="fa-solid fa-star"></i> 4.6',
        imagen: 'https://img-c.udemycdn.com/course/240x135/2089476_55a6.jpg',
    },
    {
        titulo: 'Curso Gratis de Programación Básica',
        idioma: 'Español',
        fecha: ' 2018 - ',
        curso: 'JS',
        duracion: ' - 10hr 12min',
        maestro: 'Freddy Vega, ',
        plataforma: 'Platzi',
        puntuacion: '<i class="fa-solid fa-star"></i> 5.0',
        imagen: 'https://i.ytimg.com/vi_webp/C7NLf7K7hLA/maxresdefault.webp',
    },
    {
        titulo: 'Curso para crear mi primera página web',
        idioma: 'Español',
        fecha: ' 2019 - ',
        curso: 'JS',
        duracion: ' - 4hr 06min',
        maestro: 'Álvaro Felipe, Alexys Lozada & Beto Quiroga, ',
        plataforma: 'EDteam',
        puntuacion: '<i class="fa-solid fa-star"></i> 4.8',
        imagen: 'https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F67b29fbd-3297-44a0-a5c4-b2405424af34.png&w=1920&q=75',
    },
    {
        titulo: 'Curso Profesional de Git y GitHub',
        idioma: 'Español',
        fecha: ' 2019 - ',
        curso: 'GIT',
        duracion: ' - 6hr 13min',
        maestro: 'Freddy Vega, ',
        plataforma: 'Platzi',
        puntuacion: '<i class="fa-solid fa-star"></i> 5.0',
        imagen: 'https://i.ytimg.com/vi/DinilgacaWs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5oB_dMC6EBQJIfysYueg47q2h3g',
    },
    {
        titulo: 'Programación desde cero',
        idioma: 'Español',
        fecha: ' 2019 - ',
        curso: 'HTML',
        duracion: ' - 2hr 36min',
        maestro: 'Uriel Hernández, ',
        plataforma: 'CódigoFacilito',
        puntuacion: '<i class="fa-solid fa-star"></i> 4.6',
        imagen: 'https://i.ytimg.com/vi_webp/x0aur0kdGOo/sddefault.webp',
    }
];

const container = document.getElementById('list__container');

cards.forEach((e) => {
    const card = document.createElement('div');
    //
    const img = document.createElement('img');
    //
    const info = document.createElement('div');

    const title = document.createElement('h3');

    const bodys = document.createElement('section');
    const lang = document.createElement('b');
    const date = document.createElement('span');
    const tech = document.createElement('span');
    const time = document.createElement('span');

    const footer = document.createElement('footer');
    const teacher = document.createElement('span');
    const site = document.createElement('span');
    //
    const stars = document.createElement('h3');

    card.appendChild(img);

    info.appendChild(title);
    bodys.appendChild(lang);
    bodys.appendChild(date);
    bodys.appendChild(tech);
    bodys.appendChild(time);
    info.appendChild(bodys);
    footer.appendChild(teacher);
    footer.appendChild(site);
    info.appendChild(footer);
    card.appendChild(info);

    card.appendChild(stars);
    container.appendChild(card);

    card.className = 'card';
    img.className = 'card__img';
    info.className = 'card__info';
    bodys.className = 'card__bodys';
    title.className = 'card__title';
    lang.className = 'card__lang';
    date.className = 'card__span';
    tech.className = 'card__span';
    time.className = 'card__span';
    footer.className = 'card__footer';
    teacher.className = 'card__span';
    site.className = 'card__span';
    stars.className = 'card__stars';

    img.src = e.imagen;
    title.innerHTML = e.titulo;
    lang.innerHTML = e.idioma;
    date.innerHTML = e.fecha;
    tech.innerHTML = e.curso;
    time.innerHTML = e.duracion;
    teacher.innerHTML = e.maestro;
    site.innerHTML = e.plataforma;
    stars.innerHTML = e.puntuacion;
    console.log(card);
});

const idiomaSelect = document.getElementById('idioma');
const cursoSelect = document.getElementById('curso');
const plataformaSelect = document.getElementById('plataforma');
const estrellasSelect = document.getElementById('estrellas');

function filtrar() {
    let newCards = cards;

    if (idiomaSelect.value != 0) {
        newCards = newCards.filter(e => e.idioma == idiomaSelect.value);
        console.log(newCards);
    }

    if (cursoSelect.value != 0) {
        newCards = newCards.filter(e => e.curso == cursoSelect.value);
        console.log(newCards);
    }

    if (plataformaSelect.value != 0) {
        newCards = newCards.filter(e => e.plataforma == plataformaSelect.value);
        console.log(newCards);
    }

    while (container.firstChild) {
        // Eliminar los nodos hijos de container
        container.removeChild(container.firstChild);
    }

    newCards.forEach((e) => {
        const card = document.createElement('div');
        //
        const img = document.createElement('img');
        //
        const info = document.createElement('div');
    
        const title = document.createElement('h3');
    
        const bodys = document.createElement('section');
        const lang = document.createElement('b');
        const date = document.createElement('span');
        const tech = document.createElement('span');
        const time = document.createElement('span');
    
        const footer = document.createElement('footer');
        const teacher = document.createElement('span');
        const site = document.createElement('span');
        //
        const stars = document.createElement('h3');
    
        card.appendChild(img);
    
        info.appendChild(title);
        bodys.appendChild(lang);
        bodys.appendChild(date);
        bodys.appendChild(tech);
        bodys.appendChild(time);
        info.appendChild(bodys);
        footer.appendChild(teacher);
        footer.appendChild(site);
        info.appendChild(footer);
        card.appendChild(info);
    
        card.appendChild(stars);
        container.appendChild(card);
    
        card.className = 'card';
        img.className = 'card__img';
        info.className = 'card__info';
        bodys.className = 'card__bodys';
        title.className = 'card__title';
        lang.className = 'card__lang';
        date.className = 'card__span';
        tech.className = 'card__span';
        time.className = 'card__span';
        footer.className = 'card__footer';
        teacher.className = 'card__span';
        site.className = 'card__span';
        stars.className = 'card__stars';
    
        img.src = e.imagen;
        title.innerHTML = e.titulo;
        lang.innerHTML = e.idioma;
        date.innerHTML = e.fecha;
        tech.innerHTML = e.curso;
        time.innerHTML = e.duracion;
        teacher.innerHTML = e.maestro;
        site.innerHTML = e.plataforma;
        stars.innerHTML = e.puntuacion;
        console.log(card);
    });
}

const svg = document.getElementById('svg');
// efecto parallax


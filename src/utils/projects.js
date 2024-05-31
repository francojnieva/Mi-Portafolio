
import IconJS from '../components/Technologies/assets/js.svg'
import IconReact from '../components/Technologies/assets/react.svg'
import IconNode from '../components/Technologies/assets/node.svg'
import IconTailwind from '../components/Technologies/assets/tailwind.svg'
import IconHtml from '../components/Technologies/assets/html.svg'
import IconTrello from '../components/Technologies/assets/trello.svg'
import IconGit from '../components/Technologies/assets/git.svg'
import IconGitHub from '../components/Technologies/assets/github.svg'
import IconExpress from '../components/Technologies/assets/express.js.svg'
import IconMongoDB from '../components/Technologies/assets/mongo-db.png'
import IconFirebase from '../components/Technologies/assets/firebase-.svg'


export const projects = [
    {
        name: 'Clon Spotify Web',
        description: 'Este proyecto es un clon de la versión web de Spotify, desarrollado con React.js y Tailwind CSS. Utiliza la API web proporcionada por Spotify para obtener datos como artistas populares, álbumes populares, canciones y más.',
        image: './assets/spotify.png',
        textAlt: 'imagen de portada del Clon Spotify Web',
        titleImg: 'Clon Spotify Web',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/Clon-Spotify.git'
    },
    {
        name: 'Royal',
        description:'Proyecto Final realizado en el curso de React JS en Coder House. Este e-commerce muestra una gran variedad de relojes. Utiliza Firebase Firestore como base de datos para almacenar y recuperar información sobre los productos.',
        image: './assets/royal.png',
        textAlt: 'imagen de portada de royal',
        titleImg: 'Royal',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconFirebase,
        ],
        repo: 'https://github.com/francojnieva/Royal-ecommerce.git'
    },
    {
        name: 'MotoFly',
        description: 'E-commerce desarrollado por 5 integrantes durante el curso en Rolling Code School. Además del stack MERN, usamos Git para controlar versiones de código, Trello para gestionar tareas y SCRUM como marco de trabajo ágil.',
        image: './assets/motofly.png',
        textAlt: 'imagen de portada de MotoFly',
        titleImg: 'MotoFly',
        technologies: [
            IconReact,
            IconNode,
            IconExpress,
            IconMongoDB,
        ],
        repo: 'https://github.com/ErikaCV/proyecto-final.git'
    },
    {
        name: 'Movie Pulse',
        description: 'Aplicación que permite a los usuarios crear cuentas, iniciar sesión, explorar información sobre las películas y agregarlas a favoritos. Desarrollada por un equipo multidisciplinario durante la simulación laboral en No Country.',
        image: './assets/movie-pulse.png',
        textAlt: 'imagen de portada de Movie Pulse',
        titleImg: 'Movie Pulse',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconTrello,
        ],
        repo: 'https://github.com/No-Country/C16-39-m-java.git'
    },
    {
        name: 'Salud Integral Psi',
        description: 'Desarrollado para un equipo interdisciplinario en el Área de Salud y Salud Mental en el Sistema público y privado. Asesoran y capacitan en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial.',
        image: './assets/salud-integral.png',
        textAlt: 'imagen de portada del proyecto Salud Integral Psi',
        titleImg: 'Salud Integral Psi',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/Salud-Integral-Psi.git'
    },
    {
        name: 'Clon Netflix',
        description: 'Proyecto realizado con el propósito de recrear la página principal y de inicio de sesión de Netflix con Tailwind CSS. Además de poder visualizar el sitio en dispositivos grandes, tambíen puede verse en dispositivos móviles y tablets.',
        image: './assets/clon-netflix.png',
        textAlt: 'imagen de portada del proyecto Clon Netflix',
        titleImg: 'Clon Netflix',
        technologies: [
            IconHtml,
            IconTailwind,
            IconGit,
            IconJS,
        ],
        repo: 'https://github.com/francojnieva/Clon-Netflix.git'
    },
]
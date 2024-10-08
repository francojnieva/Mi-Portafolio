import IconReact from '../assets/react.svg'
import IconNode from '../assets/node.svg'
import IconTailwind from '../assets/tailwind.svg'
import IconGit from '../assets/git.svg'
import IconGitHub from '../assets/github.svg'
import IconExpress from '../assets/express.js.svg'
import IconMongoDB from '../assets/mongo-db.png'
import IconFirebase from '../assets/firebase-.svg'
import IconVercel from '../assets/vercel.png'
import IconTS from '../assets/typescript.svg'
import ImageClonSpotify from '../components/Projects/assets/clon-spotify.png'
import ImageRoyal from '../components/Projects/assets/royal.png'
import ImageCabronn from '../components/Projects/assets/cabron.png'
import IconPostman from '../assets/postman.png'


export const projects = [
    {
        name: 'Cabrón Delivery',
        description: 'Aplicación diseñada para ofrecer una experiencia intuitiva y ágil. Permite a los usuarios registrarse, gestionar perfil y realizar pedidos seleccionando su método de pago preferido. Los administradores tienen control total sobre la gestión de productos y usuarios.',
        image: ImageCabronn,
        textAlt: 'imagen de portada del Cabron delivery',
        titleImg: 'Cabrón Delivery',
        technologies: [
            IconReact,
            IconTS,
            IconNode,
            IconExpress,
            IconMongoDB,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconPostman,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Cabron-delivery-Frontend.git',
        demo: 'https://cabrondelivery.vercel.app/'
    },
    {
        name: 'Clon Spotify Web',
        description: 'Este proyecto es un clon de la versión web de Spotify, desarrollado con React JS y Tailwind CSS. Utiliza la API web proporcionada por Spotify para obtener datos como artistas populares, álbumes populares, canciones y muchos más.',
        image: ImageClonSpotify,
        textAlt: 'imagen de portada del Clon Spotify Web',
        titleImg: 'Clon Spotify Web',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Clon-Spotify.git',
        demo: 'https://clon-spotify-byfranconieva.vercel.app'
    },
    {
        name: 'Royal',
        description:'Proyecto final realizado en el curso de React JS en CoderHouse. Este e-commerce muestra una gran variedad de relojes. Utiliza Firebase como base de datos para almacenar y recuperar información sobre los productos. Proyecto destacado de la comisión.',
        image: ImageRoyal,
        textAlt: 'imagen de portada de royal',
        titleImg: 'Royal',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconFirebase,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Royal-ecommerce.git',
        demo: 'https://royal-relojes.vercel.app/'
    },
]
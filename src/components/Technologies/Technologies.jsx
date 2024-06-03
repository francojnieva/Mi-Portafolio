import React from 'react'
import CardTechnology from '../CardTechnology/CardTechnology'
import IconJS from './assets/js.svg'
import IconReact from './assets/react.svg'
import IconTS from './assets/ts.svg'
import IconNode from './assets/node.svg'
import IconTailwind from './assets/tailwind.svg'
import IconBootstrap from './assets/bootstrap.svg'
import IconHtml from './assets/html.svg'
import IconCss from './assets/css.svg'
import IconTrello from './assets/trello.svg'
import IconGit from './assets/git.svg'
import IconGitHub from './assets/github.svg'
import IconScrum from './assets/scrum.png'
import IconExpress from './assets/express.js.svg'
import IconMongoDB from './assets/mongo-db.png'
import IconPostman from './assets/postman.png'
import IconFirebase from './assets/firebase-.svg'

const Technologies = () => {
    return (
        <section id='hability' className='px-6 pt-20 lg:pt-0 lg:w-[85%] lg:mx-auto lg:px-0'>
            <h2 className='text-4xl font-bold text-center text-[#8c8f8f] py-3 lg:text-5xl'>Habilidades y Conocimientos</h2>
            <section className='py-8 grid items-center grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 lg:py-12'>
                <CardTechnology
                    icon={IconReact}
                    name='React JS'
                />
                <CardTechnology
                    icon={IconJS}
                    name='JavaScript' 
                />
                <CardTechnology
                    icon={IconTailwind}
                    name='Tailwind CSS' 
                />
                <CardTechnology
                    icon={IconGit}
                    name='Git' 
                />
                <CardTechnology
                    icon={IconGitHub}
                    name='GitHub'
                />
                <CardTechnology
                    icon={IconNode}
                    name='Node JS' 
                />
                <CardTechnology
                    icon={IconTS}
                    name='TypeScript' 
                />
                <CardTechnology
                    icon={IconBootstrap}
                    name='Bootstrap' 
                />
                <CardTechnology
                    icon={IconExpress}
                    name='Express JS'
                />
                <CardTechnology
                    icon={IconMongoDB}
                    name='Mongo DB'
                />
                <CardTechnology
                    icon={IconHtml}
                    name='HTML5' 
                />
                <CardTechnology
                    icon={IconCss}
                    name='CSS3' 
                />
                <CardTechnology
                    icon={IconPostman}
                    name='Postman' 
                />
                <CardTechnology
                    icon={IconFirebase}
                    name='Firebase' 
                />
                <CardTechnology
                    icon={IconTrello}
                    name='Trello' 
                />
                <CardTechnology
                    icon={IconScrum}
                    name='Scrum' 
                />
            </section>
        </section>
    )
}

export default Technologies
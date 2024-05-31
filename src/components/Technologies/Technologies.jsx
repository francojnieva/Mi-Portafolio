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

const Technologies = () => {
    return (
        <section className='pt-20 px-6 lg:w-[85%] lg:mx-auto lg:px-0'>
            <h2 className='text-3xl font-medium text-center bg-gradient-to-r from-[#3cd8ff] to-[#fff] bg-clip-text text-transparent md:text-4xl md:py-3 lg:text-5xl'>Tecnologías</h2>
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
                    icon={IconNode}
                    name='Node JS' 
                />
                <CardTechnology
                    icon={IconTS}
                    name='TypeScript' 
                />
                <CardTechnology
                    icon={IconTailwind}
                    name='Tailwind' 
                />
                <CardTechnology
                    icon={IconBootstrap}
                    name='Bootstrap' 
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
                    icon={IconHtml}
                    name='HTML5' 
                />
                <CardTechnology
                    icon={IconCss}
                    name='CSS3' 
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
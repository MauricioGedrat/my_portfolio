import React from 'react'
import Mash from '../../assets/Mash.jpg'

const Card = () => {
    return (
        <figure
            className="md:flex bg-gray-100 rounded-xl overflow-hidden p-8 md:p-0 max-w-4xl m-auto shadow-lg mb-20"
            data-aos="zoom-in"
        >
            <img
                className="w-32 h-32 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto"
                src={Mash.src}
                alt="Gato"
                width="384"
                height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <h1 className="text-2xl font-semibold mb-2">
                        Desenvolvedor FontEnd
                    </h1>
                    <p className="text-lg font-semibold mb-2">
                        Especialidades: HTML, CSS flexbox, CSS grid, CSS
                        tailwind, JavaScript and Next.js
                    </p>

                    <p className="text-lg font-semibold">
                        Sobre mim: Eu sou um desenvolvedor frontend com 13 anos
                        de idade, meu nome é Mauricio Gedrat e tenho cerca de 1
                        ano de expêriencia nesta área
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-blue-400">Maurício Gedrat</div>
                    <div className="text-gray-500">
                        FronEnd developer, Scalar ERP
                    </div>
                    <div className="text-gray-500">
                        Meu professor: André Rafael, Origamid
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card

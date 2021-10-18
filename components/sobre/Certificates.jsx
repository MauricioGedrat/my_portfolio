import React from 'react'
import Img1 from '../../assets/Certificados/certificadoBootstrap.png'
import Img2 from '../../assets/Certificados/certificadoFlexbox.png'
import Img3 from '../../assets/Certificados/certificadoGrid.png'
import Img4 from '../../assets/Certificados/certificadoJS.png'
import Img5 from '../../assets/Certificados/certificadoReact.png'

const products = [
    {
        id: 1,
        name: 'Bootstrap',
        href: 'https://www.origamid.com/certificate/7624e3ec/',

        imageSrc: Img1,
        imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Flexbox',
        href: 'https://www.origamid.com/certificate/c9b4173a/',

        imageSrc: Img2,
        imageAlt:
            'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Grid',
        href: 'https://www.origamid.com/certificate/a0c6840a/',

        imageSrc: Img3,
        imageAlt:
            'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'JavaScript',
        href: 'https://www.origamid.com/certificate/61f0a05f/',

        imageSrc: Img4,
        imageAlt:
            'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'React',
        href: 'https://www.origamid.com/certificate/3e0b0fcc/',

        imageSrc: Img5,
        imageAlt:
            'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

const Certificates = () => {
    return (
        <div className="bg-white " data-aos="zoom-in">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div className="justify-center flex">
                    <h1 className="uppercase text-blue-400 font-semibold m-10 text-xl">
                        Veja meus certificados
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a
                            key={product.id}
                            href={product.href}
                            className="group"
                        >
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc.src}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75 "
                                />
                            </div>
                            <h3 className="mt-4 text-md font-semibold text-gray-700">
                                {product.name}
                            </h3>
                            <p className="mt-1 text-lg font-medium text-gray-900"></p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certificates

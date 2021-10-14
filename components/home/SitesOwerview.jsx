/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Caravan',
        href: 'https://caravan-brown.vercel.app/',

        imageSrc:
            'https://www.origamid.com/wp-content/uploads/2017/11/caravan.jpg',
        imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Wildbeast',
        href: 'https://www.origamid.com/projetos/wildbeast/',

        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr0B8RQVZyUWqtZFMNJ082kmq0DCk1-K_phyTAX4VIPGkONGbGO75E8A0h-ZiX2kgx2c&usqp=CAU',
        imageAlt:
            'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Flexblog',
        href: 'https://www.origamid.com/projetos/flexblog/',

        imageSrc:
            'data:image/jpeg;base64,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',
        imageAlt:
            'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Animais Fantásticos',
        href: 'https://origamid.github.io/animais-fantasticos/',

        imageSrc:
            'data:image/jpeg;base64,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',
        imageAlt:
            'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Owerview() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div className="justify-center flex">
                    <h1 className="uppercase text-blue-400 font-semibold m-10 text-xl">
                        Veja os sites que eu fiz com ajuda da origamid
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
                                    src={product.imageSrc}
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

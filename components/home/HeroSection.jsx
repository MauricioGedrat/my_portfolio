/* This example requires Tailwind CSS v2.0+ */

import JsSvg from './../SvgIcons/JsSvg'
import CssSvg from './../SvgIcons/Css'
import BootstrapSvg from './../SvgIcons/Bootstrap'
import ReactSvg from './../SvgIcons/React'
import NextSvg from './../SvgIcons/Next'
import HtmlSvg from './../SvgIcons/Html'
import GitSvg from './../SvgIcons/Git'
import TailwindSvg from './../SvgIcons/SvgTailwind'
const size = 50

const features = [
    {
        name: 'JavaScript',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <JsSvg size={size} color="#F7DF1E" />,
    },
    {
        name: 'CSS3',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <CssSvg size={size} color="#1572B6" />,
    },
    {
        name: 'CSS Tailwind',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <TailwindSvg size={size} color="#06B6D4" />,
    },
    {
        name: 'Bootstrap 5',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <BootstrapSvg size={size} color="#7952B3" />,
    },
    {
        name: 'React',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <ReactSvg size={size} color="#61DAFB" />,
    },
    {
        name: 'Next.js',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <NextSvg size={size} color="#000000" />,
    },
    {
        name: 'Html 5',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <HtmlSvg size={size} color="#E34F26" />,
    },
    {
        name: 'Git',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: <GitSvg size={size} color="#F05032" />,
    },
]

export default function HeroSection() {
    return (
        <div
            className="py-12 bg-white "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="justify-center flex text-center">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Certificados
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Tenho <strong>5 Certificados</strong> são eles:
                            JavaScript ES6, CSS Grid, CSS Flexbox, Bootsrap 4 e
                            React completo; Porém tenho experiência em outras
                            linguagens como Next.js, Tailwind CSS, Git e Html 5.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center  rounded-md  ">
                                        {feature.icon}
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                        {feature.name}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

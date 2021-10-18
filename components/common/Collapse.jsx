import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Collapse() {
    return (
        <div className="w-full px-4 pt-16 " data-aos="zoom-in-down">
            <div className="justify-center flex">
                <h1 className="uppercase text-blue-400 font-semibold ml-12 mb-10 text-xl">
                    Perguntas Frequentes
                </h1>
            </div>
            <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 rounded-lg hover:bg-black hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className=" text-lg">
                                    Quantos anos de idade você tem?
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                                No momento 13 anos.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 rounded-lg hover:bg-black hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className=" text-lg">
                                    Com quantos anos você começou?
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2  text-md text-gray-500">
                                Com 12 anos.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 rounded-lg hover:bg-black hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className=" text-lg">
                                    Você é desenvolvedor Fullstack?
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                                Trabalho somente na area de Frontend por
                                enquanto.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 rounded-lg hover:bg-black hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className=" text-lg">
                                    Você oferece suporte técnico?
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2  text-md text-gray-500">
                                Não ofereco.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 rounded-lg hover:bg-black hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className=" text-lg">
                                    Qual é sua maior especialidade
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2  text-md text-gray-500">
                                Minhas maiores especialidades são: Next.js e
                                CSS.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

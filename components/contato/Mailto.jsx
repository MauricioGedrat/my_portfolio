import React from 'react'

const Mailto = () => {
    return (
        <div className="mb-12" data-aos="flip-right">
            <div className="justify-center flex">
                <h1 className="uppercase text-blue-400 font-semibold m-10 text-xl">
                    Fale comigo
                </h1>
            </div>
            <div className="justify-center flex">
                <form className="sm:flex block">
                    <div className="mb-4 ">
                        <div className="mr-8">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="p-4 border-4 border-solid border-blue-400 rounded-xl w-full"
                            />
                        </div>
                        <div className="mr-8">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="p-4 border-4 mt-4 border-solid border-blue-400 rounded-xl w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mr-8">
                            {' '}
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className="p-4 border-4 border-solid border-blue-400 rounded-xl max-h-36"
                                placeholder="Mensagem"
                            ></textarea>
                        </div>
                        <div className="mr-8">
                            <button
                                type="button"
                                className="bg-blue-200 w-full mt-4 p-4 rounded-xl text-black font-semibold hover:bg-blue-400 hover:text-white duration-300"
                            >
                                <a href="mailto:mauriciogedrat@gmail.com">
                                    Enviar e-mail
                                </a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Mailto

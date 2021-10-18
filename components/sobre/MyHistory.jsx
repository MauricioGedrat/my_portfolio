import React from 'react'

const MyHistory = () => {
    return (
        <div data-aos="fade-down">
            <div className="justify-center flex">
                <h1 className="uppercase text-blue-400 font-semibold m-10 text-xl">
                    Minha história
                </h1>
            </div>
            <div className="justify-center flex bg-gray-50 p-8">
                <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto text-center">
                    Minha história começou quando eu tinha 12 anos de idade
                    quando meu pai, Jonas Gedrat começou a me incentivar a
                    estudar JavaScript. Meu primeiro professor de JS foi o
                    <strong>Gustavo Guanabara</strong> do canal Curso em vídeo
                    do You Tube. Depois disso ganhei o curso da Origamid e meu
                    professor foi o <strong>André Rafael</strong>, lá, eu
                    conquistei <strong>5 certificados:</strong> JavaScript,
                    React, CSS Grid e Flexbox e por último Bootstrap 4, depois
                    começei a estudar Tailwind e Next.js e é o que estou fazendo
                    desde então.
                </p>
            </div>
            <div className="justify-center flex bg-gray-50 p-8">
                <h3 className="text-blue-300 font-bold">
                    AGRADECIMENTOS: André Rafael e Gustavo Guanabara
                </h3>
            </div>
        </div>
    )
}

export default MyHistory

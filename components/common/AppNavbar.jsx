import React, { useState } from 'react'
import Logo from '../../assets/ImgLogo.png'
import Link from 'next/link'

const AppNavbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <header className="header mb-8 shadow-lg ">
                <div className="logo">
                    <Link href="/">
                        <img
                            src={Logo.src}
                            className="w-40 cursor-pointer"
                            alt=""
                        />
                    </Link>
                </div>
                <nav className={`${open ? 'active' : ''} nav`}>
                    <button
                        aria-label={open ? 'fechar menu' : 'abrir menu'}
                        title={open ? 'fechar menu' : 'abrir menu'}
                        className="btn-mobile"
                        aria-haspopup="true"
                        aria-controls="menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="hamburger"></span>
                    </button>
                    <ul className="menu" role="menu">
                        <li>
                            <Link href="/Sobre">
                                <a className="font-semibold p-3 bg-gray-200 hover:bg-black hover:text-white duration-200 rounded-lg text-center">
                                    Sobre
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contato">
                                <a className="font-semibold p-3 bg-gray-200 hover:bg-black hover:text-white duration-200 rounded-lg text-center">
                                    Contato
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="http://www.scalar.inf.br/Erp.aspx"
                                className="font-semibold p-3 bg-gray-200 hover:bg-black hover:text-white duration-200 rounded-lg text-center"
                            >
                                Scalar
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default AppNavbar

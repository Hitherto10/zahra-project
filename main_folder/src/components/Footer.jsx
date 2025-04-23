import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div>


            <footer className="rounded-lg shadow-sm dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-6">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Licensing</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
                </div>
            </footer>



            {/*<footer className="text-center text-lg-start dark:bg-gray-900">*/}
            {/*    <div className="container d-flex justify-content-center py-5">*/}
            {/*        <button type="button" className="btn btn-primary btn-lg btn-floating mx-0"*/}
            {/*                style={{backgroundColor: 'transparent', border: 'none'}}>*/}
            {/*        <i className="fab fa-facebook-f"></i>*/}
            {/*        </button>*/}
            {/*        <button type="button" className="btn btn-primary btn-lg btn-floating mx-0"*/}
            {/*            style={{backgroundColor: 'transparent', border: 'none'}}>*/}
            {/*        <i className="fab fa-google"></i>*/}
            {/*        </button>*/}
            {/*        <button type="button" className="btn btn-primary btn-lg btn-floating mx-0"*/}
            {/*            style={{backgroundColor: 'transparent', border: 'none'}}>*/}
            {/*        <i className="fab fa-instagram"></i>*/}
            {/*        </button>*/}
            {/*        <button type="button" className="btn btn-primary btn-lg btn-floating mx-0"*/}
            {/*                style={{backgroundColor: 'transparent', border: 'none'}}>*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
            {/*                 className="bi bi-twitter-x" viewBox="0 0 16 16">*/}
            {/*                <path*/}
            {/*                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    <div className="text-center text-white p-3"*/}
            {/*         style={{   backgroundColor: 'rgba(0, 0, 0, 0.2)',*/}
            {/*                    fontFamily: 'Montserrat',*/}
            {/*                    fontSize: '12px',}}>*/}
            {/*        © 2025 Copyright*/}
            {/*        <a className="text-white" href="https://mdbootstrap.com/"> Huddle</a>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    )
}

export default Footer;
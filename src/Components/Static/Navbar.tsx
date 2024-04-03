import { useState } from 'react';
import TextToText from '../text-to-text';
import TextToImage from '../Text_to_image';
import TextToVideo from '../Text_to_video';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [vista, setVista] = useState("text");

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const vistas = () => {
        switch (vista) {
            case 'text':
                return <TextToText />;
            case 'image':
                return <TextToImage />;
            case 'video':
                return <TextToVideo />;
            default:
                return null;
        }
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://st3.depositphotos.com/23611030/34312/v/450/depositphotos_343120268-stock-illustration-chat-bot-icon-vector-isolated.jpg" className="h-8 rounded" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IA Tools</span>
                    </a>
                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${sidebarOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" onClick={() => setVista("text")} className={`block py-2 px-3 text-white rounded md:bg-transparent ${vista === "text" ? 'md:dark:text-blue-500 bg-blue-700' : ''}  md:p-0 dark:text-white `} aria-current="page">
                                    <i className="fa-solid fa-comment-dots"></i> Text To Text
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setVista("image")} className={`block py-2 px-3 text-white rounded md:bg-transparent ${vista === "image" ? 'md:dark:text-blue-500 bg-blue-700' : ''}  md:p-0 dark:text-white `}>
                                    <i className="fa-solid fa-image"></i> Text To Image
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setVista("video")} className={`block py-2 px-3 text-white rounded md:bg-transparent ${vista === "video" ? 'md:dark:text-blue-500 bg-blue-700' : ''}  md:p-0 dark:text-white `}>
                                    <i className="fa-solid fa-video"></i> Text To video
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="p-4 ">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 transition-all duration-500">
                    {/* Main content */}
                    {vistas()}
                </div>
            </div>

        </>
    );
}

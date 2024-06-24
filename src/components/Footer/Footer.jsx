import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div className="dark:bg-gray-900">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="px-4 py-8">
                        <a className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl" href="#">EShop</a>
                        <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci non eius consequatur facere</p>
                        <p className="text-gray-500 mt-4">Made with by 💖 The Coding Journey</p>
                        <a className="inline-block bg-primary/90 text-white px-4 py-2 mt-4 text-sm rounded-full" href="#" target="_blank">Visit Our YouTube Channel</a>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="px-4 py-8">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                            <ul className="space-y-3">
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300" href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                        <div className="px-4 py-8">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                            <ul className="space-y-3">
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300" href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="px-4 py-8 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>123 456 789</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaFacebook className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaTwitter className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
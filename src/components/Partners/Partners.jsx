import './Partners.css'
import brand1 from '../../assets/brand/br-1.png'
import brand2 from '../../assets/brand/br-2.png'
import brand3 from '../../assets/brand/br-3.png'
import brand4 from '../../assets/brand/br-4.png'
import brand5 from '../../assets/brand/br-5.png'

const Partners = () => {
    return (
        <div data-aos="zoom-out" className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
            <div className="container">
                <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                    <img className="w-[80px] dark:invert" src={brand1} alt="Brand1" />
                    <img className="w-[80px] dark:invert" src={brand2} alt="Brand2" />
                    <img className="w-[80px] dark:invert" src={brand3} alt="Brand3" />
                    <img className="w-[80px] dark:invert" src={brand4} alt="Brand4" />
                    <img className="w-[80px] dark:invert" src={brand5} alt="Brand5" />
                </div>
            </div>
        </div>
    );
};

export default Partners;
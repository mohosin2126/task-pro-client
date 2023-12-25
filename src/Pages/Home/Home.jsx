import { Link } from "react-router-dom";
import Benificial from "../Benificial/Benificial";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        delay: 100,
        easing: 'ease-in-out',
    });
}, []);

    return (
        <div>
            <div data-aos="fade-up-left" className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/XW7YvJg/pngtree-simple-e-commerce-career-character-image-21505.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
      <h1 className="mb-5 text-5xl font-bold">Synchronize Your Tasks</h1>
      <p className="mb-5"> Seamlessly align your to-do list with your workflow for enhanced productivity and efficiency</p>
     <Link to="/dashboard"> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span className="relative text-lg font-serif px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    
Let's Explore
</span>
</button></Link>
    </div>
  </div>
</div>
<div data-aos="fade-up-right"><Benificial ></Benificial></div>

        </div>
    );
};

export default Home;
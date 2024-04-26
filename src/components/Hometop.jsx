import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from '../components/Home';
import Map from './Map';
import Footer from './Footer';
import Chatbot from './Chatbox';
const Hometop = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <div>  
        <Navbar/>
        <div className="div relative">
            <div className="image h-[89vh] w-full">
                <img src="/images/image2.jpeg" className='h-full w-full object-cover' alt="" />
            </div>
            <div className="overlay absolute gap-5 flex items-center flex-col justify-center  h-[89vh] w-full  top-0 bg-[#0000008a]">
            <button onClick={toggleChatbot} className="fixed bottom-4 right-4 bg-[#5fef42] hover:bg-[#5dd06e] text-white font-bold py-7 px-4 rounded-full">
          Chatbot
       </button>
       {showChatbot && <Chatbot />}
                <h1 className="text-6xl font-voyage uppercase font-[900] text-white">skill Development for rural youth</h1>
                <p className='text-white font-semibold font-gilroy text-xl px-72 text-center'>RuralJobsHub connects rural youth with employment opportunities, fostering economic growth. Offering diverse job listings, skill development resources, and community support, it empowers rural communities for sustainable development.</p>
            </div>
        </div>
       <Home/>
       <Map/>
       <Footer/>
    </div>
  )
}

export default Hometop
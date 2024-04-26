import React from 'react'
import Navbar from './Navbar'
import Lottie from 'react-lottie';
import animationData from '../lotties/Animation - 01.json';
import animationData2 from '../lotties/Animation - 1713948726265.json';
import animationData3 from '../lotties/Animation - 1713949121673.json';
import { Link } from 'react-router-dom';
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultsecond={
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  const defaultthird={
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div>
        {/* <Navbar/> */}
        <div className="div font-gilroy bg-[#fff] ">
            <div className="div h-[89vh] flex items-center justify-between px-20 w-full ">
            <Link to='/training'>

            <div className="box h-96 rounded-3xl w-96 ">
            <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <div className="div h-52 w-52">
              <img src="/images/8400-removebg-preview.png" className='rounded-full h-full w-full object-cover' alt="" />
            </div>
            <strong className='text-3xl text-black'>Training and Learning</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
           
          <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
          </div>
          <div className="front-content">
            <small className="badge">Training and Learning</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong >Our website fosters rural empowerment through accessible, diverse training and learning initiatives.</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: 'normal' }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              {/* <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
</Link>

         <Link to="/business">

            <div className="box h-96 rounded-3xl w-96 ">
            <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
          <div className="div h-52 w-52">
              <img src="/images/3416549.jpg" className='rounded-full h-full w-full object-cover' alt="" />
            </div>
            <strong className='text-3xl text-black'>Business and Logistics</strong>
          </div>
        </div>
        <div className="front">
        <div className="img">
           
           <Lottie 
       options={defaultsecond}
         height={380}
         width={380}
       />
           </div>
          <div className="front-content">
            <small className="badge">Business and Logistics</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Our platform revolutionizes business logistics with streamlined operations and optimized efficiency.</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: 'normal' }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              {/* <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
         
         </Link>
         <Link to="/network">
            <div className="box h-96 rounded-3xl w-96 ">
            <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
          <div className="div h-52 w-52">
              <img src="/images/5013256-removebg-preview.png" className=' h-full w-full object-cover' alt="" />
            </div>
            <strong className='text-3xl text-center text-black'>Entrepreneurship and Networking</strong>
          </div>
        </div>
        <div className="front">
        <div className="img">
           
           <Lottie 
       options={defaultthird}
         height={380}
         width={380}
       />
           </div>
          <div className="front-content">
            <small className="badge">Entrepreneurship and Networking</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Our platform ignites entrepreneurial spirit with resources, guidance, and networking opportunities.</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: 'normal' }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              {/* <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
         </Link>
            </div>
        </div>
        
        </div>
  )
}

export default Home
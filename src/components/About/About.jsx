import React from 'react'
// import ReactTypingEffect from 'react-typing-effect'
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from '../../assets/EKTAPHOTO.jpg';

const About = () => {
  return (
    <section
      id="about"
      className='min-h-screen flex items-center justify-center px-[7vw] lg:px-[20vw] font-sans text-center md:text-left'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-12'>
        <div className='md:w-1/2 text-center mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl  font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Ekta Teli
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#08245ec]  leading-tight'>
            <span className='text-white'>
              I am a &nbsp;
            </span>
            <span className="text-[#8245ec] ">
              <Typewriter
                words={[
                  'Mern Stack Developer',
                  'Frontend Developer',
                  'React.js Developer',
                  'Web Developer',
                  
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>

          </h3>
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed '>
            I am a recent Graduate Student of Bsc. Computer Science, Skilled in 
            Frontend Development, React.js, Mysql, Programming and aslo have
            knwoledge of Backend Development and Web Development .passionate 
            about creating innovative solutions.

          </p>
          <a
            href='https://drive.google.com/file/d/1ZzbG8tGCpI-TqVAy-HT5ajbggy2yAJCi/view'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 ransform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',

            }}
          >
            Download CV

          </a>

        </div>

        {/* <div className='md:w-1/2 flex justify-center md:justify-end'>
      <Tilt className='w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full '
      tillMaxAngleX={24}
      tillMaxAngleY={24}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}
      >
        <img src={profileImage} alt='Ekta Teli' 
      className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
      </Tilt>

      </div> */}

      </div>

    </section>
  )
}

export default About

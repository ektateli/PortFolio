import React from 'react'
import { useState } from 'react'
import{projects} from '../../constants'

const Work = () => {
    const [select, setSelect] = useState(null)

    const handleOpenModel = (project) => {
        setSelect(project)
        
    }

    const handleCloseModel = () => {
        setSelect(null)
    }


  return (
    <section 
    id='work'
    className='py-24 pb-24 px-[12vw] lg:px-[20vw] font-sans relative'>
        <div className='text-center mb-10'>
            <h2 className='text-4xl font-bold text-white '>
                PROJECTS
            </h2>
            <div className='w-37 h-1 bg-purple-500 mx-auto mt-4'>

            </div>
            <p className='text-gray-400 mt-4 text-lg font-semibold'>
                A showcase of my projects I have worked on, highlighting my skills and 
                experience in various techologies

            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12'>
            {
                projects.map((project) =>(
                    <div key={project.id} 
                    onClick={() => handleOpenModel(project)} className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50
                    hover:translate-y-2  transition-tranform duration-300'>
                        <div className='p-4'>
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-2xl font-semibold text-white mb-2'>
                                {project.title}

                            </h3>
                            <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
                                {project.description}
                            </p>
                            <div className='mb-4'>
                                {
                                    project.tags.map((tag, index) =>(
                                        <span key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 px-2 py-1 mr-2 mb-2  '>
                                            {tag}
                                        </span>
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>
        {
            select &&
            (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
                    <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
                        <div className='flex justify-end p-4'>
                            <button 
                            onClick={handleCloseModel}
                            className='text-white text-3xl font-bold hover:text-purple-500'
                            >
                                &times;

                            </button>
                            <div className='flex flex-col'>
                                <div className='w-full flex justify-center bg-gray-900 px-4'>
                                    <img src={select.image} alt={select.title} className='lg:w-full w-[95%]  object-contain rounded-xl shadow-2xl' />

                                </div>
                            </div>
                            <div className='lg:p-8 p-6'>
                                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>
                                    {select.title} 
                                </h3>
                                <p className='text-gray-400 mb-6 lg:text-base text-xs'>
                                    {select.description}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {
                                        select.tags.map((tag, index) =>(
                                            <span 
                                            key={index} 
                                            className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-fll px-2 py-1 '>
                                                {tag}

                                            </span>
                                        ))
                                    }

                                </div>
                                <div className='flex gap-4'>
                                    <a href={select.github} target='_blank' rel='noreferrer' className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                                    View Code
                                    </a>
                                     <a href={select.webapp} target='_blank' rel='noreferrer' className='w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                                    View Live
                                    </a>
                                </div>

                            </div>

                        </div>
                       </div>
                </div>
            )
        }

    </section>
  )
}

export default Work
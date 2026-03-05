import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import Companies from './companies.jsx'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer'



const work = () => {

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description of project 1',
            image: project1,
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description of project 2',
            image: project2,
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Description of project 3',
            image: project3,
            demoLink: '#',
            codeLink: '#'
        },
        ]
        
    const {ref, inView } = useInView({
                triggerOnce: false,
                threshold: 0.2,
    });

  return (
    <div className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px lg:px-8'>
            <motion.h2 
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? {opacity:1, y:0} : {} }
            transition={{ delay:0.3,duration: 0.5 }}
            className='text-4xl mb-12 text-white underline font-bold text-center'>Mes Projets</motion.h2>
            
            <motion.p
             ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? {opacity:1, y:0} : {} }
            transition={{ delay:0.3,duration: 0.5 }}
            className='mb-12 text-gray-400 text-center'>Voici une liste de mes projets récents. Vous pouvez voir les démos ou accéder au code sur github</motion.p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    projects.map((project) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? {opacity:1, y:0} : {} }
                            transition={{ delay: project.id * 0.3,duration: 0.5 }} 

                        key={project.id}
                            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'>

                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
                            <div className='p-6'>
                            <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                            <p className='text-slate-400'>{project.description}</p>
                            <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 mt-2 rounded-full hover:bg-purple-500 hover:text-white transition '>Demo</button>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
        <div>
            <Companies/>
        </div>
    </div>
  )
}

export default work
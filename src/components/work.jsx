import React from 'react'
// Importation des images des projets depuis le dossier assets
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

// Importation du composant Companies (affiché en bas de la section)
import Companies from './companies.jsx'

// Importation de motion pour gérer les animations
import {motion} from 'motion/react'

// Hook permettant de détecter si un élément est visible à l’écran (scroll)
import { useInView } from 'react-intersection-observer'


// Déclaration du composant ( Bonne pratique : commencer par une majuscule)
const work = () => {

     // Tableau contenant les données des projets
    // Chaque objet représente un projet
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
        
            // Hook useInView pour détecter si un élément entre dans la zone visible
    const {ref, inView } = useInView({
                triggerOnce: false,
                threshold: 0.2,      // Déclenchement quand 20% de l’élément est visible

    });

  return (
            // Section principale avec padding vertical
    <div id='work' ref={ref} className='py-12'>

         {/* Conteneur centré avec largeur maximale */}
        <div className='max-w-7xl mx-auto px-4 sm:px lg:px-8'>
           
           {/* Titre animé */}
           <motion.h2 
            
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? {opacity:1, y:0} : {} }
            transition={{ delay:0.3,duration: 0.5 }}
            className='text-4xl mb-12 text-white underline font-bold text-center'>Mes Projets</motion.h2>
            
            <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? {opacity:1, y:0} : {} }
            transition={{ delay:0.3,duration: 0.5 }}
            className='mb-12 text-gray-400 text-center'>Voici une liste de mes projets récents. Vous pouvez voir les démos ou accéder au code sur github</motion.p>

                            {/* Grille responsive */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
               
                 {/* Parcours du tableau projects */}
                {projects.map((project) => (

                        // Carte projet animée
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? {opacity:1, y:0} : {} }
                            transition={{ delay: project.id * 0.3,duration: 0.5 }} //animation en cascade

                            key={project.id} // Clé obligatoire pour React désignant chaque élément de la liste
                            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'> 


                            {/* Image du projet */}
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
        <motion.div
        
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? {opacity:1, y:0} : {} }
        transition={{ delay:0.3,duration: 0.5 }}
        className='mt-16'>
            <Companies/>
        </motion.div>
    </div>
  )
}

export default work
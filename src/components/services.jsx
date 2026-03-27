import React from 'react'
import {FaAppStore} from 'react-icons/fa'
import { SiSpring } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

const services = () => {

    const servicesData = [
        {
            title: 'Spring Boot',
            description: 'Framework Java pour créer des applications web et des API robustes, rapides à développer et faciles à déployer.',
            icon :<SiSpring className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,

        },
        {
            title: 'Laravel',
            description: 'Framework PHP moderne pour développer des applications web sécurisées, structurées et performantes.',
            icon :<FaLaravel className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
        },
        {
            title: 'Python',
            description: 'Langage polyvalent utilisé pour le développement backend, l’automatisation et la création d’API.',
            icon :<FaPython className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
        },
        {
            title: 'React Js',
            description: 'Bibliothèque JavaScript utilisée dans la plupart de mes projets frontend pour créer des interfaces utilisateur dynamiques, interactives et réactives.',
            icon :<FaReact className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
        },
        {
            title: 'Tailwind CSS',
            description: 'Framework CSS utilitaire pour concevoir rapidement des interfaces modernes et responsive.',
            icon :<SiTailwindcss  className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
        },
        {
            title: 'Bootstrap',
            description: 'Framework CSS pour créer des interfaces responsive avec des composants prêts à l’emploi.',
            icon :<FaBootstrap className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,        
        },
        {
            title: 'Git & GitHub',
            description: 'Outils de gestion de version pour suivre les modifications du code et collaborer efficacement en équipe.',
            icon :<FaGithub className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,

        },
        {
            title: 'Postman',
            description: 'Outil pour tester, documenter et automatiser les requêtes API.',
            icon :<SiPostman className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,    
        },
        {
            title: 'Figma Design',
            description: 'Outil de design UI/UX pour concevoir des maquettes et prototypes d’applications modernes.',
            icon :<FaFigma className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
        },
    ];

    const isMobile = useMediaQuery({ maxWidth: 640 });

    const {ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
return (
    <div id='services' className='text-white py-16'>
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='container mx-auto px-4 text-center'>
            <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Mes compétences</h2>
            <p className='mb-12 text-gray-400'>Mes compétences couvrent le développement d’applications web full-stack, avec une spécialisation en React et Tailwind CSS pour le frontend, ainsi qu’en Spring Boot pour la conception d’API robustes et structurées côté backend. Néanmoins, j'utilise également d'autres technologies au quotitien pour divers projets. Je suis aussi ouverte à l'apprentissage de nouvelles technologies.</p>
        
            <div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {servicesData.map((service, index) => (
                    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8}}
                        transition={{ duration: 0.5, delay: index * 0.3, ease: 'easeOut' }}

                        whileTap={isMobile ? { 
                        scale: 0.98,
                        boxShadow: "shadow-purple-500 transition-shadow duration-300"
                        } : {}}

                        
                    key={index}
                        className='bg-[#1c1a2b] p-6 rounded-lg text-center shadow-md hover:shadow-xl hover:shadow-purple-500 transition-shadow duration-300'>
                        {service.icon}
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default services
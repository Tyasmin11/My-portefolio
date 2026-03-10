import React from 'react'
import aboutImg from '../assets/monavatar1.png'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react';

const about = () => {
  const [threshold, setThreshold] = useState(0.05);
  
  useEffect(() => {
    const updateThreshold = () => {
      if (window.innerWidth < 768) {
        setThreshold(0.01);
      } else if (window.innerWidth < 1024) {
        setThreshold(0.05);
      } else {
        setThreshold(0.1);
      }
    };
    
    updateThreshold();
    window.addEventListener('resize', updateThreshold);
    
    return () => window.removeEventListener('resize', updateThreshold);
  }, []);
  
  // Crée un ref différent pour chaque élément
  const {ref: refTitle, inView: inViewTitle} = useInView({ threshold, triggerOnce: false });
  const {ref: refDesc, inView: inViewDesc} = useInView({ threshold, triggerOnce: false });
  const {ref: refImg, inView: inViewImg} = useInView({ threshold, triggerOnce: false });
  const {ref: refText, inView: inViewText} = useInView({ threshold, triggerOnce: false });
  const {ref: refStat1, inView: inViewStat1} = useInView({ threshold, triggerOnce: false });
  const {ref: refStat1Text, inView: inViewStat1Text} = useInView({ threshold, triggerOnce: false });
  const {ref: refStat2, inView: inViewStat2} = useInView({ threshold, triggerOnce: false });
  const {ref: refStat2Text, inView: inViewStat2Text} = useInView({ threshold, triggerOnce: false });
  const {ref: refStat3, inView: inViewStat3} = useInView({ threshold, triggerOnce: false });
  const {ref: refStat3Text, inView: inViewStat3Text} = useInView({ threshold, triggerOnce: false });
  
  return (
    <div id='about' className='text-white py-16'> 
       {/*  Section de présentation About on ajout l'ID pour permettre le référencement de react - scroll */}
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
          ref={refTitle}
          className='text-3xl md:text-4xl font-bold mb-8 underline'
          initial={{ opacity: 0, y: 100 }}
          animate={inViewTitle ? { opacity: 1, y:0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}>
          A propos
        </motion.h2>
        
        <motion.p
          ref={refDesc}
          initial={{ opacity: 0, y: 100 }}
          animate={inViewDesc ? { opacity: 1, y:0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='mb-12 text-gray-400 text-center'>
          Hello! Moi c'est Yasmine TRAORE, Ingénieure des travaux en informatique, et amoureuse du code !!!. Actuellement en Master en Management des Systèmes d'Information, je suis passionnée par la création d'applications web modernes et performantes.
        </motion.p>
      
        <div className='flex flex-col md:flex-row justify-center item-center'>
          <motion.div 
            ref={refImg}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewImg ? { opacity: 1, x:0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
            <img src={aboutImg} alt="About" className='w-2/3 sm:w-1/2 md:w-10/12' />
          </motion.div>

          <motion.p
            ref={refText}
            initial={{ opacity: 0, x: 100 }}
            animate={inViewText ? { opacity: 1, x:0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>
              Développeuse web full-stack, je travaille principalement avec <span className='text-purple-500'>React</span> et <span className='text-purple-500'>Tailwind CSS</span> pour concevoir des interfaces dynamiques et intuitives, ainsi qu’avec <span className='text-purple-500'>Spring Boot</span> pour développer des API robustes et sécurisées.

              À travers mes projets, je mets en pratique mes compétences en développement frontend et backend afin de construire des applications complètes et bien structurées. Je suis toujours motivée par l’apprentissage de nouvelles technologies et la résolution de problèmes concrets grâce au développement logiciel.
          </motion.p>
        </div>
      
              {/* Statistiques */}
        <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
              {/*  element1 Statistiques */}
          <motion.div 
            ref={refStat1}
            initial={{ opacity: 0}}
            animate={inViewStat1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>4+</h3>
            <motion.p 
              ref={refStat1Text}
              initial={{ opacity: 0, y: 100 }}
              animate={inViewStat1Text ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className='text-sm sm:text-base text-gray-300'>
              Ans d'expérience
            </motion.p>
          </motion.div>

           {/*  element2 Statistiques */}
          <motion.div 
            ref={refStat2}
            initial={{ opacity: 0}}
            animate={inViewStat2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>10+</h3>
            <motion.p 
              ref={refStat2Text}
              initial={{ opacity: 0, y: 100 }}
              animate={inViewStat2Text ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className='text-sm sm:text-base text-gray-300'>
              Clients satisfaits
            </motion.p>
          </motion.div>
      
          {/*  element3 Statistiques */}
          <motion.div 
            ref={refStat3}
            initial={{ opacity: 0}}
            animate={inViewStat3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>12+</h3>
            <motion.p 
              ref={refStat3Text}
              initial={{ opacity: 0, y: 100 }}
              animate={inViewStat3Text ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className='text-sm sm:text-base text-gray-300'>
              Projets réalisés
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default about
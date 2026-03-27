import React from 'react'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer'
import{
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

const contact = () => {

   /*  const [projectType, setProjectType] = useState(""); */
    
   
              // Hook useInView pour détecter si un élément entre dans la zone visible
        const {ref, inView } = useInView({
                    triggerOnce: false,
                    threshold: 0.2,      // Déclenchement quand 20% de l’élément est visible
    
        });
        
    
  return (
    <motion.div
    ref={ref}
    id='contact'
    >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
            <motion.h2
            initial={{opacity: 0, y:-100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.3, duration:0.5}}
            className='text-4xl font-bold text-white'>Discutons  de votre <span className='text-purple-500'>Projet</span></motion.h2>
           
            <motion.p 
            initial={{opacity: 0, y:-100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.4, duration:0.5}}
            className='text-gray-300 mt-4'>
                N'hésitez pas à me contacter pour discuter de votre projet ou pour toute collaboration informatique.
            </motion.p>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-6'>

                <motion.div 
                initial={{opacity: 0, x:-50}}
                animate={inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.2, duration:0.5}}
                className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                <FaPhone className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>Contactez moi</p>
                    <p className='text-gray-300'>+226 63 06 82 56</p>
                </div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x:-50}}
                animate={inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.4, duration:0.5}}
                className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                <FaEnvelope className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>Email</p>
                    <p className='text-gray-300'><a href='#' onClick={(e) => {
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=traoreyasmine71@gmail.com", "_blank");
                    }} className='text-purple-400 hover:text-blue-300'>traoreyasmine71@gmail.com</a></p>
                </div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x:-50}}
                animate={inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.4, duration:0.5}}
                className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                <FaLinkedin className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>LinkedIn</p>
                    <p className='text-gray-300'><a href="https://www.linkedin.com/in/yasmine-traore-29103528b" target='_blank' rel='noopener noreferrer' className='text-purple-400 hover:text-blue-300'>www.linkedin.com/in/yasmine-traore-29103528b</a></p>
                </div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x:-50}}
                animate={inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.6, duration:0.5}}
                className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                <FaMapMarkerAlt className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>Adresse</p>
                    <p className='text-gray-300'>Ouagadougou | Bobo-Dioulasso , Burkina Faso</p>
                </div>
                </motion.div>
            </div>

            <motion.form 
            initial={{opacity: 0, x:50}}
            animate={inView ? {opacity:1, x:0} : {}}
            transition={{delay:0.8, duration:0.5}}
            action="" className='space-y-4 text-white '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <input type="text" placeholder=' Votre nom' 
                    className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full' />
                    <input type="email" placeholder='Votre email' 
                    className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full' />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <input type="text" placeholder='Votre Contact' 
                    className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full' />
                    <input type="text" placeholder="Votre domaine d'activité"
                    className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full' />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <select
                    /*  value={projectType}
                        onChange={(e) => setProjectType(e.target.value)} */
                        className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full'
                        >
                        <option value="">Type de projet souhaité</option>
                        <option value="site-vitrine">Site vitrine</option>
                        <option value="portfolio">Portfolio</option>
                        <option value="refonte-site">Refonte de site</option>
                        <option value="E-commerce">Site E-commerce</option>
                        <option value="site-professionnel">Site web professionnel</option>
                        <option value="application-mobile">Application mobile</option>
                        <option value="saas">SaaS</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="contact">Me contacter pour plus de détails</option>
                    </select>
                    <input type="text" placeholder="Votre budget"
                    className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full' />
                </div>
                    <textarea placeholder='Votre message' className='border border-purple-500 bg-gray-800 p-4 rounded-md w-full'></textarea>

                    <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    type="submit" className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-500'>
                        Envoyer
                        
                        </motion.button>
                
            </motion.form>
        </div>

    {/* Footer */  }

        <motion.div
        initial={{opacity: 0}}
        animate={inView ? {opacity:1 } : {}}
        transition={{delay:1.2, duration:0.5}}
        className='mt-30 flex justify-between items-center p-5 text-white border-t-2 border-purple-500'>
            <p>© 2026. Tous droits réservés.</p>
            <p>Yasmine Adiara TRAORE</p>

            <div className='flex justify-center space-x-4 text-white mt-4' >
                <a className='hover:text-purple-500'>
                    <FaLinkedin className='text-white w-6 h-6'/>
                </a>
                <a className='hover:text-purple-500' >
                    <FaWhatsapp className='text-white w-6 h-6'/>
                </a>
                <a className='hover:text-purple-500'>
                    <FaInstagram className='text-white w-6 h-6'/>
                </a>
                <a className='hover:text-purple-500'>
                    <FaGithub className='text-white w-6 h-6'/>
                </a>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default contact
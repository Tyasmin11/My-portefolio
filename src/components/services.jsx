import React from 'react'
import {FaAppStore} from 'react-icons/fa'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer';

const services = () => {

    const servicesData = [
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies.',
        },
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies.',
        },
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies.',
        },
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies.',
        },
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies.',
        },
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies.',
        },
    ];

    const {ref, inView } = useInView({
        triggerOnce: false,
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
            <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Services</h2>
            <p className='mb-12 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ab, obcaecati suscipit aperiam velit quasi sapiente dolorem inventore amet assumenda iusto, veniam dolor ut ex voluptatum eveniet modi et non!</p>
        
            <div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {servicesData.map((service, index) => (
                    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8}}
                        transition={{ duration: 0.5, delay: index * 0.3, ease: 'easeOut' }}
                    key={index}
                        className='bg-[#1c1a2b] p-6 rounded-lg text-center shadow-md hover:shadow-xl hover:shadow-purple-500 transition-shadow duration-300'>
                        <FaAppStore className=" text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />
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
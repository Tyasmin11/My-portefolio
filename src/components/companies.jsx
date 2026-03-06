import React from 'react'
import {motion} from 'motion/react'

const companies = () => {

    const companies = [
    "Perle d'OR",
    "Dasyam Systems AI",
    "Timi Multiservices",
    "SkinCare Routine",
    " Aurore Crochet",
    "AAET-BF",

    ];

    const companiesList = [...companies, ...companies];

    const scrollvariant1 = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
                },
        },
    }
};

const scrollvariant2 = {
        animate: {
            x: [ -1000, 0],
            transition: {
                x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
                },
        },
    }
};

  return (
    <div className='text-white py-16'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Ils m'ont fait confiance
            </h2>
            <div className='overflow-hidden relative w-full'>

                <motion.div
                variants={scrollvariant1}
                    animate="animate"
                className='whitespace-nowrap flex space-x-10'>
                    {companiesList.map((company, index) => (
                        <div 
                        key={index}
                        className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                            {company}
                        </div>
                    ))}
                </motion.div>

            </div>
            <div className='overflow-hidden relative w-full mt-5'>

                <motion.div 
                variants={scrollvariant2}
                    animate="animate"className='whitespace-nowrap flex space-x-10'>
                     {companiesList.map((company, index) => (
                        <div key={index}
                        className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                            {company}
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default companies
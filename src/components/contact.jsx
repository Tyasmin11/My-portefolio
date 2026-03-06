import React from 'react'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer'
import{
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

const contact = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
            <h2 className='text-4xl font-bold text-white'>Discutons  de votre <span className='text-purple-500'>Projet</span></h2>
            <p className='text-gray-300 mt-4'>
                N'hésitez pas à me contacter pour discuter de votre projet ou pour toute collaboration informatique.
            </p>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
                <div className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                   <FaPhone className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>Contactez moi</p>
                    <p className='text-gray-300'>+226 63 06 82 56</p>
                </div>
                </div>

                <div className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                   <FaEnvelope className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>Email</p>
                    <p className='text-gray-300'><a href="#" className='text-purple-400 hover:text-blue-300'>traoreyasmine71@gmail.com</a></p>
                </div>
                </div>

                <div className='flex items-center space-x-4'>
                <div className='bg-purple-500 p-4 rounded-full'>
                   <FaMapMarkerAlt className='text-white w-6 h-6'/> 
                </div>
                <div>
                    <p className='text-lg font-medium text-white'>Adresse</p>
                    <p className='text-gray-300'>Ouagadougou | Bobo-Dioulasso , Burkina Faso</p>
                </div>
                </div>
            </div>

            <form action=""></form>
        </div>
    </div>
  )
}

export default contact
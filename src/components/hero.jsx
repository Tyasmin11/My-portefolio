import React from "react";
import avatar from "../assets/monavatar1.png";
import {motion} from "motion/react";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="text-white py-0">
        
        <motion.img 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
            delay: 0.3,
            duration: 0.8 }}
            src={avatar} alt="avatar" className="mx-auto w-2/3 md:w-1/3 lg:w-1/4"/>
            
            {/*  mx-auto : centre l'image horizontalement (margin left et right automatiques) w-2/3 : largeur de 66% sur mobile par défaut md:w-1/3 : largeur de 33% à partir de 768px (tablettes)  lg:w-1/4 : largeur de 25% à partir de 1024px (ordinateurs)*/}
            <div className="container mx-auto text-center"> {/* // Conteneur principal centré avec une largeur max et un texte aligné au centre */}
            
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4">Hello!!! , C'est  Yasmine !
           
            <motion.span 
            className="text-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} > {/* // Texte avec animation d’apparition */}
            
            {Array.from("<Développeuse web full-stack/>").map((char, index) => (
                <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.05,
                    delay: 0.5 + index * 0.05
                }} >
                {char}
                </motion.span>
            ))}
            </motion.span> {/* // Texte en violet avec animation d’apparition lettre par lettre */}
            </motion.h1> {/* // Titre principal de la page// - Taille du texte large, encore plus grande sur écran moyen et +// - Utilise flex en colonne pour gérer l’espacement // - Texte en gras avec une marge en bas */}
            
            <motion.p 
            className="text-gray-400 text-lg mb-8"
            
            >
            {Array.from("Créons ensemble des solutions numériques modernes, performantes et évolutives.").map((char, index) => (
                <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.05,
                    delay: 1 + index * 0.03
                }}
                >
                {char}
                </motion.span>
            ))}
             </motion.p> {/* // Paragraphe descriptif avec animation d’apparition lettre par lettre */}
            
            <div className="flex justify-center space-x-4 mb-10"> {/* // Conteneur pour les boutons avec flexbox centré et espacement entre les boutons */}
            <motion.button 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            
            className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-400 transition duration-300">
            <Link to="contact" smooth={true} duration={500} offset={-70}>Contacte moi</Link>
            </motion.button>


            <motion.button 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            
            className="text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            <Link to="about" smooth={true} duration={500} offset={-70}>En savoir plus</Link>
           
            </motion.button>
            </div>
            </div>
    
            </div>
        );
    };  
    
    export default Hero;
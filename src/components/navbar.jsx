// On importe React pour créer un composant

import React from 'react'

// On importe les icônes de menu (hamburger) et de fermeture (croix)

import { TiThMenu } from "react-icons/ti";
import { VscClose } from "react-icons/vsc";

// On importe motion pour animer l'ouverture/fermeture du menu mobile

import {motion} from "motion/react";
import {Link} from "react-scroll";
import { useRef, useEffect } from 'react';


const navbar = () => {

    // Configuration de l'animation du menu mobile
    // "open" : quand le menu est ouvert, il se déploie en cercle jusqu'à 1200px
    // "closed" : quand le menu est fermé, il se réduit à un petit cercle de 30px
    
    const variants = {
        open: {clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: "spring",
        },
        closed: {
            clipPath: "circle(30px at 43px 37px)",
            transition: {
                type: "spring",
                duration: 1,
            },
        }
    }


    // État pour contrôler si le menu mobile est ouvert (true) ou fermé (false)

    const [menu, setMenu] = React.useState(false);

    const menuRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenu(false);
    }
  };

  if (menu) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menu]);
        // Liste des liens de navigation

    const items = [
        {id: 1, text: 'A Propos', to : 'about'},
        {id: 2, text: 'Mes Services', to : 'services'},
        {id: 3, text: 'Mes Projets', to : 'work'},
        {id: 4, text: 'Contactez Moi', to: 'contact'},
    ]
    return (
    <div>
                {/* NAVIGATION DESKTOP - visible uniquement sur écrans moyens (md) et grands */}

        <motion.div 
            initial={{ opacity: 0, x: 100, y: -100 }} 
                        animate={{ opacity: 1, x:0, y:0 }}
                        transition={{duration: 0.8}}
            className='container mx-auto hidden md:flex justify-between items-center py-3 '>
           {/* container : conteneur principal
                mx-auto : centre horizontalement
                hidden : caché par défaut sur mobile
                md:flex : s'affiche en flexbox à partir de 768px
                justify-between : espace les éléments aux extrémités
                items-center : centre verticalement
                py-6 : padding vertical de 24px 
                initial={{ opacity: 0, y: -100 }} : position initiale (hors écran en haut)
                animate={{ opacity: 1, y:0 }} : position finale (visible à l'écran)
                transition={{duration: 0.5}} : durée de l'animation 0.5s
                */}

                            {/* Logo/Nom */}
            <motion.div 
            initial={{ opacity: 0, x: -100, y: 0 }} 
                        animate={{ opacity: 1, x:0, y:0 }}
                        transition={{duration: 0.5}}
            className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
                    {/* text-xl : taille 20px par défaut lg:text-2xl : taille 24px sur grands écrans  font-bold : texte en gras gap-1 : espace de 4px entre les éléments */}
                <span className='text-white'>Yasmine Adiara </span>
                <span className='text-purple-500'>TRAORE</span>
            </motion.div>

                        {/* Menu de navigation desktop */}
            <motion.div>
                
                <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                    {/* space-x-6 : espace horizontal de 24px entre chaque élément list-none : retire les puces de liste text-base : taille 16px sur écrans moyens  lg:text-lg : taille 18px sur grands écrans */}
                   
                    {items.map((item) => (
                        <li key={item.id} className='hover:text-purple-500 cursor-pointer'>
                            <Link
                             to={item.to}
                             smooth={true}
                             duration={500}
                             offset={-70}>
                            {item.text}
                            </Link>
                        </li>
                    ))} {/* On parcourt le tableau items et on crée un <li> pour chaque élément */}
                        {/* On a ajouté l'option react-scroll pour pouvoir scroller sur l'élement concerné au clic */}
                </ul>
            </motion.div>
            <a className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full'>
                Télécharger le CV
            </a>
        </motion.div>

        {/* MENU MOBILE - visible uniquement sur petits écrans flex : affiche en flexbox
                md:hidden : caché à partir de 768px */}

        <div className='flex md:hidden justify-between'>

            {/* Conteneur animé du menu mobile */}
             
            <motion.div animate={menu ? "open" : "closed"}>
                    {/* Si menu = true, applique l'animation "open", sinon "closed" */}

                <motion.div
                ref={menuRef}
                variants={variants}
                onClick={() => setMenu((prev) => !prev)}
                className='bg-white w-2/3 h-screen text-black fixed z-10'
                >
                   {/* onClick : inverse l'état du menu (ouvert <-> fermé) bg-white : fond blanc w-2/3 : largeur de 66% de l'écran h-screen : hauteur égale à la hauteur de l'écran fixed : position fixe (ne bouge pas au scroll) z-10 : niveau de superposition (s'affiche au-dessus) */}
                {/*Icons pour l'ouverture et la fermeture de menu*/ }

                    <div className='px-7 py-6'>
                    {/* Icône du menu : croix si ouvert, hamburger si fermé */}

                        {menu ? (<VscClose size={30}/>) : 
                        < TiThMenu size={30}/>}

                    </div>

                    {/* Contenu du menu mobile - affiché seulement si menu est true */}

                    {menu && (
                        <div className='flex flex-col justify-center items-center'>  {/* flex-col : éléments empilés verticalement  justify-center : centre verticalement  items-center : centre horizontalement */}
                           {/* flex-col : éléments empilés verticalement justify-center : centre verticalement  items-center : centre horizontalement */}
                            
                            <ul className='space-y-6 text-black text-lg'>
                                {items.map((item) => (
                                <li key={item.id} className='hover:text-purple-500 duration-200 cursor-pointer'> {/* duration-200 : transition de 200ms pour l'animation au survol */}
                                    <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                    {item.text}
                                    </Link>
                                </li> 
                                ))} 
                                
                                {/* On a ajouté l'option react-scroll pour pouvoir scroller sur l'élement concerné au clic */}
                            </ul>

                                                        {/* Bouton télécharger CV - mobile */}

                            <a className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full" href="#">Télécharger le CV</a>
                        </div>
                    )}

                </motion.div>
            </motion.div>

                    {/* Logo/Nom - version mobile + animation*/}
            <motion.div initial={{ opacity: 0, x: 100, y: -100 }} 
                        animate={{ opacity: 1, x:0, y:0 }}
                        transition={{duration: 0.5}} className='text-xl font-bold flex items-center gap-2 py-6 px-4'>
                <span className='text-white'>Yasmine Adiara</span>
                <span className='text-purple-500'>TRAORE</span>
            </motion.div>
        </div>
    </div>
  );
};

export default navbar;
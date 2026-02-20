import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'


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
        ];
  return (
    <div className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px lg:px-8'>
            <h2 className='text-4xl mb-12 text-white underline font-bold text-center'>Mes Projets</h2>
            <p className='mb-12 text-gray-400 text-center'>Voici une liste de mes projets récents. Vous pouvez voir les démos ou accéder au code sur github</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    projects.map((project) => (
                        <div key={project.id}
                            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'>

                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button>Demo</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default work
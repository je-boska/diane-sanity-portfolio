import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { PostType } from '../types'

interface ProjectProps {
  project: PostType
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div key={project._id} className='project'>
      <div className='project-text'>
        <h1>{project.title}</h1>
        <BlockContent blocks={project.body} />
      </div>
      <div className='project-images'>
        {project.images.map((image, idx) => (
          <img key={idx} src={image.asset.url} alt={project.title} />
        ))}
      </div>
    </div>
  )
}

export default Project

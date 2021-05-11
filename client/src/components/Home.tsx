import React, { useEffect, useState } from 'react'
import { getProjects } from '../queries/projectsQuery'
import BlockContent from '@sanity/block-content-to-react'
import { PostType } from '../types'

const Home = () => {
  const [loading, setLoading] = useState(true) as any
  const [projects, setProjects] = useState<PostType[] | undefined>([])

  useEffect(() => {
    getProjects()
      .then(projects => projects.length > 0 && setProjects(projects))
      .then(setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      {projects &&
        projects.map(project => (
          <div key={project._id}>
            <h1>{project.title}</h1>
            <BlockContent blocks={project.body} />
            <img src={project.image} alt={project.title} />
          </div>
        ))}
    </div>
  )
}

export default Home

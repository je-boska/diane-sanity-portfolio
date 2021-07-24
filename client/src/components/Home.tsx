import React, { useEffect, useState } from 'react'
import { getProjects } from '../queries/projectsQuery'
import { PostType } from '../types'
import Project from './Project'

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
      {projects && projects.map(project => <Project project={project} />)}
    </div>
  )
}

export default Home

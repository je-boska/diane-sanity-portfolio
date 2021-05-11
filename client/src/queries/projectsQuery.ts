import sanityClient from '../client'
import groq from 'groq'

export const getProjects = async () => {
  const projects = await sanityClient.fetch(
    groq`*[_type == "post"] {
      _id,
      title,
      mainImage,
      "slug": slug.current,
      body,
    }
    `
  )

  return projects
}

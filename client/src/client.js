import sanityClient from '@sanity/client'

const _projectId = process.env.REACT_APP_SANITY_PROJECT_ID
const _dataset = process.env.REACT_APP_SANITY_DATASET

export default sanityClient({
  projectId: _projectId,
  dataset: _dataset,
  useCdn: false,
})

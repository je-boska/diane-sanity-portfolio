export type PostType = {
  _id: number
  title: string
  slug: string
  body: string
  images: [{ asset: { url: string } }]
}

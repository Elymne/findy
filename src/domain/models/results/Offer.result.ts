export default interface Offer {
  id: string
  title: string
  description: string
  company: string
  zone: string
  jobTitle: string

  tags: string[]

  createdAt: Date
  updateAt: Date
  imgUrl: string
}

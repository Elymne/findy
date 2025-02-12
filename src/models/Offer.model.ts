export default interface Offer {
  id: string
  title: string
  description: string
  company: string
  companyLogo: string
  zone: string
  jobTitle: string

  tags: string[]

  createdAt: string
  updateAt: string | null
  imgUrl: string | null
}

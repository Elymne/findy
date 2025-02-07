import type Company from './Company.result'
import type Skill from './Skill.result'
import type Zone from './Zone.result'

export default interface DetailedOffer {
  title: string
  company: Company
  zone: Zone
  ref: string
  description: string

  skills: Skill[]

  urlOrigin: string

  createdAt: Date
  updateAt: Date

  imgUrl: string
}

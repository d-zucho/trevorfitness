import { LucideIcon } from 'lucide-react'

export type NavLink = {
  href: string
  label: string
}

export type THeroCard = {
  title: string
  label: string
}

export type TDetailCard = {
  label: string
  alt: string
  image: string
}

export type TMissionCard = {
  title: string
  description: string
  icon: string
}

export type TAboutStat = {
  title: string
  description: string
  stats: {
    stat: string | number
    detail?: string
  }[]
}

export type TTestimonial = {
  name: string
  message: string
  label: string
}

export type TContactInfo = {
  icon: LucideIcon
  text: string
  label?: string
}

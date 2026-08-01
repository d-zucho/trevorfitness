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

export type TCredential = {
  title: string
  description: string
  image: string
}

export type TMethod = {
  title: string
  description: string
}

export type TPillar = {
  title: string
  description: string
  facts: string[]
  link: string
}

// v2 home — "Your First Few Weeks" partnership timeline
export type TFirstWeek = {
  marker: string // logbook notation, e.g. "WK 01"
  title: string
  description: string
}

// v2 about — "What I coach by" principles
export type TPrinciple = {
  label: string // short mono tag
  title: string
  description: string
}

// v2 services — the ways to work together
export type TService = {
  tag: string // short mono category tag
  title: string
  description: string
  features: string[]
}

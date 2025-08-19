import { NavLink, THeroCard } from '@/lib/types'
import HeroImg from '@/public/hero.jpg'
import HeroImg2 from '@/public/hero2.png'
import WithinImg from '@/public/WITHIN.svg'

export const NAV_LINKS: NavLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/schedule',
    label: 'Schedule',
  },
]

// images
export const HERO_IMAGE = HeroImg
export const HERO_IMAGE_2 = HeroImg2
export const WITHIN_IMAGE = WithinImg

export const HERO_CARD_INFO: THeroCard[] = [
  {
    title: 'Improve Your Strength',
    label: 'Fitness',
  },
  {
    title: 'Get Best Body Shapes',
    label: 'Bodybuilding',
  },
  {
    title: 'The Best Dietary Plans',
    label: 'Crossfit',
  },
]

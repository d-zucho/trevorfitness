import { NavLink, TDetailCard, THeroCard, TMissionCard } from '@/lib/types'
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

export const DETAIL_CARDS: TDetailCard[] = [
  {
    label: 'Gear',
    alt: 'Gear',
    image: '/cardImg1.png',
  },
  {
    label: 'Accessories',
    alt: 'Accessories',
    image: '/cardImg2.png',
  },
  {
    label: 'Workout Plans',
    alt: 'Workout Plans',
    image: '/cardImg3.png',
  },
]

export const MISSION_CARDS: TMissionCard[] = [
  {
    title: 'Inclusive Community',
    description:
      'Embracing Diversity, Fostering Belonging At FitFusion Gym, we celebrate the beauty of diversity.',
    icon: '/icons/users.svg',
  },
  {
    title: 'Expert Guidance',
    description: "We understand that each person's fitness journey is unique.",
    icon: '/icons/grad_hat.svg',
  },
  {
    title: 'Diverse Fitness Offerings',
    description:
      'At FitFusion, we believe in the power of diversity when it comes to fitness.',
    icon: '/icons/twinkle.svg',
  },
  {
    title: 'State-of-the-Art Approach',
    description:
      'To support your fitness aspirations, we invest in state-of-the-art equipment and facilities.',
    icon: '/icons/star.svg',
  },
  {
    title: 'Fun and Motivation',
    description:
      'We firmly believe that fitness should be enjoyable and motivational.',
    icon: '/icons/sun.svg',
  },
  {
    title: 'Embracing Challenges',
    description:
      'Our mission involves challenging our members to push their boundaries, step outside their comfort zones.',
    icon: '/icons/bars.svg',
  },
]

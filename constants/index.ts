import {
  NavLink,
  TContactInfo,
  TCredential,
  TDetailCard,
  THeroCard,
  TMissionCard,
  TTestimonial,
} from '@/lib/types'
import HeroImg from '@/public/hero.jpg'
import HeroImg2 from '@/public/hero2.png'
import WithinImg from '@/public/WITHIN.svg'
import { Mail, MapPin, Phone } from 'lucide-react'

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
export const MOBILE_NAV_LINKS: NavLink[] = [
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

export const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/trevorwoodard.fit/',
    icon: 'icons/instagram.svg',
    iconFill: '#FF0069',
  },
  {
    label: 'X',
    href: '/',
    icon: 'icons/x.svg',
  },
  {
    label: 'Mail',
    href: '/',
    icon: 'icons/mail.svg',
  },
]

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

export const ABOUT_STATS = [
  {
    title: 'Who is Trevor?',
    description:
      'As a passionate personal trainer, I believe in empowering\
              individuals to achieve their fitness goals through personalized\
              coaching and support.',
    stats: [
      {
        stat: '2000+',
        detail: 'Satisfied Clients',
      },
      {
        stat: 10,
        detail: 'Years of Experience',
      },
      {
        stat: 15,
        detail: 'Years in Fitness',
      },
    ],
  },
  {
    title: 'Qualifications',
    description:
      'I’m a certified fitness trainer with over 10 years of experience, specializing in personal training and nutrition. I’m passionate about helping individuals transform their lives and aim to create a welcoming environment where everyone can thrive, regardless of fitness level.',
    stats: [{ stat: 'ACE' }, { stat: 'NASM' }, { stat: 'CN' }],
  },
]

export const TESTIMONIALS: TTestimonial[] = [
  {
    name: 'John Doe',
    message: 'Trevor has changed my life for the better!',
    label: '32, Male',
  },
  {
    name: 'Jane Smith',
    message: 'Trevor is incredibly knowledgeable and supportive.',
    label: '46 Female',
  },
  {
    name: 'Sam Wilson',
    message: 'Trevor has created a welcoming community atmosphere here.',
    label: '29, Male',
  },
  {
    name: 'Alex Johnson',
    message: "Trevor's training programs are top-notch!",
    label: '35, Male',
  },
  {
    name: 'Emily Davis',
    message: "Trevor's approach is refreshing and effective!",
    label: '28, Female',
  },
  {
    name: 'Michael Brown',
    message: "Trevor's personalized approach has made all the difference!",
    label: '40, Male',
  },
]

export const CONTACT_INFO: TContactInfo[] = [
  {
    icon: Mail,
    label: 'Email Me',
    text: 'trevor1234@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call for Support',
    text: '+1 (999) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Location',
    text: 'Orange County, CA (and Worldwide Online)',
  },
]

export const CREDENTIALS_INFO: TCredential[] = [
  {
    title: 'NASM',
    description: 'Pes specialist',
    image: '/icons/nasm-icon.svg',
  },
  {
    title: 'AFAA',
    description: 'Certified Trainer',
    image: '/icons/afaa-icon.svg',
  },
  {
    title: 'CCS',
    description: 'Certified Corrective Specialist',
    image: '/icons/ccs-icon.svg',
  },
]

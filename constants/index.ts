import {
  NavLink,
  TContactInfo,
  TCredential,
  TDetailCard,
  TFirstWeek,
  THeroCard,
  TMissionCard,
  TPillar,
  TPrinciple,
  TService,
  TTestimonial,
} from '@/lib/types'
import HeroImg from '@/public/hero.jpg'
import HeroImg2 from '@/public/hero2.png'
import WithinImg from '@/public/WITHIN.svg'
import { Mail, MapPin, Phone } from 'lucide-react'
import { title } from 'process'

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
    href: 'https://www.instagram.com/tonedbytrevor/',
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

export const MY_METHODS = [
  {
    title: 'Kinetic Assessment',
    description:
      'We start with a deep-dive analysis of your biomechanics to identify imbalances before we ever touch a weight.',
  },
  {
    title: 'Hyper-Periodization',
    description:
      'Custom programming that evolves weekly progress, ensuring you never plateau and always keep the body guessing.',
  },
  {
    title: 'Metabolic Mastery',
    description:
      "Nutrition isn't a diet; it's fuel. We optimize your macros to match your trainingintensity and recovery needs.",
  },
  {
    title: 'Strength Synergy',
    description:
      'Combining strength training and functional movements for a comprehensive approach to power and endurance.',
  },
]

// v2 home — the partnership made visible, week by week
export const FIRST_WEEKS: TFirstWeek[] = [
  {
    marker: 'WK 00',
    title: 'The first conversation',
    description:
      'We talk before anything else. No workout, no weigh-in, no pressure. Just where you are now and where you want to be.',
  },
  {
    marker: 'WK 01',
    title: 'Your starting line',
    description:
      'A movement assessment and a plan built around your body, your schedule, and your goals. We start at your level, not someone else’s.',
  },
  {
    marker: 'WK 02',
    title: 'Finding your rhythm',
    description:
      'We dial the plan in as we learn what works for you. Form comes first; the weight can wait until it feels right.',
  },
  {
    marker: 'WK 04',
    title: 'The first check-in',
    description:
      'We look at what has changed together, and it is usually more than you expected. Then we adjust and keep going.',
  },
  {
    marker: 'ONWARD',
    title: 'Momentum',
    description:
      'The plan grows with you. This is where it stops feeling like starting and starts feeling like yours.',
  },
]

// v2 services — the ways to work together (placeholder copy, warm partner voice)
export const V2_SERVICES: TService[] = [
  {
    tag: 'One-on-one',
    title: 'Personal Training',
    description:
      'Just you and me. Every session, plan, and check-in is built around your body, your goals, and the week you are actually having.',
    features: [
      'Sessions shaped to your level',
      'A plan that adjusts every week',
      'Form first, weight later',
    ],
  },
  {
    tag: 'Balance',
    title: 'Recovery & Mindset',
    description:
      'Training is only half of it. We work on the sleep, stress, and habits that decide whether any of the rest actually sticks.',
    features: [
      'Sleep and stress routines',
      'Simple recovery protocols',
      'Habits that survive a real week',
    ],
  },
  {
    tag: 'Together',
    title: 'Small-Group Sessions',
    description:
      'Train alongside a few others at your level. The accountability of a group, without ever feeling lost in a crowd.',
    features: [
      'Small, level-matched groups',
      'Still real personal attention',
      'A room that is actually welcoming',
    ],
  },
]

// v2 services — the baseline that comes with every option
export const V2_SERVICE_INCLUDES: string[] = [
  'A plan made for you, not a template',
  'Weekly check-ins so you are never guessing',
  'Message access between sessions',
  'Honest coaching, and no upsells',
]

// v2 about — the coaching principles (placeholder copy, warm partner voice)
export const ABOUT_PRINCIPLES: TPrinciple[] = [
  {
    label: 'Form',
    title: 'Form before weight',
    description:
      'We earn every load. If a movement is not clean, we do not add to it. Progress you cannot control is not progress.',
  },
  {
    label: 'Bespoke',
    title: 'Your plan, not a template',
    description:
      'No two bodies, schedules, or histories are the same, so no two programs I write are either. Yours is built around your life.',
  },
  {
    label: 'Consistency',
    title: 'Consistency over intensity',
    description:
      'The best session is the one you will come back to on Thursday. We build habits that survive a bad week, not just a good one.',
  },
  {
    label: 'Honesty',
    title: 'Honest coaching, always',
    description:
      'I will tell you what is working and what is not. You will always know why we are doing what we are doing.',
  },
]

// v2 home — curated, beginner-relatable proof (not a testimonial wall)
export const V2_TESTIMONIALS: TTestimonial[] = [
  {
    name: 'Priya R.',
    message:
      'I had quit two gyms before this. Trevor never once made me feel behind. He met me where I was and I actually kept showing up.',
    label: 'Started at 34, nine months in',
  },
  {
    name: 'Marcus T.',
    message:
      'I thought I needed to get in shape before hiring a trainer. Turns out that is exactly backwards. Week one felt doable, and that changed everything.',
    label: 'Started at 41, one year in',
  },
  {
    name: 'Dana L.',
    message:
      'What stuck was the check-ins. Someone actually noticed the small wins with me. I have never had that with fitness before.',
    label: 'Started at 28, six months in',
  },
]

export const PILLARS: TPillar[] = [
  {
    title: 'Elite Personal Training',
    description:
      'Precision-engineered 1-on-1 coaching. Every rep, every set, and every recovery period is optimized for your specific biomechanics and goals.',
    facts: [
      '1-on-1 focused sessions',
      'Biometric Assessment',
      'Form Correction & Safety',
    ],
    link: 'Explore Training',
  },
  {
    title: 'Mindfulness & Recovery',
    description:
      'Balancing the body and mind. Integrating techniques for stress relief, sleep optimization, and recovery strategies to boost perfiormance and overall well-being.',
    facts: [
      'Guided Meditations',
      'Sleep Hygiene Practices',
      'Recovery Protocols',
    ],
    link: 'Discover Mindfulness',
  },
  {
    title: 'Group Fitness Sessions',
    description:
      'Join a community while getting fit and healthy. Our high-energy classes are designed to make fitness fun and accessible for everyone, regardless of experience level.',
    facts: [
      'Variety of classes',
      'Motivational Atmosphere',
      'Dynamic Workouts',
    ],
    link: 'Join a class',
  },
]

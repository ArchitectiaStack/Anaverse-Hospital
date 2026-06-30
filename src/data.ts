import { Doctor, Service, Facility, Article } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Specialist Polyclinic',
    description: 'Comprehensive outpatient care led by senior specialists in cardiology, pediatrics, neurology, and more.',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=400&auto=format&fit=crop',
    iconName: 'Stethoscope'
  },
  {
    id: '2',
    title: 'Inpatient Care',
    description: 'Highly comfortable and fully-equipped recovery wards staffed 24/7 by dedicated nursing teams.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop',
    iconName: 'Bed'
  },
  {
    id: '3',
    title: '24/7 Emergency Unit',
    description: 'Immediate medical intervention for life-threatening cases with on-call trauma surgeons.',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400&auto=format&fit=crop',
    iconName: 'AlertCircle'
  },
  {
    id: '4',
    title: 'Radiology & Imaging',
    description: 'State-of-the-art MRI, CT scan, digital X-rays, and ultrasound imaging for precise diagnosis.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop',
    iconName: 'Activity'
  },
  {
    id: '5',
    title: 'Clinical Laboratory',
    description: 'Accredited clinical and pathology laboratory providing highly accurate diagnostic results.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?q=80&w=400&auto=format&fit=crop',
    iconName: 'FlaskConical'
  },
  {
    id: '6',
    title: '24/7 Pharmacy',
    description: 'Fully stocked, quality-assured pharmacy service with expert pharmacological consultation.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop',
    iconName: 'Pills'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'dr. Andika Pratama, Sp.JP',
    specialty: 'Cardiovascular Specialist',
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
    available: true,
    schedule: 'Mon, Wed, Fri (09:00 - 13:00)',
    experience: '12 years'
  },
  {
    id: 'd2',
    name: 'dr. Sarah Wijaya, Sp.A',
    specialty: 'Pediatric Specialist',
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400&auto=format&fit=crop',
    available: true,
    schedule: 'Tue, Thu, Sat (10:00 - 15:00)',
    experience: '8 years'
  },
  {
    id: 'd3',
    name: 'dr. Budi Santoso, Sp.S',
    specialty: 'Neurology Specialist',
    rating: 4.9,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    available: false,
    schedule: 'Mon, Tue, Thu (14:00 - 18:00)',
    experience: '15 years'
  },
  {
    id: 'd4',
    name: 'dr. Linda Permata, Sp.OG',
    specialty: 'Obstetrics & Gynecology',
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    available: true,
    schedule: 'Wed, Fri, Sat (08:00 - 12:00)',
    experience: '10 years'
  },
  {
    id: 'd5',
    name: 'dr. Rian Hidayat, Sp.OT',
    specialty: 'Orthopedic Specialist',
    rating: 4.7,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    available: true,
    schedule: 'Tue, Thu (13:00 - 17:00)',
    experience: '7 years'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Intensive Care Unit (ICU)',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'f2',
    name: 'Executive VIP Ward',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'f3',
    name: 'Modern Surgical Suite',
    image: 'https://images.unsplash.com/photo-1516613993176-859a78e517ef?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'f4',
    name: 'Advanced Research Lab',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'f5',
    name: '24/7 Trauma Ambulance',
    image: 'https://images.unsplash.com/photo-1587350859728-117622bc786e?q=80&w=800&auto=format&fit=crop'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Understanding Hypertension: Causes, Symptoms, and Effective Prevention',
    category: 'Heart Health',
    date: '20 May 2026',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Hypertension is often called a silent killer. Learn the essential lifestyle adjustments and dietary choices to control high blood pressure effectively.',
    readTime: '5 min read'
  },
  {
    id: 'a2',
    title: 'The Essential Guide to Pediatric Vaccination Schedules in 2026',
    category: 'Child Health',
    date: '15 May 2026',
    image: 'https://images.unsplash.com/photo-1584515901407-d8f4247d59db?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Protect your little ones from preventable diseases. Review the updated, pediatrician-approved immunization timeline for toddlers and young children.',
    readTime: '4 min read'
  },
  {
    id: 'a3',
    title: 'Nutritional Powerhouses: Top Superfoods to Boost Immune Support',
    category: 'Healthy Living',
    date: '10 May 2026',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Discover simple, whole-food additions to your daily diet that significantly enhance wellness, vitality, and your body’s natural defense systems.',
    readTime: '3 min read'
  },
  {
    id: 'a4',
    title: 'Preventative Health Screenings: Critical Checkups for Every Stage of Life',
    category: 'Preventative Care',
    date: '02 May 2026',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=500&auto=format&fit=crop',
    excerpt: 'Early detection saves lives. Find out which diagnostic screenings, medical tests, and laboratory panels you need based on age, lifestyle, and history.',
    readTime: '6 min read'
  }
];

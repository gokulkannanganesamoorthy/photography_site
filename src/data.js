import editorial1 from './assets/portfolio/editorial_1.png';
import portrait1 from './assets/portfolio/portrait_1.png';
import commercial1 from './assets/portfolio/commercial_1.png';
import wedding1 from './assets/portfolio/wedding_1.png';
import editorial2 from './assets/portfolio/editorial_2.png';
import portrait2 from './assets/portfolio/portrait_2.png';

export const portfolioCategories = [
  { id: 'editorial', name: 'Editorial' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'wedding', name: 'Wedding' },
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Vogue Cover Shoot',
    category: 'editorial',
    image: editorial1,
    size: 'large',
  },
  {
    id: 2,
    title: 'Urban Souls',
    category: 'portrait',
    image: portrait1,
    size: 'small',
  },
  {
    id: 3,
    title: 'Neon Dreams',
    category: 'commercial',
    image: commercial1,
    size: 'medium',
  },
  {
    id: 4,
    title: 'Ethereal Love',
    category: 'wedding',
    image: wedding1,
    size: 'large',
  },
  {
    id: 5,
    title: 'Monochrome Gaze',
    category: 'portrait',
    image: portrait2,
    size: 'medium',
  },
  {
    id: 6,
    title: 'Industrial Fashion',
    category: 'editorial',
    image: editorial2,
    size: 'large',
  },
];

export const packages = [
  {
    id: 1,
    name: 'Essential',
    price: '$500',
    features: [
      '2 Hour Session',
      '20 Edited Photos',
      'Online Gallery',
      '1 Location',
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: '$1200',
    features: [
      'Half Day Session',
      '50 Edited Photos',
      'Online Gallery',
      '2 Locations',
      'Makeup Artist Included',
    ],
  },
  {
    id: 3,
    name: 'Luxury',
    price: '$2500',
    features: [
      'Full Day Session',
      'All Edited Photos',
      'Online Gallery',
      'Unlimited Locations',
      'Styling & Makeup',
      'Photo Book',
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Model',
    text: "The most professional and creative photographer I've worked with. The shots were absolutely stunning.",
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Creative Director',
    text: 'An incredible eye for detail. Delivered exactly what we needed for our campaign.',
  },
];

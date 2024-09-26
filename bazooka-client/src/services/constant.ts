import { TNavItems } from '@/types/tConstant';
import x from '@/assets/icons/social/x.png';
import linked_in from '@/assets/icons/social/linked_in.png';
import facebook from '@/assets/icons/social/facebook.png';
import github from '@/assets/icons/social/github.png';
import angelList from '@/assets/icons/social/angel_list.png';
import dribble from '@/assets/icons/social/dribble.png';
import telegram from '@/assets/icons/social/telegram.png';
import dyor from '@/assets/icons/social/dyor.jpg';
import dex from '@/assets/icons/social/dex.png';
import { TIndicatorsItem } from '@/types/indicator';

export const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
// export const baseUrl = "http://18.143.239.20:3002/v1";

// export const baseUrl = 'http://localhost:3002/v1';

export const navItems: TNavItems[] = [
  {
    title: 'My Claims',
    link: '/my_claims',
  },
  {
    title: 'Launch pad',
  },
  {
    title: 'Trading',
  },
  {
    title: 'Earn',
  },
  {
    title: 'More',
  },
];

// item list for footer
export const fItems = [
  {
    title: 'Product',
    items: [
      {
        item: 'Overview',
        link: '',
      },
      {
        item: 'Features',
        link: '',
      },
      {
        item: 'Solutions',
        link: '',
      },
      {
        item: 'Tutorials',
        link: '',
      },
      {
        item: 'Pricing',
        link: '',
      },
      {
        item: 'Releases',
        link: '',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        item: 'About Us',
        link: '',
      },
      {
        item: 'Careers',
        link: '',
      },
      {
        item: 'Press',
        link: '',
      },
      {
        item: 'News',
        link: '',
      },
      {
        item: 'Media Kit',
        link: '',
      },
      {
        item: 'Contact',
        link: '',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        item: 'Blog',
        link: '',
      },
      {
        item: 'Newsletter',
        link: '',
      },
      {
        item: 'Events',
        link: '',
      },
      {
        item: 'Help Centre',
        link: '',
      },
      {
        item: 'Tutorials',
        link: '',
      },
      {
        item: 'Support',
        link: '',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        item: 'Twitter',
        link: '',
      },
      {
        item: 'LinkedIn',
        link: '',
      },
      {
        item: 'Facebook',
        link: '',
      },
      {
        item: 'GitHub',
        link: '',
      },
      {
        item: 'AngelList',
        link: '',
      },
      {
        item: 'Dribble',
        link: '',
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        item: 'Terms',
        link: '',
      },
      {
        item: 'Privacy',
        link: '',
      },
      {
        item: 'Cookies',
        link: '',
      },
      {
        item: 'Licenses',
        link: '',
      },
      {
        item: 'Settings',
        link: '',
      },
      {
        item: 'Contact',
        link: '',
      },
    ],
  },
];

export const socials = [
  {
    icon: x,
    url: 'https://x.com/brokieinu',
  },
  {
    icon: telegram,
    url: 'https://t.me/BrokieInu',
  },
  {
    icon: dex,
    url: 'https://www.dextools.io/app/en/solana/pair-explorer/6F29wfFZmSnaCvQqBhaC1pZ5ysr5zwFPihjUbcu8YpDy?t=1717435424607',
  },
  {
    icon: dyor,
    url: 'https://dyor.io/token/EQC2wH1I9MVQCWvVCNfA85N_TF3tSI50DEE597QNdO66rclf',
  },
];


export const defaultAvatar =
  'https://kwunsplash.s3.us-east-2.amazonaws.com/avatar.jpg';

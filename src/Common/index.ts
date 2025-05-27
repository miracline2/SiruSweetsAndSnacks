import sweets from '../assets/Images/Sweets.png';
import kaaram from '../assets/Images/Karam.png';
import tutySpl from '../assets/Images/Thoothukudi-special.png';

export const overView = [
    {
        title: 'Siru Sweets & snacks',
        description: 'Traditional Taste, Digital Speed." "Siru Sweets & snacks - Taste of south tamilnadu'
    }
]

export const categories = [
    {
        id:1,
        title:'Sweets',
        image:sweets,
        descriptions:''
    },
      {
        id:2,
        title:'Thoothukudi Special',
        image:tutySpl,
        descriptions:''
    },
      {
        id:3,
        title:'Kaaram',
        image:kaaram,
        descriptions:''
    }
]

export const categoriesList = [
  {
    id: 1,
    category: 'Sweets',
     image:sweets,
    items: [
      'Kadalai mittai',
      'Ghee halwa',
      'Muscoth halwa',
      'Dumadai',
      'Cone cake',
      '1000 Star cake',
      'Nava dhaniya ladoo',
      'Macaroon',
      'Palcova',
    ],
    price: 1000,
  },
  {
    id: 2,
    category: 'Kaaram',
    image:kaaram,
    items: [
      'Kara sevu',
      'Mixture',
      'Kuchi chips',
      'Onion pakkoda',
      'Amman puram kara sevu',
      'Chips',
      'Kara boondi',
      'Pal muruku',
      'Muruku',
      'Thattai',
    ],
    price: 800,
  },
  {
    id: 3,
    category: 'Thoothukudi Special',
     image:tutySpl,
    items: [
      'Macaroon',
      'Nava dhaniya ladoo',    
      'Dum adai',
      'Ghee halwa',
      'Muscoth halwa',
      'Amman puram kara sevu',
      'Onion pakkoda',
      'Kara sevu',
      'Mixture',
      'Muruku',
    ],
    price: 1200,
  },
];

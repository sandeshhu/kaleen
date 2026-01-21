export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    rating: number;
  }
  
  export interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "The Aspen Berber",
      price: 299,
      category: "Wool",
      image:"https://images.unsplash.com/photo-1660394585016-508f949df960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVnfGVufDB8fDB8fHww",
      rating: 5,
    },
    {
      id: 2,
      name: "Nordic Grey Weave",
      price: 349,
      category: "Cotton Blend",
      image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&q=80&w=600&fm=webp",
      rating: 4,
    },
    {
      id: 3,
      name: "Sahara Jute",
      price: 189,
      category: "Natural Fiber",
      image:"https://images.unsplash.com/photo-1714926618653-39de3cf5b691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1Z3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
    },
    {
      id: 4,
      name: "Midnight Vintage",
      price: 459,
      category: "Hand-Knotted",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=600&fm=webp",
      rating: 5,
    }
  ];
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "The quality is absolutely unmatched. It completely transformed our living room into a sanctuary.",
      author: "Eleanor P.",
      role: "Interior Designer"
    }
  ];

  export interface ProductCollection {
    id: number;
    name: string;
    price: number;
    category: string;
    color: string;
    image: string;
    rating: number;
    isNew?: boolean;
  }
  
  export const productsCollection: ProductCollection[] = [
    {
      id: 1,
      name: "The Aspen Berber",
      price: 299,
      category: "Wool",
      color: "Cream",
      image:"https://images.unsplash.com/photo-1714926618653-39de3cf5b691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1Z3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      isNew: true
    },
    {
      id: 2,
      name: "Nordic Grey Weave",
      price: 349,
      category: "Cotton Blend",
      color: "Grey",
      image:"https://media.istockphoto.com/id/2156883918/photo/white-round-rug-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=M3Bu_XQ7vQIvzvuzxyfmK-fAg-pYlJncJ3PIT0Gdzwg=",
      rating: 4,
    },
    {
      id: 3,
      name: "Sahara Jute",
      price: 189,
      category: "Natural Fiber",
      color: "Beige",
      image:"https://plus.unsplash.com/premium_photo-1725729875250-05d56e636b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVnfGVufDB8fDB8fHww",
      rating: 5,
    },
    {
      id: 4,
      name: "Midnight Vintage",
      price: 459,
      category: "Hand-Knotted",
      color: "Blue",
      image:"/window.svg",
      rating: 5,
    },
    {
      id: 5,
      name: "Marrakesh Shag",
      price: 399,
      category: "Wool",
      color: "White",
      image:"/file.svg",
      rating: 5,
      isNew: true
    },
    {
      id: 6,
      name: "Urban Geometric",
      price: 249,
      category: "Cotton Blend",
      color: "Grey",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=600&fm=webp",
      rating: 4,
    },
    {
      id: 7,
      name: "Terracotta Runner",
      price: 159,
      category: "Hand-Knotted",
      color: "Red",
      image:"https://images.unsplash.com/photo-1603913996638-c01100417b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJ1Z3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
    },
    {
      id: 8,
      name: "Bohemian Flatweave",
      price: 279,
      category: "Natural Fiber",
      color: "Multicolor",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=600&fm=webp",
      rating: 4,
    }
  ];
  
  export const testimonial = [
    {
      id: 1,
      text: "The quality is absolutely unmatched. It completely transformed our living room into a sanctuary.",
      author: "Eleanor P.",
      role: "Interior Designer"
    }
  ];
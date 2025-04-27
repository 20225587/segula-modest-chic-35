
interface BannerSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export const homeBanners: BannerSlide[] = [
  {
    id: "banner-1",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
    title: "Modest Spring Collection",
    subtitle: "Embrace the season with our eco-friendly, faith-inspired designs",
    cta: {
      text: "Shop Now",
      link: "/categories/dresses"
    }
  },
  {
    id: "banner-2",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop",
    title: "Sustainable Fashion",
    subtitle: "Beautiful clothing that's kind to our planet",
    cta: {
      text: "Explore",
      link: "/sustainability"
    }
  },
  {
    id: "banner-3",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
    title: "New Arrivals",
    subtitle: "Discover our latest modest pieces",
    cta: {
      text: "View Collection",
      link: "/new-arrivals"
    }
  }
];

export const categoryBanners = {
  dresses: {
    id: "dresses-banner",
    image: "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?q=80&w=1471&auto=format&fit=crop",
    title: "Modest Dresses",
    subtitle: "Elegant and comfortable designs for every occasion"
  },
  tops: {
    id: "tops-banner",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1470&auto=format&fit=crop",
    title: "Modest Tops",
    subtitle: "Stylish and versatile tops for your everyday wardrobe"
  },
  bottoms: {
    id: "bottoms-banner",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1469&auto=format&fit=crop",
    title: "Modest Bottoms",
    subtitle: "Comfortable and stylish bottoms for any occasion"
  }
};

export const categoriesData = [
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1374&auto=format&fit=crop",
    link: "/categories/dresses",
  },
  {
    name: "Tops",
    image: "https://images.unsplash.com/photo-1582142407894-ec8a32d24a9d?q=80&w=1374&auto=format&fit=crop",
    link: "/categories/tops",
  },
  {
    name: "Bottoms",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1470&auto=format&fit=crop",
    link: "/categories/bottoms",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1555895423-9d3cc8aef68a?q=80&w=1470&auto=format&fit=crop",
    link: "/categories/accessories",
  },
];

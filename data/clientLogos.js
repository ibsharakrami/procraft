// Client logos data for the marquee section
// Using actual client logo images from /public/images/client_logos/

export const clientLogos = [
  {
    id: 1,
    name: "Sharma Space",
    logo: "/images/client_logos/sharmaspace-client-logo.png",
    website: null
  },
  {
    id: 2,
    name: "Alitqan",
    logo: "/images/client_logos/alitqan-client-logo.png",
    website: null
  },
  {
    id: 3,
    name: "ATIM",
    logo: "/images/client_logos/atim-client-logo.png",
    website: null
  },
  {
    id: 4,
    name: "BCJ",
    logo: "/images/client_logos/bcj-client-logo.png",
    website: null
  },
  {
    id: 5,
    name: "Carpenters & Co",
    logo: "/images/client_logos/carpenters&co-client-logo.png",
    website: null
  },
  {
    id: 6,
    name: "Euclase",
    logo: "/images/client_logos/euclase-client-logo.png",
    website: null
  },
  {
    id: 7,
    name: "Oway Repair",
    logo: "/images/client_logos/owwayrepair-client-logo.png",
    website: null
  },
  {
    id: 8,
    name: "Solyant",
    logo: "/images/client_logos/solyant-client-logo.png",
    website: null
  },
  {
    id: 9,
    name: "TVG",
    logo: "/images/client_logos/tvg-client-logo.png",
    website: null
  },
  {
    id: 10,
    name: "Hair & Skin Care",
    logo: "/images/client_logos/beautyshopIndia-client-logo.png",
    website: null
  }
];

// Helper function to get all logos (can be used for filtering later)
export const getAllLogos = () => {
  return clientLogos;
};

// Helper function to get logos with websites (if needed for clickable vs non-clickable)
export const getClickableLogos = () => {
  return clientLogos.filter(logo => logo.website);
};

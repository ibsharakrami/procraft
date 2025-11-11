// Client logos data for the marquee section
// Using placeholder SVG backgrounds from Unsplash for demonstration
// Replace with actual client logo files when available

export const clientLogos = [
  {
    id: 1,
    name: "Government of Dubai",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80",
    website: "https://www.dubai.ae"
  },
  {
    id: 2,
    name: "UAE Ministry of Energy",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 3,
    name: "MESHICO",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 4,
    name: "NAFFCO",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 5,
    name: "NBA",
    logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 6,
    name: "Binladin Contracting Group",
    logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 7,
    name: "Bomb Cosmetics",
    logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 8,
    name: "M&S",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 9,
    name: "Sports Direct",
    logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 10,
    name: "D&D London",
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 11,
    name: "Caterpillar",
    logo: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 12,
    name: "Island Falcon Group",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 13,
    name: "Harbour Hotels",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 14,
    name: "Capita",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 15,
    name: "Fit Republik",
    logo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=80&fit=crop&q=80",
    website: null
  },
  {
    id: 16,
    name: "Studio Republik",
    logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=80&fit=crop&q=80",
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

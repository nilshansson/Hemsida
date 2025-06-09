import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/avatar/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/avatar/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/avatar/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/avatar/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const statsFactData = {
  number: "01",
  name: "Stats & facts",
  heading: "High quality web design solutions you can trust.",
  description:
    "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
  scoreData: [
    {
      number: 40,
      numberValue: "K",
      scoreDescp: "People who have launched their Years",
    },
    {
      number: 238,
      scoreDescp: "Experienced professionals ready to assist",
    },
    {
      number: 3,
      numberValue: "M",
      scoreDescp: "Support through messages and live consultations",
    },
  ],
};

const servicesData = {
  number: "03",
  name: "Comission A Work",
  heading: "Comission A Work",
  description:
    "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
  data: [
    {
      id: 1,
      image: "/images/home/services/textmessage hemsida.png",
      heading: "1. Share Your Vision – or Let Me Surprise You",
      descp:
        "Think about the size, colors, or perhaps a special memory you'd like the painting to reflect. Whether you have a clear idea or want to give me creative freedom, I'm happy to work in the way that suits you best.",
    },
    {
      id: 2,
      image: "/images/home/services/picasso-kollage.jpg",
      heading: "2. Send Me Inspiration",
      descp:
        "If you already have something in mind, please send at least three reference images along with a short note about what speaks to you in each one—colors, mood, shapes, or memories. It helps me capture your vision more clearly.",
    },
    {
      id: 3,
      image: "/images/home/services/livingroom-hemsida.avif",
      heading: "3. Let's Make It Yours",
      descp:
        "If possible, send me a photo of the space where you plan to hang the painting. This helps me tailor the artwork to your environment. We’ll then agree on the size, timeline, and price before I begin.",
    },
  ],
};

const testimonialData = {
  data_1: {
    preTitle: "Hear from them",
    title:
      "Our Year redesign was flawless. They understood our vision perfectly!",
    author: "Albert Flores",
    company: "MasterCard",
  },
  data_2: {
    preTitle: "Hear from them",
    title:
      "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
    author: "Robert Fox",
    company: "Mitsubishi",
  },
  data_3: {
    preTitle: "Hear from them",
    title: "Super smooth process with incredible results. highly recommend!",
    author: "Jenny Wilson",
    company: "Pizza Hut",
  },
};

const teamData = {
  number: "06",
  data: [
    {
      image: "/images/home/team/team-img-1.png",
      name: "Martha Finley",
      position: "Creative Director",
      socialLinks: [
        {
          icon: "/images/Icon/arrow-icon.svg",
          link: "https://www.youtube.com/watch?v=Hk0nzPMt2nI",
        },
      ],
    },

    {
      image: "/images/home/team/team-img-3.png",
      name: "Glenna Snyder",
      position: "Lead Designer",
      socialLinks: [
        {
          icon: "/images/Icon/arrow-icon.svg",
          link: "https://www.youtube.com/watch?v=ZNpLDFOFmUw",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-4.png",
      name: "Albert Flores",
      position: "UX/UI Developer",
      socialLinks: [
        {
          icon: "/images/Icon/arrow-icon.svg",
          link: "https://www.youtube.com/watch?v=Ss9n3l94z4o",
        },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Small but Bold",
      planPrice: "1000-2500 kr",
      planDescp:
        "Perfect for small spaces or thoughtful gifts. Art that makes a statement, even at 20x20cm.",
      planIncludes: [
        "Original acrylic painting on canvas",
        "Size: approx. 20x20 cm to 40x40 cm",
        "Signed and dated on the back",
        "Comes with a surprise art magnet",
      ],
    },
    {
      planName: "Medium Dream",
      tag: "Most popular",
      planPrice: "2500-4000 SEK",
      planDescp:
        "Balanced in size, bold in personality. Ideal for adding color and story to any room.",
      planIncludes: [
        "Original acrylic painting, medium format",
        "Size: approx. 50x50 cm to 80x80 cm",
        "Signed front or back, your choice",
        "Art magnet + exclusive promo code for your next piece",
      ],
    },
    {
      planName: "Big Statement",
      planPrice: "4000-6000 SEK",
      planDescp:
        "For those who want the painting to be the room. A bold, large-scale dreamscape.",
      planIncludes: [
        "Original large-format painting",
        "Size: approx. 90x90 cm to 120x100 cm",
        "Personally delivered to your home",
        "Signed, titled, and dated",
        "Comes with a surprise art magnet",
        "Personal voice note about the painting’s story",
      ],
    },
  ],

  partnerLogo: [
    {
      light: "/images/home/pricing/partner-1.svg",
      dark: "/images/home/pricing/partner-dark-1.svg",
    },
    {
      light: "/images/home/pricing/partner-2.svg",
      dark: "/images/home/pricing/partner-dark-2.svg",
    },
    {
      light: "/images/home/pricing/partner-3.svg",
      dark: "/images/home/pricing/partner-dark-3.svg",
    },
    {
      light: "/images/home/pricing/partner-4.svg",
      dark: "/images/home/pricing/partner-dark-4.svg",
    },
    {
      light: "/images/home/pricing/partner-5.svg",
      dark: "/images/home/pricing/partner-dark-5.svg",
    },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "What services does your agency offer?",
      faq_ans:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      faq_que: "How long does a typical project take?",
      faq_ans:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      faq_que: "Do you offer custom designs, or do you use templates?",
      faq_ans:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      faq_que: "What’s the cost of a project?",
      faq_ans:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      faq_que: "Do you provide ongoing support after project completion?",
      faq_ans:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
  ],
};
const contactData = {
  keypoint: ["Always-On Customer Support", "Service Across the Globe"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Onboarding & Success Manager",
  },
};
const aboutusStats = [
  {
    number: 25,
    postfix: "+",
    title: "Private and corporate collectors",
    descp:
      "Building long-term value through original works placed in homes, studios, and curated interiors around the world.",
  },
  {
    number: 7,
    title: "Solo and group exhibitions",
    descp:
      "Featured in both emerging and established art spaces, connecting with diverse audiences through color and form.",
  },
  {
    number: 3,
    title: "Live painting performances",
    descp:
      "Engaging audiences in real time through expressive, spontaneous creation—bringing the artistic process to life.",
  },
];
const servicesSliderData = [
  "Did you know: I only started painting when I was 21",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};

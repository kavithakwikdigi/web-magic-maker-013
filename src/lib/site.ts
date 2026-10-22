import heroTeam from "@/assets/hero-team.jpg";
import planning from "@/assets/planning.jpg";
import workspace from "@/assets/workspace.jpg";
import meeting from "@/assets/meeting.jpg";

export const images = { heroTeam, planning, workspace, meeting };

export const contact = {
  phone: "+91 9849446927",
  tel: "tel:+919849446927",
  email: "kavitham6574@gmail.com",
  location: "Ameerpet, Hyderabad, Telangana, India",
  whatsapp: "https://wa.me/919849446927",
  whatsappDefault:
    "https://wa.me/919849446927?text=" +
    encodeURIComponent("Hello Kwikdigi, I would like to know more about your digital marketing services."),
  instagram: "https://www.instagram.com/kwikdigiofficial/",
  linkedin: "https://www.linkedin.com/in/kavitha-m-33a181430/",
  facebook: "https://www.facebook.com/profile.php?id=61593538270069",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  heading: string;
  description: string;
  includes: string[];
  benefits: string[];
  cta: string;
  image: string;
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    short: "Get found by people searching for what you offer.",
    heading: "Help Your Business Get Found on Google",
    description:
      "Improve your website's search visibility with a structured SEO strategy that focuses on relevant keywords, useful content, technical improvements, and quality backlinks.",
    includes: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Optimization", "Local SEO", "Backlink Strategy", "SEO Performance Reporting"],
    benefits: ["Clearer understanding of how customers search", "Pages structured for both people and search engines", "Regular, readable progress reports"],
    cta: "Discuss Your SEO Goals",
    image: workspace,
    faqs: [
      { q: "How long does SEO take to show results?", a: "SEO is a gradual process. Many websites see early improvements within a few months, but timelines depend on competition, website condition, and content. We do not promise specific rankings." },
      { q: "Do you guarantee first-page rankings?", a: "No. Search engines control rankings, and no honest agency can guarantee them. We focus on doing the right work consistently and reporting progress clearly." },
      { q: "Will you need access to my website?", a: "For on-page and technical improvements, access to your website and Google Search Console is usually helpful. We will explain exactly what is needed." },
    ],
    related: ["local-seo", "content-marketing", "website-designing"],
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
    short: "Appear when customers are actively searching.",
    heading: "Reach the Right Audience at the Right Time",
    description:
      "Plan and manage Google Ads campaigns designed around your audience, business objectives, budget, and measurable campaign performance.",
    includes: ["Campaign Planning", "Keyword Targeting", "Ad Copywriting", "Conversion Tracking Setup", "Performance Optimization"],
    benefits: ["Campaigns tied to a clear business objective", "Budget spent on relevant searches", "Transparent reporting on what is working"],
    cta: "Plan a Google Ads Campaign",
    image: meeting,
    faqs: [
      { q: "What budget do I need for Google Ads?", a: "It depends on your industry, location, and goals. We will discuss a realistic starting budget that lets us learn from the data without overspending." },
      { q: "Is the ad spend included in your fee?", a: "Ad spend is paid directly to Google. Management fees are discussed separately and agreed before work begins." },
      { q: "Can you guarantee leads?", a: "No. We plan campaigns carefully and improve them using performance data, but results depend on many factors including your offer and market." },
    ],
    related: ["meta-ads", "landing-page-design", "digital-marketing-strategy"],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads Management",
    short: "Facebook and Instagram campaigns with thoughtful creative.",
    heading: "Turn Attention into Meaningful Action",
    description:
      "Reach relevant audiences through Facebook and Instagram advertising with thoughtful creative, audience targeting, and campaign optimization.",
    includes: ["Audience Research", "Campaign Setup", "Creative Testing", "Retargeting (where appropriate)", "Performance Analysis"],
    benefits: ["Ads designed to stop the scroll", "Audiences matched to your ideal customer", "Testing that informs future creative"],
    cta: "Explore Meta Ads",
    image: planning,
    faqs: [
      { q: "Do you create the ad designs?", a: "Yes, we can plan and design static and simple video creatives for your campaigns, or work with assets you already have." },
      { q: "Which is better: Meta Ads or Google Ads?", a: "They serve different purposes. Google Ads reaches people searching; Meta Ads reaches people based on interests and behaviour. Many businesses benefit from both." },
      { q: "Do I need a Facebook business page?", a: "Yes, a Facebook Page and a Meta Business account are required. We can help you set them up correctly." },
    ],
    related: ["social-media-marketing", "google-ads", "landing-page-design"],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "A consistent, recognizable brand on social platforms.",
    heading: "Build a Consistent and Recognizable Brand",
    description:
      "Create a stronger social media presence through strategic content planning, professional static posts, reels, captions, and audience engagement.",
    includes: ["Content Calendars", "Instagram Marketing", "Facebook Marketing", "Static Post Design", "Reels Planning", "Content Strategy"],
    benefits: ["A planned, consistent posting rhythm", "Visuals that match your brand", "Content ideas grounded in your audience"],
    cta: "Build Your Social Presence",
    image: planning,
    faqs: [
      { q: "Which platforms do you manage?", a: "We primarily work with Instagram and Facebook, and can discuss other platforms based on your audience." },
      { q: "How many posts will I get each month?", a: "Posting frequency is agreed based on your goals and budget. We share a content calendar for approval before publishing." },
      { q: "Do you reply to comments and messages?", a: "Engagement support can be included. We will agree on the scope and response guidelines upfront." },
    ],
    related: ["meta-ads", "content-marketing", "digital-marketing-strategy"],
  },
  {
    slug: "website-designing",
    name: "Website Designing",
    short: "Clean, modern, mobile-friendly websites.",
    heading: "Beautiful Websites Built Around Your Business",
    description:
      "Create clean, modern, mobile-friendly websites that communicate your value, build trust, and help visitors take the next step.",
    includes: ["UI/UX Design", "Responsive Layouts", "Landing Pages", "Website Structure", "User-Friendly Forms", "On-Page SEO Fundamentals"],
    benefits: ["A website that explains your business clearly", "Designs that work on every screen size", "Clear paths for visitors to contact you"],
    cta: "Start Your Website Project",
    image: workspace,
    faqs: [
      { q: "How long does a website project take?", a: "A simple business website may take a few weeks; larger projects take longer. We share a timeline once the scope is clear." },
      { q: "Will my website work on mobile?", a: "Yes. Every design is planned for mobile, tablet, and desktop." },
      { q: "Do I need to provide content?", a: "Your knowledge of the business is essential. We can help shape and write the content based on your input." },
    ],
    related: ["website-development", "landing-page-design", "seo"],
  },
  {
    slug: "website-development",
    name: "Website Development",
    short: "Responsive, maintainable, functional web experiences.",
    heading: "Bring Your Digital Experience to Life",
    description:
      "Develop responsive and maintainable web experiences with clear navigation, functional interactions, and a focus on usability.",
    includes: ["Frontend Implementation", "Responsive Development", "Form Integration", "Performance Optimization", "Website Testing"],
    benefits: ["Fast, reliable pages", "Forms and interactions that work", "A codebase that is easy to maintain"],
    cta: "Discuss Website Development",
    image: workspace,
    faqs: [
      { q: "Can you redesign my existing website?", a: "Yes. We review your current site, keep what works, and rebuild what needs improvement." },
      { q: "Do you provide hosting?", a: "We can advise on suitable hosting and help with setup. Hosting costs are separate." },
      { q: "Will I be able to update the site myself?", a: "Where needed, we can plan the site so common updates are simple, and walk you through them." },
    ],
    related: ["website-designing", "landing-page-design", "seo"],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    short: "Content that explains, educates, and connects.",
    heading: "Content That Connects With Your Audience",
    description:
      "Plan relevant website content, blog articles, social captions, and educational resources that communicate your brand's value.",
    includes: ["Content Strategy", "Website Copy", "Blog Articles", "Social Captions", "Educational Resources"],
    benefits: ["A clear, consistent brand voice", "Content that answers real customer questions", "Support for SEO and social channels"],
    cta: "Plan Your Content",
    image: planning,
    faqs: [
      { q: "Do you write in a specific tone?", a: "We adapt to your brand and audience, and agree on a tone of voice before writing." },
      { q: "Is the content original?", a: "Yes. All content is written for your business. We do not copy material from other sites." },
      { q: "Can content help SEO?", a: "Helpful, well-structured content supports SEO, but results depend on many factors and are never guaranteed." },
    ],
    related: ["seo", "social-media-marketing", "digital-marketing-strategy"],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Be visible to customers searching nearby.",
    heading: "Connect With Customers Searching Locally",
    description:
      "Improve local search visibility through relevant location-based content, business profile optimization, and local SEO fundamentals.",
    includes: ["Google Business Profile Optimization", "Location-Based Content", "Local Citations", "Review Strategy Guidance", "Local Performance Tracking"],
    benefits: ["A complete, accurate business profile", "Better relevance for nearby searches", "Clear guidance on encouraging honest reviews"],
    cta: "Improve Local Visibility",
    image: meeting,
    faqs: [
      { q: "What is a Google Business Profile?", a: "It is the free listing that appears in Google Maps and local search results, showing your hours, location, and reviews." },
      { q: "Can you add fake reviews?", a: "No. We never create fake reviews. We help you ask real customers for honest feedback." },
      { q: "Is Local SEO only for shops?", a: "No. Any business serving a specific area — clinics, institutes, consultants — can benefit." },
    ],
    related: ["seo", "content-marketing", "google-ads"],
  },
  {
    slug: "landing-page-design",
    name: "Landing Page Design",
    short: "Focused pages built around one campaign goal.",
    heading: "Turn More Visits into Valuable Enquiries",
    description:
      "Create focused landing pages with clear messaging, strong calls to action, and a user experience built around a specific campaign goal.",
    includes: ["Message & Offer Planning", "Conversion-Focused Layout", "Enquiry Forms", "Mobile Optimization", "Tracking Setup"],
    benefits: ["One clear message per page", "Fewer distractions, clearer action", "Ready to pair with ad campaigns"],
    cta: "Design a Landing Page",
    image: workspace,
    faqs: [
      { q: "How is a landing page different from a website?", a: "A landing page focuses on one goal, such as an enquiry or registration, usually for a specific campaign." },
      { q: "Can you connect it to my ads?", a: "Yes. We plan landing pages to work alongside Google Ads and Meta Ads campaigns." },
      { q: "Do you write the copy?", a: "Yes, we can write or refine the page copy based on your offer." },
    ],
    related: ["google-ads", "meta-ads", "website-designing"],
  },
  {
    slug: "digital-marketing-strategy",
    name: "Digital Marketing Strategy",
    short: "A practical roadmap for your digital growth.",
    heading: "A Clear Plan for Your Digital Growth",
    description:
      "Build a practical marketing roadmap based on your business goals, target audience, channels, budget, and available performance data.",
    includes: ["Business & Audience Review", "Channel Selection", "Budget Planning", "Messaging Framework", "Measurement Plan"],
    benefits: ["Clarity on where to focus first", "Channels matched to your audience", "A plan you can act on"],
    cta: "Build Your Strategy",
    image: meeting,
    faqs: [
      { q: "Who is a strategy session for?", a: "Businesses that want clarity before investing in marketing, or that feel their current efforts are scattered." },
      { q: "Do you also execute the plan?", a: "We can, or you can use the roadmap with your own team." },
      { q: "What information should I prepare?", a: "Your goals, target customers, current marketing activity, and a rough budget are a great start." },
    ],
    related: ["seo", "google-ads", "social-media-marketing"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

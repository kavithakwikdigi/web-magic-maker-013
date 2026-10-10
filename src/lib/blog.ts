import { images } from "./site";

export const categories = ["SEO", "Google Ads", "Meta Ads", "Social Media", "Website Design", "Digital Strategy"] as const;
export type Category = (typeof categories)[number];

export type Article = {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  minutes: number;
  image: string;
  service: string;
  sections: { h: string; p: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "digital-marketing-basics",
    title: "Digital Marketing Basics: A Beginner's Guide",
    category: "Digital Strategy",
    excerpt: "A simple overview of the main digital marketing channels and how they fit together for a growing business.",
    minutes: 6,
    image: images.planning,
    service: "digital-marketing-strategy",
    sections: [
      { h: "What is digital marketing?", p: ["Digital marketing is any effort to reach and persuade customers using online channels — search engines, social media, email, websites, and online ads. For most businesses, it is now the first place customers look before making a decision."] },
      { h: "The main channels", p: ["Each channel plays a different role. Understanding them helps you decide where to start."], list: ["Website: your digital home, where people learn about you and get in touch.", "SEO: helps your website appear in unpaid search results.", "Paid ads: Google Ads and Meta Ads put your message in front of chosen audiences.", "Social media: builds familiarity and trust over time.", "Content: articles, guides, and posts that answer customer questions."] },
      { h: "How they work together", p: ["Channels are strongest when connected. An ad brings someone to a landing page; helpful content builds trust; social media keeps you visible; SEO brings ongoing visitors. Your website ties it all together."] },
      { h: "Where to begin", p: ["Start with clarity: who your customer is, what problem you solve, and what action you want people to take. Then choose one or two channels that match your audience and budget, and build from there."] },
    ],
  },
  {
    slug: "on-page-seo-explained",
    title: "On-Page SEO Explained in Simple Terms",
    category: "SEO",
    excerpt: "What on-page SEO really means, and the practical changes that help search engines and visitors understand your pages.",
    minutes: 5,
    image: images.workspace,
    service: "seo",
    sections: [
      { h: "What is on-page SEO?", p: ["On-page SEO covers everything you can improve on your own web pages to help search engines understand them — and to help visitors find what they need."] },
      { h: "The essentials", p: ["A few fundamentals make a big difference:"], list: ["A clear, descriptive page title.", "A meta description that summarises the page.", "One main heading (H1) and logical subheadings.", "Helpful content that answers the visitor's question.", "Descriptive image alt text.", "Internal links to related pages."] },
      { h: "Write for people first", p: ["Search engines increasingly reward content that is genuinely useful. Stuffing keywords makes pages harder to read and rarely helps. Write naturally, cover the topic well, and make the next step obvious."] },
      { h: "Keep improving", p: ["On-page SEO is never finished. Review your key pages regularly, update outdated information, and use Google Search Console to see which searches bring people to your site."] },
    ],
  },
  {
    slug: "how-keyword-research-helps",
    title: "How Keyword Research Helps Your Website",
    category: "SEO",
    excerpt: "Learn how understanding the words your customers use can shape better content, pages, and campaigns.",
    minutes: 5,
    image: images.meeting,
    service: "seo",
    sections: [
      { h: "What is keyword research?", p: ["Keyword research is the process of discovering the words and phrases people type into search engines when looking for products, services, or information like yours."] },
      { h: "Why it matters", p: ["It shows you how customers describe their needs — which is often different from how businesses describe themselves. This insight shapes your page titles, content topics, and ad targeting."] },
      { h: "Types of keywords", p: [""], list: ["Informational: 'what is local SEO'", "Commercial: 'best digital marketing agency in Hyderabad'", "Transactional: 'hire SEO consultant'", "Local: 'website designer near Ameerpet'"] },
      { h: "Putting it to use", p: ["Group related keywords by topic and match each group to one page. This keeps your site organised, avoids pages competing with each other, and makes your content more focused."] },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads: Understanding the Difference",
    category: "Google Ads",
    excerpt: "Both platforms can work well — but they reach people in very different moments. Here's how to think about each.",
    minutes: 6,
    image: images.meeting,
    service: "google-ads",
    sections: [
      { h: "Intent versus interest", p: ["Google Ads mostly reaches people who are actively searching for something. Meta Ads (Facebook and Instagram) reaches people based on their interests, demographics, and behaviour — often before they are searching."] },
      { h: "When Google Ads fits", p: ["Google Ads works well when customers already know they need your service and search for it — for example, emergency repairs, professional services, or specific products."] },
      { h: "When Meta Ads fits", p: ["Meta Ads works well for building awareness, launching new offers, visual products, events, and reaching people who might not yet know you exist."] },
      { h: "Using both", p: ["Many businesses use both: Meta to build awareness and Google to capture demand. The right mix depends on your audience, offer, and budget — and it's worth testing carefully before scaling."] },
    ],
  },
  {
    slug: "social-media-content-ideas",
    title: "Social Media Content Ideas for Small Businesses",
    category: "Social Media",
    excerpt: "Practical, low-effort content ideas to keep your social media consistent and genuinely interesting.",
    minutes: 4,
    image: images.planning,
    service: "social-media-marketing",
    sections: [
      { h: "Consistency beats perfection", p: ["You don't need viral posts. A steady rhythm of useful, recognisable content builds familiarity and trust over time."] },
      { h: "Ideas you can start with", p: [""], list: ["Answer one common customer question each week.", "Share a behind-the-scenes look at how you work.", "Explain a product or service in a short reel.", "Share tips related to your industry.", "Celebrate milestones and team moments.", "Repost genuine customer feedback (with permission)."] },
      { h: "Plan with a calendar", p: ["A simple monthly content calendar removes daily guesswork. Mix educational, promotional, and personal posts so your feed doesn't feel like a constant advertisement."] },
    ],
  },
  {
    slug: "website-design-mistakes",
    title: "Website Design Mistakes That Affect User Experience",
    category: "Website Design",
    excerpt: "Common design issues that frustrate visitors — and simple ways to fix them.",
    minutes: 5,
    image: images.workspace,
    service: "website-designing",
    sections: [
      { h: "First impressions count", p: ["Visitors decide quickly whether a website is worth their time. Small design problems can quietly push them away."] },
      { h: "Common mistakes", p: [""], list: ["Unclear headline — visitors can't tell what you do.", "Poor mobile layout — text too small, buttons too close.", "Slow loading caused by oversized images.", "No obvious way to get in touch.", "Low contrast text that is hard to read.", "Too many competing messages on one page."] },
      { h: "Simple fixes", p: ["Lead with a clear statement of what you offer. Test your site on a phone. Compress images. Put contact options where people expect them. And give each page one main goal."] },
    ],
  },
  {
    slug: "what-is-local-seo",
    title: "What Is Local SEO and Why Does It Matter?",
    category: "SEO",
    excerpt: "How local search works and what businesses can do to appear when nearby customers are looking.",
    minutes: 5,
    image: images.meeting,
    service: "local-seo",
    sections: [
      { h: "Local search, explained", p: ["When someone searches for 'digital marketing agency near me' or 'clinic in Ameerpet', search engines show results based on location. Local SEO helps your business appear in those results and on Google Maps."] },
      { h: "Key elements", p: [""], list: ["A complete, accurate Google Business Profile.", "Consistent name, address, and phone across the web.", "Location-relevant content on your website.", "Genuine customer reviews and thoughtful replies."] },
      { h: "Why it matters", p: ["Local searches often come from people ready to visit, call, or enquire. Being visible in these moments can be valuable for service businesses, shops, clinics, and institutes."] },
    ],
  },
  {
    slug: "practical-digital-marketing-plan",
    title: "How to Create a Practical Digital Marketing Plan",
    category: "Digital Strategy",
    excerpt: "A step-by-step approach to building a marketing plan you can actually follow.",
    minutes: 7,
    image: images.planning,
    service: "digital-marketing-strategy",
    sections: [
      { h: "Start with a goal", p: ["A useful plan begins with one clear objective — more enquiries, more store visits, more course registrations. Make it specific enough to measure."] },
      { h: "Know your audience", p: ["Describe your ideal customer: what they need, where they spend time online, and what makes them trust a business."] },
      { h: "Choose your channels", p: ["Pick the channels that match your audience and budget. It is better to do two channels well than five poorly."] },
      { h: "Plan, execute, review", p: ["Set a simple monthly schedule of activities, decide how you'll measure progress, and review results regularly."], list: ["Discover: understand the business and audience.", "Plan: select channels and messages.", "Execute: deliver the campaigns and content.", "Improve: review results and refine."] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

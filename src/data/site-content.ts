// Copy source: pre-animation-handover homepage (68cd144), corroborated by
// 2026-10-07-website-architecture-and-copy-v02.md. Hero/01/02 retain owner edits.
export const primaryContact = "mailto:clint@kri8it.com";
export const navigation = [
  { label: "Services", to: "/services" }, { label: "About", to: "/about" },
  { label: "Travel", to: "/travel-tourism" }, { label: "Automotive", to: "/automotive" },
  { label: "Portfolio", to: null }, { label: "Blog", to: null },
  { label: "Contact", to: "/#contact" },
];
export const hero = {
  eyebrow: "Digital consultancy and delivery",
  title: "Clearer direction that moves business forward.",
  description: "Kri8it is a strategic growth partner that helps businesses make informed decisions about brand, websites, marketing, AI and automation. We work with you to understand opportunities for measurable change, then bring the strategy and practical skills to turn the agreed direction into use.",
  experience: "Over 25 years of digital experience, with the business and its people at the centre of the work.",
};
export const clients = ["Natural Selection", "Springbok Atlas", "Pembroke Privacy", "Safari Online", "Art of Safari", "Exclusive Books", "Wildlife Safari", "Mahindra", "Volkswagen"];
export const capabilities = [
  { title: "Brand and positioning", text: "Clarify what your business stands for, who it serves and how to express that through messaging, identity and content your team can use consistently." },
  { title: "Websites and digital platforms", text: "Plan and build around the customer's purpose: finding information, understanding an offer, making an enquiry or completing a purchase. Consider the people who will manage the website after launch." },
  { title: "Marketing and performance", text: "Set the audience, message and purpose of the activity. Bring SEO, content, paid media, email and measurement into a plan that gives each a clear job." },
  { title: "AI, automation and systems", text: "Assess where technology can take on defined work, how it fits existing tools and which decisions people must retain. Scope the technical requirements before committing to a solution." },
];
export const context = {
  title: "A finished piece of work still has a job to do.",
  paragraphs: [
    "A brand identity needs to be usable in the places customers meet the business. A website needs to help someone find the right information and complete the next step. A campaign needs a relevant message, a destination and a way to understand the response.",
    "We consider those uses while planning and delivering the work. Looking right is part of the job; how the work functions, who will use it and what happens next deserve attention too.",
  ],
};
export const automation = {
  title: "Where AutomAi8 fits.",
  paragraphs: [
    "Kri8it is the agency and consulting partner. AutomAi8 is Kri8it's automation and AI brand.",
    "AutomAi8 can support a wider engagement or a specific need around lead management, retention, attribution or workflows. Where AI is involved, we define its role, the decisions that need human judgement and what should happen when it cannot complete the task as intended.",
    "Specific connections, migrations, access requirements and third-party costs are assessed during scoping and testing.",
  ],
};
export const fit = {
  title: "Start with a question your business needs to answer.",
  paragraphs: [
    "We work with leaders and teams who want considered advice and are willing to contribute their knowledge to the work.",
    "Automotive is a particular focus, building on our experience in the sector. Across other businesses, fit depends on the question, the people involved and the help required.",
  ],
};
export const engagement = {
  eyebrow: "Engagement model",
  title: "How we work together.",
  intro: "Kri8it engages as a strategic growth and delivery partner through a clear, phased pathway tailored to your business goals.",
  steps: [
    { title: "Define the question", text: "Understand the context, audience, business objective and evidence before choosing solutions." },
    { title: "Scope the useful work", text: "Agree clear boundaries, priorities and measures for success across brand, digital, marketing or automation." },
    { title: "Agree delivery and responsibilities", text: "Establish who is doing what between Kri8it and your internal team for clear accountability." },
    { title: "Put the direction into use", text: "Execute high-quality strategy, design, development or automation that functions as intended." },
    { title: "Support and refine where required", text: "Provide agreed ongoing support, team enablement and refinement as your business grows." },
  ],
};
export const invitation = {
  title: "Tell us what you want the work to achieve.",
  paragraphs: [
    "You may need a clearer position, a better website, a considered marketing plan or help deciding where AI belongs.",
    "Bring us the context, what you have already tried and the question you need to answer. We can talk through what a useful next step would involve.",
  ],
};
export const response = {
  eyebrow: "Choose the right response",
  paragraphs: [
    "We help you look beyond the immediate request. Before a rebrand, what has changed in the business? Before a website build, what do customers need to understand or do? Before a campaign, who are you trying to reach, and what should happen when they respond?",
    "Your team brings the knowledge of the business. We bring a consulting perspective and digital experience to help assess the options, challenge assumptions and agree priorities.",
    "The direction should be clear enough for the people doing the work to understand what they are aiming for and how it will be assessed.",
  ],
};
export const process = [
  { title: "Map", text: "Understand the business, the audience, the purpose of the work and the context it needs to fit." },
  { title: "Build", text: "Develop the agreed strategy, creative work, website, campaign or system around that purpose." },
  { title: "Test", text: "Check the work against its intended use. That may include clarity of communication, a customer journey, website function or the behaviour of an automation." },
  { title: "Hand over", text: "Show the relevant people how to use, manage or operate the work and what they need to do next." },
  { title: "Support", text: "Help with issues, adoption and refinement of the agreed work. Ongoing support is agreed per project; additional work is scoped separately." },
];
export const testimonials = [
  { quote: "We have partnered with Kri8it Digital for over 10 years, and they are, in my view, our most valued business partner.", name: "Bertus Floor", role: "Group Digital Officer, The SAFY Group" },
  { quote: "Working with Kri8it to develop and design our website is proof that a great partnership produces great results. We love our new website!", name: "Terri Cordin", role: "Marketing Manager, Wildlife Safari (Australia) Pty Ltd" },
];
export const offices = [
  { city: "Cape Town", country: "South Africa", phone: "+27 82 559 9903", telephone: "tel:+27825599903", emails: ["clint@kri8it.com", "francesca@kri8it.com"] },
  { city: "Dublin", country: "Ireland", phone: "+353 83 317 4599", telephone: "tel:+353833174599", emails: ["charl@kri8it.ie"] },
];
export const structuredData = {
  "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"],
  name: "Kri8it", description: "Digital consultancy and delivery for brand, websites, marketing, AI and automation.",
  email: "clint@kri8it.com", telephone: "+27 82 559 9903",
  contactPoint: offices.map((office) => ({ "@type": "ContactPoint", telephone: office.phone, email: office.emails[0], contactType: "customer enquiries" })),
};
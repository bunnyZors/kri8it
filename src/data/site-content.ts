// Source: 2026-11-04-lovable-build-handover.md. Quotes verified against
// https://kri8it-studio-link.vibepreview.app/ during the approved plan review.
export const primaryContact = "mailto:clint@kri8it.com";
export const navigation = [
  { label: "Services", id: "services" }, { label: "Focus", id: "focus" },
  { label: "Process", id: "process" }, { label: "AutomAi8", id: "automai8" },
  { label: "Proof", id: "proof" }, { label: "Contact", id: "contact" },
];
export const hero = {
  eyebrow: "Digital consultancy and delivery",
  title: "Clearer direction that moves business forward.",
  description: "Kri8it is a strategic growth partner that helps businesses make informed decisions about brand, websites, marketing, AI and automation. We work with you to understand opportunities for measurable change, then bring the strategy and practical skills to turn the agreed direction into use.",
  experience: "Over 25 years of digital experience, with the business and its people at the centre of the work.",
};
export const clients = ["Natural Selection", "Springbok Atlas", "Pembroke Privacy", "Safari Online", "Art of Safari", "Exclusive Books", "Wildlife Safari", "Mahindra", "Volkswagen"];
export const capabilities = [
  { title: "Strategy", text: "Define purpose, opportunity and the decisions that matter.", detail: "A considered direction before committing to the work.", tag: "Clarity before activity", kind: "strategy" },
  { title: "Brand", text: "Create a clear position and usable visual language.", detail: "A consistent expression of what your business stands for.", tag: "Meaning made visible", kind: "brand" },
  { title: "Websites", text: "Plan and deliver useful digital experiences around real needs.", detail: "The customer’s purpose, and the people managing the platform, come first.", tag: "Built around real needs", kind: "web" },
  { title: "Marketing", text: "Connect objectives, audiences, channels and measurement.", detail: "Give every part of the activity a clear job to do.", tag: "Every part has a job", kind: "marketing" },
  { title: "AI and automation", text: "Define where automation belongs, where human judgement remains and what happens when systems cannot complete a task.", detail: "Practical technology with clear boundaries.", tag: "Boundaries by design", kind: "automation" },
];
export const sectors = [
  { title: "Automotive", text: "Strategic, digital and marketing experience shaped around complex journeys, dealer networks, changing technologies and measurable performance.", to: "/automotive", placeholder: "Automotive image placeholder", category: "Deep sector experience", cta: "Discuss an automotive challenge" },
  { title: "Travel & tourism", text: "Brand, content and digital experiences that help remarkable places and travel businesses turn inspiration into an informed next step.", to: "/travel-tourism", placeholder: "Travel image placeholder", category: "Destination to decision", cta: "Discuss a travel challenge" },
];
export const response = {
  eyebrow: "Choose the right response",
  title: "Make the important decisions before committing to the work.",
  paragraphs: [
    "We help you look beyond the immediate request. Before a rebrand, what has changed in the business? Before a website build, what do customers need to understand or do? Before a campaign, who are you trying to reach, and what should happen when they respond?",
    "Your team brings the knowledge of the business. We bring a consulting perspective and digital experience to help assess the options, challenge assumptions and agree priorities.",
    "The direction should be clear enough for the people doing the work to understand what they are aiming for and how it will be assessed.",
  ],
};
export const process = [
  { title: "Understand", text: "Context, goals, evidence and previous attempts." },
  { title: "Define", text: "Question, intended outcome, boundaries and measures." },
  { title: "Shape", text: "A considered direction with explainable decisions." },
  { title: "Deliver", text: "Practical work that brings the direction into use." },
  { title: "Support", text: "Issues, adoption and refinement agreed per project." },
];
export const testimonials = [
  { quote: "We have partnered with Kri8it Digital for over 10 years, and they are, in my view, our most valued business partner.", name: "Bertus Floor", role: "Group Digital Officer, The SAFY Group" },
  { quote: "Working with Kri8it to develop and design our website is proof that a great partnership produces great results. We love our new website!", name: "Terri Cordin", role: "Marketing Manager, Wildlife Safari (Australia) Pty Ltd" },
];
export const engagement = [
  { title: "Define the question", text: "Bring the business context and what you need to answer." },
  { title: "Scope the useful work", text: "Agree what help is needed and where the work begins and ends." },
  { title: "Agree delivery and responsibilities", text: "Make the direction and the people’s roles clear." },
  { title: "Put the direction into use", text: "Bring the agreed strategy and practical skills to the work." },
  { title: "Support and refine where required", text: "Agree support, adoption and further refinement per project." },
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
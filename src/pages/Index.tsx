import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLink, EditorialHero, InvitationSection, darkBody, darkSectionHeading, lightBody, lightSectionHeading } from "@/components/EditorialPage";
import AutomAi8FitsSection from "@/components/AutomAi8FitsSection";
import { usePageMetadata } from "@/hooks/use-page-metadata";

const capabilities = [
  { title: "Brand and positioning", text: "Clarify what your business stands for, who it serves and how to express that through messaging, identity and content your team can use consistently." },
  { title: "Websites and digital platforms", text: "Plan and build around the customer's purpose: finding information, understanding an offer, making an enquiry or completing a purchase. Consider the people who will manage the website after launch." },
  { title: "Marketing and performance", text: "Set the audience, message and purpose of the activity. Bring SEO, content, paid media, email and measurement into a plan that gives each a clear job." },
  { title: "AI, automation and systems", text: "Assess where technology can take on defined work, how it fits existing tools and which decisions people must retain. Scope the technical requirements before committing to a solution." },
];

const stages = [
  { title: "Map", text: "Understand the business, the audience, the purpose of the work and the context it needs to fit." },
  { title: "Build", text: "Develop the agreed strategy, creative work, website, campaign or system around that purpose." },
  { title: "Test", text: "Check the work against its intended use. That may include clarity of communication, a customer journey, website function or the behaviour of an automation." },
  { title: "Hand over", text: "Show the relevant people how to use, manage or operate the work and what they need to do next." },
  { title: "Support", text: "Help with issues, adoption and refinement of the agreed work. Ongoing support is agreed per project; additional work is scoped separately." },
];

const quotes = [
  { quote: "We have partnered with Kri8it Digital for over 10 years, and they are, in my view, our most valued business partner.", name: "Bertus Floor", role: "Group Digital Officer, The SAFY Group" },
  { quote: "Working with Kri8it to develop and design our website is proof that a great partnership produces great results. We love our new website!", name: "Terri Cordin", role: "Marketing Manager, Wildlife Safari (Australia) Pty Ltd" },
];

export default function Index() {
  usePageMetadata("Digital consultancy, brand, web and marketing | Kri8it", "Advice and delivery for brand, websites, marketing, AI and automation. Kri8it helps you define the purpose of the work and put the agreed direction into use.");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <EditorialHero showClients eyebrow="Digital consultancy and delivery" title="Clearer direction. Digital work your business can use." secondaryLabel="Explore how we can help" secondaryTo="/services" supportingLine="Over 25 years of digital experience, with the business and its people at the centre of the work.">
        <p>Kri8it helps established businesses make informed decisions about brand, websites, marketing, AI and automation. We work with you to understand what needs to change, then bring the strategy and practical skills to put the agreed direction into use.</p>
      </EditorialHero>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={lightSectionHeading}>What does the work need to do?</motion.h2>
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${lightBody} space-y-6`}>
            <p>Your brand may need to explain a business that has changed. Your website may need to make the offer easier to understand. Your marketing may need a clearer audience, message or path to enquiry. A repeated task may be worth automating.</p>
            <p>Those are different questions. We begin by understanding the purpose of the work, the people it needs to serve and what is already in place.</p>
            <p>That gives us a reason for the next step, whether it is strategic advice, creative work, a website improvement, a campaign or a systems change.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32"><h2 className={darkSectionHeading}>Make the important decisions before committing to the work.</h2></div>
          <div className={`${darkBody} space-y-6`}>
            <p>We help you look beyond the immediate request. Before a rebrand, what has changed in the business? Before a website build, what do customers need to understand or do? Before a campaign, who are you trying to reach, and what should happen when they respond?</p>
            <p>Your team brings the knowledge of the business. We bring a consulting perspective and digital experience to help assess the options, challenge assumptions and agree priorities.</p>
            <p>The direction should be clear enough for the people doing the work to understand what they are aiming for and how it will be assessed.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className={`${lightSectionHeading} mb-8`}>Advice and delivery across the work that matters.</h2>
            <ArrowLink to="/services" compact light>See our consultancy and delivery capabilities</ArrowLink>
          </div>
          <div>
            {capabilities.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-[auto_1fr] gap-5 py-8 border-b border-[hsl(230,10%,85%)] first:pt-0">
                <span className="text-accent text-xs font-medium tracking-[0.2em] tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="font-display text-xl md:text-2xl font-bold text-[hsl(230,40%,15%)] mb-3">{item.title}</h3><p className={lightBody}>{item.text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(230,15%,96%)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
          <h2 className={lightSectionHeading}>A finished piece of work still has a job to do.</h2>
          <div className={`${lightBody} space-y-6`}><p>A brand identity needs to be usable in the places customers meet the business. A website needs to help someone find the right information and complete the next step. A campaign needs a relevant message, a destination and a way to understand the response.</p><p>We consider those uses while planning and delivering the work. Looking right is part of the job; how the work functions, who will use it and what happens next deserve attention too.</p></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${lightSectionHeading} max-w-4xl mb-16`}>We will map, build, test, hand over and support.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 border-t border-[hsl(230,10%,85%)]">
            {stages.map((stage, index) => <article key={stage.title} className="py-8 lg:px-6 lg:first:pl-0 border-b lg:border-b-0 lg:border-r last:border-r-0 border-[hsl(230,10%,85%)]"><span className="text-accent text-xs font-medium tracking-[0.2em]">{String(index + 1).padStart(2, "0")}</span><h3 className="font-display text-2xl font-bold text-[hsl(230,40%,15%)] mt-5 mb-4">{stage.title}</h3><p className="text-[hsl(230,10%,40%)] text-base leading-relaxed">{stage.text}</p></article>)}
          </div>
        </div>
      </section>

      <AutomAi8FitsSection />

      <section className="section-padding bg-[hsl(230,15%,96%)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24"><h2 className={lightSectionHeading}>Start with a question your business needs to answer.</h2><div className={`${lightBody} space-y-6`}><p>We work with leaders and teams who want considered advice and are willing to contribute their knowledge to the work.</p><p>Automotive is a particular focus, building on our experience in the sector. Across other businesses, fit depends on the question, the people involved and the help required.</p></div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto"><h2 className={`${lightSectionHeading} mb-14`}>Partnership, in our clients' words.</h2><div className="grid md:grid-cols-2 gap-8">{quotes.map((item) => <blockquote key={item.name} className="border-t-2 border-accent pt-8"><p className="font-display text-2xl md:text-3xl leading-snug text-[hsl(230,40%,15%)] mb-8">“{item.quote}”</p><footer><strong className="block text-[hsl(230,40%,15%)]">{item.name}</strong><span className="text-[hsl(230,10%,45%)] text-sm">{item.role}</span></footer></blockquote>)}</div></div>
      </section>

      <InvitationSection title="Tell us what you want the work to achieve."><p>You may need a clearer position, a better website, a considered marketing plan or help deciding where AI belongs.</p><p>Bring us the context, what you have already tried and the question you need to answer. We can talk through what a useful next step would involve.</p></InvitationSection>
      <Footer />
    </div>
  );
}
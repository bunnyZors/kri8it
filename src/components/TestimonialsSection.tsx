import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, X } from "lucide-react";

const testimonials = [
  {
    name: "Bertus Floor",
    role: "Group Digital Officer, The SAFY Group",
    short:
      "We have partnered with Kri8it Digital for over 10 years, and they are, in my view, our most valued business partner. They are not just a service provider, but an integral part of our digital success...",
    full: [
      "We have partnered with Kri8it Digital for over 10 years, and they are, in my view, our most valued business partner. They are not just a service provider, but an integral part of our digital success. Their talent runs deep with world-class senior developers, top-tier UX and website designers, and a team that is simply a pleasure to work with.",
      "Over the years, Kri8it has delivered an exceptional range of websites for us, including for Thrifty, SANI Car Rental, SANI SIXT Rent A Car, Greyhound, Citiliner Luxury Coaches, Harley-Davidson dealerships, Mercedes-Benz, Haval, Nissan, Hyundai and many more. No request is ever too complex and they have consistently gone above and beyond to accommodate us, often handling out-of-the-ordinary requirements with speed and efficiency.",
      "Clint, the owner, leads with integrity and fairness, and his team consistently delivers high-quality. I can recommend Kri8it Digital without hesitation.",
    ],
  },
  {
    name: "Walter Kohrs",
    role: "Owner & Manager of Safari Online",
    short:
      "We are incredibly blessed to have found a partner like Kri8it Digital in the digital marketing space and cannot say enough good things about them...",
    full: [
      "We are incredibly blessed to have found a partner like Kri8it Digital in the digital marketing space and cannot say enough good things about them. They have an amazing knack for turning vague ideas into exactly what we wanted or even better than what we imagined. Their digital design and backend development work is nothing short of outstanding. Francesca, Shannon, Tiffany, Hilton and others in the team are an absolute pleasure to deal with – friendly, talented, cre8ive!",
      'There is a direct correlation between the Kri8it website design and a noticeable increase in business, and that is no coincidence. We have been working with them since 2015 and will continue, hopefully, "until death do us part" ;-) We\'re incredibly grateful to have Kri8it Digital as part of our journey!',
    ],
  },
  {
    name: "Wendy Levendall",
    role: "Marketing Manager, Springbok Atlas Tours & Safaris",
    short:
      "We've had the privilege of partnering with Kri8it for over 20 years, and they remain an integral part of the Springbok Atlas Tours & Safaris journey...",
    full: [
      "We've had the privilege of partnering with Kri8it for over 20 years, and they remain an integral part of the Springbok Atlas Tours & Safaris journey.",
      "From day one, Clint and Francesca have led with professionalism, creativity, and integrity – always offering advice we can trust and solutions that align perfectly with our needs. Their ability to truly understand our business and deliver high-quality work time and again is what sets them apart.",
      "The passion and commitment they bring are clearly reflected in their team, which is just as responsive, dependable, and dedicated. It's rare to find a partner who feels like an extension of your own brand, and that's exactly what Kri8it is to us.",
      "We're proud to work with them and look forward to many more years of collaboration and shared success.",
    ],
  },
  {
    name: "Arjen de Bruin",
    role: "CEO, OIM Consulting",
    short:
      "OIM Consulting has worked with Kri8it for over six years, and what a team! Attentive to our needs, going the extra mile, and always looking after our best interests...",
    full: [
      "OIM Consulting has worked with Kri8it for over six years, and what a team! Attentive to our needs, going the extra mile, and always looking after our best interests. From helping with our rebrand to creating our whole marketing strategy, Kri8it has been exceptional at each turn. Not only are they brilliant at what they do, but they are incredible people. Clint lives out his values, which have benefited us with his wisdom and understanding. I wholeheartedly endorse the Kri8it team.",
    ],
  },
  {
    name: "Martin Taverner",
    role: "Head of Digital Marketing, Tavcor Motor Group South Africa",
    short:
      "We have partnered with Kri8it Digital for over 15 years, and they have been our most valuable online business partner...",
    full: [
      "We have partnered with Kri8it Digital for over 15 years, and they have been our most valuable online business partner. The level of engagement offered by this very talented team is exceptional. They made a consistent effort to understand the way we do business and offered market-related advice to us through our journey with them.",
      "They went beyond offering truly interactive websites to integrating with our Dealer Management System and creating internal and customer-facing stock aggregators. These were game-changers in our drive to create a Digital-to-Dealer approach to our business. The K8 Development team, across the World, offered a very wide scope of expertise, and no issue was too big to get the team together to find a solution. I can wholeheartedly recommend the amazing team at Kri8it Digital to any customer wanting to improve their business online.",
    ],
  },
  {
    name: "Terri Cordin",
    role: "Marketing Manager, Wildlife Safari (Australia) Pty Ltd",
    short:
      "Working with Kri8it to develop and design our website is proof that a great partnership produces great results. We love our new website!...",
    full: [
      "Working with Kri8it to develop and design our website is proof that a great partnership produces great results. We love our new website! The whole process was seamless and we couldn't be happier.",
    ],
  },
];

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[hsl(230,10%,60%)] text-sm font-medium uppercase tracking-[0.25em] mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)]">
            Words from our <span className="text-[#049AD9]">clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 12px 32px -8px rgba(4,154,217,0.12)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[hsl(230,10%,85%)] bg-white p-8 flex flex-col cursor-pointer transition-colors duration-300 hover:border-[#049AD9]/30"
            >
              <Quote className="text-[#049AD9]/40 mb-6" size={32} />
              <p className="text-[hsl(230,10%,45%)] text-sm leading-relaxed flex-1">
                {t.short}
                <button
                  onClick={() => setSelectedTestimonial(i)}
                  className="text-[#049AD9] hover:underline ml-1"
                >
                  continue reading
                </button>
              </p>
              <div className="mt-6 pt-4 border-t border-[hsl(230,10%,85%)]">
                <p className="font-bold text-[hsl(230,40%,15%)]">{t.name}</p>
                <p className="text-[hsl(230,10%,45%)] text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/90 backdrop-blur-xs"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
                    {testimonials[selectedTestimonial].name}
                  </h3>
                  <p className="text-accent text-sm italic">
                    {testimonials[selectedTestimonial].role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="border-t border-border mt-4 pt-8 space-y-5">
                {testimonials[selectedTestimonial].full.map((p, i) => (
                  <p key={i} className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

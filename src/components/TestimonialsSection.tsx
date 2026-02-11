import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, X } from "lucide-react";

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
    role: "Owner and Manager of Safari Online",
    short:
      "We are incredibly blessed to have found a partner like Kri8it Digital in the digital marketing space and cannot say enough good things about them. They have an amazing knack for...",
    full: [
      "We are incredibly blessed to have found a partner like Kri8it Digital in the digital marketing space and cannot say enough good things about them. They have an amazing knack for turning vague ideas into exactly what we wanted or even better than what we imagined. Their digital design and backend development work is nothing short of outstanding. Francesca, Shannon, Tiffany, Hilton and others in the team are an absolute pleasure to deal with – friendly, talented, cre8ive!",
      'There is a direct correlation between the Kri8it website design and a noticeable increase in business, and that is no coincidence. We have been working with them since 2015 and will continue, hopefully, "until death do us part" ;-) We\'re incredibly grateful to have Kri8it Digital as part of our journey!',
    ],
  },
  {
    name: "Wendy Levendall",
    role: "Marketing Manager, Springbok Atlas Tours & Safaris",
    short:
      "We've had the privilege of partnering with Kri8it for over 20 years, and they remain an integral part of the Springbok Atlas Tours & Safaris journey. From day one, Clint and Francesca have...",
    full: [
      "We've had the privilege of partnering with Kri8it for over 20 years, and they remain an integral part of the Springbok Atlas Tours & Safaris journey.",
      "From day one, Clint and Francesca have led with professionalism, creativity, and integrity – always offering advice we can trust and solutions that align perfectly with our needs. Their ability to truly understand our business and deliver high-quality work time and again is what sets them apart.",
      "The passion and commitment they bring are clearly reflected in their team, which is just as responsive, dependable, and dedicated. It's rare to find a partner who feels like an extension of your own brand, and that's exactly what Kri8it is to us.",
      "We're proud to work with them and look forward to many more years of collaboration and shared success.",
    ],
  },
];

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Words from our clients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col"
            >
              <Quote className="text-accent/40 mb-6" size={32} />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {t.short}
                <button
                  onClick={() => setSelectedTestimonial(i)}
                  className="text-accent hover:underline ml-0"
                >
                  continue reading
                </button>
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/90 backdrop-blur-sm"
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
                  <p key={i} className="text-muted-foreground leading-relaxed">
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

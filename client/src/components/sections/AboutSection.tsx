import SkillBar from "@/components/ui/skill-bar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "Frontend Development", percentage: 90 },
    { name: "Backend Development", percentage: 85 },
    { name: "UX/UI Design", percentage: 80 },
    { name: "Mobile Development", percentage: 75 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/images/daniel.jpg"
                alt="Daniel Atz speaking" 
                className="w-full h-auto rounded-lg shadow-md object-cover object-center aspect-[4/5]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">About Me</h2>
              <p className="text-[#343a40] mb-4 leading-relaxed">
                I'm a passionate web developer and designer with over 7 years of experience creating digital solutions that help businesses and individuals achieve their goals.
              </p>
              <p className="text-[#343a40] mb-6 leading-relaxed">
                My journey in tech began when I built my first website at 15. Since then, I've honed my skills in front-end and back-end development, working with clients ranging from startups to established enterprises.
              </p>
              
              <h3 className="text-xl font-serif font-semibold mb-3">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
              
              <Button 
                className="bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors shadow-sm"
                onClick={() => scrollToSection("contact")}
              >
                Let's Work Together
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

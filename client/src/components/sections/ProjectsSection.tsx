import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  name: string;
  url: string;
  logoUrl?: string;
}

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  
  const projects: Project[] = [
    {
      id: "luxcitizenship",
      name: "LuxCitizenship",
      url: "https://www.luxcitizenship.com",
      logoUrl: "/LuxCitizenship-Logo-Country-ONLY.png"
    },
    {
      id: "citizenshipEU",
      name: "Citizenship.eu",
      url: "https://citizenship.eu",
      logoUrl: "/CitizenshipEU-logo-icon.jpg"
    },
    {
      id: "emigrationRevue",
      name: "American Emigration Revue",
      url: "https://americanemigration.com",
      logoUrl: "/American-Emigration-Revue_logo_notext.png"
    },
    {
      id: "connaissanceFilms",
      name: "Connaissance Films",
      url: "https://connaissance.co",
      logoUrl: "/connaissance-logo.png"
    }
  ];

  const getBadgeColor = (status: string) => {
    switch(status) {
      case "Active":
      case "Actif":
      case "Ativo":
      case "进行中":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "In Development":
      case "En Développement":
      case "Em Desenvolvimento":
      case "开发中":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Launching Soon":
      case "Lancement Prochain":
      case "Lançamento Breve":
      case "即将推出":
        return "bg-accent/20 text-accent hover:bg-accent/25";
      case "Completed":
      case "Terminé":
      case "Concluído":
      case "已完成":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{t("sections.projects.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("sections.projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const status = t(`sections.projects.projectDetails.${project.id}.status`);
            const description = t(`sections.projects.projectDetails.${project.id}.description`);
            
            return (
              <motion.div
                key={project.name}
                className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    {project.logoUrl ? (
                      <img 
                        src={project.logoUrl} 
                        alt={`${project.name} logo`} 
                        className="max-w-full max-h-full"
                        onError={(e) => {
                          // If logo fails to load, show a fallback colored circle with first letter
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const div = document.createElement('div');
                            div.className = 'w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary';
                            div.innerText = project.name.charAt(0);
                            parent.appendChild(div);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary">
                        {project.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-center text-primary">{project.name}</h3>
                  
                  <Badge 
                    className={`mt-1 mb-3 ${getBadgeColor(status)}`}
                    variant="outline"
                  >
                    Status: {status}
                  </Badge>
                  
                  <p className="text-gray-600 text-center text-sm mb-4">
                    {description}
                  </p>
                </div>
                
                <div className="mt-auto pb-4 px-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-primary hover:text-primary/80 font-medium"
                  >
                    {t("sections.projects.viewWebsite")} <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
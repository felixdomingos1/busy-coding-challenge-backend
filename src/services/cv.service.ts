import { CVData } from '../models/cv.model';

export class CVService {
  private readonly cvData: CVData;

  constructor() {
    this.cvData = this.loadCVData();
  }

  private loadCVData(): CVData {
    return {
      personal: {
        name: "Félix Sanjala Domingos",
        address: "7ª Rua 500 casas. Viana, Luanda",
        phone: "+244 926 195 572",
        email: "felixsdomingos93@gmail.com"
      },
      summary: "Profissional de TI com experiência em desenvolvimento de software.",
      skills: {
        languages: ["Português", "Inglês"],
        frameworks: ["React", "Node.js"],
        tools: ["Docker", "Git"]
      },
      experience: [
        {
          company: "Empresa X",
          role: "Desenvolvedor Frontend",
          period: "Jan 2020 - Presente",
          description: ["Desenvolvimento de interfaces", "Integração com APIs"],
          technologies: ["React", "TypeScript"]
        },
        {
          company: "Empresa Y",
          role: "Desenvolvedor Backend",
          period: "Jan 2018 - Dez 2019",
          description: ["Desenvolvimento de APIs", "Gerenciamento de banco de dados"],
          technologies: ["Node.js", "MongoDB"]
        }
      ],
      education: [
        {
          institution: "Universidade Z",
          course: "Bacharel em Ciência da Computação",
          period: "2014 - 2017"
        }
      ] 
    };
  }

  public query(question: string): string {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes("último cargo") || lowerQ.includes("última experiência")) {
      const lastJob = this.cvData.experience[0];
      return `Seu último cargo foi ${lastJob.role} na ${lastJob.company} (${lastJob.period})`;
    }

    if (lowerQ.includes("tecnologias") || lowerQ.includes("habilidades")) {
      return `Tecnologias principais: ${this.cvData.skills.frameworks.join(', ')}`;
    }

    return "Não entendi a pergunta. Você pode perguntar sobre: experiências, tecnologias ou formação.";
  }
}
import { Component } from '@angular/core';

interface ExperienceItem{
  role: string;
  company: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      role: 'Stagiaire en Développement IA / Data',
      company: 'TALYS Consulting',
      period: 'Juillet 2026 – Août 2026 (2 mois)',
      highlights: [
        "Traitement de documents et extraction automatisée (OCR / NLP) et développement d'interfaces interactives.",
        'Conteneurisation avec Docker et stockage avec MinIO.'
      ],
      technologies: ['Python', 'PyTorch', 'LangChain', 'LangGraph', 'Hugging Face (Qwen)', 'FastAPI', 'Docker', 'MinIO', 'CUDA']
    },
    {
      role: 'Stagiaire en Développement',
      company: 'GIAS Distribution',
      period: 'Juillet 2025 – Août 2025 (2 mois)',
      highlights: [
        "Développement d’une application web (React / Flask)",
      ],
      technologies: ['Python', 'Flask', 'PostgreSQL', 'React']
    }
  ];
}

import { Component } from '@angular/core';

interface SkillCategory{
  category: string,
  items: string[]
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  summary: string = "Étudiant en 3ème année en Business Information System et passionné par l'innovation, je me spécialise dans la synergie entre le développement web et l'intelligence artificielle. Ayant une expérience pratique à travers plusieurs projets académiques et professionnels (mes stages) en (FastAPI, Flask, PyTorch, Hugging Face, Docker…), je combine technique, rigueur et curiosité d'esprit. Je cherche activement un stage de fin d'études (PFE) au sein d’une équipe dynamique pour mettre mes compétences au service d'applications web innovantes";

  education = {
    degree: "Licence Fondamentale en Business Information System",
    institution: "École Supérieure d'Économie Numérique (ESEN Manouba)",
    year: "2024 - Présent"
  };

  skillCategories: SkillCategory[] = [
    {
      category: 'Langages & Frameworks',
      items: ['Python', 'FastAPI', 'Flask', 'Angular']
    },

    {
      category: 'IA & NLP',
      items: ['PyTorch', 'Hugging Face (Qwen)', 'LangChain', 'LangGraph', 'OCR', 'CUDA']
    },

    {
      category: 'Base de données et stockage',
      items: ['PostgreSQL', 'MinIO', 'Redis']
    },

    {
      category: 'DevOps & Outils',
      items: ['Docker', 'Git']
    }

  ];
}

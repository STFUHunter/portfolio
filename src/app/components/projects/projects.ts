import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Apprentissage par renforcement',
      roleOrType: 'Projet personnel.',
      description: "une série d' algorithmes qui apprennent (par renforcement) à jouer des jeux Atari, Frozen Lake, et CartPole. en appliquant les réseaux DQN avec Epsilon Greedy.",
      technologies: ['Python', 'Pytorch', 'Gymnasium'],
      githubUrl: 'https://github.com/STFUHunter/DQN-practise.git'
    },
    {
      title: 'Les réseaux de neurones',
      roleOrType: 'Projet personnel.',
      description: "Dans ce projet je me suis lancé dans les réseaux de neurones classiques (MNIST, CIFAR-10), en créant des modèles capables de classifier les images.",
      technologies: ['Python', 'Pytorch', 'FastAPI'],
      githubUrl: 'https://github.com/STFUHunter/pytorch-practise.git'
    },
    {
      title: 'Audio to SQL RAG-AI pipeline',
      roleOrType: 'Projet personnel.',
      description: "A ce moment , c’est mon projet le plus ambitieux. Le produit final va permettre aux utilisateurs de communiquer avec un modèle IA-RAG Fine Tuned (Qwen) avec leurs voix, et la prompt sera traduite en SQL. Avec une base de données vectorielle.",
      technologies: ['Python', 'Pytorch', 'FastAPI', 'OpenIA-Whisper', 'Chroma DB', 'PostgreSQL','LangChain', 'LangGraph', 'Docker'],
      githubUrl: 'https://github.com/STFUHunter/Voice-to-SQL-model.git'
    },
    {
      title: 'Mini RAG',
      roleOrType: 'Projet personnel.',
      description: "Un petit projet d’apprentissage. J’ai créé une petite pipeline RAG, en utilisant Ollama (SLM Llama) et l’api Wikipedia pour que je puisse apprendre comment la RAG fonctionne.",
      technologies: ['Python', 'Chroma DB', 'Ollama'],
      githubUrl: 'https://github.com/STFUHunter/Mini-RAG-.git'
    }
  ];
}

import { Component, OnInit } from '@angular/core';

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [
    {
      icon: '🎨',
      title: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Bootstrap 4.6',
        'Bootstrap Angular',
        'React',
        'HTML5',
        'CSS3'
      ]
    },
    {
      icon: '🔍',
      title: 'QA y calidad de código',
      skills: [
        'Pruebas funcionales',
        'Pruebas automatizadas',
        'SonarQube',
        'Análisis estático',
        'Postman',
        'OWASP ZAP',
        'Lighthouse',
        'JMeter'
      ]
    },
    {
      icon: '⚙️',
      title: 'Backend y lenguajes',
      skills: [
        'C#',
        '.NET',
        'Java',
        'Python',
        'PHP',
        'Node.js',
        'Visual Basic'
      ]
    },
    {
      icon: '🗄️',
      title: 'Bases de datos y analítica',
      skills: [
        'Microsoft SQL Server',
        'Consultas avanzadas',
        'Optimización',
        'Reportes',
        'Power BI'
      ]
    },
    {
      icon: '🛠️',
      title: 'Herramientas y metodologías',
      skills: [
        'Git',
        'CI/CD',
        'Arquitectura de software',
        'Documentación técnica'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

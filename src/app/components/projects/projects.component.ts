import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  gradient: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Programadora y Desarrolladora de Software',
      company: 'TIGLOBAL S.A.S.',
      period: 'Feb 2022 - Oct 2026',
      description: 'Diseño e implementación de aplicaciones web con Angular y TypeScript. Maquetación responsive con Bootstrap 4.6 y Bootstrap Angular. Soporte, refactorización y resolución de incidencias en soluciones críticas.',
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'UI/UX'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Analista QA',
      company: 'Unión Temporal Colombia Digital Conectada',
      period: 'Jul 2025 - Dic 2025',
      description: 'Pruebas funcionales y automatizadas del portal GOV.CO. Análisis estático con SonarQube para detectar bugs, vulnerabilidades y deuda técnica. Casos de prueba, matrices de trazabilidad y reportes de ejecución.',
      tags: ['QA', 'SonarQube', 'Pruebas automatizadas', 'GOV.CO'],
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      title: 'Desarrolladora',
      company: 'InfoDesign Colombia S.A.S.',
      period: 'Sep 2020 - Dic 2020',
      description: 'Desarrollo de componentes web sobre Angular y Bootstrap para proyectos interactivos en el sector de ciencia y tecnología.',
      tags: ['Angular', 'Bootstrap', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Técnica de Aplicaciones (Pasantía)',
      company: 'Amézquita & Cía',
      period: 'Abr 2020 - Sep 2020',
      description: 'Reportes y análisis con consultas complejas en Microsoft SQL Server. Documentación de procesos del área y pruebas de validación funcional sobre aplicaciones internas.',
      tags: ['SQL Server', 'Reportes', 'Documentación'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

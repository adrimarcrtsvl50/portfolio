import { Component} from '@angular/core';

interface Project {
  title: string;
  company: string;
  description: string;
  images: string[];
  tags: string[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedProject: Project | null = null;
  currentImageIndex: number = 0;

  projects: Project[] = [
    {
      title: 'Mi Colombia Digital',
      company: 'UT Colombia Digital Conectada',
      description: 'Portal micolombiadigital.gov.co para apoyar la transformación digital de las entidades territoriales. Permite buscar y explorar entidades del gobierno por tipo, departamento y municipio, consultarlas en el mapa y descargar el reporte acumulado. Incluye el asistente virtual Robi, de los Servicios Ciudadanos Digitales, con una experiencia adaptable a escritorio y móvil.',
      images: [
        'assets/projects/mi-colombia-digital/mcd1.png',
        'assets/projects/mi-colombia-digital/mcd2.png'
      ],
      tags: ['GOV.CO', 'Responsive', 'Servicios Ciudadanos']
    },
    {
      title: 'PAE - Programa de Alimentación Escolar',
      company: 'TIGLOBAL S.A.S',
      description: 'Ecosistema de información del Programa de Alimentación Escolar (PAE) para la Unidad Administrativa Especial de Alimentación Escolar - GOV.CO. Incluye los sistemas MiPAE, SIGE-PAE y SGN UApA para gestión de beneficiarios, sedes y aprobaciones.',
      images: [
        'assets/projects/tiglobal/pae/Attached_image.png',
        'assets/projects/tiglobal/pae/Attached_image1.png',
        'assets/projects/tiglobal/pae/Attached_image2.png',
        'assets/projects/tiglobal/pae/Attached_image3.png',
        'assets/projects/tiglobal/pae/Attached_image4.png'
      ],
      tags: ['Angular', 'Bootstrap', 'TypeScript', 'GOV.CO']
    },
    {
      title: 'VUI - Ventanilla Única de Inversión',
      company: 'TIGLOBAL S.A.S',
      description: 'Portal de la Ventanilla Única de Inversión para el Ministerio de Comercio, Industria y Turismo - GOV.CO. Incluye el Escritorio del Inversionista, con nueva iniciativa, iniciativas en curso, carpeta del inversionista y SIED. Sistema multilenguaje (ES/EN). Implementación con librería Formio4us y SweetAlert2 para alertas.',
      images: [
        'assets/projects/tiglobal/vui/vui9.png',
        'assets/projects/tiglobal/vui/vui1.png',
        'assets/projects/tiglobal/vui/vui2.png',
        'assets/projects/tiglobal/vui/vui3.png',
        'assets/projects/tiglobal/vui/vui4.png',
        'assets/projects/tiglobal/vui/vui5.png',
        'assets/projects/tiglobal/vui/vui6.png',
        'assets/projects/tiglobal/vui/vui7.png',
        'assets/projects/tiglobal/vui/vui8.png'
      ],
      tags: ['Angular', 'Formio4us', 'i18n', 'SweetAlert2', 'GOV.CO']
    },
    {
      title: 'Trámite Ciudadano',
      company: 'TIGLOBAL S.A.S',
      description: 'Portal de Trámite Ciudadano para el Ministerio TIC y la Agencia Nacional Digital - GOV.CO. Sistema de gestión de trámites con Bandeja BAM, Panel de Control, certificados laborales y de residencia para alcaldías. Integración con Motor BPM, autenticación digital y visor de diagramas BPMN.',
      images: [
        'assets/projects/tiglobal/tramite-ciudadano/tc1.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc2.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc3.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc4.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc5.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc6.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc7.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc8.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc9.png',
        'assets/projects/tiglobal/tramite-ciudadano/tc10.png'
      ],
      tags: ['Angular', 'Motor BPM', 'BPMN', 'GOV.CO']
    },
    {
      title: 'DOC4US',
      company: 'TIGLOBAL S.A.S',
      description: 'Sistema de gestión documental y correspondencia empresarial con arquitectura de microservicios, multiidiomas y autenticación oAuth2.0. Módulos de Ventanilla, Correspondencia, Administración y Sistema. Incluye expedientes electrónicos, plantillas con Syncfusion, metadatos y tablero de control.',
      images: [
        'assets/projects/tiglobal/doc4us/doc1.png',
        'assets/projects/tiglobal/doc4us/doc2.png',
        'assets/projects/tiglobal/doc4us/doc3.png'
      ],
      tags: ['Angular', 'Microservicios', 'oAuth2.0', 'Syncfusion']
    },
    {
      title: 'REGISTER4US',
      company: 'TIGLOBAL S.A.S',
      description: 'Módulo del sistema DOC4US para radicación de documentos por ventanilla y correspondencia. Configuración de niveles de confidencialidad, métodos de entrega, prioridades, tipos de destinatario y estados de registro.',
      images: [
        'assets/projects/tiglobal/register4us/reg1.png',
        'assets/projects/tiglobal/register4us/reg2.png',
        'assets/projects/tiglobal/register4us/reg3.png',
        'assets/projects/tiglobal/register4us/reg4.png',
        'assets/projects/tiglobal/register4us/reg5.png'
      ],
      tags: ['Angular', 'DOC4US', 'Radicación', 'CRUD']
    },
    {
      title: 'QA - Aseguramiento de Calidad',
      company: 'UT Colombia Digital Conectada',
      description: 'Aseguramiento de calidad del portal GOV.CO: pruebas funcionales y automatizadas, análisis estático con SonarQube (bugs, vulnerabilidades y deuda técnica), casos de prueba, matrices de trazabilidad y reportes de ejecución.',
      images: [
        'assets/projects/qa/qa1.png',
        'assets/projects/qa/qa2.png',
        'assets/projects/qa/qa3.png',
        'assets/projects/qa/qa4.png',
        'assets/projects/qa/qa5.png',
        'assets/projects/qa/qa6.png',
        'assets/projects/qa/qa7.png',
        'assets/projects/qa/qa8.png'
      ],
      tags: ['SonarQube', 'JMeter', 'Lighthouse', 'Casos de Prueba']
    }
  ];

  constructor() { }



  openModal(project: Project): void {
    this.selectedProject = project;
    this.currentImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    this.currentImageIndex = 0;
    document.body.style.overflow = '';
  }

  nextImage(): void {
    if (this.selectedProject) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProject.images.length;
    }
  }

  prevImage(): void {
    if (this.selectedProject) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.selectedProject.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }
}

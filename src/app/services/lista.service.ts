//src/app/services/lista.service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  list = [
    // DISEÑO
    {
      name: 'Bootstrap',
      topic: ['Diseño'],
      url: 'https://getbootstrap.com/',
      description: 'Bootstrap es un conjunto de herramientas de interfaz potente y repleto de funciones. Construya cualquier cosa, desde el prototipo hasta la producción, en minutos.'
    },
    {
      name:'Storybook',
      topic: ['Diseño'],
      url: 'https://storybook.js.org/',
      description: 'Storybook es un taller de interfaz para crear componentes y páginas de interfaz de usuario de forma aislada. Le ayuda a desarrollar y compartir estados y casos extremos de difícil acceso sin necesidad de ejecutar toda la aplicación. Miles de equipos lo utilizan para el desarrollo, las pruebas y la documentación de la interfaz de usuario. Es de código abierto y gratuito.'
    },
    {
      name:'Chakra UI',
      topic: ['Diseño'],
      url: 'https://v2.chakra-ui.com/',
      description: 'Chakra UI es una biblioteca de componentes simple, modular y accesible que le brinda los componentes básicos que necesita para crear sus aplicaciones React.'
    },
    {
      name:'Vanilla extract',
      topic: ['Diseño'],
      url: 'https://vanilla-extract.style/',
      description: 'Hojas de estilo de tiempo de ejecución cero en TypeScript.'
    },
    {
      name:'Panda CSS',
      topic: ['Diseño'],
      url: 'https://panda-css.com/',
      description: `Panda es un motor de estilo que genera primitivas de estilo para crear recetas y CSS atómicos de una manera legible y con seguridad de escritura.
      Panda combina la experiencia de desarrollador de CSS-in-JS y el rendimiento de CSS atómico. Aprovecha el análisis estático para escanear sus archivos JavaScript y TypeScript en busca de accesorios de estilo JSX y llamadas a funciones, generando estilos bajo demanda (también conocido como Just-in-Time).`
    },
    {
      name:'Tailwind CSS',
      topic: ['Diseño'],
      url: 'https://tailwindcss.com/',
      description: `Tailwind CSS funciona escaneando todos sus archivos HTML, componentes JavaScript y cualquier otra plantilla en busca de nombres de clases, generando los estilos correspondientes y luego escribiéndolos en un archivo CSS estático.
      Es rápido, flexible y confiable, sin tiempo de ejecución.`
    },
    {
      name:'Material UI',
      topic: ['Diseño'],
      url: 'https://mui.com/',
      description: `MUI ofrece un conjunto completo de herramientas de interfaz de usuario gratuitas para ayudarle a ofrecer nuevas funciones más rápido. `
    },
    {
      name:'Ant Design',
      topic: ['Diseño'],
      url: 'https://ant.design/',
      description: 'Ant Design es una biblioteca de componentes de interfaz de usuario. js que está diseñada para ser la base de tu proyecto.'
    },
    {
      name: 'ShadCn',
      topic: ['Diseño'],
      url: 'https://ui.shadcn.com/',
      description: 'Componentes bellamente diseñados que puedes copiar y pegar en tus aplicaciones. Accesible. Personalizable. Diseñado para mejorar la experiencia de usuario.'
    },
    // HERRAMIENTAS
    {
      name: 'Scroll Driven Animations',
      topic: ['Herramientas'],
      url: 'https://scroll-driven-animations.style/',
      description: 'Animaciones basadas en desplazamiento con scroll.'
    },
    {
      name: 'Playwright',
      topic: ['Testing'],
      url: 'https://playwright.dev/',
      description: 'Playwright es una biblioteca de automatización de código abierto para pruebas de navegadores y web scraping desarrollada por Microsoft y lanzada el 31 de enero de 2020, que desde entonces se ha vuelto popular entre programadores y desarrolladores web'
    },
    {
      name: 'Chromatic',
      topic: ['Testing'],
      url: 'https://www.chromatic.com/',
      description: 'Chromatic es un complemento de Storybook para pruebas de regresión visual y revisión en la nube.'
    },
    {
      name: 'Start Spring.io',
      topic: ['Herramientas'],
      url: 'https://start.spring.io/',
      description: 'Start Spring.io es una guía de inicio de Spring Boot. Crea una aplicación de Spring Boot de forma sencilla y rapida.'
    },
    // TIPOGRAFIA
    {
      name: 'Google Fonts',
      topic: ['Tipografia'],
      url: 'https://fonts.google.com/',
      description: 'Google Fonts es un directorio interactivo en el que puedes encontrar 923 familias de fuentes tipográficas de uso libre y completamente gratuito.'
    },
    {
      name: 'Font Squirrel',
      topic: ['Tipografia'],
      url: 'http://www.fontsquirrel.com',
      description: 'Font Squirrel es una biblioteca de fuentes. Con Font Squirrel, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Font Pair',
      topic: ['Tipografia'],
      url: 'http://fontpair.co',
      description: 'Font Pair es una biblioteca de fuentes. Con Font Pair, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Typogui',
      topic: ['Tipografia'],
      url: 'http://www.typogui.de',
      description: 'Typogui es una biblioteca de fuentes. Con Typogui, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: '1001 Fonts',
      topic: ['Tipografia'],
      url: 'https://www.1001fonts.com/',
      description: '1001 Fonts es una biblioteca de fuentes. Con 1001 Fonts, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    // COLORES
    {
      name: 'Adobe Color',
      topic: ['Colores'],
      url: 'https://color.adobe.com/es/',
      description: 'Adobe Color es una biblioteca de colores. Con Adobe Color, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Paletton',
      topic: ['Colores'],
      url: 'https://paletton.com/',
      description: 'Paletton es una biblioteca de colores. Con Paletton, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    {
      name: 'uigradients',
      topic: ['Colores'],
      url: 'https://uigradients.com/#Shifter',
      description: 'uigradients es una biblioteca de colores. Con uigradients, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    {
      name: 'CSS Gradient',
      topic: ['Colores'],
      url: 'https://cssgradient.io/',
      description: 'CSS Gradient es una biblioteca de colores. Con CSS Gradient, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    // IMAGENES
    {
      name: 'Pexels',
      topic: ['Imagenes'],
      url: 'https://www.pexels.com/es-es/',
      description: 'Se trata de una plataforma social en la que los propios fotógrafos suben sus fotos seleccionadas.'
    },
    {
      name: 'Pikwizard',
      topic: ['Imagenes'],
      url: 'https://pikwizard.com/',
      description: 'Pikwizard es una biblioteca de imagenes. Con Pikwizard, puedes crear tus propios imagenes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Unsplash',
      topic: ['Imagenes'],
      url: 'https://unsplash.com/',
      description: 'Unsplash es una biblioteca de imagenes. Con Unsplash, puedes crear tus propios imagenes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Foodies Feed',
      topic: ['Imagenes'],
      url: 'https://www.foodiesfeed.com/',
      description: 'Foodies Feed es una biblioteca de imagenes. Con Foodies Feed, puedes crear tus propios imagenes de forma sencilla y de forma eficiente.'
    },
    // TRABAJOS COLABORATIVOS
    {
      name: 'Forgoodfirstissue',
      topic: ['Trabajos Colaborativos'],
      url: 'https://forgoodfirstissue.github.com/',
      description: `Preste sus habilidades a un proyecto de código abierto centrado en los Bienes Públicos Digitales (BPI) . Desde la lucha contra el cambio climático hasta la solución del hambre en el mundo, sus esfuerzos contribuirán a crear un futuro mejor para todos. Juntos podemos impulsar contribuciones positivas y duraderas al mundo, un compromiso a la vez.`
    },
    {
      name: 'Good First Issue',
      topic: ['Trabajos Colaborativos'],
      url: 'https://goodfirstissue.dev/',
      description: `Good First Issue te fácilita el desarrollo de proyectos populares de código abierto y le ayuda a realizar su primera contribución al código abierto.`
    },
    {
      name: 'Good First Issues',
      topic: ['Trabajos Colaborativos'],
      url: 'https://goodfirstissues.com/',
      description: 'Good First Issues es una biblioteca de proyectos. Con Good First Issues, puedes crear tus propios proyectos de forma sencilla y de forma eficiente.'
    },
    {
      name: '',
      topic: [''],
      url: '',
      description: ''
    },
    {
      name: '',
      topic: [''],
      url: '',
      description: ''
    },
  ]

}

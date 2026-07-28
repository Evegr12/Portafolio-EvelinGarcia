export const projects = [
  {
    title: "Marcando Huellitas",
    description:
      "Ecommerce de productos para mascotas con catálogo y secciones complementarias de donaciones y adopciones.",

    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Java",
      "Spring Boot",
      "MySQL"
    ],

    status: "En desarrollo",
    category: "Java Full Stack",

    repo:
      "https://github.com/ericperucho12-netizen/Marcando-Huellitas",

    demo: "https://marcando-huellitas.vercel.app/",
    video: "",
    caseStudyPath: "",

    image: "/projects/marcando-huellitas.png",
    accent: "purple",
    comingSoon: false,

    caseStudy: {
      overview:
        "Marcando Huellitas es un ecommerce colaborativo orientado a la venta de productos para mascotas. El sitio también incluye espacios para promover donaciones y adopciones.",

      problem:
        "El proyecto busca reunir en una sola plataforma la compra de productos para mascotas y la difusión de iniciativas de apoyo animal.",

      objective:
        "Desarrollar una aplicación ecommerce funcional, responsiva y organizada, con frontend, backend y persistencia de datos.",

      howItWorks: [
        "Las personas pueden consultar productos disponibles para mascotas.",
        "Los productos se organizan dentro de un catálogo.",
        "El sitio incluye formularios de contacto y validaciones.",
        "Las secciones de adopciones y donaciones permiten dar visibilidad a iniciativas de apoyo animal.",
        "El backend administra la información y se conecta con una base de datos MySQL."
      ],

      contribution: [
        "Construcción de secciones responsivas con HTML, CSS, JavaScript y Bootstrap.",
        "Implementación de validaciones para el formulario de contacto.",
        "Integración de Formspree para el envío de mensajes por correo electrónico.",
        "Colaboración en wireframes, guía visual, paleta de colores y selección tipográfica.",
        "Trabajo colaborativo mediante Git, GitHub y Pull Requests."
      ],

      challenges: [
        "Mantener una apariencia visual consistente entre las diferentes secciones.",
        "Integrar los cambios desarrollados por diferentes integrantes del equipo.",
        "Validar correctamente los datos antes de enviar los formularios."
      ],

      solutions: [
        "Se definieron estilos, componentes visuales y criterios compartidos para conservar la identidad del sitio.",
        "Se utilizó Git y GitHub para integrar cambios mediante ramas y Pull Requests.",
        "Se desarrollaron validaciones personalizadas en JavaScript para cada campo."
      ],

      learning: [
        "Desarrollo colaborativo de una aplicación ecommerce.",
        "Integración de frontend y backend.",
        "Validación de formularios con JavaScript.",
        "Organización de tareas y resolución de conflictos con Git.",
        "Diseño de interfaces orientadas a una experiencia de usuario clara."
      ],

      result:
        "El proyecto se encuentra en desarrollo y cuenta con una estructura visual responsiva, formularios validados y secciones enfocadas en productos, adopciones y donaciones."
    }
  },

  {
    title: "KOFit — Landing page de boxeo",

    description:
      "Landing page responsiva desarrollada durante un hackathon frontend. Implementé la sección Acerca de y colaboré en la integración mediante Git y GitHub.",

    stack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript"
    ],

    status: "Terminado",
    category: "Hackathon Frontend",

    repo:
      "https://github.com/DIEGOELIASLOPEZ/Hakathon-KOFit",

    demo:
      "https://hakathon-ko-fit.vercel.app/",

    video: "",
    caseStudyPath: "",

    image: "/projects/kofit.png",
    accent: "wine",
    comingSoon: false,

    caseStudy: {
      overview:
        "KOFit es una landing page desarrollada durante un hackathon frontend para presentar servicios relacionados con entrenamiento de boxeo.",

      problem:
        "El proyecto necesitaba comunicar los servicios y la identidad de un gimnasio mediante una página atractiva, clara y responsiva.",

      objective:
        "Construir una landing page funcional dentro de un tiempo limitado y trabajar colaborativamente mediante control de versiones.",

      howItWorks: [
        "La página presenta la identidad y propuesta del gimnasio.",
        "Organiza información sobre servicios, entrenamientos y beneficios.",
        "Permite navegar entre diferentes secciones desde el menú principal.",
        "Se adapta a diferentes tamaños de pantalla."
      ],

      contribution: [
        "Desarrollo de la sección Acerca de.",
        "Maquetación responsiva con Bootstrap.",
        "Integración de estilos y contenido visual.",
        "Colaboración mediante Git y GitHub."
      ],

      challenges: [
        "Trabajar bajo un límite de tiempo.",
        "Mantener consistencia entre secciones desarrolladas por diferentes integrantes.",
        "Integrar cambios sin afectar el trabajo del equipo."
      ],

      solutions: [
        "Se dividieron las secciones entre los integrantes del equipo.",
        "Se utilizaron ramas y commits para organizar las modificaciones.",
        "Se revisó la integración visual antes de publicar el proyecto."
      ],

      learning: [
        "Trabajo colaborativo bajo presión.",
        "Uso de Bootstrap para interfaces responsivas.",
        "Integración de cambios mediante Git y GitHub.",
        "Comunicación y distribución de tareas."
      ],

      result:
        "Se obtuvo una landing page funcional y responsiva, desplegada públicamente al finalizar el hackathon."
    }
  },

  {
    title: "Visualización de pluviómetros",

    description:
      "Mapa y tabla para visualizar 29 pluviómetros e identificar la intensidad de lluvia mediante una escala de colores.",

    stack: [
      "React",
      "Node.js",
      "MySQL"
    ],

    status: "Caso de estudio",
    category: "Frontend",

    repo: "",
    demo: "",
    video: "",
    caseStudyPath: "",

    image: "/projects/pluviometros.png",
    accent: "rose",
    comingSoon: false,

    caseStudy: {
      overview:
        "Aplicación desarrollada para consultar visualmente la información de 29 estaciones pluviométricas mediante un mapa y una tabla.",

      problem:
        "La información de lluvia necesitaba presentarse de forma más clara para facilitar la identificación de estaciones y niveles de intensidad.",

      objective:
        "Transformar datos almacenados en una base remota en una interfaz visual que facilitara su consulta e interpretación.",

      howItWorks: [
        "La aplicación consulta la información de las estaciones.",
        "Cada pluviómetro se representa mediante un marcador en el mapa.",
        "Los colores indican la intensidad de lluvia registrada.",
        "Al seleccionar una estación se muestra un popup con su información.",
        "La tabla permite consultar los datos de las estaciones de forma estructurada."
      ],

      contribution: [
        "Desarrollo de componentes de interfaz con React.",
        "Construcción del mapa y la tabla de estaciones.",
        "Representación de intensidades mediante colores.",
        "Consumo de información proporcionada por un backend en Node.js.",
        "Visualización de datos almacenados en una base MySQL remota."
      ],

      challenges: [
        "Representar una gran cantidad de estaciones sin saturar la interfaz.",
        "Mantener sincronizados los datos del mapa y la tabla.",
        "Mostrar la intensidad de lluvia de manera fácil de interpretar."
      ],

      solutions: [
        "Se utilizó una escala de colores para diferenciar intensidades.",
        "Se organizaron los datos en componentes reutilizables.",
        "Se añadieron popups para consultar el detalle de cada estación.",
        "Se separó la visualización geográfica de la consulta tabular."
      ],

      learning: [
        "Visualización de datos geográficos.",
        "Consumo de información desde una base de datos remota.",
        "Desarrollo de componentes con React.",
        "Organización de interfaces con mapas, tablas y filtros.",
        "Representación visual de datos mediante colores."
      ],

      result:
        "Se obtuvo una interfaz que permite consultar las estaciones pluviométricas mediante mapa, tabla, colores de intensidad y ventanas de detalle."
    }
  },

  {
    title: "Sistema de mantenimiento de tinacos y cisternas",

    description:
      "Aplicación web desarrollada para gestionar mantenimientos, usuarios, roles, estados, filtros y seguimiento de registros.",

    stack: [
      "Laravel",
      "MySQL",
      "JavaScript"
    ],

    status: "Terminado",
    category: "Full Stack",

    repo:
      "https://github.com/Evegr12/Sistema_de_mantenimiento_de_cisternas_y_tinacos_Segiagua",

    demo: "",
    video: "",
    caseStudyPath: "",

    image: "/projects/tinacos.png",
    accent: "wine",
    comingSoon: false,

    caseStudy: {
      overview:
        "Sistema web desarrollado para registrar y dar seguimiento a procesos relacionados con el mantenimiento de tinacos y cisternas.",

      problem:
        "El seguimiento de reportes, usuarios y etapas de mantenimiento requería una plataforma que centralizara la información y facilitara su consulta.",

      objective:
        "Desarrollar módulos que permitieran registrar, filtrar y administrar reportes de mantenimiento según diferentes roles y estados.",

      howItWorks: [
        "Los usuarios acceden al sistema según el rol asignado.",
        "Los reportes pasan por diferentes estados durante el proceso.",
        "Las pantallas muestran la información correspondiente a cada tipo de usuario.",
        "Los filtros permiten localizar registros específicos.",
        "La vista de detalle concentra la información de cada reporte."
      ],

      contribution: [
        "Desarrollo de módulos con Laravel y MySQL.",
        "Implementación de cuatro roles de usuario.",
        "Manejo de cinco estados dentro del flujo de los reportes.",
        "Construcción de cinco pantallas principales.",
        "Implementación de seis filtros de búsqueda.",
        "Desarrollo de la vista detallada de los registros."
      ],

      challenges: [
        "Mostrar información diferente según el rol del usuario.",
        "Controlar correctamente las transiciones entre estados.",
        "Facilitar la búsqueda dentro de una cantidad creciente de reportes."
      ],

      solutions: [
        "Se separaron las funcionalidades y vistas según los permisos de cada rol.",
        "Se organizaron los estados dentro de un flujo de seguimiento.",
        "Se implementaron filtros para reducir y localizar registros.",
        "Se creó una vista de detalle para centralizar la información."
      ],

      learning: [
        "Desarrollo de módulos con Laravel.",
        "Diseño y consulta de bases de datos MySQL.",
        "Manejo de roles, permisos y estados.",
        "Construcción de filtros y vistas de detalle.",
        "Análisis de requerimientos para procesos institucionales."
      ],

      result:
        "El sistema permitió centralizar los reportes y facilitar su administración mediante roles, estados, filtros y pantallas de seguimiento."
    }
  },

  {
    title: "PWA de residuos orgánicos",

    description:
      "Aplicación web progresiva para registrar, consultar y dar seguimiento a la recolección de residuos orgánicos.",

    stack: [
      "PWA",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Socket.io",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    status: "Terminado",
    category: "Full Stack",

    repo:
      "https://github.com/Evegr12/Waste_Tracker",

    demo: "",
    video: "https://drive.google.com/file/d/1m6gtbnfw8eTkotTS1OZITrVJ3BGGWLR5/view?usp=sharing",
    caseStudyPath: "",

    image: "/projects/residuos.png",

    gallery: [
      {
        src: "/projects/waste-tracker/inicio.png",
        alt: "Panel principal del usuario",
        caption: "Panel principal"
      },
      {
        src: "/projects/waste-tracker/registro.png",
        alt: "Pantalla de registro para recolectores de Waste Tracker",
        caption: "Registro"
      },
      {
        src: "/projects/waste-tracker/inicio-restaurante.png",
        alt: "Panel principal del perfil de restaurante",
        caption: "Panel del restaurante"
      },
      {
        src: "/projects/waste-tracker/perfil.png",
        alt: "Perfil del restaurante",
        caption: "Perfil del restaurante con cantidad de recolecciones finalizadas"
      },
      {
        src: "/projects/waste-tracker/mapa.png",
        alt: "Mapa de rutas y puntos de recolección",
        caption: "Mapa de recolección"
      }
    ],

    galleryNote:
      "Capturas tomadas durante la ejecución local del proyecto. La aplicación no cuenta actualmente con una demo pública.",

    accent: "lilac",
    comingSoon: false,

    caseStudy: {
      overview:
        "Waste Tracker es una aplicación web progresiva desarrollada en equipo para gestionar la recolección de residuos orgánicos entre restaurantes y recolectores.",

      problem:
        "El seguimiento de residuos podía realizarse de manera dispersa o manual, dificultando la consulta de registros y el contacto entre restaurantes y recolectores.",

      objective:
        "Centralizar el registro, consulta y seguimiento de residuos orgánicos mediante una aplicación accesible desde distintos dispositivos.",

      howItWorks: [
        "El usuario inicia sesión según su tipo de perfil.",
        "Los restaurantes registran los residuos disponibles.",
        "Los recolectores consultan los registros disponibles.",
        "Los usuarios pueden revisar su historial de operaciones.",
        "La información se almacena en una base de datos MySQL.",
        "La aplicación puede instalarse como una PWA."
      ],

      contribution: [
        "Construcción e integración de interfaces.",
        "Validación de formularios.",
        "Conexión entre frontend y backend.",
        "Integración de consultas con MySQL.",
        "Trabajo colaborativo mediante Git y GitHub."
      ],

      challenges: [
        "Conectar correctamente la aplicación con MySQL.",
        "Organizar las rutas entre archivos HTML, JavaScript, CSS e imágenes.",
        "Gestionar diferentes tipos de usuario.",
        "Mantener sincronizada la información entre frontend y backend."
      ],

      solutions: [
        "Se utilizó Sequelize para organizar la conexión y las consultas a MySQL.",
        "Se revisaron y organizaron las rutas relativas de los recursos.",
        "Se separaron los flujos de acuerdo con el tipo de usuario.",
        "Se probaron de manera individual las consultas y endpoints.",
        "Se utilizaron variables de entorno para proteger las credenciales."
      ],

      learning: [
        "Conexión de Node.js con MySQL.",
        "Creación de servidores con Express.js.",
        "Uso de Sequelize como ORM.",
        "Implementación de una aplicación web progresiva.",
        "Trabajo colaborativo y control de versiones.",
        "Resolución de problemas de rutas, despliegue y conexión."
      ],

      result:
        "Se desarrolló una PWA funcional con perfiles de restaurantes y recolectores, registro de residuos, historial y persistencia de información."
    }
  },

  {
    title: "Clon de Google",

    description:
      "Recreación de la interfaz principal de Google para practicar maquetación, estilos, distribución de elementos y diseño responsivo.",

    stack: [
      "HTML",
      "CSS"
    ],

    status: "Terminado",
    category: "Frontend",

    repo:
      "https://github.com/Evegr12/Google-clone",

    demo:
      "https://google-clone-ee4m094wp-evegr12s-projects.vercel.app/",

    video: "",
    caseStudyPath: "",

    image: "/projects/google-clone.png",
    accent: "lilac",
    comingSoon: false,

    caseStudy: {
      overview:
        "Proyecto frontend realizado para recrear visualmente la página principal de Google.",

      problem:
        "El reto consistía en reproducir una interfaz conocida respetando su distribución, alineación, proporciones y comportamiento visual.",

      objective:
        "Practicar los fundamentos de HTML y CSS mediante la recreación de una interfaz existente.",

      howItWorks: [
        "La interfaz presenta una barra superior de navegación.",
        "Muestra el logotipo, campo de búsqueda y botones principales.",
        "Los elementos se distribuyen utilizando estilos CSS.",
        "La página se adapta a diferentes tamaños de pantalla."
      ],

      contribution: [
        "Construcción completa de la estructura HTML.",
        "Diseño y alineación de los elementos con CSS.",
        "Implementación de estilos para botones, enlaces y buscador.",
        "Publicación del proyecto en Vercel."
      ],

      challenges: [
        "Reproducir correctamente las proporciones de la interfaz.",
        "Centrar los elementos principales.",
        "Mantener alineados el encabezado y el pie de página."
      ],

      solutions: [
        "Se utilizaron contenedores flexibles para distribuir los elementos.",
        "Se ajustaron márgenes, tamaños y espacios mediante CSS.",
        "Se realizaron pruebas visuales en diferentes tamaños de pantalla."
      ],

      learning: [
        "Estructura semántica con HTML.",
        "Uso de Flexbox.",
        "Manejo de márgenes, espacios y alineación.",
        "Diseño responsivo básico.",
        "Despliegue de sitios estáticos."
      ],

      result:
        "Se obtuvo una recreación funcional de la página principal de Google y se reforzaron los fundamentos de maquetación frontend."
    }
  },

  {
    title: "Próximo Hackathon",

    description:
      "Nuevo proyecto colaborativo en el que aplicaré desarrollo frontend y backend, trabajo en equipo, control de versiones y resolución de problemas.",

    stack: ["Próximamente"],

    status: "Próximamente",
    category: "Hackathon",

    repo: "",
    demo: "",
    video: "",
    caseStudyPath: "",

    image: "",
    accent: "purple",
    comingSoon: true,

    caseStudy: null
  }
];
export const posts = [
    {
        id: 1,
        title: "Lo que aprendí desarrollando Waste Tracker",
        date: "29 de julio de 2026",
        readingTime: "4 min de lectura",
        category: "Experiencia de desarrollo",

        excerpt:
        "Los principales aprendizajes que obtuve al construir una PWA para gestionar la recolección de residuos orgánicos.",

        tags: [
        "PWA",
        "Node.js",
        "MySQL",
        "Sequelize"
        ],

        image: "/blog/waste-tracker-blog.png",

        introduction:
        "Waste Tracker fue uno de los proyectos que más me ayudó a comprender cómo se conectan las diferentes partes de una aplicación web. Durante su desarrollo trabajé con interfaces, rutas, base de datos y distintos perfiles de usuario.",

        sections: [
        {
            title: "El reto del proyecto",
            paragraphs: [
            "La aplicación buscaba facilitar el registro y seguimiento de residuos orgánicos entre restaurantes y recolectores.",
            "Uno de los principales retos fue mantener conectados el frontend, el backend y la base de datos sin perder claridad en el flujo de cada tipo de usuario."
            ]
        },
        {
            title: "Conexión con la base de datos",
            paragraphs: [
            "Utilizamos MySQL para almacenar la información y Sequelize para organizar los modelos y las consultas.",
            "Este proceso me permitió comprender mejor cómo una acción realizada desde una interfaz termina convirtiéndose en un registro dentro de una base de datos."
            ]
        },
        {
            title: "Lo que aprendí",
            list: [
            "Organizar rutas y recursos dentro de una aplicación.",
            "Conectar Node.js con MySQL.",
            "Utilizar Sequelize como ORM.",
            "Separar los flujos según el tipo de usuario.",
            "Resolver errores de conexión y rutas relativas.",
            "Trabajar colaborativamente con Git y GitHub."
            ]
        }
        ],

        conclusion:
        "Waste Tracker fortaleció mi capacidad para analizar errores, conectar diferentes tecnologías y entender una aplicación como un sistema completo, no solamente como pantallas independientes."
    },

    {
        id: 2,
        title: "Cómo trabajamos en equipo con Git y GitHub",
        date: "29 de julio de 2026",
        readingTime: "3 min de lectura",
        category: "Trabajo colaborativo",

        excerpt:
        "Una explicación de cómo utilizamos ramas, commits y Pull Requests para organizar proyectos desarrollados en equipo.",

        tags: [
        "Git",
        "GitHub",
        "Pull Requests",
        "Colaboración"
        ],

        image: "/blog/git-github-blog.png",

        introduction:
        "Trabajar en equipo implica mucho más que dividir tareas. También requiere organizar los cambios para evitar que una persona sobrescriba el trabajo de otra.",

        sections: [
        {
            title: "Organización mediante ramas",
            paragraphs: [
            "Cada integrante trabajaba en una rama independiente. Esto permitía desarrollar una sección o funcionalidad sin afectar directamente la versión principal del proyecto.",
            "Los nombres de las ramas ayudaban a identificar la tarea realizada y facilitaban el seguimiento de los cambios."
            ]
        },
        {
            title: "Commits claros",
            paragraphs: [
            "Aprendí que un commit debe representar un cambio concreto y describirse con un mensaje claro.",
            "En lugar de escribir mensajes generales como cambios, es mejor indicar exactamente qué se agregó, corrigió o actualizó."
            ]
        },
        {
            title: "Pull Requests",
            paragraphs: [
            "Antes de integrar una rama, utilizábamos Pull Requests para revisar los cambios.",
            "Esto permitía detectar conflictos, recibir comentarios y comprobar que la funcionalidad no afectara otras partes del proyecto."
            ]
        },
        {
            title: "Buenas prácticas que apliqué",
            list: [
            "Actualizar mi rama antes de integrar cambios.",
            "Realizar commits pequeños y descriptivos.",
            "Revisar los archivos modificados antes de hacer push.",
            "Evitar subir credenciales o archivos innecesarios.",
            "Comunicar al equipo qué sección estaba desarrollando."
            ]
        }
        ],

        conclusion:
        "Git y GitHub no solo sirven para almacenar código. También son herramientas de comunicación, organización y control que permiten trabajar de manera más segura dentro de un equipo."
    },

    {
        id: 3,
        title: "Retos al conectar Node.js con MySQL",
        date: "29 de julio de 2026",
        readingTime: "4 min de lectura",
        category: "Backend y bases de datos",

        excerpt:
        "Errores comunes que enfrenté al conectar una aplicación Node.js con MySQL y las soluciones que me ayudaron a resolverlos.",

        tags: [
        "Node.js",
        "Express.js",
        "MySQL",
        "Backend"
        ],

        image: "/blog/node-mysql-blog.png",

        introduction:
        "Conectar una aplicación con una base de datos parece sencillo hasta que aparecen errores de credenciales, puertos, variables de entorno o consultas.",

        sections: [
        {
            title: "Variables de entorno",
            paragraphs: [
            "Uno de los primeros aprendizajes fue no escribir las credenciales directamente dentro del código.",
            "Las variables de entorno permiten separar datos sensibles como el usuario, la contraseña, el host y el nombre de la base de datos."
            ]
        },
        {
            title: "Configuración de la conexión",
            paragraphs: [
            "También fue importante comprobar que MySQL estuviera ejecutándose y que el puerto configurado coincidiera con el utilizado por el servidor.",
            "Un error pequeño en el nombre de la base de datos o en una contraseña puede impedir completamente la conexión."
            ]
        },
        {
            title: "Pruebas por partes",
            paragraphs: [
            "Cuando una consulta no funcionaba, resultaba más efectivo probar primero la conexión y después el endpoint.",
            "Dividir el problema en pasos pequeños permitió encontrar con mayor rapidez dónde se originaba el error."
            ]
        },
        {
            title: "Aprendizajes principales",
            list: [
            "Proteger credenciales con variables de entorno.",
            "Comprobar host, puerto, usuario y base de datos.",
            "Revisar los mensajes de error completos.",
            "Probar consultas directamente en MySQL.",
            "Validar los endpoints por separado.",
            "Mantener una estructura clara en modelos y controladores."
            ]
        }
        ],

        conclusion:
        "Resolver errores de conexión me enseñó a no modificar muchas cosas al mismo tiempo. Revisar cada parte por separado facilita el diagnóstico y ayuda a encontrar soluciones más confiables."
    }
];
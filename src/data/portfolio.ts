export const navigationItems = [
	{ href: "#perfil", label: "Perfil" },
	{ href: "#experiencia", label: "Experiencia" },
	{ href: "#formacion", label: "Formación" },
	{ href: "#contacto", label: "Contacto" },
];

export const technologies = [
	"HTML",
	"CSS",
	"Tailwind CSS",
	"JavaScript",
	"TypeScript",
	"Next.js",
	"React",
	"Vue",
	"Nuxt.js",
	"PHP",
	"Node.js",
	"Laravel",
	"Laravel Nova",
	"Symfony",
	"Strapi",
	"Mautic",
	"MySQL",
	"PostgreSQL",
	"Mailjet",
	"Amazon SES",
	"Git",
	"SSO",
	"Headless CMS",
];

export const profileParagraphs = [
	"He trabajado en proyectos que van desde herramientas internas de gestión hasta productos con integraciones publicitarias, plataformas headless, aplicaciones móviles y soluciones para el sector salud. Me siento cómodo conectando necesidades de negocio con decisiones técnicas concretas.",
	"Mi experiencia destaca por combinar interfaces en Vue, React, Next.js y Nuxt.js con backends en PHP, Laravel, Lumen, Symfony y Strapi, además de integraciones con servicios externos, importadores de datos y automatización de despliegues.",
];

export const experience = [
	{
		period: "Junio 2019 — Febrero 2026",
		role: "Full Stack Developer",
		company: "ROI-UP Group / Azurally",
		description:
			"Participación en productos de marketing, automatización, headless CMS y aplicaciones corporativas, combinando frontend moderno, backend PHP/Node CMS y Tech Lead en los últimos proyectos.",
		projects: [
			"Herramienta para facilitar la creación y gestión de anuncios en Google Ads, con frontend en Vue/Vuex, microservicios backend con Apache Kafka y Lumen, y persistencia en Apache Cassandra.",
			"Desarrollo de plugins sobre Mautic para mejorar y ampliar funcionalidades, incluyendo una integración para envío de mailing mediante Amazon SES como alternativa a Mailjet.",
			"Aplicación en Laravel Nova para gestionar clientes, plugins contratados y versiones de Git, permitiendo actualizar plugins por cliente o de forma masiva y levantar entornos con Ansible.",
			"Web de servicios desarrollada con Nuxt.js.",
			"Tech Lead en una aplicación para médicos de AstraZeneca orientada al análisis de posibles enfermedades raras: frontend Next.js con login SSO, backend Strapi, importación masiva de publicaciones médicas, matching configurable por pregunta, gestión de casos y cálculo en vivo de porcentajes de compatibilidad.",
			"Proyectos Headless CMS con frontend en Next.js e integración con Drupal, Sitecore y otros backends, centrado en la creación de componentes reutilizables.",
			"Tech Lead del Backend en Strapi para una app React Native de Hitachi con sistema multipaís de puntos y recompensas configurable por rol, producto, acción de venta o instalación y país.",
			"Migración de una web desde una versión antigua de Laravel a Strapi, con modelado de entidades e importadores de base de datos configurables por credenciales de origen, relaciones y reglas por entidad.",
		],
	},
	{
		period: "Febrero 2017 — Junio 2019",
		role: "Full Stack Developer",
		company: "iEditorial",
		description:
			"Desarrollo de una plataforma interna de gestión de tareas y proyectos conectada con el contenido de cursos y másteres online.",
		projects: [
			"Construcción de la interfaz con Vue y Vuex para organizar tareas vinculadas a contenidos formativos.",
			"Desarrollo backend en PHP puro con base de datos MySQL para dar soporte a la lógica de proyectos, tareas y relaciones con cursos.",
		],
	},
	{
		period: "Agosto 2016 — Febrero 2017",
		role: "Prácticas Ícaro · Universidad de Granada",
		company: "iEditorial",
		description:
			"Primera experiencia profesional en un entorno de desarrollo web, con formación inicial en Symfony y trabajo práctico en interfaces con filtros avanzados.",
		projects: [
			"Desarrollo de la vista de un buscador de recursos con múltiples filtros, primero en HTML, JavaScript y jQuery, y posteriormente adaptado a Symfony.",
		],
	},
];

export const education = [
	"Bachillerato, modalidad de Ciencias y Tecnología.",
	"Ingeniería Informática en la Universidad de Granada, especialidad de Ingeniería del Software, con aproximadamente el 90% de los créditos superados.",
];

export const contactItems = [
	{
		label: "Email",
		value: "rogeliogplol@gmail.com",
		href: "mailto:rogeliogplol@gmail.com",
	},
	{
		label: "LinkedIn",
		value: "Rogelio García Peña",
		href: "https://www.linkedin.com/in/rogelio-garc%C3%ADa-pe%C3%B1a-b70b08176/",
	},
	{
		label: "CV",
		value: "Descargar PDF",
		href: "/cv-rogelio-garcia-pena.pdf",
		download: true,
	},
];

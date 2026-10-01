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
			"Participación en productos de marketing, automatización, gestión de contenidos y aplicaciones corporativas, con responsabilidades de liderazgo técnico en los últimos proyectos.",
		technologies: [
			"Google Ads", "Vue", "Vuex", "Apache Kafka", "Lumen", "Apache Cassandra", "Mautic",
			"Amazon SES", "Mailjet", "Laravel Nova", "Git", "Ansible", "Nuxt.js",
			"Next.js", "SSO", "Strapi", "Drupal", "Sitecore", "React Native", "Laravel", "PHP", "Node.js",
		],
		projects: [
			"Herramienta para facilitar la creación y gestión de anuncios publicitarios, con una interfaz conectada a microservicios y almacenamiento de datos.",
			"Desarrollo de plugins para ampliar funcionalidades de una plataforma de automatización, incluida una integración de envío de correo como alternativa al servicio anterior.",
			"Aplicación para gestionar clientes, plugins contratados y versiones del código, con actualizaciones por cliente o masivas y preparación de entornos.",
			"Desarrollo de una web de servicios.",
			"Liderazgo técnico en una aplicación para médicos de AstraZeneca orientada al análisis de posibles enfermedades raras: acceso con inicio de sesión único, importación masiva de publicaciones médicas, comparación configurable por pregunta, gestión de casos y cálculo en vivo de porcentajes de compatibilidad.",
			"Proyectos de gestión de contenidos con interfaces integradas con distintos sistemas y creación de componentes reutilizables.",
			"Liderazgo técnico del backend de una app de Hitachi con un sistema multipaís de puntos y recompensas configurable por rol, producto, acción de venta o instalación y país.",
			"Migración de una web a un nuevo sistema de gestión de contenidos, con modelado de entidades e importadores de datos configurables por credenciales de origen, relaciones y reglas por entidad.",
		],
	},
	{
		period: "Febrero 2017 — Junio 2019",
		role: "Full Stack Developer",
		company: "iEditorial",
		description:
			"Desarrollo de una plataforma interna de gestión de tareas y proyectos conectada con el contenido de cursos y másteres online.",
		technologies: ["Vue", "Vuex", "PHP", "MySQL"],
		projects: [
			"Construcción de la interfaz para organizar tareas vinculadas a contenidos formativos.",
			"Desarrollo de la lógica de proyectos, tareas y relaciones con cursos, con almacenamiento en base de datos.",
		],
	},
	{
		period: "Agosto 2016 — Febrero 2017",
		role: "Prácticas Ícaro · Universidad de Granada",
		company: "iEditorial",
		description:
			"Primera experiencia profesional en desarrollo web, con formación inicial y trabajo práctico en interfaces con filtros avanzados.",
		technologies: ["HTML", "JavaScript", "jQuery", "Symfony"],
		projects: [
			"Desarrollo de la vista de un buscador de recursos con múltiples filtros y posterior adaptación al entorno de la aplicación.",
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

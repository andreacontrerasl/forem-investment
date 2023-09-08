import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TerminalIcon from '@mui/icons-material/Terminal';
import DvrIcon from '@mui/icons-material/Dvr';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';


const home_data_EN = [
    {
        title1: "Our Trusted Custodians",
        text1: "Welcome to our boutique Registered Investment Advisory firm! We specialize in serving high-net-worth families, entrepreneurs, and mid-sized businesses by offering fee-only Wealth Management and Portfolio Management services. Our focus is to help our clients totheir financial goals.",
        title2: "Expertise and technology to best achieve your financial goals" ,
        text2: [
            {
                id: "bespoke",
                photo: '/bespoke.webp',
                title: "Customized investment portfolios",
                button: 'Learn more',
                description: 'Achieve your financial goals and future, through tailored recommendations and individualized advice.',
                description2: ["Listen carefully to your financial goals, risk profile, and time horizon to screen available bonds.", 
                "Refine the bond screen, selecting those with specific metrics according to prevalent economic conditions.", 
                "Filter those bonds with stable and favorable ratings using advanced Artificial Intelligence tools."],
                photos: ['bespoke.webp'] 
                
            },
            {
            id: "bond-portfolio-optimization",
            photo: '/bond.webp',
            title: "Bond Portfolio Optimization",
            button: 'Learn more',
            description: 'Get an optimized allocation of your portfolio using advanced linear programming softwares.',
            description2: ["Verify and adjust selection for proprietary metrics.",
                "Verify and accommodate specific constraints and goals.",
                "Find the optimal allocation to maximize expected return using linear programming."],
            photos: ['bond1.webp', 'bond3.webp']
            
        },
        
        {
            id: "ai-pond-portfolio",
            photo: '/ia.webp',
            title: "AI Portfolio Monitoring",
            button: 'Learn more',
            description: 'Your portfolio is under AI watch to track investments and send real-time alerts, keeping it optimized all times.',
            description2: ["Monitor your portfolio using real-time information from a portfolio from a first-in-class data provider.", 
            "The AI model accurately predicts the probability of bond issuers changing their rating from agencies like S&P and Moody's", 
            "The AI model helps us to decide which bond issuer buys or sells based on its upgrade or downgrade probabilities."],
            photos: ['ai.webp']             
        },],
    }
]

const home_data_ES = [
    {
        title1: "Nuestros custodios",
        text1: "Bienvenido a nuestra empresa boutique Registered Investment Advisory. Nos especializamos en servir a familias de alto poder adquisitivo, empresarios y medianas empresas, ofreciendo servicios de gestión de patrimonios y gestión de carteras de inversión. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos financieros.",
        title2: "Experiencia y tecnología para lograr sus objetivos financieros." ,
        text2: [
            {
                id: "bond-portfolio-optimization",
                photo: '/bespoke.webp',
                title: "Carteras de inversión personalizadas",
                button: 'Ver más',
                description: 'Alcance sus objetivos financieros a través de recomendaciones personalizadas y asesoramiento individualizado.',
                description2: ["Escuche atentamente sus objetivos financieros, perfil de riesgo y horizonte temporal para evaluar los bonos disponibles.",
                "Refinar la pantalla de bonos, seleccionando aquellos con métricas específicas de acuerdo con las condiciones económicas prevalecientes.",
                "Filtrar aquellos bonos con calificaciones estables y favorables utilizando herramientas avanzadas de Inteligencia Artificial."],
                photos: ['bespoke.webp']     
            },
            {
            id: "bespoke",
            photo: '/bond.webp',
            title: "Optimización de la cartera de bonos",
            button: 'Ver más',
            description: 'Obtenga un balanceo optimizado de su cartera utilizando softwares avanzados de programación lineal.',
            description2: ["Verificar y ajustar la selección de métricas propietarias.",
            "Verificar y adaptarse a limitaciones y objetivos específicos.",
            "Encuentramos alocacion óptima para maximizar el rendimiento esperado usando programación lineal."],
            photos: ['bond1.webp', 'bond3.webp']    
        },
        
        {
            id: "ai-pond-portfolio",
            photo: '/ia.webp',
            title: "Monitoreo de su cartera con AI",
            button: 'Ver más',
            description: 'Su cartera está bajo vigilancia de IA para realizar un seguimiento de las inversiones y enviar alertas en tiempo real, manteniéndola optimizada en todo momento.',
            description2: ["Supervise su cartera utilizando información en tiempo real de una cartera de un proveedor de datos de primera clase.", 
            "El modelo de IA predice con precisión la probabilidad de que los emisores de bonos cambien su calificación de agencias como S&P y Moody's.",
            "El modelo de IA nos ayuda a decidir qué emisor de bonos compra o vende en función de sus probabilidades de mejora o reducción."],
            photos: ['ai.webp']          
            
        },],
    }
]

const about_data_EN = [
    {
        
        title2: "The Team",
        text_random: "Our team of experienced financial advisors is passionate about providing high-net-worth individuals and families with personalized and comprehensive investment solutions.",
        text3: [{
            id: "freddy-martinez",
            photo: "Freddy.webp",
            name: "Freddy Martinez",
            position: 'President & CEO',
            description: ["27 Years of experience as a successful financial advisor and portfolio manager at Merrill Lynch and UBS.",
        "Extensive and up-to-date experience advising high-net-worth families, individuals, institutions, and pension funds.",
        "Certified Financial Planner (CFP).",
        "Certified Investment Management Analyst (CIMA).", 
        "Mechanical engineer Universidad Simon Bolivar. MBA of Wharton School of Business. Master of Science in Materials Engineering at the University of Pennsylvania.", 
        "Proud father of quadruples.", 
        "Fluent in English and Spanish."]
        },
        {
            id: "bernardo-perez",
            photo: "bernardo.webp",
            name: "Bernardo Perez",
            position: 'Business Strategies Consultant',
            description: ["25 years as a registered investment advisor. He Managed a broker-dealer for 30 years. Senior Manager at McKinsey &amp; Co, Inc.",
        "Lead Consultant in strategy, finance, and operations in various industries such as Banking, Beer, Automotive, Oil, Petrochemicals, Food, Pulp &amp; Paper, Cement, and others.",
        "MBA at Columbia Business School, NYC - major in finance and business operations",
        "Chemical Engineer - Universidad Simon Bolivar. Fluent in English, Spanish and French"]
        },
        {
            id: "michele-di-carlo",
            photo: "michele.webp",
            name: "Michele Di Carlo",
            position: 'Investment Analyst/ Advisor',
            description: ["Three years of Investment Analyst experience. Registered Investment advisor Series 65.", 
            "Worked on a startup financial modeling that raised over 2 million dollars.",
        "Graduated in Business administration with a Finance and Management major at the University of Miami with honors.",
        "Actively manages clients high net worth clients with millions of dollars on AUM.",
        "Fluent in English, Spanish, and Italian"]
        }],
        title3: "Why Forem Investments?",
        text4: "“Working with us offers several advantages including:"
    }
]

const about_data_ES = [
    {
        
        title2: "Nuestro Equipo",
        text_random: "Forem Investments LLC fue fundada por un equipo de contadores experimentados apasionados por brindar soluciones personalizadas de inversión de renta fija a personas de alto patrimonio.",
        text3: [{
            id: "freddy-martinez",
            photo: "Freddy.webp",
            name: "Freddy Martinez",
            position: 'Presidente & CEO',
            description: ["27 años de experiencia como exitoso asesor financiero y gestor de carteras en Merrill Lynch y UBS.",
        "Amplia y actualizada experiencia asesorando a familias de alto patrimonio, particulares, instituciones y fondos de pensiones.",
        "Planificador Financiero Certificado (CFP).",
        "Analista Certificado en Gestión de Inversiones (CIMA).",
        "Ingeniero Mecánico Universidad Simón Bolívar. MBA de la Escuela de Negocios Wharton. Maestría en Ciencias en Ingeniería de Materiales en la Universidad de Pensilvania (UPENN).", 
        "Orgulloso padre de cuatrillizos.", 
        "Fluidez en inglés y español."]
        },
        {
            id: "bernardo-perez",
            photo: "bernardo.webp",
            name: "Bernardo Perez",
            position: 'Consultor de estrategias empresariales',
            description: ["25 años como asesor de inversiones registrado. Dirigió una casa de bolsa durante 30 años. Gerente sénior en McKinsey & Co, Inc.",
        "Consultor líder en estrategia, finanzas y operaciones en diversas industrias como Banca, Cerveza, Automotriz, Petróleo, Petroquímica, Alimentos, Celulosa y Papel, Cemento, entre otras.",
        "MBA en Columbia Business School, NYC - especialización en finanzas y operaciones comerciales.",
        "Ingeniero Químico - Universidad Simón Bolívar. Fluidez en inglés, español y francés."]
        },
        {
            id: "michele-di-carlo",
            photo: "michele.webp",
            name: "Michele Di Carlo",
            position: 'Analista/asesor de inversiones',
            description: ["Cuatro años de experiencia como Analista de Inversiones. ",
        "Asesor de Inversiones Registrado Serie 65.",
        "Trabajó en un startup, elaborando un  modelo financiero que recaudó más de 2 millones de dólares.",
        "Graduado en Administración de Empresas con mención en Finanzas y Gerencia en la Universidad de Miami con honores.", 
        "Gestiona activamente clientes de alto patrimonio con millones de dólares en AUM.",
        "Fluidez en inglés, español y experiencia en italiano."]
        }],
        title3: "Por qué Forem Investments?",
        text4: "Trabajar con nosotros tiene muchas ventajas incluyendo:"
    }
]

const servicesPg_data_EN = [
    {
        banner1: "Our Services",
        text1: [{
            id: "family-office",
            photo: "/course1.jpg",
            titleService: "Family Office",
            description1: ["Wealth Management Expertise", "Personalized service", "Discretion"],
            descrition: [
                {title : `Wealth Management Expertise: `,
                text: `a team of experienced professionals who can provide families with comprehensive financial advice.`}, 
                {title: `Personalized service: `,
                text:`tailor their services to the specific needs of each family.`}, 
                {title: `Discretion: `,
                text: `provide families with the discretion to manage their wealth.`},
                ],
            buttonText: 'Learn more',
        },
        {
            id: "investments-portfolio",
            photo: "/course2.webp",
            titleService: "Investments Portfolio",
            description1: ["AI Bond Research", "Machine Learning on Equity selection", "AI on Portfolio Monitoring"],
            descrition: [{title: `AI Bond Research: `,
                text: `AI-driven software that gives credit risk, probability
            of credit rating changes, and price relative to peers.`}, 
            {title: `Machine Learning on Equity selection: `,
                text: `fundamental and technical analysis using in-house
            indicators and rankings for equity selection.`}, 
            {title: `AI on Portfolio Monitoring: `,
            text: `investment research software with access and interpreted data from
            public and private companies.`},],
            buttonText: 'Learn more',
        },
        {
            id: "custodian-data-aggregation",
            photo: "/course3.webp",
            titleService: "Integration of custodian data",
            description1: ["Integral Portfolio View", "Improved performance reporting", "Enhanced risk management"],
            descrition: [
            {title: `Integral portfolio view: `,
                text: ` a view of all of your portfolios and transactions across different custodians in one place.`},
            {title: `Improved performance reporting: `,
            text: ` a single view of your investment's performance and areas of
            improvement.`}, 
            {title: `Enhanced risk management: `,
                text: ` a complete view of your risk exposure.`},
            ],
            buttonText: 'Learn more',
        }],
        title2: `Registered Investment Advisors on a Fee basis`,
        description2:"As a fee-only advisor, we believe that working with us offers several advantages to our clients, including:" ,
        text2: {
            "Fiduciary obligation: " : ` We are obligated to act in our client's best interests at all times. Our recommendations are unbiased and focused on helping our clients achieve their financial goals.`,
            "No conflicts of interest: ": ` We only recommend products or strategies in clients' best interests because we do not earn commissions or other incentives from selling financial products. We offer more objective advice and promote a more transparent approach to financial planning.`,
            "Transparency: ": ` We are always transparent about our fees and costs, which can help our clients understand the value of working with an advisor. Our clients make informed decisions about their investments and financial planning.`,
            "Customized solutions: ": ` We offer customized solutions tailored to each client's unique financial situation and goals. We help our clients achieve their financial objectives more efficiently and effectively.`,
            "Flexibility: ": ` As a fee-only advisor, we can offer more flexibility regarding investment strategies, products, and services. Our clients access more comprehensive investment opportunities and potentially achieve higher returns.`
        },
        description3: "Working with a fee-only advisor like us can give our clients several advantages, including greater transparency, objective advice, and customized solutions focused solely on their best interests."
    }
]

const servicesPg_data_ES = [
    {
        banner1: "Nuestros Servicios",
        text1: [{
            id: "family-office",
            photo: "/course1.jpg",
            titleService: "Family Office",
            description1: ["Experiencia en gestión patrimonial", "Atención personalizada", "Discreción"],
            descrition: [
                {title : `Experiencia en gestión patrimonial: `,
                text :`equipo de profesionales que brindan a las familias asesoramiento integral`}, 
                {title: `Atención personalizada: `,
                    text: `adaptamos sus servicios a las necesidades específicas de cada familia.`}, 
                {title: `Discreción: `,
                    text: `somos discretos en la gestión patrimonial de cada familia.`},
                ],
            buttonText: 'Ver más',
        },
        {
            id: "investments-portfolio",
            photo: "/course2.webp",
            titleService: "Portafolio de Inversiones",
            description1: ["Investigación de bonos utilizando inteligencia artificial", "Machine Learning en la selección de renta variable", "Monitoreo de Portfolio apoyado con inteligencia artificial"],
            descrition: [
            {title: `Investigación de bonos utilizando inteligencia artificial (IA): `,
                text: ` software impulsado por IA el cual evalúa riesgo crediticio, probabilidad de cambios en la calificación crediticia y precio en relación con sus comparables.`}, 
            {title: `Machine Learning en la selección de renta variable: `,
                text: ` análisis fundamental y técnico utilizando indicadores y rankings internos para la selección de renta variable.`}, 
            {title: `Monitoreo de Portfolio apoyado con inteligencia artificial: `,
                text: ` software de investigación de inversiones con acceso e interpretación de datos de empresas públicas y privadas.`},],
            buttonText: 'Ver más',
        },
        {
            id: "custodian-data-aggregation",
            photo: "/course3.webp",
            titleService: "Integración de datos de diferentes custodios ",
            description1: ["Visualiazacion completa de portfolios", "Informes de rendimiento mejorados", "Mayor eficiencia en el manejo de riesgo"],
            descrition: [
            {title: `Visualiazacion completa de portfolios: `,
                text: ` una vista de todas sus carteras y transacciones a través de diferentes custodios en un solo lugar.`},
            {title: `Informes de rendimiento mejorados: `,
                text: ` una vista global de rendimiento de sus inversiones y las áreas de mejora`}, 
            {title: `Mayor eficiencia en el manejo de riesgo: `,
                text: ` una visión completa de su exposición al riesgo.`},],
            buttonText: 'Ver más',
        }],
        title2: `Asesores de inversión registrados a comisión`,
        description2:"Como asesores exclusivos, creemos que trabajar con nosotros ofrece varias ventajas a nuestros clientes, entre ellas:" ,
        text2: {
            "Obligación fiduciaria: " : ` Estamos obligados a actuar en interés de nuestros clientes en todo momento. Nuestras recomendaciones son imparciales y se centran en ayudar a nuestros clientes a alcanzar sus objetivos financieros.`,
            "Sin conflictos de intereses: ": ` Sólo recomendamos productos o estrategias en el mejor interés de los clientes, porque no ganamos comisiones ni otros incentivos por la venta de productos financieros. Ofrecemos un asesoramiento más objetivo y promovemos un enfoque más transparente de la planificación financiera.`,
            "Transparencia: ": ` Siempre somos transparentes sobre nuestros honorarios y costes, lo que puede ayudar a nuestros clientes a comprender el valor de trabajar con un asesor. Nuestros clientes toman decisiones informadas sobre sus inversiones y planificación financiera.`,
            "Soluciones personales: ": ` Ofrecemos soluciones personalizadas adaptadas a la situación y los objetivos financieros únicos de cada cliente. Ayudamos a nuestros clientes a alcanzar sus objetivos financieros de forma más eficiente y eficaz.`,
            "Flexibilidad: ": ` Como asesores exclusivos, podemos ofrecer más flexibilidad en cuanto a estrategias, productos y servicios de inversión. Nuestros clientes acceden a oportunidades de inversión más completas y pueden obtener mayores rendimientos.`
        },
        description3: "Trabajar con un asesor que sólo cobra honorarios como nosotros puede ofrecer a nuestros clientes varias ventajas, como una mayor transparencia, un asesoramiento objetivo y soluciones personalizadas centradas exclusivamente en sus intereses."
    }
]

export { home_data_EN, home_data_ES, 
    about_data_EN, about_data_ES, 
    servicesPg_data_EN, 
    servicesPg_data_ES, 
}
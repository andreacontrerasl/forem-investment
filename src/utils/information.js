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
        title1: "Our Trusted Custodian",
        text1: "Welcome to our boutique Registered Investment Advisory firm! We specialize in serving high-net-worth families, entrepreneurs, and mid-sized businesses by offering fee-only Wealth Management and Portfolio Management services. Our focus is to help our clients totheir financial goals.",
        title2: "We focus on your best interest and on your best fixed income interest." ,
        text2: [
            {
                id: "bespoke",
                photo: '/bespoke.png',
                title: "Bespoke Bond Portfolio for High-Net-Worth Individuals",
                button: 'Learn more',
                description: 'Our personalized financial advice service provides tailored recommendations to help you achieve your financial goals and secure your financial future.',
                description2: ["Listen carefully to your financial goals, risk profile, and time horizon to screen available bonds.", 
                "Refine the bond screen, selecting those with specific metrics according to prevalent economic conditions.", 
                "Filter those bonds with stable and favorable ratings using advanced Artificial Intelligence tools."],
                photos: ['bespoke.png'] 
                
            },
            {
            id: "bond-portfolio-optimization",
            photo: '/bond.png',
            title: "Bond Portfolio Optimization",
            button: 'Learn more',
            description: 'Our service uses linear programing to find the best allocation of your investments for optimal returns.',
            description2: ["Verify and adjust selection for proprietary metrics.",
                "Verify and accommodate specific constraints and goals.",
                "Find the optimal allocation to maximize expected return using linear programming."],
            photos: ['bond1.png', 'bond3.png']
            
        },
        
        {
            id: "ai-pond-portfolio",
            photo: '/ia.png',
            title: "Ai Bond Portfolio Monitoring",
            button: 'Learn more',
            description: 'Our portfolio monitoring service utilizes Ai to track investments and provide real-time alerts, ensuring your portfolio is continually optimized.',
            description2: ["Monitor your portfolio using real-time information from a portfolio from a first-in-class data provider.", 
            "The AI model accurately predicts the probability of bond issuers changing their rating from agencies like S&P and Moody's", 
            "The AI model helps us to decide which bond issuer buys or sells based on its upgrade or downgrade probabilities."],
            photos: ['ai.png']             
        },],
    }
]

const home_data_ES = [
    {
        title1: "Nuestros custodios",
        text1: "Bienvenido a nuestra empresa boutique Registered Investment Advisory. Nos especializamos en servir a familias de alto poder adquisitivo, empresarios y medianas empresas, ofreciendo servicios de gestión de patrimonios y gestión de carteras de inversión. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos financieros.",
        title2: "Nos enfocamos en el mejor interés para ti y tu renta fija." ,
        text2: [
            {
                id: "bond-portfolio-optimization",
                photo: '/bespoke.png',
                title: "Carteras de bonos a medida para personas de alto patrimonio",
                button: 'Ver más',
                description: 'Nuestro servicio de asesoramiento financiero personalizado proporciona recomendaciones personalizadas para ayudarle a alcanzar sus objetivos financieros y asegurar su futuro.',
                description2: ["Escuche atentamente sus objetivos financieros, perfil de riesgo y horizonte temporal para evaluar los bonos disponibles.",
                "Refinar la pantalla de bonos, seleccionando aquellos con métricas específicas de acuerdo con las condiciones económicas prevalecientes.",
                "Filtrar aquellos bonos con calificaciones estables y favorables utilizando herramientas avanzadas de Inteligencia Artificial."],
                photos: ['bespoke.png']     
            },
            {
            id: "bespoke",
            photo: '/bond.png',
            title: "Optimización de la cartera de bonos",
            button: 'Ver más',
            description: 'Nuestro servicio utiliza programación lineal para encontrar la mejor asignación de su cartera de bonos para obtener rendimientos óptimos.',
            description2: ["Verificar y ajustar la selección de métricas propietarias.",
            "Verificar y adaptarse a limitaciones y objetivos específicos.",
            "Encuentramos alocacion óptima para maximizar el rendimiento esperado usando programación lineal."],
            photos: ['bond1.png', 'bond3.png']    
        },
        
        {
            id: "ai-pond-portfolio",
            photo: '/ia.png',
            title: "Monitoreo de cartera de bonos IA",
            button: 'Ver más',
            description: 'Nuestro servicio de monitoreo de cartera utiliza IA para rastrear inversiones y proporcionar alertas en tiempo real, lo que garantiza que su cartera se optimice continuamente.',
            description2: ["Supervise su cartera utilizando información en tiempo real de una cartera de un proveedor de datos de primera clase.", 
            "El modelo de IA predice con precisión la probabilidad de que los emisores de bonos cambien su calificación de agencias como S&P y Moody's.",
            "El modelo de IA nos ayuda a decidir qué emisor de bonos compra o vende en función de sus probabilidades de mejora o reducción."],
            photos: ['ai.png']          
            
        },],
    }
]

const about_data_EN = [
    {
        
        title2: "The Team",
        text_random: "Our team of experienced financial advisors is passionate about providing high-net-worth individuals and families with personalized and comprehensive investment solutions.",
        text3: [{
            id: "freddy-martinez",
            photo: "Freddy.png",
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
            photo: "bernardo.jpeg",
            name: "Bernardo Perez",
            position: 'Business Strategies Consultant',
            description: ["25 years as a registered investment advisor. He Managed a broker-dealer for 30 years. Senior Manager at McKinsey &amp; Co, Inc.",
        "Lead Consultant in strategy, finance, and operations in various industries such as Banking, Beer, Automotive, Oil, Petrochemicals, Food, Pulp &amp; Paper, Cement, and others.",
        "MBA at Columbia Business School, NYC - major in finance and business operations",
        "Chemical Engineer - Universidad Simon Bolivar. Fluent in English, Spanish and French"]
        },
        {
            id: "michele-di-carlo",
            photo: "michele.jpg",
            name: "Michele Di Carlo",
            position: 'Investment Analyst/ Advisor',
            description: ["Three years of Investment Analyst experience. Registered Investment advisor Series 65. Worked on a startup financial modeling that raised over 2 million dollars.",
        "Graduated in Business administration with a Finance and Management major at the University of Miami with honors.",
        "Actively manages clients high net worth clients with millions of dollars on AUM.",
        "Fluent in English, Spanish, and Italian"]
        }],
        title3: "Why Forem Investments?",
        text4: "As a fee-only advisor, we believe that working with us offers several advantages to our clients, including:"
    }
]

const about_data_ES = [
    {
        
        title2: "Nuestro Equipo",
        text_random: "Forem Investments LLC fue fundada por un equipo de contadores experimentados apasionados por brindar soluciones personalizadas de inversión de renta fija a personas de alto patrimonio.",
        text3: [{
            id: "freddy-martinez",
            photo: "Freddy.png",
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
            photo: "bernardo.jpeg",
            name: "Bernardo Perez",
            position: 'Consultor de estrategias empresariales',
            description: ["25 años como asesor de inversiones registrado. Dirigió una casa de bolsa durante 30 años. Gerente sénior en McKinsey & Co, Inc.",
        "Consultor líder en estrategia, finanzas y operaciones en diversas industrias como Banca, Cerveza, Automotriz, Petróleo, Petroquímica, Alimentos, Celulosa y Papel, Cemento, entre otras.",
        "MBA en Columbia Business School, NYC - especialización en finanzas y operaciones comerciales.",
        "Ingeniero Químico - Universidad Simón Bolívar. Fluidez en inglés, español y francés."]
        },
        {
            id: "michele-di-carlo",
            photo: "michele.jpg",
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
        text4: "Como asesores de honorarios, creemos que trabajar con nosotros ofrece varias ventajas a nuestros clientes, que incluyen:"
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
                {icon : <CurrencyExchangeIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large" />,
                text: `Wealth Management Expertise: a team of experienced professionals who can provide families with comprehensive
            financial advice.`}, 
                {icon: <AccountCircleIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large" />,
                text:`Personalized service: tailor their services to the specific needs of each family.`}, 
                {icon: <SupervisedUserCircleIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large"/>,
                text: `Discretion: provide families with the discretion to manage their wealth.`},
                {icon: <LockPersonIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large"/>,
                    text: `Access to exclusive investment opportunities that are not available to the general public.`}],
            buttonText: 'Learn more',
            
        },
        {
            id: "investments-portfolio",
            photo: "/course2.jpeg",
            titleService: "Investments Portfolio",
            description1: ["Ai Bond Research", "Machine Learning on Equity selection", "Ai on Portfolio Monitoring"],
            descrition: [{icon: <TerminalIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large"/>,
                text: `Ai Bond Research: Ai-driven software that gives credit risk, probability
            of credit rating changes, and price relative to peers.`}, 
            {icon: <DvrIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large"/>,
                text: `Machine Learning on Equity selection: fundamental and technical analysis using in-house
            indicators and rankings for equity selection.`}, 
            {icon: <TroubleshootIcon sx={{color: '#192E47', fontSize: '40px'}} fontSize= "large"/>,
            text: `Ai on Portfolio Monitoring: investment research software with access and interpreted data from
            public and private companies.`},],
            buttonText: 'Learn more',
        },
        {
            id: "custodian-data-aggregation",
            photo: "/course3.jpeg",
            titleService: "Custodian Data Aggregation",
            description1: ["Enhanced risk management", "Improved performance reporting", "Increased compliance"],
            descrition: [{icon: <ViewTimelineOutlinedIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
                text: `Enhanced risk management: a complete view of your risk exposure.`}, 
            {icon: <FactCheckOutlinedIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
            text: `Improved performance reporting: a single view of your investment's performance and areas of
            improvement.`}, 
            {icon: <SsidChartOutlinedIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
            text: `Increased compliance: a complete view of your portfolios and transactions across your
            custodians.`},],
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
            description1: ["Experiencia", "Atención personalizada", "Discrecionalidad"],
            descrition: [
                {icon : <CurrencyExchangeIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
                text :`Experiencia: un equipo de profesionales experimentados que pueden brindar a las familias un asesoramiento financiero integral.`}, 
                {icon: <AccountCircleIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
                    text: `Atención personalizada: adapta sus servicios a las necesidades específicas de cada familia.`}, 
                {icon: <SupervisedUserCircleIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large"/>,
                    text: `Discrecionalidad: Dar a las familias de discrecionalidad para gestionar su patrimonio.`},
                {icon: <LockPersonIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large"/>,
                    text: `Acceso a oportunidades de inversión exclusivas que no están disponibles para el público en general.`}],
            buttonText: 'Ver más',
        },
        {
            id: "investments-portfolio",
            photo: "/course2.jpeg",
            titleService: "Portafolio de Inversiones",
            description1: ["Investigación de bonos de inteligencia artificial", "Machine Learning sobre selección de renta variable", "AI on Portfolio Monitoring"],
            descrition: [
            {icon: <TerminalIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large"/>,
                text: `Investigación de bonos de inteligencia artificial (IA): software impulsado por IA que brinda riesgo crediticio, probabilidad de cambios en la calificación crediticia y precio en relación con sus comparables.`}, 
            {icon: <DvrIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large"/>,
                text: `Machine Learning (ML) sobre selección de renta variable: análisis fundamental y técnico utilizando indicadores y rankings internos para la selección de renta variable.`}, 
            {icon: <TroubleshootIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large"/>,
                text: `AI on Portfolio Monitoring: software de investigación de inversiones con acceso e interpretación de datos de empresas públicas y privadas.`},],
            buttonText: 'Ver más',
        },
        {
            id: "custodian-data-aggregation",
            photo: "/course3.jpeg",
            titleService: "Concentración de datos de diferentes custodios ",
            description1: ["Gestión de riesgos mejorada", "Informes de rendimiento mejorados", "Mayor cumplimiento"],
            descrition: [
            {icon: <ViewTimelineOutlinedIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
                text: `Gestión de riesgos mejorada: una visión completa de su exposición al riesgo.`}, 
            {icon: <FactCheckOutlinedIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
                text: `Informes de rendimiento mejorados: una vista única del rendimiento de su inversión y las áreas de mejora.`}, 
            {icon: <SsidChartOutlinedIcon sx={{color: '#fff', fontSize: '40px'}} fontSize= "large" />,
                text: `Mayor cumplimiento: una vista completa de sus carteras y transacciones a través de sus custodios.`},],
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
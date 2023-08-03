
const home_data_EN = [
    {
        title1: "Our Trusted Custodian",
        text1: "Welcome to our boutique Registered Investment Advisory firm! We specialize in serving high-net-worth families, entrepreneurs, and mid-sized businesses by offering fee-only Wealth Management and Portfolio Management services. Our focus is to help our clients totheir financial goals.",
        title2: "Our Services",
        text2: [{
            id: "family-office",
            titleService: "Family Office",
            descrition: [`Expertise: team of experienced professionals who can provide families with comprehensive financial advice.`, 
                        `Personalized service: tailor their services to the specific needs of each family.`, 
                        `Discretion: provide families with the discretion they need to manage their wealth.`,
                        `Access to exclusive investment opportunities that are not available to the general public.`],
            buttonText: 'Lear more',
        },
        {
            id: "investments-portfolio",
            titleService: "Investments Portfolio",
            descrition: [`AI Bond Research: AI driven software that gives credit risk, probability of credit ranting chances and price relative to peers.`, 
            `ML on Equity selection: fundamental and technical analysis using in-house indicators and rankings for equity selection.`, 
            `AI on Portfolio Monitoring: investment research software with access and interpreted data from public and private companies.`,],
            buttonText: 'Lear more',
        },
        {
            id: "custodian-data-aggregation",
            titleService: "Custodian Data Aggregation",
            descrition: [`Enhanced risk management: complete view of your exposure to risk.`, 
            `Improved performance reporting: single view of your investment’s performance and areas of improvements.`, 
            `Increased compliance: complete view of your transactions.`,],
            buttonText: 'Lear more',
        }]
    }
]

const home_data_ES = [
    {
        title1: "Nuestros custodios",
        text1: "Bienvenido a nuestra empresa boutique Registered Investment Advisory. Nos especializamos en servir a familias de alto poder adquisitivo, empresarios y medianas empresas, ofreciendo servicios de gestión de patrimonios y gestión de carteras de inversión. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos financieros.",
        title2: "Nuestros Servicios",
        text2: [{
            id: "family-office",
            titleService: "Oficina Familiar",
            descrition: [`Experiencia: equipo de profesionales experimentados que pueden brindar a las familias un asesoramiento financiero integral.`, 
            `Atención personalizada: adaptamos sus servicios a las necesidades específicas de cada familia.`, 
            `Discreción: proporcionar a las familias la discreción que necesitan para administrar su patrimonio.`,
            `Acceso a oportunidades de inversión exclusivas que no están disponibles para el público en general.`],
            buttonText: 'Ver más',
        },
        {
            id: "investments-portfolio",
            titleService: "Portafolio de Inversiones",
            descrition: [`AI Bond Research: software impulsado por IA que brinda riesgo de crédito, probabilidad de oportunidades de crédito y precio en relación con sus pares.`, 
            `ML sobre selección de renta variable: análisis fundamental y técnico utilizando indicadores y rankings internos para la selección de renta variable.`, 
            `AI on Portfolio Monitoring: software de investigación de inversiones con acceso e interpretación de datos de empresas públicas y privadas.`,],
            buttonText: 'Ver más',
        },
        {
            id: "custodian-data-aggregation",
            titleService: "Agregación de datos de custodios",
            descrition: [`Gestión de riesgos mejorada: visión completa de su exposición al riesgo.`, 
            `Informes de rendimiento mejorados: vista única del rendimiento de su inversión y áreas de mejora.`, 
            `Mayor cumplimiento: vista completa de sus transacciones.`,],
            buttonText: 'Ver más',
        }]
    }
]

const about_data_EN = [
    {
        banner1: "We focus on your best interest and on your best fixed income interest." ,
        text2: [
            {
                id: "bespoke",
                photo: '/course2.jpg',
                title: "Bespoke Bond Portfolios for High-Net-Worth Individuals",
                button: 'Learn more',
                description: 'Our personalized financial advice service provides tailored recommendations to help you achieve your financial goals and secure your financial future.',
                description2: "Using realtime data from Refinitiv we can view and monitor your portfolio, from the most basic data to complex metrics that allows us to make informed decisions based on current and relevant data to keep up portfolio with your targets.",
                photos: ['bespoke.png'] 
                
            },
            {
            id: "bond-portfolio-optimization",
            photo: '/course1.jpg',
            title: "Bond Portfolio Optimization",
            button: 'Learn more',
            description: 'Our service uses linear programing to find the best allocation of your investments for optimal returns.',
            description2: "Using a advanced tool that takes into account various data points and considers a wide range of factors we are able to pick bond issuers and stocks for your portfolio using one of the most advanced tools available to investors.",
            photos: ['bond1.png','bond2.png', 'bond3.png']
            
        },
        
        {
            id: "ai-pond-portfolio",
            photo: '/course3.jpg',
            title: "AI Bond Portfolio Monitoring",
            button: 'Learn more',
            description: 'Our portfolio monitoring service utilizes AI to track investments and provide real-time alerts, ensuring your portfolio is continually optimized.',
            description2: "Using one of the most advanced software AI tools in the industry, we are able to have on demand information of issuers and their financial conditions. Using this tool we are able to make decisions on which bond to buy or sale, due to an upgrade or downgrade of the financial health, this using historical data that was used to build an AI model that predicts the probability of change on the classification most of the market players.",
            photos: ['ai.png']             
        },],
        title2: "The Team",
        text_random: "Forem Investments LLC was founded by a team of experienced accountants with a passion for providing high-net-worth individuals with personalized fixed income investment solutions.",
        text3: [{
            id: "freddy-martinez",
            photo: "Freddy.png",
            name: "Freddy Martinez",
            position: 'President & CEO',
            description: ["20 Years of experience as VP at Merrill Lynch Seven years at UBS as Senior VP and Portfolio Management.",
        "Extensive and  up-to-date  experience  advising high-net-worth   families   and   individuals, institutions, and pension funds.",
        "Certified Financial Planner (CFP).",
        "Certified Investment Management Analyst (CIMA) Mechanical engineer Universidad Simon Bolivar MBA of Wharton School of Business UPenn Master of Science in Materials Engineering at the University of Pennsylvania."]
        },
        {
            id: "bernardo-perez",
            photo: "bernardo.jpeg",
            name: "Bernardo Perez",
            position: 'Business Strategies Consultant',
            description: ["25 years as a registered investment advisor Managed a broker-dealer for 30 years Senior Manager at McKinsey & Co, Inc.",
        "Lead Consultant in strategy, finance, and operations in various industries such as Banking, Beer, Automotive, Oil, Petrochemicals, Food, Pulp & Paper, Cement, and others.",
        "MBA at Columbia Business School, NYC - major in finance and business operations",
        "Chemical Engineer - Universidad Simon Bolivar. Fluent in English, Spanish and French"]
        },
        {
            id: "michele-di-carlo",
            photo: "michele.jpg",
            name: "Michele Di Carlo",
            position: 'Investment Analyst/ Advisor',
            description: ["Three years of Investment Analyst experience Registered Investment advisor Series 65 Worked on a startup financial modeling that raised over 2 million dollars.",
        "Graduated in Business administration with a Finance and Management major at the University of Miami with honors.",
        "Actively manages clients high net worth clients with millions of dollars on AUM.",
        "Fluent in English, Spanish, and Italian"]
        }]
    }
]

const about_data_ES = [
    {
        banner1: "Nos enfocamos en el mejor interés para ti y tu renta fija." ,
        text2: [{
            id: "bespoke",
            photo: '/course1.jpg',
            title: "Optimización de la cartera de bonos",
            button: 'Ver más',
            description: 'Nuestro servicio utiliza programación lineal para encontrar la mejor asignación de sus inversiones para obtener rendimientos óptimos.',
            description2: "Utilizando datos en tiempo real de Refinitiv podemos ver y supervisar su cartera, desde los datos más básicos hasta métricas complejas que nos permiten tomar decisiones basadas en datos actuales y relevantes para mantener la cartera al día con sus objetivos.",
            photos: ['bespoke.png'] 
        },
        {
            id: "bond-portfolio-optimization",
            photo: '/course2.jpg',
            title: "Carteras de bonos a medida para personas de alto patrimonio neto",
            button: 'Ver más',
            description: 'Nuestro servicio de asesoramiento financiero personalizado brinda recomendaciones personalizadas para ayudarlo a alcanzar sus objetivos financieros y asegurar su futuro financiero.',
            description2: "Mediante una herramienta avanzada que tiene en cuenta diversos datos y considera una amplia gama de factores, podemos seleccionar emisores de bonos y valores para su cartera utilizando una de las herramientas más avanzadas a disposición de los inversores.",
            photos: ['bond1.png','bond2.png', 'bond3.png']     
        },
        {
            id: "ai-pond-portfolio",
            photo: '/course3.jpg',
            title: "Monitoreo de la cartera de bonos Al",
            button: 'Ver más',
            description: 'Nuestro servicio de monitoreo de cartera utiliza Al para rastrear inversiones y proporcionar alertas en tiempo real, lo que garantiza que su cartera se optimice continuamente.',
            description2: "Gracias a una de las herramientas de IA más avanzadas del sector, podemos disponer de información sobre emisores y su situación financiera. Con esta herramienta podemos tomar decisiones sobre qué bono comprar o vender, debido a una mejora o rebaja de la salud financiera, utilizando datos históricos que se utilizaron para construir un modelo de IA que predice la probabilidad de cambio en la clasificación de la mayoría de los actores del mercado." ,
            photos: ['ai.png']          
            
        },],
        title2: "Nuestro Equipo",
        text_random: "Forem Investments LLC fue fundada por un equipo de contadores experimentados apasionados por brindar soluciones personalizadas de inversión de renta fija a personas de alto patrimonio.",
        text3: [{
            id: "freddy-martinez",
            photo: "Freddy.png",
            name: "Freddy Martinez",
            position: 'Presidente & CEO',
            description: ["20 años de experiencia como VP en Merrill Lynch Siete años en UBS como Senior VP y Portfolio Management.",
        "Amplia y actualizada experiencia asesorando a familias y particulares con grandes patrimonios, instituciones y fondos de pensiones.",
        "Planificador Financiero Certificado (CFP).",
        "Certified Investment Management Analyst (CIMA) Ingeniero mecánico Universidad Simón Bolívar MBA de Wharton School of Business UPenn Master en Ingeniería de Materiales de la Universidad de Pensilvania."]
        },
        {
            id: "bernardo-perez",
            photo: "bernardo.png",
            name: "Bernardo Perez",
            position: 'Consultor de estrategias empresariales',
            description: ["25 años como asesor de inversiones registrado Gestionó un corredor de bolsa durante 30 años Senior Manager en McKinsey & Co, Inc.",
        "Consultor principal en estrategia, finanzas y operaciones en diversos sectores como banca, cerveza, automoción, petróleo, petroquímica, alimentación, pasta y papel, cemento y otros.",
        "MBA en la Columbia Business School, NYC - especialización en finanzas y operaciones comerciales",
        "Ingeniero Químico - Universidad Simón Bolívar. Dominio del inglés, español y francés."]
        },
        {
            id: "michele-di-carlo",
            photo: "michele.png",
            name: "Michele Di Carlo",
            position: 'Analista/asesor de inversiones',
            description: ["Tres años de experiencia como Analista de Inversiones Asesor de Inversiones Registrado Serie 65 Trabajó en una startup de modelado financiero que recaudó más de 2 millones de dólares.",
        "Licenciado en Administración de Empresas con especialización en Finanzas y Gestión por la Universidad de Miami con matrícula de honor.",
        "Gestiona activamente clientes de alto patrimonio con millones de dólares en AUM.",
        "Dominio del inglés, el español y el italiano."]
        }]
    }
]

const servicesPg_data_EN = [
    {
        banner1: "Our Services",
        text1: [{
            id: "family-office",
            photo: "/course1.jpg",
            titleService: "Family Office",
            descrition: [`Expertise: team of experienced professionals who can provide families with comprehensive financial advice.`, 
                        `Personalized service: tailor their services to the specific needs of each family.`, 
                        `Discretion: provide families with the discretion they need to manage their wealth.`,
                        `Access to exclusive investment opportunities that are not available to the general public.`],
            buttonText: 'Lear more',
        },
        {
            id: "investments-portfolio",
            photo: "/course2.jpg",
            titleService: "Investments Portfolio",
            descrition: [`AI Bond Research: AI driven software that gives credit risk, probability of credit ranting chances and price relative to peers.`, 
            `ML on Equity selection: fundamental and technical analysis using in-house indicators and rankings for equity selection.`, 
            `AI on Portfolio Monitoring: investment research software with access and interpreted data from public and private companies.`,],
            buttonText: 'Lear more',
        },
        {
            id: "custodian-data-aggregation",
            photo: "/course3.jpg",
            titleService: "Custodian Data Aggregation",
            descrition: [`Enhanced risk management: complete view of your exposure to risk.`, 
            `Improved performance reporting: single view of your investment’s performance and areas of improvements.`, 
            `Increased compliance: complete view of your transactions.`,],
            buttonText: 'Lear more',
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
            titleService: "Oficina Familiar",
            descrition: [`Experiencia: equipo de profesionales experimentados que pueden brindar a las familias un asesoramiento financiero integral.`, 
                        `Atención personalizada: adaptamos sus servicios a las necesidades específicas de cada familia.`, 
                        `Discreción: proporcionar a las familias la discreción que necesitan para administrar su patrimonio.`,
                        `Acceso a oportunidades de inversión exclusivas que no están disponibles para el público en general.`],
            buttonText: 'Ver más',
        },
        {
            id: "investments-portfolio",
            photo: "/course2.jpg",
            titleService: "Portafolio de Inversiones",
            descrition: [`AI Bond Research: software impulsado por IA que brinda riesgo de crédito, probabilidad de oportunidades de crédito y precio en relación con sus pares.`, 
            `ML sobre selección de renta variable: análisis fundamental y técnico utilizando indicadores y rankings internos para la selección de renta variable.`, 
            `AI on Portfolio Monitoring: software de investigación de inversiones con acceso e interpretación de datos de empresas públicas y privadas.`,],
            buttonText: 'Ver más',
        },
        {
            id: "custodian-data-aggregation",
            photo: "/course3.jpg",
            titleService: "Agregación de datos de custodios",
            descrition: [`Gestión de riesgos mejorada: visión completa de su exposición al riesgo.`, 
            `Informes de rendimiento mejorados: vista única del rendimiento de su inversión y áreas de mejora.`, 
            `Mayor cumplimiento: vista completa de sus transacciones.`,],
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
// Translations
const translations = {
    pt: {
        nav: {
            about: 'A Empresa',
            portfolio: 'Portfolio',
            team: 'Quem Somos',
            contact: 'Contato'
        },
        hero: {
            badge: 'Investimentos em Inovação & Tecnologia',
            title: 'Construímos o futuro digital',
            subtitle: 'Capital + Tempo + Experiência para empresas B2B e B2C que buscam crescimento acelerado e inovação contínua',
            stat1: 'Empresas Investidas',
            stat2: 'Anos de Experiência',
            stat3: 'Valor Gerado',
            stat4: 'Foco em Resultados',
            cta: 'Conheça Nossas Empresas'
        },
        about: {
            title: 'Nossa Essência',
            subtitle: 'Muito além do capital financeiro: tempo, experiência e cultura empreendedora',
            card1: {
                title: 'Visão Estratégica',
                text: 'Comitês estratégicos ativos com influência em inovação, tecnologia e estratégia de mercado'
            },
            card2: {
                title: 'Cultura de Resultados',
                text: 'Ética, responsabilidade e comprometimento com geração de valor para todos os stakeholders'
            },
            card3: {
                title: 'Crescimento Sustentável',
                text: 'Parcerias de longo prazo construindo empresas feitas para durar através da inovação contínua'
            }
        },
        portfolio: {
            title: 'Portfolio de Investimentos',
            subtitle: 'Empresas inovadoras transformando seus mercados',
            filter: {
                all: 'Todas',
                fintech: 'Fintech',
                saas: 'SaaS',
                ecommerce: 'E-commerce',
                tech: 'Tecnologia'
            }
        },
        csc: {
            badge: 'Centro Administrativo Compartilhado',
            title: 'Martinus Capital CSC',
            subtitle: 'Governança, eficiência e tecnologia para acelerar o crescimento do nosso portfólio',
            cta1: 'Fale com o Time',
            cta2: 'Conheça Nossos Serviços',
            overview: 'Na Martinus Capital, oferecemos às empresas do nosso ecossistema um Centro Administrativo Compartilhado (CSC) que integra jurídico, contábil, financeiro/administrativo e dados/automação. Nosso objetivo é padronizar rotinas críticas, reduzir custos e elevar a qualidade operacional com suporte especializado e tecnologia de ponta.',
            pillarsTitle: 'Nossos Pilares de Serviço',
            pillar1: {
                title: 'Apoio Jurídico',
                item1: 'Elaboração e revisão de contratos (comerciais, societários, NDAs, termos)',
                item2: 'Adequação regulatória e governança',
                item3: 'Gestão de cap-table e documentos societários',
                item4: 'Pareceres e due diligence para operações'
            },
            pillar2: {
                title: 'Apoio Contábil',
                item1: 'Contabilidade inteligente orientada a negócios',
                item2: 'Análise tributária e planejamento fiscal',
                item3: 'Conciliações e fechamento contábil mensais',
                item4: 'Relatórios gerenciais (DRE, BP, Fluxo de Caixa)'
            },
            pillar3: {
                title: 'Financeiro e Administrativo',
                item1: 'Contas a pagar/receber e tesouraria',
                item2: 'Faturamento e cobrança automatizados',
                item3: 'Orçamento, forecast e controle OPEX/CAPEX',
                item4: 'Políticas e compliance administrativo'
            },
            pillar4: {
                title: 'Dados, RI e Automações',
                item1: 'BI personalizado para tomada de decisão',
                item2: 'Automação de processos (integrações ERP/CRM)',
                item3: 'Governança de dados e qualidade',
                item4: 'Suporte a RI e relatórios para investidores'
            },
            processTitle: 'Como Funcionamos',
            process1: {
                title: 'Diagnóstico Rápido',
                text: 'Mapeamos processos, sistemas e necessidades por área'
            },
            process2: {
                title: 'Onboarding e Padronização',
                text: 'Definimos SLAs, políticas e rotinas com owners claros'
            },
            process3: {
                title: 'Execução Assistida',
                text: 'Operação diária + apoio consultivo sênior'
            },
            process4: {
                title: 'Dashboards e Rituais',
                text: 'Painéis gerenciais e reuniões mensais'
            },
            process5: {
                title: 'Melhoria Contínua',
                text: 'Automações e ajustes baseados em métricas'
            },
            benefitsTitle: 'Benefícios para o Portfólio',
            benefit1: 'Eficiência operacional com redução de custos',
            benefit2: 'Confiabilidade de dados para decisões',
            benefit3: 'Conformidade e mitigação de riscos',
            benefit4: 'Time fundador focado em produto e vendas',
            benefit5: 'Escalabilidade desde o early stage',
            differentialsTitle: 'Diferenciais Martinus',
            differential1: 'Time multidisciplinar com playbooks testados',
            differential2: 'Stack tecnológica integrada',
            differential3: 'Relatórios alinhados a RI e conselho',
            differential4: 'SLAs claros e métricas de qualidade',
            faqTitle: 'Perguntas Frequentes',
            faq1: {
                question: 'O CSC substitui meu financeiro interno?',
                answer: 'Pode complementar ou assumir integralmente, conforme o estágio e a necessidade da empresa.'
            },
            faq2: {
                question: 'Usamos sistemas diferentes. É um problema?',
                answer: 'Não. Integramos com os principais ERPs/CRMs e, quando necessário, criamos conectores/rotinas de RPA.'
            },
            faq3: {
                question: 'Há apoio em captação e RI?',
                answer: 'Sim. Estruturamos indicadores, materiais recorrentes e respondemos a diligências com dados confiáveis.'
            },
            finalCta: {
                title: 'Quer levar eficiência e previsibilidade para a operação da sua empresa?',
                subtitle: 'Entre em contato com o CSC Martinus Capital',
                button: 'Fale Conosco'
            }
        },
        team: {
            title: 'Quem Somos',
            role: 'Fundador e Empreendedor',
            bio1: 'Fundador da Nexaas com mais de 35 anos na indústria de software e tecnologia.',
            bio2: 'Construiu a Mastersaf, adquirida pela Thomson Reuters em 2011, e é investidor em mais de 30 empresas de tecnologia.',
            bio3: 'Atuou junto ao SERPRO na implementação do Imposto de Renda informatizado e trabalhou com a FGV para o lançamento nacional da IN68/IN65.'
        },
        contact: {
            title: 'Vamos Conversar?',
            subtitle: 'Entre em contato para discutir como podemos acelerar o crescimento do seu negócio',
            form: {
                name: 'Nome',
                company: 'Empresa',
                email: 'E-mail',
                phone: 'Telefone',
                message: 'Mensagem',
                submit: 'Enviar Mensagem'
            }
        },
        footer: {
            copyright: '© 2025 Martinus Capital. Todos os direitos reservados.'
        }
    },
    en: {
        nav: {
            about: 'About',
            portfolio: 'Portfolio',
            team: 'Who We Are',
            contact: 'Contact'
        },
        hero: {
            badge: 'Investments in Innovation & Technology',
            title: 'We build the digital future',
            subtitle: 'Capital + Time + Experience for B2B and B2C companies seeking accelerated growth and continuous innovation',
            stat1: 'Invested Companies',
            stat2: 'Years of Experience',
            stat3: 'Value Generated',
            stat4: 'Results Focus',
            cta: 'Explore Our Companies'
        },
        about: {
            title: 'Our Essence',
            subtitle: 'Much more than financial capital: time, experience and entrepreneurial culture',
            card1: {
                title: 'Strategic Vision',
                text: 'Active strategic committees with influence in innovation, technology and market strategy'
            },
            card2: {
                title: 'Results Culture',
                text: 'Ethics, responsibility and commitment to value generation for all stakeholders'
            },
            card3: {
                title: 'Sustainable Growth',
                text: 'Long-term partnerships building companies built to last through continuous innovation'
            }
        },
        portfolio: {
            title: 'Investment Portfolio',
            subtitle: 'Innovative companies transforming their markets',
            filter: {
                all: 'All',
                fintech: 'Fintech',
                saas: 'SaaS',
                ecommerce: 'E-commerce',
                tech: 'Technology'
            }
        },
        csc: {
            badge: 'Shared Administrative Center',
            title: 'Martinus Capital SSC',
            subtitle: 'Governance, efficiency and technology to accelerate our portfolio growth',
            cta1: 'Contact the Team',
            cta2: 'Discover Our Services',
            overview: 'At Martinus Capital, we offer companies in our ecosystem a Shared Service Center (SSC) that integrates legal, accounting, financial/administrative and data/automation. Our goal is to standardize critical routines, reduce costs and elevate operational quality with specialized support and cutting-edge technology.',
            pillarsTitle: 'Our Service Pillars',
            pillar1: {
                title: 'Legal Support',
                item1: 'Drafting and review of contracts (commercial, corporate, NDAs, terms)',
                item2: 'Regulatory compliance and governance',
                item3: 'Cap-table management and corporate documents',
                item4: 'Opinions and due diligence for operations'
            },
            pillar2: {
                title: 'Accounting Support',
                item1: 'Business-oriented intelligent accounting',
                item2: 'Tax analysis and fiscal planning',
                item3: 'Monthly reconciliations and accounting closing',
                item4: 'Management reports (P&L, Balance Sheet, Cash Flow)'
            },
            pillar3: {
                title: 'Financial and Administrative',
                item1: 'Accounts payable/receivable and treasury',
                item2: 'Automated billing and collection',
                item3: 'Budget, forecast and OPEX/CAPEX control',
                item4: 'Administrative policies and compliance'
            },
            pillar4: {
                title: 'Data, IR and Automation',
                item1: 'Customized BI for decision making',
                item2: 'Process automation (ERP/CRM integrations)',
                item3: 'Data governance and quality',
                item4: 'IR support and investor reports'
            },
            processTitle: 'How We Work',
            process1: {
                title: 'Quick Diagnosis',
                text: 'We map processes, systems and needs by area'
            },
            process2: {
                title: 'Onboarding and Standardization',
                text: 'We define SLAs, policies and routines with clear owners'
            },
            process3: {
                title: 'Assisted Execution',
                text: 'Daily operation + senior consulting support'
            },
            process4: {
                title: 'Dashboards and Rituals',
                text: 'Management panels and monthly meetings'
            },
            process5: {
                title: 'Continuous Improvement',
                text: 'Automations and adjustments based on metrics'
            },
            benefitsTitle: 'Portfolio Benefits',
            benefit1: 'Operational efficiency with cost reduction',
            benefit2: 'Data reliability for decisions',
            benefit3: 'Compliance and risk mitigation',
            benefit4: 'Founding team focused on product and sales',
            benefit5: 'Scalability from early stage',
            differentialsTitle: 'Martinus Differentials',
            differential1: 'Multidisciplinary team with tested playbooks',
            differential2: 'Integrated technology stack',
            differential3: 'Reports aligned with IR and board',
            differential4: 'Clear SLAs and quality metrics',
            faqTitle: 'Frequently Asked Questions',
            faq1: {
                question: 'Does the SSC replace my internal finance team?',
                answer: 'It can complement or fully assume, depending on the stage and needs of the company.'
            },
            faq2: {
                question: 'We use different systems. Is that a problem?',
                answer: 'No. We integrate with major ERPs/CRMs and, when necessary, create connectors/RPA routines.'
            },
            faq3: {
                question: 'Is there support for fundraising and IR?',
                answer: 'Yes. We structure indicators, recurring materials and respond to due diligence with reliable data.'
            },
            finalCta: {
                title: 'Want to bring efficiency and predictability to your company operations?',
                subtitle: 'Contact Martinus Capital SSC',
                button: 'Contact Us'
            }
        },
        team: {
            title: 'Who We Are',
            role: 'Founder and Entrepreneur',
            bio1: 'Founder of Nexaas with over 35 years in the software and technology industry.',
            bio2: 'Built Mastersaf, acquired by Thomson Reuters in 2011, and is an investor in over 30 technology companies.',
            bio3: 'Worked with SERPRO on the implementation of computerized Income Tax and with FGV for the national launch of IN68/IN65.'
        },
        contact: {
            title: "Let's Talk?",
            subtitle: 'Get in touch to discuss how we can accelerate your business growth',
            form: {
                name: 'Name',
                company: 'Company',
                email: 'E-mail',
                phone: 'Phone',
                message: 'Message',
                submit: 'Send Message'
            }
        },
        footer: {
            copyright: '© 2025 Martinus Capital. All rights reserved.'
        }
    },
    es: {
        nav: {
            about: 'La Empresa',
            portfolio: 'Portfolio',
            team: 'Quiénes Somos',
            contact: 'Contacto'
        },
        hero: {
            badge: 'Inversiones en Innovación y Tecnología',
            title: 'Construimos el futuro digital',
            subtitle: 'Capital + Tiempo + Experiencia para empresas B2B y B2C que buscan crecimiento acelerado e innovación continua',
            stat1: 'Empresas Invertidas',
            stat2: 'Años de Experiencia',
            stat3: 'Valor Generado',
            stat4: 'Enfoque en Resultados',
            cta: 'Conozca Nuestras Empresas'
        },
        about: {
            title: 'Nuestra Esencia',
            subtitle: 'Mucho más que capital financiero: tiempo, experiencia y cultura emprendedora',
            card1: {
                title: 'Visión Estratégica',
                text: 'Comités estratégicos activos con influencia en innovación, tecnología y estrategia de mercado'
            },
            card2: {
                title: 'Cultura de Resultados',
                text: 'Ética, responsabilidad y compromiso con la generación de valor para todos los stakeholders'
            },
            card3: {
                title: 'Crecimiento Sostenible',
                text: 'Alianzas a largo plazo construyendo empresas hechas para durar a través de la innovación continua'
            }
        },
        portfolio: {
            title: 'Portfolio de Inversiones',
            subtitle: 'Empresas innovadoras transformando sus mercados',
            filter: {
                all: 'Todas',
                fintech: 'Fintech',
                saas: 'SaaS',
                ecommerce: 'E-commerce',
                tech: 'Tecnología'
            }
        },
        csc: {
            badge: 'Centro Administrativo Compartido',
            title: 'Martinus Capital CSC',
            subtitle: 'Gobernanza, eficiencia y tecnología para acelerar el crecimiento de nuestro portafolio',
            cta1: 'Hable con el Equipo',
            cta2: 'Conozca Nuestros Servicios',
            overview: 'En Martinus Capital, ofrecemos a las empresas de nuestro ecosistema un Centro Administrativo Compartido (CSC) que integra legal, contable, financiero/administrativo y datos/automatización. Nuestro objetivo es estandarizar rutinas críticas, reducir costos y elevar la calidad operacional con soporte especializado y tecnología de punta.',
            pillarsTitle: 'Nuestros Pilares de Servicio',
            pillar1: {
                title: 'Apoyo Legal',
                item1: 'Elaboración y revisión de contratos (comerciales, societarios, NDAs, términos)',
                item2: 'Adecuación regulatoria y gobernanza',
                item3: 'Gestión de cap-table y documentos societarios',
                item4: 'Dictámenes y due diligence para operaciones'
            },
            pillar2: {
                title: 'Apoyo Contable',
                item1: 'Contabilidad inteligente orientada a negocios',
                item2: 'Análisis tributario y planificación fiscal',
                item3: 'Conciliaciones y cierre contable mensuales',
                item4: 'Informes gerenciales (Estado de Resultados, Balance, Flujo de Caja)'
            },
            pillar3: {
                title: 'Financiero y Administrativo',
                item1: 'Cuentas por pagar/cobrar y tesorería',
                item2: 'Facturación y cobranza automatizadas',
                item3: 'Presupuesto, forecast y control OPEX/CAPEX',
                item4: 'Políticas y compliance administrativo'
            },
            pillar4: {
                title: 'Datos, RI y Automatizaciones',
                item1: 'BI personalizado para toma de decisiones',
                item2: 'Automatización de procesos (integraciones ERP/CRM)',
                item3: 'Gobernanza de datos y calidad',
                item4: 'Soporte a RI e informes para inversionistas'
            },
            processTitle: 'Cómo Funcionamos',
            process1: {
                title: 'Diagnóstico Rápido',
                text: 'Mapeamos procesos, sistemas y necesidades por área'
            },
            process2: {
                title: 'Onboarding y Estandarización',
                text: 'Definimos SLAs, políticas y rutinas con owners claros'
            },
            process3: {
                title: 'Ejecución Asistida',
                text: 'Operación diaria + apoyo consultivo senior'
            },
            process4: {
                title: 'Dashboards y Rituales',
                text: 'Paneles gerenciales y reuniones mensuales'
            },
            process5: {
                title: 'Mejora Continua',
                text: 'Automatizaciones y ajustes basados en métricas'
            },
            benefitsTitle: 'Beneficios para el Portafolio',
            benefit1: 'Eficiencia operacional con reducción de costos',
            benefit2: 'Confiabilidad de datos para decisiones',
            benefit3: 'Conformidad y mitigación de riesgos',
            benefit4: 'Equipo fundador enfocado en producto y ventas',
            benefit5: 'Escalabilidad desde el early stage',
            differentialsTitle: 'Diferenciales Martinus',
            differential1: 'Equipo multidisciplinario con playbooks probados',
            differential2: 'Stack tecnológico integrado',
            differential3: 'Informes alineados con RI y consejo',
            differential4: 'SLAs claros y métricas de calidad',
            faqTitle: 'Preguntas Frecuentes',
            faq1: {
                question: '¿El CSC reemplaza mi equipo financiero interno?',
                answer: 'Puede complementar o asumir integralmente, según la etapa y necesidad de la empresa.'
            },
            faq2: {
                question: 'Usamos sistemas diferentes. ¿Es un problema?',
                answer: 'No. Integramos con los principales ERPs/CRMs y, cuando es necesario, creamos conectores/rutinas de RPA.'
            },
            faq3: {
                question: '¿Hay apoyo en captación y RI?',
                answer: 'Sí. Estructuramos indicadores, materiales recurrentes y respondemos a diligencias con datos confiables.'
            },
            finalCta: {
                title: '¿Quiere llevar eficiencia y previsibilidad a la operación de su empresa?',
                subtitle: 'Entre en contacto con el CSC Martinus Capital',
                button: 'Contáctenos'
            }
        },
        team: {
            title: 'Quiénes Somos',
            role: 'Fundador y Emprendedor',
            bio1: 'Fundador de Nexaas con más de 35 años en la industria del software y la tecnología.',
            bio2: 'Construyó Mastersaf, adquirida por Thomson Reuters en 2011, y es inversionista en más de 30 empresas de tecnología.',
            bio3: 'Trabajó con SERPRO en la implementación del Impuesto sobre la Renta informatizado y con FGV para el lanzamiento nacional de IN68/IN65.'
        },
        contact: {
            title: '¿Conversamos?',
            subtitle: 'Póngase en contacto para discutir cómo podemos acelerar el crecimiento de su negocio',
            form: {
                name: 'Nombre',
                company: 'Empresa',
                email: 'E-mail',
                phone: 'Teléfono',
                message: 'Mensaje',
                submit: 'Enviar Mensaje'
            }
        },
        footer: {
            copyright: '© 2025 Martinus Capital. Todos los derechos reservados.'
        }
    }
};

// Portfolio data
const portfolioData = [
    { "name": "Fintera", "category": "fintech", "description": "Plataforma integrada para gestão financeira", "url": "fintera.com.br", "logo": "images/logos/logo-fintera.png" },
    { "name": "2Sale", "category": "software", "description": "Soluções em gestão, vendas e processos", "url": "2sale.com.br", "logo": "images/logos/2sale-logo.png" },
    { "name": "ZeeDog", "category": "ecommerce", "description": "Produtos de expressão para pets", "url": "zeedog.com.br", "logo": "images/logos/logo-zeedog.svg" },
    { "name": "Nexaas", "category": "saas", "description": "Tecnologia para varejo com OMS e gestão", "url": "nexaas.com", "logo": "images/logos/logo-nexaas.png" },
    { "name": "Omnitax", "category": "fiscal", "description": "Simplifique sua gestão tributária", "url": "omnitax.ai", "logo": "images/logos/logo-omnitax.png" },
    { "name": "Builtcode", "category": "software", "description": "Fábrica de software e IA", "url": "builtcode.com.br", "logo": "images/logos/logo-builtcode.png" },
    { "name": "LiveCapital", "category": "fintech", "description": "Gerenciador universal de investimentos", "url": "livecapital.com.br", "logo": "images/logos/logo-livecapital-v2.png" },
    { "name": "Signa", "category": "ecommerce", "description": "Plataformas de e-commerce e marketplace", "url": "signativa.com.br", "logo": "images/logos/logo-signa.png" },
    { "name": "Taxi2go", "category": "logistics", "description": "Delivery de mercadorias via táxi", "url": "taxi2go.com.br", "logo": "images/logos/logo-taxi2go2.png" },
    { "name": "LetsSign", "category": "saas", "description": "Assinatura digital e gestão de documentos", "url": "letssign.com.br", "logo": "images/logos/logo-letssign-v2.png" },
    { "name": "TDMI Consulting", "category": "consulting", "description": "Consultoria empresarial e tributária", "url": "", "logo": "images/logos/logo-tdmi.jpg" },
    { "name": "4Asset", "category": "real-estate", "description": "Governança de ativos imóveis", "url": "", "logo": "images/logos/logo-4asset.png" },
    { "name": "Zarpa.ai", "category": "economia", "description": "Transporte náutico ponto a ponto", "url": "zarpa.ai", "logo": "images/logos/logo-zarpaai.png" },
    { "name": "Bysoft", "category": "saas", "description": "Gestão de processos de comércio exterior", "url": "bysoft.com.br", "logo": "images/logos/logo-bysoft.png" },
    { "name": "Increazy", "category": "ecommerce", "description": "Checkout e gestão de assinaturas", "url": "increazy.com", "logo": "images/logos/logo-increazy.svg" },
    { "name": "Aliz Evolução Fiscal", "category": "fiscal", "description": "Consultoria e compliance fiscal", "url": "", "logo": "images/logos/logo-aliz.jpg" },
    { "name": "Cassis Capital", "category": "investments", "description": "Investimentos em software B2B", "url": "cassiscapital.com.br", "logo": "images/logos/logo-cassiscapital.png" },
    { "name": "Canal da Peça", "category": "ecommerce", "description": "Marketplace de peças automotivas", "url": "canaldapeca.com.br", "logo": "images/logos/logo-canaldapeca.jpg" },
    { "name": "Engelink", "category": "saas", "description": "Plataforma de contratação para construção civil", "url": "engelink.com.br", "logo": "images/logos/logo-engelink.svg" },
    { "name": "Evnt", "category": "saas", "description": "Compre e venda eventos sem burocracia", "url": "evnt.com.br", "logo": "images/logos/logo-evnt.png" },
    { "name": "JExperts", "category": "saas", "description": "Plataforma de gestão estratégica integrada", "url": "jexperts.com.br", "logo": "images/logos/logo-jexperts.jpeg" },
    { "name": "KöliCapital", "category": "investments", "description": "Assessoria de investimentos global", "url": "kolicapital.com", "logo": "images/logos/logo-kolicapital.png" },
    { "name": "MasterSaf", "category": "fiscal", "description": "Software fiscal e tributário", "url": "", "logo": "images/logos/logo-mastersaf.jpg" },
    { "name": "Taxweb", "category": "fiscal", "description": "Soluções para compliance fiscal", "url": "", "logo": "images/logos/logo-taxweb.png" },
    { "name": "LinkAPI", "category": "software", "description": "Plataforma de desenvolvimento de APIs", "url": "linkapisolutions.gupy.io", "logo": "images/logos/logo-linkapi.svg" },
    { "name": "Ploomes", "category": "crm", "description": "CRM e automação de vendas", "url": "ploomes.com", "logo": "images/logos/logo-ploomes.png" },
    { "name": "metaKosmos", "category": "web3", "description": "Tecnologias Web3 e metaverso", "url": "metakosmos.com.br", "logo": "images/logos/logo-metakosmos.png" },
    { "name": "Collection", "category": "ecommerce", "description": "Conexão entre arquitetos e indústria", "url": "collection.com.br", "logo": "images/logos/COLLECTION_NOME-PRETO.png" },
    { "name": "Listme", "category": "saas", "description": "Gestão de catalogação para e-commerce", "url": "listme.io", "logo": "images/logos/ListMe-preto-logo.png" },
    { "name": "Automizei", "category": "retail", "description": "Transformação em lojas autônomas 24x7", "url": "automizei.com", "logo": "images/logos/automizei-logo.svg" },
    { "name": "RemedioWeb", "category": "health", "description": "Drogaria digital especializada em cuidadores", "url": "remedioweb.com.br", "logo": "images/logos/remedioweb-logo.png" },
    { "name": "Neopro", "category": "retail", "description": "Gestão de desempenho de vendas", "url": "neopro.com.br", "logo": "images/logos/neopro-logo.png" }
];

// =================================
// CAROUSEL FUNCTIONS
// =================================

let currentSlide = 0;
let autoplayInterval;

// Detectar mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// PORTFOLIO GRID FUNCTIONS
// =================================

// Inicializar grid de portfolio
function initPortfolioGrid() {
    const grid = document.getElementById('portfolioGrid');

    if (!grid) return;

    let gridHTML = '';
    portfolioData.forEach(company => {
        const url = company.url ? `https://${company.url}` : '';
        gridHTML += `
            <div class="logo-item" data-url="${url}" onclick="handleLogoClick(this)">
                <img src="${company.logo}" alt="${company.name}"
                     onerror="this.style.display='none'">
            </div>
        `;
    });
    grid.innerHTML = gridHTML;
}

// Função para lidar com cliques nas logos
function handleLogoClick(logoItem) {
    const url = logoItem.getAttribute('data-url');

    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

// =================================
// LANGUAGE SWITCHER
// =================================

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => value = value[k]);
        
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

 // =================================
 // EMAIL FUNCTION
 // =================================

 // Função para mostrar o modal
 function showModal(type, title, message, email = null) {
     const modal = document.getElementById('feedbackModal');
     const icon = document.getElementById('modalIcon');
     const titleEl = document.getElementById('modalTitle');
     const messageEl = document.getElementById('modalMessage');
     const emailEl = document.getElementById('modalEmail');

     // Define o ícone
     icon.textContent = type === 'success' ? '✓' : '✕';
     icon.className = `modal-icon ${type}`;

     // Define o conteúdo
     titleEl.textContent = title;
     messageEl.textContent = message;

     // Mostra ou esconde o email
     if (email) {
         emailEl.textContent = email;
         emailEl.href = `mailto:${email}`;
         emailEl.style.display = 'block';
     } else {
         emailEl.style.display = 'none';
     }

     // Mostra o modal
     modal.classList.add('active');
 }

 // Função para fechar o modal
 function closeModal() {
     const modal = document.getElementById('feedbackModal');
     modal.classList.remove('active');
 }

 async function enviarFormulario(event) {
     event.preventDefault(); // Previne o comportamento padrão do formulário

     const form = event.target;
     const submitButton = form.querySelector('.btn-submit');
     const buttonOriginalText = submitButton.textContent;

     // Desabilita o botão durante o envio
     submitButton.disabled = true;
     submitButton.textContent = 'Enviando...';

     // Coleta os dados do formulário
     const formData = {
         nome: form.querySelector('#name').value,
         empresa: form.querySelector('#company').value,
         email: form.querySelector('#email').value,
         telefone: form.querySelector('#phone').value,
         mensagem: form.querySelector('#message').value,
         dataEnvio: new Date().toISOString()
     };

     try {
         // Envia para o webhook do n8n
         const response = await fetch('https://app.martinuscapital.com.br/webhook/send_email', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(formData)
         });

         if (response.ok) {
             // Sucesso
             showModal(
                 'success',
                 'Contato Enviado!',
                 'Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.'
             );
             form.reset(); // Limpa o formulário
         } else {
             throw new Error('Erro ao enviar mensagem');
         }

     } catch (error) {
         console.error('Erro:', error);
         showModal(
             'error',
             'Erro ao Enviar Formulário',
             'Houve um erro ao enviar sua mensagem. Por favor, entre em contato diretamente pelo e-mail:',
             'financeiro@martinuscapital.com.br'
         );
     } finally {
         // Reabilita o botão
         submitButton.disabled = false;
         submitButton.textContent = buttonOriginalText;
     }
 }

// =================================
// INITIALIZATION
// =================================

document.addEventListener('DOMContentLoaded', function() {

    // Inicializar grid de portfolio
    initPortfolioGrid();
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // Mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', enviarFormulario);
    }

    // Reinicializar grid ao redimensionar tela (não é mais necessário)
    
});

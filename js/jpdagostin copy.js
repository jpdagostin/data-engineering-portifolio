AOS.init();
// Função para inicializar o site
function initializeSite() {
    // Smooth scroll para as seções ao clicar nos links da navbar
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            window.scrollTo({
                top: section.offsetTop - 60, // Ajuste para o menu fixo
                behavior: 'smooth'
            });
        });
    });

    // // Efeito na imagem de perfil ao clicar
    // document.querySelector('.profile-pic').addEventListener('click', function() {
    //     const profilePic = this;
    //     profilePic.classList.add('rotating');
    //     setTimeout(() => {
    //         profilePic.classList.remove('rotating');
    //     }, 1000);
    // });

    // Rotação da foto de perfil e nome ao atualizar a página
    const profilePic = document.querySelector('.profile-pic');
    const profileName = document.querySelector('.profile-name');

    // Gerar um número aleatório entre -15 e 15 para a rotação
    const rotationDegree = Math.floor(Math.random() * 31) - 15;

    profilePic.style.transform = `rotate(${rotationDegree}deg)`;
    profileName.style.transform = `rotate(${rotationDegree}deg)`;

    // Ajuste no tamanho da imagem de perfil ao rolar a página
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > header.offsetHeight / 2) {
            profilePic.style.transform = 'scale(0.5)';
        } else {
            profilePic.style.transform = `rotate(${rotationDegree}deg) scale(1)`;
        }
    });
}

// Função para alterar o idioma do site
function changeLanguage(lang) {
    const aboutSection = document.querySelector('#about .about-content');
    const projectsSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact');

    if (lang === 'en') {
        // Conteúdo em inglês
        document.querySelector('#about h2').textContent = 'About Me';
        aboutSection.innerHTML = `
            <p>Hello everyone, I'm João D'Agostin, a Computer Technician and Software Engineer. I spent 3 years in the computer sector of the Brazilian Air Force, working as HelpDesk Support. During this time, I honed my skills in various programming languages such as Java, JavaScript, HTML, CSS, C/C++, C#, React-Native, and Python, among others.</p>
            <p>Throughout my journey, I've learned the importance of resilience and leadership when facing unexpected challenges in team software development projects. In 2023, I embarked on a new chapter at Gobrax, specializing in Support Analysis. During this time, I began showcasing my programming skills and, after 8 months, was promoted to lead the company's first data analytics team.</p>
            <p>I highlight the project where I started my career as a developer and analyst, monitoring truck battery voltage performance based on telemetry data. We were able to identify when battery replacement was necessary and I assisted in implementing and automating scripts for the X-Ray project. This initiative allowed us to pinpoint all faults and issues in vehicles of a specific company related to truck-installed telemetry. All scripts were developed in Python and are automated and orchestrated by Rundeck, running daily.</p>
            <p>Additionally, I used PostgreSQL as a database, employing best practices to maintain good control and performance. Motivated by continuous growth, I am currently pursuing a postgraduate degree in Data Science to further enhance my expertise in developing internal tools. Excited about the opportunities ahead, both personally and professionally, I am dedicated to achieving even greater success in my career journey. Additionally, I have resumed my English studies after four years at Fisk from 2016 to 2019, now continuing at Cultura Inglesa.</p>
        `;

        projectsSection.querySelector('h2').textContent = 'Projects';
        projectsSection.querySelectorAll('.project h3')[0].textContent = 'Project 1';
        projectsSection.querySelectorAll('.project p')[0].textContent = 'Description of Project 1';
        projectsSection.querySelectorAll('.project h3')[1].textContent = 'Project 2';
        projectsSection.querySelectorAll('.project p')[1].textContent = 'Description of Project 2';
        projectsSection.querySelectorAll('.project .btn')[0].textContent = 'View Project';
        projectsSection.querySelectorAll('.project .btn')[1].textContent = 'View Project';

        contactSection.querySelector('h2').textContent = 'Contact';
        contactSection.querySelectorAll('.contact p a')[0].textContent = 'dagostinjoaopedro@gmail.com';
        contactSection.querySelectorAll('.contact p a')[1].textContent = 'linkedin/jpdagostin';
        contactSection.querySelectorAll('.contact p a')[2].textContent = 'github/jpdagostin';

        document.querySelectorAll('.navbar a')[0].textContent = 'About Me';
        document.querySelectorAll('.navbar a')[1].textContent = 'Projects';
        document.querySelectorAll('.navbar a')[2].textContent = 'Contact';

        document.querySelector('footer p').textContent = '© 2024 João Pedro D\'Agostin. All rights reserved.';
    } else if (lang === 'es') {
        // Conteúdo em espanhol
        document.querySelector('#about h2').textContent = 'Sobre Mí';
        aboutSection.innerHTML = `
            <p>Hola a todos, soy João D'Agostin, Técnico en Informática e Ingeniero de Software. Trabajé durante 3 años en el sector informático de la Fuerza Aérea Brasileña como soporte de HelpDesk. Durante este tiempo, perfeccioné mis habilidades en diversos lenguajes de programación como Java, JavaScript, HTML, CSS, C/C++, C#, React-Native y Python, entre otros.</p>
            <p>A lo largo de mi trayectoria, he aprendido la importancia de la resiliencia y el liderazgo al enfrentar desafíos inesperados en proyectos de desarrollo de software en equipo. En 2023, inicié una nueva etapa en Gobrax, especializándome en Análisis de Soporte. Durante este tiempo, comencé a mostrar mis habilidades de programación y, después de 8 meses, fui promovido al primer equipo de análisis de datos de la empresa.</p>
            <p>Destaco el proyecto donde inicié toda mi carrera como desarrollador y analista, monitoreando el rendimiento de voltaje de las baterías de camiones basado en datos de telemetría. Pudimos identificar cuándo era necesaria la sustitución de la batería y ayudé en la implementación y automatización de scripts para el proyecto Raio-X. Esta iniciativa nos permitió identificar todas las fallas y problemas en los vehículos de una empresa específica relacionados con la telemetría instalada en los camiones. Todos los scripts fueron desarrollados en Python y están automatizados y orquestados por Rundeck, ejecutándose diariamente.</p>
            <p>Además, utilicé PostgreSQL como base de datos, aplicando buenas prácticas para mantener un buen control y rendimiento. Motivado por el crecimiento continuo, actualmente estoy cursando una maestría en Ciencia de Datos para mejorar aún más mi experiencia en el desarrollo de herramientas internas. Emocionado por las oportunidades que se presentan, tanto personal como profesionalmente, estoy dedicado a alcanzar aún más éxito en mi trayectoria profesional. Además, he retomado mis estudios de inglés después de cuatro años en Fisk, de 2016 a 2019, y ahora continúo en Cultura Inglesa.</p>
        `;

        projectsSection.querySelector('h2').textContent = 'Proyectos';
        projectsSection.querySelectorAll('.project h3')[0].textContent = 'Proyecto 1';
        projectsSection.querySelectorAll('.project p')[0].textContent = 'Descripción del Proyecto 1';
        projectsSection.querySelectorAll('.project h3')[1].textContent = 'Proyecto 2';
        projectsSection.querySelectorAll('.project p')[1].textContent = 'Descripción del Proyecto 2';
        projectsSection.querySelectorAll('.project .btn')[0].textContent = 'Ver Proyecto';
        projectsSection.querySelectorAll('.project .btn')[1].textContent = 'Ver Proyecto';

        contactSection.querySelector('h2').textContent = 'Contacto';
        contactSection.querySelectorAll('.contact p a')[0].textContent = 'dagostinjoaopedro@gmail.com';
        contactSection.querySelectorAll('.contact p a')[1].textContent = 'linkedin/jpdagostin';
        contactSection.querySelectorAll('.contact p a')[2].textContent = 'github/jpdagostin';

        document.querySelectorAll('.navbar a')[0].textContent = 'Sobre Mí';
        document.querySelectorAll('.navbar a')[1].textContent = 'Proyectos';
        document.querySelectorAll('.navbar a')[2].textContent = 'Contacto';

        document.querySelector('footer p').textContent = '© 2024 João Pedro D\'Agostin. Todos los derechos reservados.';
    } else if (lang === 'pt') {
        // Conteúdo em português
        document.querySelector('#about h2').textContent = 'Sobre Mim';
        aboutSection.innerHTML = `
            <p>Olá pessoal, sou João D'Agostin, Técnico em Informática e Engenheiro de Software. Trabalhei por 3 anos no setor de informática da Força Aérea Brasileira como suporte de HelpDesk. Durante esse período, aprimorei minhas habilidades em diversas linguagens de programação como Java, JavaScript, HTML, CSS, C/C++, C#, React-Native e Python, entre outras.</p>
            <p>Ao longo da minha jornada, aprendi a importância da resiliência e da liderança ao enfrentar desafios inesperados em projetos de desenvolvimento de software em equipe. Em 2023, iniciei uma nova etapa na Gobrax, especializando-me em Análise de Suporte. Durante esse tempo, comecei a mostrar minhas habilidades com a programação e depois de 8 meses fui promovido a primeira equipe de analistas de dados da empresa.</p>
            <p>Destaco o projeto em que iniciei toda a minha trajetória como desenvolvedor e analista o desempenho das voltagens das baterias dos caminhões com base em dados de telemetria, onde conseguimos identificar quando que seria necessária a realização de uma troca de bateria, e auxiliei na implementação e automação de scripts para o projeto Raio-X. Essa iniciativa nos permitiu identificar todas as falhas e problemas nos veículos de uma empresa específica, relacionados a telemetria instalada no caminhão. Todos os scripts foram desenvolvidos em Python e estão automatizados e orquestrados pelo Rundeck, rodando diariamente.</p>
            <p>Além disso, utilizei o PostgreSQL como banco de dados, aplicando boas práticas para manter um bom controle e desempenho. Motivado pelo crescimento contínuo, atualmente estou cursando uma pós-graduação em Ciência de Dados para aprimorar ainda mais minha expertise no desenvolvimento de ferramentas internas. Animado com as oportunidades que se apresentam à frente, tanto pessoalmente quanto profissionalmente, estou dedicado a alcançar ainda mais sucesso na minha jornada de carreira. Além disso, reiniciei meus estudos de inglês depois de quatro anos no Fisk, de 2016 a 2019, e retomei no Cultura Inglesa.</p>
        `;

        projectsSection.querySelector('h2').textContent = 'Projetos';
        projectsSection.querySelectorAll('.project h3')[0].textContent = 'Projeto 1';
        projectsSection.querySelectorAll('.project p')[0].textContent = 'Descrição do Projeto 1';
        projectsSection.querySelectorAll('.project h3')[1].textContent = 'Projeto 2';
        projectsSection.querySelectorAll('.project p')[1].textContent = 'Descrição do Projeto 2';
        projectsSection.querySelectorAll('.project .btn')[0].textContent = 'Ver Projeto';
        projectsSection.querySelectorAll('.project .btn')[1].textContent = 'Ver Projeto';

        contactSection.querySelector('h2').textContent = 'Contato';
        contactSection.querySelectorAll('.contact p a')[0].textContent = 'dagostinjoaopedro@gmail.com';
        contactSection.querySelectorAll('.contact p a')[1].textContent = 'linkedin/jpdagostin';
        contactSection.querySelectorAll('.contact p a')[2].textContent = 'github/jpdagostin';

        document.querySelectorAll('.navbar a')[0].textContent = 'Sobre Mim';
        document.querySelectorAll('.navbar a')[1].textContent = 'Projetos';
        document.querySelectorAll('.navbar a')[2].textContent = 'Contato';

        document.querySelector('footer p').textContent = '© 2024 João Pedro D\'Agostin. Todos os direitos reservados.';
    }
}

// Inicializa o site ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    initializeSite();
});

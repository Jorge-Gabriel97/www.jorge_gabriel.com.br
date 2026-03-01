import "./AboutDescription.css";
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSpringboot, SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";

function AboutDescription() {
    return (
        <div className="container">
            {/* Adicionando nossa classe mobile-fd-column para responsividade */}
            <div className="text-section d-flex mobile-fd-column">

                <div className="text-section-text">
                    <h2>Desenvolvedor Full Stack</h2>

                    <p className="primary-color description-text">
                        Sou estudante de Análise e Desenvolvimento de Sistemas com foco em Desenvolvimento Full Stack.
                        Minha paixão é unir o poder do back-end com o design do front-end para criar soluções completas.
                        No Front-End, construo interfaces funcionais e responsivas utilizando HTML, CSS e JavaScript.
                        Já no Back-End e além, utilizo Python para desenvolvimento web, automação de processos,
                        análise de dados e exploração de fundamentos de IA. Minha experiência prévia com suporte técnico
                        afiou minha capacidade analítica para resolver problemas reais, diagnosticar erros (como no DOM
                        ou em integrações de APIs) e escrever código limpo (Clean Code). Sou movido pelo aprendizado
                        contínuo e meu objetivo é atuar em projetos desafiadores, construindo soluções eficientes e escaláveis.
                    </p>

                    {/* === NOVA SEÇÃO DE ÍCONES (TECH STACK) === */}
                    <div className="tech-stack">
                        <h3>Minhas Principais Tecnologias</h3>
                        <div className="icons-container d-flex">

                            <div className="tech-icon">
                                <FaReact color="#61DAFB" />
                                <span>React</span>
                            </div>

                            <div className="tech-icon">
                                <FaPython color="#3776AB" />
                                <span>Python</span>
                            </div>

                            <div className="tech-icon">
                                <FaJava color="#ED8B00" />
                                <span>Java</span>
                            </div>

                            <div className="tech-icon">
                                <SiJavascript color="#F7DF1E" />
                                <span>JavaScript</span>
                            </div>

                            <div className="tech-icon">
                                <FaHtml5 color="#E34F26" />
                                <span>HTML5</span>
                            </div>

                            <div className="tech-icon">
                                <FaCss3Alt color="#1572B6" />
                                <span>CSS3</span>
                            </div>

                            {/* Node.js */}
                            <div className="tech-icon">
                                <FaNodeJs color="#339933" />
                                <span>Node.js</span>
                            </div>

                            {/* TypeScript */}
                            <div className="tech-icon">
                                <SiTypescript color="#3178C6" />
                                <span>TypeScript</span>
                            </div>

                            {/* Spring Boot */}
                            <div className="tech-icon">
                                <SiSpringboot color="#6DB33F" />
                                <span>Spring Boot</span>
                            </div>

                            {/* Bancos de Dados Relacionais e NoSQL */}
                            <div className="tech-icon">
                                <SiPostgresql color="#4169E1" />
                                <span>PostgreSQL</span>
                            </div>

                            <div className="tech-icon">
                                <SiMysql color="#4479A1" />
                                <span>MySQL</span>
                            </div>

                            <div className="tech-icon">
                                <SiMongodb color="#47A248" />
                                <span>MongoDB</span>
                            </div>

                            {/* Versionamento e Infraestrutura */}
                            <div className="tech-icon">
                                <FaGitAlt color="#F05032" />
                                <span>Git</span>
                            </div>

                            <div className="tech-icon">
                                <FaDocker color="#2496ED" />
                                <span>Docker</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutDescription;
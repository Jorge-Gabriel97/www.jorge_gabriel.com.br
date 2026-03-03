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
                        Como graduando de Análise e Desenvolvimento de Sistemas, foco minha trajetória na construção de softwares eficientes, aplicando conceitos de engenharia e Clean Code em cada linha de código.
                        Ecossistema Front-End: Construo interfaces dinâmicas e de alta performance utilizando React e TypeScript, garantindo tipagem segura e componentes reutilizáveis.
                        Arquitetura Back-End: Desenvolvo APIs robustas e escaláveis com Java (Spring Boot) e Node.js, além de criar automações inteligentes e análise de dados com Python.
                        Persistência e Infraestrutura: Experiência prática na modelagem de bancos de dados SQL (PostgreSQL, MySQL) e NoSQL (MongoDB), utilizando Docker e Git para garantir ambientes de desenvolvimento modernos e controle de versão rigoroso.
                        Minha bagagem técnica me permite transitar por todo o ciclo de vida do software, desde o diagnóstico preciso de erros em integrações de APIs até o deploy de soluções completas e seguras.
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
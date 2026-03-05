# 🚀 Landing Page Pessoal & Portfólio - Jorge Gabriel

Este projeto é o meu portfólio pessoal, desenvolvido para consolidar minha presença digital como desenvolvedor Full Stack. A aplicação foi construída utilizando **React** e foca em uma experiência de usuário (UX) fluida, moderna e totalmente adaptável.

## 🛠️ Tecnologias Utilizadas

- **Front-end:** React.js, JavaScript (ES6+), CSS3 (Modern Hooks & Context API)
- **Ferramentas de Build:** Vite
- **Consumo de API:** GitHub REST API
- **Arquitetura:** Context API para gerenciamento de estado global.

## ✨ Funcionalidades Implementadas

### 🌙 Dark Mode Inteligente & Persistente
Uma das principais implementações deste projeto foi o sistema de temas (Claro/Escuro).
- **Context API:** Gerenciamento global do tema sem prop-drilling.
- **Persistência com LocalStorage:** A preferência do usuário é salva no navegador, mantendo o tema escolhido mesmo após o fechamento da aba ou atualização da página.
- **UI Integrada:** Toggle switch customizado e aplicação de temas em componentes complexos (Hero com overlay de gradiente, Cards e Footers).

### 📂 Integração com GitHub API
O portfólio consome dinamicamente os meus repositórios reais, garantindo que a seção de projetos esteja sempre atualizada sem a necessidade de manutenção manual no código.

---

## 🧠 Dificuldades e Aprendizados (Dev Log)

Durante o desenvolvimento, enfrentei desafios técnicos que serviram para aprimorar minhas habilidades de resolução de problemas e arquitetura de software:

1. **Gestão de Estados com Context API:** - *Desafio:* Sincronizar o tema em componentes isolados (Header e Footer) e garantir que o estado fosse recuperado corretamente do `localStorage`.
   - *Solução:* Implementação de inicialização preguiçosa (lazy initialization) no `useState` do Provider para ler o disco apenas uma vez no carregamento inicial.

2. **Troubleshooting de Importação e Case Sensitivity:**
   - *Desafio:* Conflitos no Vite durante a importação de serviços (`apiServices.js`), causados por diferenças de nomenclatura entre o sistema de arquivos e as chamadas no código.
   - *Solução:* Refatoração seguindo a metodologia **"Follow the Data Flow"**, rastreando desde a origem do dado na API até o consumo final no componente.

3. **Contraste em Imagens Dinâmicas (Hero Section):**
   - *Desafio:* Manter a legibilidade do texto no Dark Mode sem precisar trocar a imagem de fundo por uma versão editada.
   - *Solução:* Uso de `linear-gradient` com opacidade (RGBA) sobreposto à `background-image` via CSS, permitindo escurecer a imagem dinamicamente.

4. **Padronização Visual:**
   - *Desafio:* Garantir que componentes como o `title-panel` do banner não criassem o efeito "fantasma" (texto branco em fundo branco) na transição de temas.
   - *Solução:* Criação de uma hierarquia de classes de override (`.dark-mode .elemento`) com transições suaves de 0.3s para uma experiência premium.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Jorge-Gabriel97/seu-repositorio.git](https://github.com/Jorge-Gabriel97/seu-repositorio.git)

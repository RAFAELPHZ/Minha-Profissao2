# 🚀 O Mundo do Programador

Um site informativo e interativo sobre a profissão de programador, áreas de atuação, linguagens de programação, salários e tendências do mercado de trabalho.

## 📋 Sobre o Projeto

Este é um site estático desenvolvido em **HTML5, CSS3 e JavaScript puro**, com design moderno (Tech Dark Premium) e elementos interativos como gráficos, animações e efeitos visuais.

### ✨ Características Principais

- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Gráficos Interativos** - Visualizações de dados com Chart.js
- **Animações Suaves** - Transições e efeitos visuais elegantes
- **Tema Dark Premium** - Interface moderna com paleta de cores sofisticada
- **Performance Otimizada** - Carregamento rápido e eficiente
- **Sem Dependências Externas** - Apenas HTML, CSS e JavaScript

## 🎨 Design System

### Cores
- **Fundo Primário**: `#0F172A` (Azul-marinho profundo)
- **Fundo Secundário**: `#1E293B` (Azul-marinho claro)
- **Primária**: `#6366F1` (Índigo-violeta)
- **Secundária**: `#06B6D4` (Ciano)
- **Acento**: `#F59E0B` (Âmbar)
- **Texto Primário**: `#F1F5F9` (Branco suave)
- **Texto Secundário**: `#CBD5E1` (Cinza claro)

### Tipografia
- **Títulos**: Space Grotesk (300-700)
- **Corpo**: Space Grotesk (400-500)
- **Código**: JetBrains Mono (400-700)

## 📁 Estrutura do Projeto

```
programador-site/
├── index.html           # Arquivo HTML principal
├── css/
│   └── styles.css       # Estilos CSS completos
├── js/
│   ├── charts.js        # Gráficos interativos
│   └── interactions.js   # Animações e interatividades
├── README.md            # Este arquivo
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🚀 Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/programador-site.git
cd programador-site
```

### 2. Abrir o Site Localmente

**Opção A: Abrir diretamente no navegador**
- Clique duas vezes no arquivo `index.html`

**Opção B: Usar um servidor local (recomendado)**

Com Python 3:
```bash
python -m http.server 8000
```

Com Node.js (http-server):
```bash
npx http-server
```

Depois acesse: `http://localhost:8000`

### 3. Fazer Deploy

O site pode ser deployado em qualquer serviço que suporte arquivos estáticos:

- **GitHub Pages** (Grátis)
- **Netlify** (Grátis)
- **Vercel** (Grátis)
- **Firebase Hosting** (Grátis)

#### Deploy no GitHub Pages:

1. Vá para as configurações do repositório
2. Procure por "Pages" no menu lateral
3. Selecione a branch `main` como fonte
4. Salve as alterações
5. Seu site estará disponível em: `https://seu-usuario.github.io/programador-site`

## 📊 Seções do Site

### 1. **Navegação**
Menu fixo com links para todas as seções principais com efeito de scroll suave.

### 2. **Hero Section**
Seção de boas-vindas com imagem de programador e chamada para ação.

### 3. **O Que Faz um Programador**
6 cards explicando as principais atividades:
- Desenvolvimento
- Testes
- Manutenção
- Colaboração
- Resolução de Problemas
- Aprendizado Contínuo

### 4. **Áreas de Atuação**
6 especialidades com tecnologias relacionadas:
- Front-End
- Back-End
- Full-Stack
- Mobile
- Data Science
- DevOps

### 5. **Linguagens de Programação**
- Gráfico doughnut interativo com as 6 linguagens mais populares
- Ranking com descrições das 5 principais linguagens

### 6. **Mercado de Trabalho**
- Gráfico de barras com faixas salariais por experiência
- Estatísticas animadas sobre o mercado
- Habilidades essenciais para programadores

### 7. **Call-to-Action Final**
Seção de encerramento com convite para explorar mais.

### 8. **Footer**
Links de navegação, recursos e informações do projeto.

## 🎯 Elementos Interativos

### Gráficos
- **Linguagens**: Doughnut chart com dados de popularidade
- **Salários**: Bar chart com 3 faixas (mínimo, médio, máximo)

### Animações
- ✨ Fade-in progressivo ao scroll
- ✨ Efeito de digitação no título
- ✨ Parallax no background
- ✨ Contador animado para números
- ✨ Ripple effect nos botões
- ✨ Barra de progresso de scroll

### Interatividades
- 🔗 Scroll suave entre seções
- 🔗 Links ativos na navbar
- 🔗 Hover effects com glow
- 🔗 Tooltips nas tags

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados (Flexbox, Grid, Gradientes)
- **JavaScript (Vanilla)** - Interatividades sem frameworks
- **Chart.js** - Gráficos interativos
- **Google Fonts** - Tipografia (Space Grotesk, JetBrains Mono)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: até 480px

## 🔍 SEO

O site inclui:
- Meta tags descritivas
- Estrutura semântica HTML5
- Títulos e descrições otimizadas
- Imagens com alt text

## 📈 Performance

- Carregamento rápido (sem dependências pesadas)
- Otimização de imagens
- CSS minificado
- JavaScript eficiente
- Lazy loading de imagens

## 🐛 Troubleshooting

### Os gráficos não aparecem?
- Verifique se o Chart.js está carregando (abra o console do navegador)
- Certifique-se de que os elementos com IDs `languagesChart` e `salaryChart` existem

### As imagens não carregam?
- Verifique a conexão com a internet
- As imagens são carregadas de um CDN externo
- Você pode substituir as URLs das imagens pelas suas próprias

### O site não funciona localmente?
- Use um servidor local (não abra o arquivo diretamente)
- Tente `python -m http.server 8000`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novas features
- Melhorar a documentação
- Otimizar o código

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do repositório.

---

**Desenvolvido com ❤️ para programadores**

Última atualização: Fevereiro de 2025

# 📝 Instruções para Colocar o Site no GitHub

## Passo a Passo Completo

### 1️⃣ Preparar os Arquivos Localmente

Copie todos os arquivos do site para a pasta do seu repositório clonado:

```
Arquivos necessários:
- index.html
- css/styles.css
- js/charts.js
- js/interactions.js
- README.md
- .gitignore
```

### 2️⃣ Abrir o Terminal/Prompt de Comando

Navegue até a pasta do repositório:

```bash
cd caminho/para/seu/repositorio
```

### 3️⃣ Verificar o Status do Git

```bash
git status
```

Você deve ver os arquivos não rastreados (untracked files).

### 4️⃣ Adicionar Todos os Arquivos

```bash
git add .
```

Ou adicionar arquivos específicos:

```bash
git add index.html
git add css/styles.css
git add js/charts.js
git add js/interactions.js
git add README.md
git add .gitignore
```

### 5️⃣ Fazer um Commit

```bash
git commit -m "Adicionar site O Mundo do Programador"
```

Ou com uma mensagem mais descritiva:

```bash
git commit -m "feat: adicionar site completo sobre programadores com gráficos interativos"
```

### 6️⃣ Fazer o Push para o GitHub

```bash
git push origin main
```

Se sua branch principal for `master`:

```bash
git push origin master
```

### 7️⃣ Verificar no GitHub

Acesse seu repositório no GitHub e você deve ver todos os arquivos lá!

---

## 🚀 Deploy no GitHub Pages (Grátis!)

### Opção 1: Ativar GitHub Pages Automaticamente

1. Vá para o repositório no GitHub
2. Clique em **Settings** (⚙️)
3. No menu lateral, clique em **Pages**
4. Em "Source", selecione a branch `main` (ou `master`)
5. Clique em **Save**
6. Aguarde alguns minutos
7. Seu site estará disponível em: `https://seu-usuario.github.io/programador-site`

### Opção 2: Usar uma Branch Específica para Deploy

Se quiser usar uma branch `gh-pages`:

```bash
git checkout -b gh-pages
git push origin gh-pages
```

Depois ative no GitHub Pages.

---

## 📋 Comandos Git Úteis

### Ver histórico de commits
```bash
git log
```

### Ver mudanças não commitadas
```bash
git status
```

### Desfazer último commit (sem perder arquivos)
```bash
git reset --soft HEAD~1
```

### Atualizar seu repositório local
```bash
git pull origin main
```

### Criar uma nova branch
```bash
git checkout -b nome-da-branch
```

---

## ✅ Checklist Final

- [ ] Todos os arquivos foram copiados para a pasta do repositório
- [ ] `git add .` foi executado
- [ ] `git commit -m "mensagem"` foi executado
- [ ] `git push origin main` foi executado
- [ ] Os arquivos aparecem no GitHub
- [ ] GitHub Pages foi ativado (opcional)
- [ ] O site está acessível em `seu-usuario.github.io/programador-site`

---

## 🆘 Problemas Comuns

### "fatal: not a git repository"
**Solução**: Certifique-se de que está na pasta correta do repositório.

### "Permission denied (publickey)"
**Solução**: Você precisa configurar suas chaves SSH do GitHub. Veja: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "Your branch is ahead of 'origin/main' by X commits"
**Solução**: Seu repositório local tem commits que não foram enviados. Execute `git push`.

### Os arquivos não aparecem no GitHub
**Solução**: Verifique se o push foi bem-sucedido com `git status`. Se necessário, tente novamente.

---

## 📚 Recursos Úteis

- [Documentação do Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub Pages](https://pages.github.com/)
- [Guia de Markdown do GitHub](https://guides.github.com/features/mastering-markdown/)

---

**Pronto! Seu site está no GitHub! 🎉**

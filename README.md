# 🚀 Guia Rápido de Git e GitHub

Este repositório tem como objetivo apoiar usuários da ferramenta Git/GitHub com comandos essenciais e explicações claras para uso local e integração com a nuvem.

---

## 🛠️ Instalação do Git

Acesse o site oficial para fazer o download:

🔗 [https://git-scm.com/downloads](https://git-scm.com/downloads)

---

## 💻 Usando o Terminal (Git Bash / VS Code)

### 📖 Acessar a ajuda do Git

```bash
git -h
# ou
git --help
```

### 🔍 Verificar versão instalada

```bash
git --version
```

---

## ⚙️ Configurações Básicas

### Definir nome do usuário:

```bash
git config --global user.name "seu_nome"
```

### Definir e-mail:

```bash
git config --global user.email "seu_email@exemplo.com"
```

### Definir editor padrão (ex: bloco de notas)

```bash
git config --global core.editor notepad
```

> Para usar o editor padrão do sistema:
```bash
git config --global core.editor core
```

---

## 📁 Criando e Gerenciando Repositórios Locais

### Iniciar repositório na pasta atual

```bash
git init
```

### Iniciar repositório em um caminho específico

```bash
git init <caminho_da_pasta>
```

### Adicionar todos os arquivos para controle do Git

```bash
git add .
```

### Adicionar arquivos específicos

```bash
git add <nome_do_arquivo>
```

### Realizar um commit com mensagem

```bash
git commit -m "mensagem do commit"
```

> Após o primeiro commit, uma branch principal (geralmente `main` ou `master`) é criada.

---

## ☁️ Trabalhando com GitHub (nuvem)

> Para isso, é necessário ter uma conta no GitHub.

### 🔄 Clonar repositório remoto para sua máquina

```bash
git clone <URL>
```

### ⬇️ Trazer alterações do repositório remoto

```bash
git pull <URL>
```

### 🔼 Enviar alterações locais para o GitHub

#### Verificar se o repositório remoto está configurado:

```bash
git remote -v
```

#### Adicionar repositório remoto, se necessário:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

#### Corrigir endereço remoto, se estiver errado:

```bash
git remote remove origin
git remote add origin https://github.com/usuario/repositorio.git
```

#### Enviar alterações para o GitHub (push):

```bash
git push origin main
# ou
git push origin master
```

---

## 🧰 Outros Comandos Importantes

### Verificar diferenças entre arquivos

```bash
git diff
```

### Restaurar versão anterior (usando hash)

```bash
git restore source <hash>
```

### Criar nova branch personalizada

```bash
git checkout -b <nome_da_branch>
```

### Alternar entre branches

```bash
git switch <nome_da_branch>
```

### Ver branches existentes (a atual estará marcada com *)

```bash
git branch
```

### Renomear branch atual

```bash
git branch -m <novo_nome>
```

### Realizar merge de uma branch

```bash
git merge <nome_da_branch> -m "mensagem do merge"
```

---

## ✅ Considerações Finais

- Sempre verifique em qual branch está trabalhando.
- Use commits frequentes com mensagens claras.
- Mantenha seu repositório remoto atualizado com `push`.
- Crie branches para novas funcionalidades ou correções.

---

**💡 Dica 1:** Use um editor como VS Code com extensões Git para facilitar ainda mais o versionamento visual.
**💡 Dica 2:** Utilizar o GitHub Desktop pode ser também um grande facilitador em suas rotinas.  

---
Desafios de Lógica em JavaScript

Este repositório reúne pequenos desafios desenvolvidos com o objetivo de praticar lógica de programação e aplicar boas práticas de versionamento e organização de código em projetos com JavaScript.

---

Objetivos

- Praticar **lógica de programação** com foco em resolução de problemas simples.
- Estimular o uso de **funções**, **objetos**, **laços de repetição** e **manipulação de strings**.
- Aplicar **padronização no desenvolvimento** com o uso de:
  - **Git Flow** para organização de branches.
  - **Conventional Commits** para manter um histórico de commits limpo e compreensível.

---

Desafios:
Desafio Faxina JS
Recebe um objeto com os atributos `nome`, `sobrenome` e `idade`, e remove os campos com valor `null`.

---
Caça Letras
Solicita ao usuário uma letra e uma frase, e retorna quantas vezes a letra aparece na frase.

---
Porcentagem
Recebe dois números e retorna a porcentagem que um representa do outro.

---

## Instruções

Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   
Acesse a pasta do projeto:

cd nome-do-repositorio

Instale a dependência:

npm install readline-sync

Execute os arquivos com Node.js:

node desafio-faxina.js
node caca-letras.js
node porcentagem.js

Tecnologias utilizadas
JavaScript (Node.js)
readline-sync
Git + Git Flow
Conventional Commits

Convenções utilizadas
Git Flow
Organização do projeto baseada nas boas práticas do Git Flow, com uso das seguintes branches:

main – versão estável do projeto
develop – desenvolvimento ativo
feature/* – novas funcionalidades
fix/* – correções
hotfix/* – correções críticas em produção

Commits semânticos (Conventional Commits)
Exemplos:

feat: adicionar desafio de porcentagem
fix: corrigir contagem de letras
chore: atualizar README com instruções

Autoria
Desenvolvido por Diana Motta como parte dos estudos da Mentoria Front-End / DBserver, sobre orientação da Mentora Laís Malta, objetivo do desafio é praticar de lógica de programação e boas práticas de versionamento com JavaScript.
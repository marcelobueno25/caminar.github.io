# Caminar - Descubra o Prazer de Cada Passo

> **Descubra o prazer de cada passo** — um site estático que inspira caminhadas na natureza, oferece roteiros leves, dicas de equipamentos e informações sobre os benefícios de colocar o corpo em movimento.

[Demo ao vivo](https://marcelobueno25.github.io/caminar.github.io)

---

## 📸 Capturas de tela

![Screenshot do jogo](./screenshot.png) <!-- Altere ou adicione uma imagem do jogo se desejar -->

---

## Índice

1. Visão geral
2. Tecnologias
3. Estrutura de pastas
4. Como executar localmente
5. Deploy no GitHub Pages
6. Contribuindo
7. Créditos e licenças

---

## Visão geral

Caminar é um projeto **front‑end puro** (HTML 5 + CSS 3 + JavaScript) pensado para ser leve, responsivo e acessível. O objetivo é incentivar a prática de caminhadas, apresentando:

- **Conteúdo editorial** sobre saúde, bem‑estar e mindfulness;
- **Galerias de inspiração** com fotos de trilhas e florestas;
- Layout _mobile‑first_ otimizado com **lazy‑loading** de imagens;
- Navegação simples e modal de visualização de imagens.

> Sinta‑se à vontade para clonar, personalizar e usar como base para seu próprio site estático.

---

## Tecnologias

- **HTML 5** semântico
- **CSS 3** (reset, grid customizado, estilos)
- **JavaScript** (ES5) + jQuery 3.3.1
- **Font Awesome 5** para ícones
- **Unsplash** para imagens livres de royalties

---

## Estrutura de pastas

```text
caminar.github.io/
├── css/
│   ├── grid.css      # Sistema de colunas responsivo
│   ├── reset.css     # Reset CSS para consistência cross‑browser
│   └── style.css     # Tema principal do site
├── img/              # Imagens otimizadas (JPEG/PNG)
├── js/
│   ├── jquery-3.3.1.min.js
│   └── style.js      # Scripts de interação (modal, etc.)
├── index.html        # Página inicial
└── README.md         # Este documento
```

---

## Como executar localmente

```bash
# 1. Clone o repositório
$ git clone https://github.com/marcelobueno25/caminar.github.io.git
$ cd caminar.github.io

# 2. Abra o index.html em seu navegador favorito
# (duplo clique ou use uma extensão Live Server no VS Code)
```

> **Dica**: se estiver usando VS Code, instale a extensão **Live Server** para recarregar a página automaticamente a cada salvamento.

---

## Deploy no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, selecione a branch `main` e a pasta `/root`.
3. Clique em **Save**. Em poucos segundos seu site estará disponível em:

```
https://<seu‑usuário>.github.io/caminar.github.io
```

Caso queira usar um domínio personalizado, configure o arquivo `CNAME` e a entrada DNS conforme a [documentação oficial](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Contribuindo

Contribuições são muito bem‑vindas! Para colaborar:

1. Faça um **fork** do projeto.
2. Crie uma branch com sua feature ou correção: `git checkout -b minha-feature`.
3. _Commit_ suas alterações: `git commit -m 'feat: minha nova feature'`.
4. _Push_ para a branch: `git push origin minha-feature`.
5. Abra um **Pull Request** e descreva suas mudanças.

> Antes de enviar, confira se o site continua funcionando em dispositivos móveis e desktop.

---

## Créditos e licenças

- **Design original**: [TEMPLATED](https://templated.co/) — tema adaptado e traduzido.
- **Fotos**: [Unsplash](https://unsplash.com/) (licença livre de royalties).
- **Ícones**: [Font Awesome 5](https://fontawesome.com/).

Distribuído sob a licença **MIT**. Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

<p align="center">Feito com ❤️ e muitas caminhadas.</p>


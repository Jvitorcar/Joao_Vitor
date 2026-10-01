# Portfólio — João Vitor Cardoso

Site de portfólio estático (HTML, CSS e JavaScript puros), sem servidor e sem banco de dados.
Pensado para ser **rápido, leve e fácil de manter** — e hospedado de graça no **GitHub Pages**.

---

## ✅ Como manter o site (a parte importante)

**Você só precisa editar UM arquivo:** `js/conteudo.js`

Lá dentro estão **todos** os textos, fotos, vídeos, links e contatos, com comentários
explicando cada parte. Você **não precisa** mexer em mais nada (`index.html`, `css/` e
`js/script.js` cuidam da aparência e do funcionamento sozinhos).

### Regrinhas ao editar o `conteudo.js`
- Texto fica sempre **entre aspas**: `"assim"`.
- Cada item de uma lista termina com **vírgula**.
- **Não apague** colchetes `[ ]`, chaves `{ }` ou vírgulas que estão fora dos textos.
- Depois de salvar, **atualize a página** no navegador para ver o resultado.

### Exemplos rápidos

**Trocar um texto:** ache a frase entre aspas e reescreva.
```js
chamada: "Da *pauta* à *publicação* — ...",   // o que está entre *asteriscos* vira itálico
```

**Trocar uma foto:** suba a nova imagem na mesma pasta (ex.: `assets/img/celine/`)
e aponte o caminho dela:
```js
{ src: "assets/img/celine/obra1.jpg", alt: "Descrição da foto" },
```

**Adicionar uma foto:** copie uma linha `{ ... }` inteira, cole logo abaixo e troque
o `src` e o `alt`.

**Remover uma foto:** apague a linha `{ ... }` inteira (incluindo a vírgula).

**Vídeo do YouTube:** use só o **id** do vídeo (o que vem depois de `watch?v=` ou `/shorts/`):
```js
{ tipo: "youtube", id: "1Q63klYQaN0", titulo: "Nome do vídeo", formato: "9:16" },
```

**Vídeos externos:** use `tipo: "youtube"` ou `tipo: "vimeo"` e informe o `id` do vídeo.
junto com uma imagem de capa (`poster`):
```js
{ tipo: "youtube", id: "ID_DO_VIDEO", titulo: "Nome", formato: "9:16" },
```

---

## 📁 Estrutura de pastas

```
site/
├── index.html          ← estrutura da página (não precisa editar)
├── css/
│   └── styles.css       ← aparência (não precisa editar)
├── js/
│   ├── conteudo.js      ← ✏️  AQUI você edita tudo
│   └── script.js        ← funcionamento (não precisa editar)
├── assets/
│   ├── img/             ← fotos, organizadas por seção
│   └── video/           ← capas locais de vídeos (quando usadas)
├── .nojekyll            ← arquivo técnico do GitHub (deixe como está)
└── README.md            ← este guia
```

---

## 👀 Ver no seu computador antes de publicar

Basta abrir o arquivo `index.html` no navegador (clique duplo).
As fotos e os vídeos próprios vão carregar normalmente. Os vídeos do YouTube
e as fontes do Google só aparecem com internet — o que é o caso normal no site publicado.

---

## 🚀 Publicar no GitHub Pages (passo a passo)

1. Crie um repositório novo no GitHub (ex.: `portfolio`).
2. Envie **todo o conteúdo desta pasta `site/`** para dentro do repositório
   (o `index.html` precisa ficar na **raiz** do repositório, não dentro de outra pasta).
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, escolha a branch **`main`** e a pasta **`/ (root)`**. Salve.
5. Aguarde 1–2 minutos. O endereço do site aparece nessa mesma tela
   (algo como `https://SEU-USUARIO.github.io/portfolio/`).

> Se você atualizar o `conteudo.js`, é só enviar o arquivo atualizado para o
> repositório que o site se atualiza sozinho em seguida.

---

## 📐 Dicas ao trocar mídia

- **Fotos:** mantenha por volta de **1500–2000px** no lado maior e salve em **JPG**
  com qualidade ~80%. Isso deixa o site rápido sem perder nitidez.
- **Vídeos:** o GitHub tem **limite de 100 MB por arquivo**. Prefira vídeos curtos,
  em **MP4 (H.264)**, abaixo de ~25 MB. Vídeos longos é melhor subir no YouTube e
  usar pelo `id` (não pesa no site).
- Sempre que possível, **reaproveite o mesmo nome de arquivo** ao trocar uma imagem —
  assim você nem precisa editar o `conteudo.js`.

---

Feito com cuidado para o portfólio de **João Vitor Cardoso** · Comunicação Multimídia · Guarapuava — PR

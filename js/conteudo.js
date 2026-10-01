/* ==========================================================================
   CONTEÚDO DO SITE — João Vitor Cardoso
   --------------------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA MANTER O SITE.
   Tudo (textos, fotos, vídeos, links e contato) está aqui embaixo.

   COMO EDITAR (regras simples):
   • Texto fica sempre entre aspas: "assim".
   • Cada item de uma lista termina com vírgula.
   • Para trocar uma foto, suba o novo arquivo na pasta indicada em "src"
     e mantenha o mesmo nome — ou troque o nome aqui dentro das aspas.
   • Para ADICIONAR uma foto, copie uma linha inteira { ... }, cole logo
     abaixo e troque o "src" e o "alt".
   • Para REMOVER, apague a linha { ... } inteira (incluindo a vírgula).
   • NÃO apague colchetes [ ], chaves { } ou vírgulas fora dos textos.
   • Depois de editar, salve e atualize a página. Pronto.
   ========================================================================== */

const CONTEUDO = {

  /* -------------------------------------------------------------------- */
  /* 1. IDENTIDADE — aparece no topo, no rodapé e no título da aba        */
  /* -------------------------------------------------------------------- */
  identidade: {
    nome: "João Vitor Cardoso",
    funcao: "Comunicação Multimídia",
    // Linha de disciplinas que aparece no banner (separe por " · ")
    disciplinas: "Produção Audiovisual · Fotografia · Comunicação Institucional · Produção de Conteúdo",
    local: "Guarapuava — PR",
    idade: "26 anos",
  },

  /* -------------------------------------------------------------------- */
  /* 2. SOBRE — sua apresentação profissional                            */
  /* -------------------------------------------------------------------- */
  sobre: {
    // Frase curta de impacto (fica grande, com ênfase em itálico via *asteriscos*)
    chamada: "Da *pauta* à *publicação* — o processo inteiro de comunicação na mão de uma pessoa só.",
    // Parágrafos do texto "Sobre". Cada item entre aspas é um parágrafo.
    paragrafos: [
      "Sou João Vitor Cardoso, profissional de Comunicação Multimídia que domina o ciclo completo da produção de conteúdo: da definição da pauta à publicação final. Trabalho na intersecção entre audiovisual, fotografia e estratégia digital, transformando acontecimentos em conteúdo com clareza, ritmo e identidade visual.",
      "Atualmente, na Cross Formaturas, atuo como editor de vídeo, fotógrafo e videomaker profissional, trabalhando com formaturas, ensaios, cobertura de eventos, festas e produções para colégios e faculdades. Antes disso, passei por redação de TV como editor cinegrafista, social media e cobertura fotográfica de festivais e shows.",
      "Mais do que registrar, eu construo presença digital: roteirizo, fotografo, filmo, edito e ainda desenvolvo os próprios sites dos projetos que atendo. Essa versatilidade — técnica e criativa — permite entregar projetos de comunicação completos, do primeiro clique ao conteúdo no ar.",
    ],
    // Foto principal do "Sobre"
    retrato: { src: "assets/img/sobre/retrato.jpg", alt: "João Vitor operando um estabilizador em captação de vídeo" },
    // Fotos de apoio menores (carrossel lateral)
    apoio: [
      { src: "assets/img/rede-massa/02.jpg", alt: "João Vitor captando uma entrevista em campo" },
      { src: "assets/img/sobre/golden.jpg", alt: "João Vitor em luz de fim de tarde" },
    ],
    // Competências (viram etiquetas). Adicione/remova livremente.
    competencias: [
      "Adobe Premiere Pro", "Photoshop", "Lightroom", "CapCut",
      "Fotografia", "Captação de Vídeo", "Roteirização", "Edição de Vídeo",
      "Comunicação Institucional", "Marketing Digital", "Gestão de Conteúdo",
      "Cobertura de Eventos", "Produção Mobile", "Desenvolvimento de Sites",
      "Produção de Conteúdo para Redes Sociais",
    ],
    // Trajetória profissional (ordem do mais recente para o mais antigo)
    trajetoria: [
      { periodo: "2026 — Atual", cargo: "Editor de Vídeo, Fotógrafo e Videomaker", org: "Cross Formaturas" },
      { periodo: "2025",         cargo: "Assessor de Comunicação", org: "Prefeitura Municipal de Guarapuava" },
      { periodo: "2025",         cargo: "Editor Cinegrafista",      org: "SBT — Rede Massa" },
      { periodo: "2024",         cargo: "Social Media Designer",     org: "Smart Distribuidora" },
      { periodo: "2024",         cargo: "Fotógrafo e Produtor de Conteúdo", org: "Verão Maior Paraná" },
      { periodo: "2023",         cargo: "Fotografia de Produto",      org: "Prata e Mar Joalheria" },
    ],
  },

  /* -------------------------------------------------------------------- */
  /* 3. PROJETOS — os casos em destaque                                  */
  /*    Cada projeto tem: número, título, resumo, destaques (lista),     */
  /*    fotos[] e videos[]. Vídeo pode ser "youtube" (use o id) ou       */
  /*    "arquivo" (use o caminho do mp4 e do poster).                    */
  /* -------------------------------------------------------------------- */
  projetos: [
    {
      id: "prefeitura",
      numero: "01",
      titulo: "Prefeitura de Guarapuava",
      subtitulo: "Comunicação Institucional",
      resumo: "Produção audiovisual completa para o poder público: vídeos informativos, de utilidade pública e de conscientização, além da cobertura de grandes eventos. Da pauta à publicação — frequentemente com entrega no mesmo dia.",
      destaques: ["Vídeos institucionais", "Conscientização e impacto social", "Cobertura de eventos públicos", "Entrega ágil"],
      fotos: [],
      videos: [
        { tipo: "vimeo", id: "1231857719", titulo: "Dia do Gari",                 formato: "9:16" },
        { tipo: "vimeo", id: "1231864235", titulo: "Dia Nacional do Livro",        formato: "9:16" },
        { tipo: "youtube", id: "GiO6xiYX3m0", titulo: "Diga não ao trabalho infantil", formato: "9:16" },
        { tipo: "youtube", id: "glKFXVhUOYQ", titulo: "Campanha Novembro Azul 2025",  formato: "9:16" },
      ],
      site: null,
    },
    {
      id: "celine",
      numero: "02",
      titulo: "Celine Pinturas",
      subtitulo: "Marca de artista · site, fotografia e vídeo",
      resumo: "Construção da presença digital da artista visual Celine: produção fotográfica das obras e do ateliê, vídeos de divulgação e do processo criativo, e o desenvolvimento do site institucional.",
      destaques: ["Fotografia de obras e ateliê", "Vídeos de divulgação e processo", "Site institucional desenvolvido"],
      fotos: [
        { src: "assets/img/celine/artista.jpg", alt: "A artista Celine pintando no cavalete", destaque: true },
        { src: "assets/img/celine/obra1.jpg",   alt: "Obra: retrato com coração anatômico, de Celine", destaque: true },
        { src: "assets/img/celine/obra2.jpg",   alt: "Obra figurativa de Celine em moldura dourada" },
        { src: "assets/img/celine/obra3.jpg",   alt: "Pintura de paisagem em cavalete" },
        { src: "assets/img/celine/obra4.jpg",   alt: "Obras emolduradas de Celine na parede" },
        { src: "assets/img/celine/proc1.jpg",   alt: "Pincéis e materiais do ateliê" },
        { src: "assets/img/celine/aula1.jpg",   alt: "Detalhe das mãos pintando em aula" },
        { src: "assets/img/celine/aula2.jpg",   alt: "Aluno desenhando durante a aula de pintura" },
      ],
      videos: [
        { tipo: "youtube", id: "QjPGi8YFwZw", titulo: "Pintura de Paisagem",  formato: "9:16" },
        { tipo: "youtube", id: "McQWQoBcnUQ", titulo: "Lembrete do Curso",   formato: "9:16" },
        { tipo: "youtube", id: "zHBYttoiuVM", titulo: "Arte na Garagem",     formato: "9:16" },
      ],
      site: { label: "Ver site ao vivo", url: "https://jvitorcar.github.io/celineV3/" },
    },
    {
      id: "joao-augusto",
      numero: "03",
      titulo: "João Augusto Personal",
      subtitulo: "Marca pessoal · fotografia e vídeo",
      resumo: "Conteúdo para fortalecer a marca pessoal do personal trainer e atrair clientes: ensaio fotográfico, retratos de marca e vídeos de engajamento captados na academia.",
      destaques: ["Ensaio de marca pessoal", "Retratos e atendimento", "Vídeos para redes sociais"],
      fotos: [
        { src: "assets/img/joao-augusto/capa.jpg", alt: "Personal trainer atendendo cliente sob o letreiro neon da academia", destaque: true },
        { src: "assets/img/joao-augusto/01.jpg",   alt: "Retrato de marca do personal trainer", destaque: true },
        { src: "assets/img/joao-augusto/02.jpg",   alt: "Personal orientando treino na academia" },
        { src: "assets/img/joao-augusto/03.jpg",   alt: "Atendimento de alongamento com cliente" },
        { src: "assets/img/joao-augusto/04.jpg",   alt: "Personal trainer apresentando para um grupo" },
      ],
      videos: [
        { tipo: "youtube", id: "j6CUEeFLFwc", titulo: "Making Off",            formato: "9:16" },
        { tipo: "youtube", id: "bOtyLjFxYCg", titulo: "Palestra UniGuairacá", formato: "9:16" },
      ],
      site: null,
    },
    {
      id: "judo",
      numero: "04",
      titulo: "Judô Randori",
      subtitulo: "Fotografia esportiva · cobertura e site",
      resumo: "Cobertura fotográfica e audiovisual da Academia Randori: campeonatos, atletas, mestres e a confraternização do clube. Registro do esporte com emoção e identidade, mais o site institucional desenvolvido.",
      destaques: ["Fotografia esportiva", "Cobertura de campeonatos", "Conteúdo institucional", "Site desenvolvido"],
      fotos: [
        { src: "assets/img/judo/d1.jpg", alt: "Jovem judoca em guarda, expressão concentrada", destaque: true },
        { src: "assets/img/judo/d2.jpg", alt: "Criança cumprimentando o professor de judô", destaque: true },
        { src: "assets/img/judo/d3.jpg", alt: "Atletas da Academia Randori em pose institucional", destaque: true },
        { src: "assets/img/judo/a1.jpg", alt: "Judoca faixa laranja em posição de combate" },
        { src: "assets/img/judo/a2.jpg", alt: "Criança em movimento no tatame" },
        { src: "assets/img/judo/a3.jpg", alt: "Duas crianças em disputa de judô" },
        { src: "assets/img/judo/a4.jpg", alt: "Judoca mirim no solo durante a luta" },
        { src: "assets/img/judo/m1.jpg", alt: "Mestre orientando a turma" },
        { src: "assets/img/judo/m2.jpg", alt: "Mestre demonstrando técnica com troféus ao fundo" },
        { src: "assets/img/judo/e1.jpg", alt: "Bebê sorrindo na arquibancada do torneio" },
        { src: "assets/img/judo/e2.jpg", alt: "Confraternização com balões na academia" },
      ],
      videos: [
        { tipo: "youtube", id: "NxlOGouIkhE", titulo: "Alana e Murilo", formato: "9:16" },
        { tipo: "vimeo", id: "1231861200", titulo: "Torneio Regional", formato: "9:16" },
      ],
      site: { label: "Ver site ao vivo", url: "https://jvitorcar.github.io/RandoriSiteV4/" },
    },
  ],

  /* -------------------------------------------------------------------- */
  /* 4. FOTOGRAFIA — recorte autoral (puxa as melhores imagens)          */
  /* -------------------------------------------------------------------- */
  fotografia: {
    intro: "Um recorte do meu olhar fotográfico — do retrato em estúdio ao esporte, do fitness ao fotojornalismo de campo.",
    fotos: [
      { src: "assets/img/fotografia/gabi.jpg",        alt: "Retrato feminino em estúdio com luz dramática", categoria: "Retrato" },
      { src: "assets/img/judo/d1.jpg",                alt: "Judoca mirim concentrado", categoria: "Esporte" },
      { src: "assets/img/joao-augusto/01.jpg",        alt: "Retrato de marca de personal trainer", categoria: "Retrato" },
      { src: "assets/img/rede-massa/03.jpg",          alt: "Cobertura jornalística em campo", categoria: "Fotojornalismo" },
      { src: "assets/img/fotografia/foco-porsol.jpg", alt: "Fotógrafo em ação no fim de tarde", categoria: "Bastidor" },
      { src: "assets/img/judo/d3.jpg",                alt: "Atletas de judô em pose institucional", categoria: "Esporte" },
      { src: "assets/img/joao-augusto/capa.jpg",      alt: "Cena de academia sob letreiro neon", categoria: "Fitness" },
      { src: "assets/img/judo/d2.jpg",                alt: "Momento entre criança e professor de judô", categoria: "Esporte" },
    ],
  },

  /* -------------------------------------------------------------------- */
  /* 5. AUDIOVISUAL — a vitrine de vídeo (reel curado)                   */
  /* -------------------------------------------------------------------- */
  audiovisual: {
    intro: "Da campanha pública ao registro de bastidor — produção audiovisual com captação, roteiro e edição próprios.",
    videos: [
      { tipo: "youtube", id: "GiO6xiYX3m0", titulo: "Diga não ao trabalho infantil", projeto: "Prefeitura de Guarapuava", formato: "9:16" },
      { tipo: "youtube", id: "glKFXVhUOYQ", titulo: "Novembro Azul 2025",            projeto: "Prefeitura de Guarapuava", formato: "9:16" },
      { tipo: "youtube", id: "QjPGi8YFwZw", titulo: "Pintura de Paisagem", projeto: "Celine Pinturas", formato: "9:16" },
      { tipo: "youtube", id: "j6CUEeFLFwc", titulo: "Making Off",          projeto: "João Augusto Personal", formato: "9:16" },
      { tipo: "vimeo", id: "1231861200", titulo: "Torneio Regional", projeto: "Judô Randori", formato: "9:16" },
      { tipo: "youtube", id: "zHBYttoiuVM", titulo: "Arte na Garagem", projeto: "Celine Pinturas", formato: "9:16" },
    ],
  },

  /* -------------------------------------------------------------------- */
  /* 6. SITES DESENVOLVIDOS — cartões que linkam para os sites no ar     */
  /* -------------------------------------------------------------------- */
  sites: {
    intro: "Sites estáticos, rápidos e fáceis de manter — desenvolvidos do zero para cada projeto, hospedados no GitHub Pages.",
    itens: [
      { nome: "Celine Pinturas",      desc: "Site institucional da artista visual.", url: "https://jvitorcar.github.io/celineV3/",      imagem: "assets/img/celine/obra2.jpg" },
      { nome: "Escolinha Vida Nova",  desc: "Site institucional do projeto social de futebol em Caçador.", url: "https://jvitorcar.github.io/VidaNova1/", imagem: "assets/img/judo/e2.jpg" },
      { nome: "Judô Randori",         desc: "Site da academia de judô em Guarapuava.", url: "https://jvitorcar.github.io/RandoriSiteV4/", imagem: "assets/img/judo/d3.jpg" },
    ],
  },

  /* -------------------------------------------------------------------- */
  /* 7. WORKSHOPS                                                         */
  /* -------------------------------------------------------------------- */
  workshops: {
    titulo: "Introdução à Fotografia",
    publico: "Alunos do Ensino Médio e Superior",
    texto: "Workshop ministrado sobre os fundamentos da fotografia: composição, enquadramento e linguagem visual, com orientação prática usando os próprios trabalhos como referência.",
    topicos: ["Fundamentos", "Composição", "Enquadramento", "Linguagem visual", "Prática orientada"],
    fotos: [
      { src: "assets/img/workshop/capa.jpg", alt: "João Vitor ministrando o workshop de fotografia", destaque: true },
      { src: "assets/img/workshop/01.jpg",   alt: "Apresentação com fotos projetadas para a turma" },
      { src: "assets/img/workshop/02.jpg",   alt: "Sala do workshop com slide sobre simetria" },
    ],
  },

  /* -------------------------------------------------------------------- */
  /* 8. CONTATO                                                           */
  /* -------------------------------------------------------------------- */
  contato: {
    chamada: "Vamos produzir algo juntos?",
    whatsappNumero: "(42) 99959-2734",
    whatsappLink: "https://wa.me/5542999592734",
    email: "joao_ca1@hotmail.com",
    redes: [
      { nome: "Instagram pessoal",    handle: "@_joaovitor_ca",   url: "https://www.instagram.com/_joaovitor_ca/" },
      { nome: "Instagram fotografia", handle: "@jvitor_fotografia", url: "https://www.instagram.com/jvitor_fotografia/" },
      { nome: "GitHub",               handle: "Jvitorcar",         url: "https://github.com/Jvitorcar" },
    ],
  },
};

/* expõe o conteúdo para o script.js */
window.CONTEUDO = CONTEUDO;

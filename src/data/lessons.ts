
export type LessonType = {
  id: number;
  title: string;
  description: string;
  cover: string;
  videoType: "youtube" | "wistia";
  videoId: string; // for youtube: the id, for wistia: the id
  videoUrl?: string; // for preview/compat
};

export const lessons: LessonType[] = [
  {
    id: 1,
    title: "Como ACABAR com a Lombada de GORDURA Acima da Cicatriz da Cesárea",
    description: "Aprenda técnicas práticas para eliminar a gordura localizada acima da cicatriz da cesárea.",
    cover: "https://i.ibb.co/jkfsM4B6/imagem-gerada.png",
    videoType: "youtube",
    videoId: "e9LVJf6_wlA",
    videoUrl: "https://www.youtube.com/watch?v=e9LVJf6_wlA",
  },
  {
    id: 2,
    title: "Conheça 4 Tipos De BARRIGA e o MELHOR Tratamento Para Cada Uma Delas!",
    description: "Descubra qual é o seu tipo de barriga e como cuidar dela de forma eficaz.",
    cover: "https://i.ibb.co/xSn7nXHv/imagem-gerada-1.png",
    videoType: "youtube",
    videoId: "SmqOR_DgsZA",
    videoUrl: "https://www.youtube.com/watch?v=SmqOR_DgsZA",
  },
  {
    id: 3,
    title: "Como ACABAR com a gordura da barriga em 6 minutos com Massagem Modeladora",
    description: "Aprenda a técnica de massagem modeladora para resultados rápidos!",
    cover: "https://i.ibb.co/gZn1GGn5/imagem-gerada-2.png",
    videoType: "youtube",
    videoId: "ASWNVhhPIr4",
    videoUrl: "https://www.youtube.com/watch?v=ASWNVhhPIr4",
  },
  {
    id: 4,
    title: "Você Consegue Desinchar a Barriga em 7 Dias?",
    description: "Dicas e maneiras simples para desinchar a barriga em uma semana.",
    cover: "https://i.ibb.co/hFmmL9sM/imagem-gerada-3.png",
    videoType: "wistia",
    videoId: "68bopk7w3t",
    videoUrl: "https://fast.wistia.com/embed/medias/68bopk7w3t",
  },
  {
    id: 5,
    title: "Treino de 12 minutos - Seca barriga em casa! (SEM EQUIPAMENTOS)",
    description: "Aula prática de treino rápido para secar a barriga sem sair de casa.",
    cover: "https://i.ibb.co/V02phjbw/imagem-gerada-4.png",
    videoType: "wistia",
    videoId: "kzlfxcc2su",
    videoUrl: "https://fast.wistia.com/embed/medias/kzlfxcc2su",
  },
  {
    id: 6,
    title: "Como ELIMINAR a Pochete! (POUCOS sabem disso)",
    description: "Descubra os segredos para eliminar a pochete abdominal definitivamente.",
    cover: "https://i.ibb.co/ynZy6wpq/imagem-gerada-5.png",
    videoType: "wistia",
    videoId: "s7bsth9e9r",
    videoUrl: "https://fast.wistia.com/embed/medias/s7bsth9e9r",
  },
];

export interface Movie {
  id: string;
  title: string;
  description: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  image: string;
  backdrop?: string;
  type: "movie" | "series";
  episodes?: number;
  seasons?: number;
  maturity: string;
  match?: number;
  trending?: boolean;
  newRelease?: boolean;
}

const placeholderColors = [
  "from-red-900 to-red-700",
  "from-blue-900 to-blue-700",
  "from-purple-900 to-purple-700",
  "from-green-900 to-green-700",
  "from-orange-900 to-orange-700",
  "from-pink-900 to-pink-700",
  "from-teal-900 to-teal-700",
  "from-indigo-900 to-indigo-700",
  "from-amber-900 to-amber-700",
  "from-cyan-900 to-cyan-700",
];

export const getColorForId = (id: string) => {
  const num = parseInt(id) || id.charCodeAt(0);
  return placeholderColors[num % placeholderColors.length];
};

export const allMovies: Movie[] = [
  {
    id: "1", title: "A Última Fronteira", description: "Em um futuro distante, a humanidade luta pela sobrevivência em um planeta hostil. Uma equipe de exploradores descobre um portal que pode salvar a civilização.", year: 2024, rating: 8.7, duration: "2h 18min", genre: ["Ficção Científica", "Ação", "Drama"], image: "", type: "movie", maturity: "16+", match: 97, trending: true, newRelease: true,
  },
  {
    id: "2", title: "Sombras do Passado", description: "Um detetive aposentado é chamado de volta para resolver um caso que assombra sua carreira há 20 anos. A verdade é mais sombria do que ele imaginava.", year: 2024, rating: 8.3, duration: "1h 52min", genre: ["Suspense", "Crime", "Mistério"], image: "", type: "movie", maturity: "14+", match: 92, newRelease: true,
  },
  {
    id: "3", title: "O Reino Esquecido", description: "Uma jovem princesa descobre que seu reino foi amaldiçoado e precisa embarcar numa jornada épica para restaurar a magia perdida.", year: 2023, rating: 7.9, duration: "2h 05min", genre: ["Fantasia", "Aventura"], image: "", type: "movie", maturity: "12+", match: 88,
  },
  {
    id: "4", title: "Código Zero", description: "Hackers descobrem uma conspiração global que ameaça a infraestrutura digital do mundo inteiro. Uma corrida contra o tempo começa.", year: 2024, rating: 8.1, duration: "1h 48min", genre: ["Ação", "Thriller", "Tecnologia"], image: "", type: "movie", maturity: "14+", match: 91, trending: true,
  },
  {
    id: "5", title: "Entre Mundos", description: "Uma série envolvente sobre universos paralelos onde cada escolha cria uma realidade diferente.", year: 2024, rating: 9.1, duration: "5 Temporadas", genre: ["Ficção Científica", "Drama"], image: "", type: "series", seasons: 5, episodes: 48, maturity: "16+", match: 98, trending: true, newRelease: true,
  },
  {
    id: "6", title: "Coração de Ferro", description: "A história real de um atleta que supera todas as adversidades para se tornar campeão mundial.", year: 2023, rating: 8.5, duration: "2h 12min", genre: ["Drama", "Biografia", "Esporte"], image: "", type: "movie", maturity: "12+", match: 93,
  },
  {
    id: "7", title: "Noite Sem Fim", description: "Uma família presa em uma casa durante uma tempestade descobre que não estão sozinhos.", year: 2024, rating: 7.6, duration: "1h 38min", genre: ["Terror", "Suspense"], image: "", type: "movie", maturity: "18+", match: 85, newRelease: true,
  },
  {
    id: "8", title: "A Conspiração", description: "Agentes infiltrados em organizações criminosas descobrem que a linha entre o bem e o mal é mais tênue do que imaginavam.", year: 2023, rating: 8.8, duration: "3 Temporadas", genre: ["Crime", "Drama", "Ação"], image: "", type: "series", seasons: 3, episodes: 30, maturity: "16+", match: 95, trending: true,
  },
  {
    id: "9", title: "Além das Estrelas", description: "Uma jornada épica pelo espaço em busca de um novo lar para a humanidade.", year: 2024, rating: 8.2, duration: "2h 35min", genre: ["Ficção Científica", "Aventura"], image: "", type: "movie", maturity: "12+", match: 89,
  },
  {
    id: "10", title: "O Último Chef", description: "Competição culinária intensa onde chefs de todo o mundo disputam o título supremo.", year: 2024, rating: 7.8, duration: "2 Temporadas", genre: ["Reality", "Culinária"], image: "", type: "series", seasons: 2, episodes: 20, maturity: "L", match: 82,
  },
  {
    id: "11", title: "Resistência", description: "Durante a Segunda Guerra Mundial, um grupo de civis organiza uma rede secreta de resistência.", year: 2023, rating: 8.6, duration: "1h 55min", genre: ["Drama", "História", "Guerra"], image: "", type: "movie", maturity: "14+", match: 94,
  },
  {
    id: "12", title: "Labirinto Digital", description: "Em um mundo dominado pela inteligência artificial, um programador descobre uma falha que pode mudar tudo.", year: 2024, rating: 8.4, duration: "4 Temporadas", genre: ["Ficção Científica", "Thriller"], image: "", type: "series", seasons: 4, episodes: 40, maturity: "14+", match: 90, trending: true,
  },
  {
    id: "13", title: "Risos & Lágrimas", description: "Uma comédia romântica sobre dois estranhos que são forçados a dividir um apartamento por engano.", year: 2024, rating: 7.5, duration: "1h 45min", genre: ["Comédia", "Romance"], image: "", type: "movie", maturity: "12+", match: 86, newRelease: true,
  },
  {
    id: "14", title: "O Protetor", description: "Um ex-agente especial sai da aposentadoria para proteger uma testemunha-chave contra uma organização perigosa.", year: 2023, rating: 8.0, duration: "2h 01min", genre: ["Ação", "Thriller"], image: "", type: "movie", maturity: "16+", match: 87,
  },
  {
    id: "15", title: "Mundos Ocultos", description: "Documentário impressionante que revela os segredos mais profundos dos oceanos e florestas do planeta.", year: 2024, rating: 9.0, duration: "1 Temporada", genre: ["Documentário", "Natureza"], image: "", type: "series", seasons: 1, episodes: 8, maturity: "L", match: 96,
  },
  {
    id: "16", title: "Fúria Silenciosa", description: "Um lutador de artes marciais busca vingança após sua família ser destruída por um cartel.", year: 2024, rating: 7.7, duration: "1h 50min", genre: ["Ação", "Drama"], image: "", type: "movie", maturity: "18+", match: 84,
  },
];

export const trendingMovies = allMovies.filter(m => m.trending);
export const newReleases = allMovies.filter(m => m.newRelease);
export const movies = allMovies.filter(m => m.type === "movie");
export const series = allMovies.filter(m => m.type === "series");
export const actionMovies = allMovies.filter(m => m.genre.includes("Ação"));
export const dramaMovies = allMovies.filter(m => m.genre.includes("Drama"));
export const scifiMovies = allMovies.filter(m => m.genre.includes("Ficção Científica"));

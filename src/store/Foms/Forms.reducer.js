
// 1º indice: Qual o formulário
// 2º indice: Qual página do formulário
// 3º indice: Qual a questão específica

export const forms = [
  {
    title: "Sumário Executivo",
    description: "Organize as principais definições do seu negócio!",
    totalPages: 10,
    completedPages: 1,
    pages: [
      [
        {
          textareaQuestion: "Descrição do que é o negócio?",
          answer: ""
        },
        {
          textareaQuestion: "Quais os principais produtos e/ou serviços?",
          answer: ""
        },
        {
          inputQuestion: "Qual o montante de capital a ser investido?",
          symbol: "R$",
          answer: ""
        },
      ],
      [
        {
          textareaQuestion: "Descrição do que é o negócio?",
          answer: ""
        },
        {
          textareaQuestion: "Quais os principais produtos e/ou serviços?",
          answer: ""
        },
        {
          inputQuestion: "Qual o montante de capital a ser investido?",
          symbol: "R$",
          answer: ""
        },
      ],
    ],
  },
  {
    title: "Análise de Mercado",
    description:
      "Identifique quem são seus fornecedores, clientes e consumidores!",
    totalPages: 10,
    completedPages: 2,
    pages: [
      [
        {
          textareaQuestion: "Descrição do que é o negócio?",
          answer: ""
        },
        {
          textareaQuestion: "Quais os principais produtos e/ou serviços?",
          answer: ""
        },
        {
          inputQuestion: "Qual o montante de capital a ser investido?",
          symbol: "R$",
          answer: ""
        },
      ],
    ],
  },
  {
    title: "Plano de Marketing",
    description:
      "Defina as melhores estratégias para alcançar os seus clientes!",
    totalPages: 10,
    completedPages: 3,
    pages: [],
  },
  {
    title: "Processo Operacional",
    description: "Descreva seu processo de Produção!",
    totalPages: 10,
    completedPages: 4,
    pages: [],
  },
  {
    title: "Análise Financeira",
    description:
      "Vamos falar de finanças! Entenda o valor do seu produto ou serviço!",
    totalPages: 10,
    completedPages: 5,
    pages: [],
  },
  {
    title: "Construção de cenário",
    description:
      "Simule situações que podem deixar a sua empresa em situação desfavorável!",
    totalPages: 10,
    completedPages: 6,
    pages: [],
  },
];


export default function(state = forms, action) {
  switch(action.type) {
    case 'ALTER_FORMS':
      state[action.payload.indexes[0]].pages
        [action.payload.indexes[1]]
        [action.payload.indexes[2]]
      .answer = action.payload.value;

      return state;

    default:
      return state;
  }
}
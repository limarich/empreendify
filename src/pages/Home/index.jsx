import { MenuCard } from "../../components/MenuCard";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { Container } from "../../components/Container";

// assets
import ativos from "../../assets/Outros/ativos-intangiveis.jpg";
import analise from "../../assets/Outros/analise-do-perfil.jpg";
import cuidados from "../../assets/Outros/cuidados.jpg";
import financiamento from "../../assets/Outros/formas-de-financiamento.jpg";
import empreender from "../../assets/Outros/o-que-e-empreender.jpg";
import empresas from "../../assets/Outros/tipos-de-empresas.jpg";
import tramites from "../../assets/Outros/tramites.jpg";
import voceSabia from "../../assets/Outros/voce-sabia.jpg";

export const options = [
  {
    img: empreender,
    title: "O que é empreender?",
    description:
      "Desbravando Fronteiras: O Significado e a Jornada do Empreendedorismo",
    activeButton: false,
    text: `Empreender é ousar e criar um novo negócio ou trazer mudança ao que já é existente no mercado.
Para aceitar o desafio de empreender é imprescindível coragem para se correr riscos e cada vez mais estar aberto às mudanças que esse mundo empresarial impõe e “INOVAR” sempre. 
`,
  },
  {
    img: analise,
    title: "Análise do Perfil de Empreendedor",
    description:
      "Descubra Seu DNA Empreendedor: Uma Análise Profunda de Suas Habilidades e Potencial",
    activeButton: true,
    text: `Aqui você responderá algumas perguntas e o resultado dirá se você já está pronto para empreender ou se precisará desenvolver algumas competências empreendedoras antes de abrir seu próprio negócio.

Vamos começar?
`,
  },
  {
    img: empresas,
    title: "Tipos de Empresas",
    description:
      "Entendendo a Diversidade Empresarial: Tamanho, Classificação e Impostos",
    activeButton: false,
    text: `TIPOS DE EMPRESAS

Para abertura de um negócio o empreendedor precisa definir o tipo de empresa que quer e que pode abrir de acordo com seu poder aquisitivo. A empresa pode ser individua ou em sociedade. Vamos conhecer agora esses tipos de empresas, porte e regime tributário.


•	INDIVIDUAL
Empreendedor Individual (EI)
Microempreendedor Individual (MEI)


•	EM SOCIEDADE
Sociedade limitada unipessoal (SLU)
Sociedade empresária limitada (LTDA)
Sociedade simples (SS)
Sociedade anônima (SA)


•	PORTE E REGIME TRIBUTÁRIO

Porte:
Microempreendedor individual (MEI);
Microempresa (ME);
Empresa de pequeno porte (EPP);
Empresa de médio porte;
Grande empresa.

Regime tributário
Simples Nacional
Lucro Presumido 
Lucro Real
`,
  },
  {
    img: tramites,
    title: "Trâmites para abertura de uma empresa",
    description:
      "Passos Fundamentais: Da Ideia ao Registro Legal - Abrindo Sua Empresa",
    activeButton: false,
    text: `Para abertura de uma empresa o empreendedor precisa compreender que um de seus maiores deveres será cumprir com as obrigações fiscais. Para caminhar de forma mais segura é importante este acompanhamento contido nesta metodologia para facilitar todo o processo. Obs.: Dependendo da empresa é imprescindível contar com o auxílio de um contador.

Para abrir uma MEI, o empreendedor usará o site: portaldoempreendedor.gov.br. O Micro Empreendedor Individual (MEI) tem todo respaldo do governo para operar de forma segura e alinhada com as exigências de fisco.

Para quem tem pretensão de abrir uma empresa com natureza diferente, isso ocorre pela JUNTA COMERCIAL de cada estado e, cada estado, possui suas diretrizes para abertura de empresa, alguns estados fazem esse serviço, quase que, cem por cento pelo site da junta comercial e outros de forma híbrida.

No caso de Pernambuco, por exemplo, todos os requerimentos são realizados pelo site da junta comercial, sendo mais rápido o processo de abertura de empresa.

Antes de fazer esse processo na junta que realiza os serviços on-line ou de forma híbrida, o futuro empreendedor vai precisar de uma “CERTIFICADORA DIGITAL”. Por meio dela, serão assinados os documentos necessários de forma digital para prosseguimento de todo o processo.
`,
  },
  {
    img: financiamento,
    title: "Formas de Financiamento",
    description:
      "Viabilizando Sonhos: Estratégias Inteligentes de Financiamento Empresarial",
    activeButton: false,
    text: `Muitos quando pensam em abrir seu próprio negócio, de forma imediata, cogitam se desfazerem de algum bem material como automóvel e imóvel ou usar as economias da família.

O ideal é buscar formas de Financiamento que não comprometam seu capital pessoal e familiar de forma indevida.

Aqui apresentaremos algumas formas de financiamento que te proporcionarão o crédito necessário para a abertura de seu empreendimento.

1. Bancos e financeiras:
   Esta forma de financiamento é bastante usada, porém, o empreendedor precisará ser bastante diligente porque este financiador parcelará todo o capital solicitado e se não se atentar em quitar fielmente este, pode comprometer o andamento empresarial. Dependendo do negócio, esta não é uma boa sugestão de financiamento.

2. Sociedade:
   Para abertura do tão sonhado negócio, você pode contar com uma parceria! Isso mesmo! Um Sócio! Esta é a forma de você não precisar se comprometer com uma empresa financiadora, se abstendo de pagar os juros decorrentes desse formato. Ainda, quando vai se abrir uma sociedade é importante buscar uma parceria com a qual você se relacionará bem, saber se ele possui alguma restrição que possa atrapalhar o andamento da empresa, destacando ainda a transparência que deve existir entre as partes, inclusive no que se refere a questões financeiras da empresa e demais questões e decisões que a comprometam. Isso deve estar bem alinhado em contrato social.

3. Investidor Anjo:
   Ao obter o investimento de um investidor anjo, o empreendedor terá uma grande vantagem porque este não se torna um sócio da empresa. Em contrapartida, assegurado por lei, o investidor anjo tem direito a 50% da lucratividade da empresa pelo período de cinco anos.
`,
  },
  {
    img: ativos,
    title: "Ativos intangíveis",
    description: "O Valor Oculto: Explorando o Poder dos Ativos Intangíveis",
    activeButton: false,
    text: `Ao abrir sua empresa você começa a gerar alguns ativos como, por exemplo, a MARCA da sua empresa. A identificação visual do seu negócio é uma propriedade intelectual da sua empresa e, por isso, precisa ser protegida. Assim você evita futuros problemas. Um deles é ter sua marca tirada de sua propriedade.

Então? Você já possui uma marca?
`,
  },
  {
    img: cuidados,
    title: "Cuidado!",
    description:
      "Manutenção do Potencial Empreendedor: Cuidados Essenciais para o Desenvolvimento",
    activeButton: false,
    text: `• O proprietário de uma empresa não deve fazer retiradas indevidas para pagamento de contas pessoais. Deve-se estabelecer a remuneração do empresário, “PROLABORE” para se evitar transtornos futuramente. Importante destacar que se for uma empresa em sociedade o sócio só terá prolabore se desempenhar alguma atividade na empresa, se não, receberá por distribuição de lucro.

• Se você vai abrir uma empresa em sociedade, precisará ter o cuidado de saber se seu sócio possui alguma restrição que o impedirá de assumir esse papel. É importante a diligência nesse aspecto, para não atravancar o andamento da empresa.
`,
  },
  {
    img: voceSabia,
    title: "PLANO DE AÇÃO 5W2H",
    description: "",
    activeButton: false,
    text: `O plano de ação 5W2H é uma ferramenta de gestão da qualidade. Nessa matriz são detalhadas quais serão as atividades, os responsáveis pela execução, prazos de cumprimento e recursos financeiros a serem usados. O quadro do 5W2H é formado por:

What - O que deve ser feito?
Why - Por que deve ser implementado?
Who - Quem é o responsável pela ação?
Where - Onde deve ser executado?
When - Quando deve ser implementado?
How - Como deve ser conduzido?
How Much - Quanto vai custar a implementação?

Assim, esta metodologia ajudará no planejamento. Nele será detalhado a ordem das atividades para a criação da empresa como: Análise SWOT, Canvas, Plano de Negócio e demais.

PDF 5W2H (com exemplificação)
`,
  },
  {
    img: voceSabia,
    title: "MATRIZ SWOT",
    description: "",
    activeButton: false,
    text: `É outra ferramenta de gestão da qualidade, uma das mais utilizadas em empresas de diversos países e serve para fazer uma análise de ambiente interna e externa. 

A análise SWOT é composta por quatro partes, essas que formam o acrônimo SWOT: (Strengths, Weaknesses, Opportunities, Threats). Significam respectivamente: força, fraqueza, oportunidade e ameaça. Sendo conhecida também por matriz FOFA, o acrônimo em português.

Sua construção deixa evidente de forma bastante clara o que pode ser favorável ou comprometedor para o desenvolvimento do negócio no local em que ele se encontra.
`,
  },
  {
    img: voceSabia,
    title: "BUSINESS MODEL CANVAS",
    description: "(Modelo de Negócio)",
    activeButton: false,
    text: `O modelo de negócio tem por finalidade expor a ideia de criação de um negócio ou a inovação em um já existente de forma rápida, eficiente e com grande precisão. Usando esta ferramenta, que também é bastante utilizada no mundo inteiro, o empreendedor poderá apresentar sua proposta de valor de forma bastante objetiva e clara, com grande poder de convencimento. Os campos preenchidos nesse modelo de negócio são:

1. PARCERIAS CHAVE 
2. ATIVIDADES CHAVE
3. RECURSOS CHAVE
4. PROPOSTA DE VALOR 
5. RELACIONAMENTO COM CLIENTE
6. CANAIS 
7. SEGMENTO DE CLIENTES 
8. ESTRUTURA DE CUSTOS 
9. FONTES DE RECEITA
`,
  },
  {
    img: voceSabia,
    title: "Você Sabia?",
    description: "",
    activeButton: false,
    text: `A metodologia japonesa 5S, conhecida também como os cinco sensos podem ajudar na organização de sua empresa, fazendo com que sua equipe trabalhe de forma mais eficiente e prazerosa?   

O Estoque de sua empresa é dinheiro parado, é como se fosse uma conta poupança bancaria dentro de sua empresa. Por isso, todo cuidado é necessário. Sabia que existem ferramentas próprias para a gestão de seu estoque? Essas metodologias ajudarão no posicionamento da mercadoria por solicitação de demanda e facilitarão o relacionamento das partes no armazenamento: recursos materiais e humanos.

`,
  },
  {
    img: voceSabia,
    title: "PRONTO PARA CRIAR SUA EMPRESA?",
    description: "",
    activeButton: false,
    text: `Para a criação de uma empresa o mais importante é PLANEJAMENTO. Por isso, é necessário, antes da abertura do tão sonhado negócio, estabelecer as etapas que antecedem esse propósito em um PLANO DE AÇÃO. Neste plano de ação estarão designadas as atividades que deverão ser feitas e seu respectivo tempo de realização. 
`,
  },
];

export const Home = () => {
  return (
    <Container>
      <section id="home">
        <SectionHeader
          title={"Esse é o pontapé inicial para criação da sua empresa 🙂"}
          description={
            "Desvendando seu Potencial Empreendedor: O Primeiro Passo Rumo à Sua Empresa dos Sonhos"
          }
        />
        <div className="menu-card-options">
          {options &&
            options.map((option, index) => (
              <MenuCard
                key={index}
                img={option.img}
                title={option.title}
                description={option.description}
                url={`/home/${index + 1}`}
                activeButton={option.activeButton}
              />
            ))}
        </div>
      </section>
    </Container>
  );
};

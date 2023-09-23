import { MenuCard } from "../../components/MenuCard";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { Container } from "../../components/Container";

// assets
import imageCard1 from "../../assets/card-img1.png";
import imageCard2 from "../../assets/card-img2.png";
import imageCard3 from "../../assets/card-img3.png";
import imageCard4 from "../../assets/card-img4.png";
import imageCard5 from "../../assets/card-img5.png";
import imageCard6 from "../../assets/card-img6.png";
import imageCard7 from "../../assets/card-img7.png";

export const options = [
  {
    img: imageCard1,
    title: "O que é empreender?",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: false,
    text: 
      `O Que É Empreender: Desbravando o Mundo dos Negócios

      ---
      
      O empreendedorismo é muito mais do que um simples termo do mundo dos negócios; é uma abordagem de vida, uma jornada de autodescoberta e uma força motriz que impulsiona a inovação e o progresso. Para muitos, o ato de empreender é uma experiência transformadora que transcende a criação de empresas e se estende à construção de sonhos e à realização de aspirações pessoais. Neste artigo, exploraremos o significado profundo de "o que é empreender" e como essa atividade pode moldar vidas e comunidades de maneira única.
      
      ### Definindo o Empreendedorismo
      
      Empreender é, essencialmente, a arte de identificar oportunidades e criar soluções para atender às necessidades do mercado. Pode se manifestar de várias formas, desde o lançamento de uma startup de tecnologia revolucionária até a abertura de uma pequena padaria local que se destaca pelo seu pão artesanal. O empreendedorismo não é restrito por tamanho, setor ou escopo; é uma mentalidade.
      
      Um empreendedor é alguém que busca constantemente maneiras de inovar, resolver problemas e, por fim, fazer a diferença. Eles estão dispostos a assumir riscos calculados, aprender com os fracassos e persistir mesmo diante das adversidades. Ser empreendedor é abraçar a incerteza com confiança, acreditando que cada desafio é uma oportunidade disfarçada.
      
      ### Empreender é Empoderamento
      
      Uma das facetas mais empolgantes do empreendedorismo é o poder que ele concede às pessoas. Torna possível que indivíduos transformem suas ideias em realidade e sigam seus próprios caminhos. O empreendedorismo empodera as pessoas a serem autônomas, criativas e a se tornarem líderes em seus campos escolhidos.
      
      Além disso, o empreendedorismo não conhece fronteiras. Qualquer um, independentemente de sua idade, gênero, formação acadêmica ou origem, pode se tornar um empreendedor de sucesso. Essa inclusividade é um dos aspectos mais inspiradores do empreendedorismo moderno.
      
      ### Impacto na Sociedade
      
      Empreender vai além do benefício pessoal; ele também tem um impacto profundo na sociedade. Muitas das inovações que transformaram nossas vidas foram trazidas à existência por empreendedores visionários. Desde a revolução tecnológica até avanços em medicina e educação, empreendedores desempenham um papel fundamental na formação do nosso mundo.
      
      Além disso, os negócios fundados por empreendedores frequentemente servem como catalisadores para o crescimento econômico e a criação de empregos. Eles contribuem para a vitalidade das comunidades, promovem a diversidade e estimulam a competição saudável, o que, por sua vez, leva à melhoria contínua dos produtos e serviços.
      
      ### Conclusão
      
      Em resumo, empreender é mais do que apenas criar empresas; é uma mentalidade, um estilo de vida e uma força motriz para a mudança. Envolve coragem, criatividade, resiliência e um compromisso inabalável com a busca de oportunidades e a resolução de problemas. Empreender não é apenas sobre o que fazemos, mas também sobre como moldamos o nosso mundo e inspiramos outros ao longo do caminho.
      
      Se você já é um empreendedor ou aspirante a empreendedor, lembre-se de que sua jornada é única e valiosa. Continue buscando seu propósito, inovando e impactando positivamente a sociedade. E se você ainda não deu o primeiro passo, saiba que o mundo do empreendedorismo está aberto para todos os que estão dispostos a sonhar, ousar e agir.`,
  },
  {
    img: imageCard2,
    title: "Análise do Perfil de Empreendedor",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: true,
    text: '',
  },
  {
    img: imageCard3,
    title: "Tipos de Empresas, Porte e Regime Tributário",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: false,
    text: 
      `Tipos de Empresas, Porte e Regime Tributário: Entendendo as Complexidades do Mundo Empresarial

      ---
      
      O universo empresarial é diversificado e complexo, abrigando uma ampla variedade de tipos de empresas, cada uma com suas características únicas. Além disso, o porte da empresa e o regime tributário adotado são fatores cruciais que influenciam a maneira como um negócio opera e paga impostos. Neste artigo, vamos explorar os principais tipos de empresas, considerar como o porte afeta a estrutura e discutir os diferentes regimes tributários disponíveis.
      
      ### Tipos de Empresas
      
      1. **Empresário Individual (EI):** O empresário individual é a forma mais simples de empresa, geralmente composta por uma única pessoa que é responsável por todas as operações e dívidas da empresa. É uma escolha popular para pequenos negócios, mas também apresenta responsabilidade ilimitada, o que significa que o patrimônio pessoal do empresário pode ser usado para quitar dívidas da empresa.
      
      2. **Microempreendedor Individual (MEI):** O MEI é uma categoria específica para pequenos negócios que faturam até um determinado limite anual. Oferece benefícios fiscais simplificados e é popular entre autônomos e pequenos empreendedores.
      
      3. **Sociedade Limitada (Ltda):** As sociedades limitadas são estruturadas por dois ou mais sócios e oferecem limitação de responsabilidade, o que protege o patrimônio pessoal dos sócios. Cada sócio investe com uma parcela do capital e compartilha as responsabilidades e lucros.
      
      4. **Sociedade Anônima (SA):** As sociedades anônimas são frequentemente usadas por empresas de grande porte que desejam levantar capital por meio da venda de ações. Elas têm uma estrutura mais complexa, com acionistas, diretores e conselhos de administração.
      
      5. **Empresas Familiares:** Muitos negócios são administrados por famílias e, embora possam adotar diferentes estruturas legais, são caracterizados pela propriedade e gestão por membros da mesma família.
      
      ### Porte da Empresa
      
      O porte de uma empresa geralmente é classificado com base no seu faturamento anual e número de funcionários. Isso influencia não apenas a estrutura organizacional, mas também os requisitos regulatórios e tributários. As categorias comuns de porte de empresa incluem microempresa, pequena empresa, média empresa e grande empresa.
      
      ### Regime Tributário
      
      Os regimes tributários determinam como a empresa calculará e pagará seus impostos. No Brasil, os principais regimes tributários são:
      
      1. **Simples Nacional:** Um regime simplificado de tributação para micro e pequenas empresas que unifica vários impostos em uma única guia de pagamento. É conhecido por sua simplicidade, mas pode não ser vantajoso para todas as empresas, dependendo do faturamento e atividades.
      
      2. **Lucro Presumido:** Neste regime, a empresa presume um lucro com base em sua atividade e aplica uma alíquota de imposto sobre essa margem de lucro. É comum para empresas de médio porte.
      
      3. **Lucro Real:** Empresas que adotam o Lucro Real calculam os impostos com base nos lucros efetivos. É obrigatório para empresas com faturamento acima de um determinado limite ou que possuam atividades específicas.
      
      4. **Regime Especial:** Algumas empresas podem se beneficiar de regimes tributários especiais de acordo com suas atividades, como o Regime de Tributação Unificada (RTU) para empresas exportadoras.
      
      A escolha do regime tributário depende do porte da empresa, do tipo de atividade, da estrutura de custos e da complexidade da contabilidade.
      
      Em resumo, o mundo empresarial é diversificado, e a escolha do tipo de empresa, porte e regime tributário é fundamental para o sucesso e a conformidade regulatória de qualquer empreendimento. Cada opção tem suas vantagens e desafios, e é importante buscar orientação profissional para tomar decisões informadas que atendam às necessidades específicas do seu negócio. A compreensão desses aspectos é essencial para uma gestão eficaz e para o alcance dos objetivos empresariais.`,
  },
  {
    img: imageCard4,
    title: "Trâmites para abertura de uma empresa",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: false,
    text:
      `Desvendando os Trâmites para a Abertura de uma Empresa: Um Guia Completo

      ---
      
      A decisão de abrir uma empresa é empolgante e cheia de promessas, mas também envolve uma série de trâmites e procedimentos burocráticos que podem parecer desafiadores à primeira vista. No entanto, com o conhecimento adequado e um plano bem elaborado, você pode navegar com sucesso por esse processo. Neste guia completo, vamos explorar os principais trâmites para a abertura de uma empresa e ajudá-lo a dar os primeiros passos no mundo do empreendedorismo.
      
      ### 1. Planejamento e Pesquisa
      
      Antes de qualquer outra coisa, é crucial definir claramente o tipo de negócio que você deseja abrir. Isso inclui a escolha do segmento, público-alvo, localização e estrutura legal. Realize uma pesquisa de mercado para avaliar a demanda pelo seu produto ou serviço, bem como para identificar concorrentes e oportunidades.
      
      ### 2. Registro de Nome e Marca
      
      Escolher um nome comercial único e fazer o registro desse nome é um passo essencial. Além disso, considere registrar sua marca, caso aplique, para proteger sua identidade comercial e evitar futuros conflitos legais.
      
      ### 3. Escolha da Estrutura Jurídica
      
      A estrutura jurídica da sua empresa terá implicações significativas em termos de responsabilidade legal e tributação. As opções comuns incluem Empresário Individual (EI), Microempreendedor Individual (MEI), Sociedade Limitada (Ltda) e Sociedade Anônima (SA). Escolha a estrutura que melhor se adapte ao seu modelo de negócios.
      
      ### 4. Registro na Junta Comercial
      
      Para formalizar legalmente sua empresa, você deve registrar-se na Junta Comercial do seu estado. Esse processo envolve a apresentação de documentos, como contrato social ou estatuto, e o pagamento das taxas de registro.
      
      ### 5. Obtenção do CNPJ
      
      O Cadastro Nacional da Pessoa Jurídica (CNPJ) é o número de identificação fiscal da sua empresa. É necessário para abrir uma conta bancária comercial, emitir notas fiscais e cumprir obrigações tributárias. Você pode obter o CNPJ por meio do site da Receita Federal.
      
      ### 6. Alvará de Funcionamento
      
      Dependendo do seu ramo de atividade e localização, você pode precisar de um alvará de funcionamento municipal. Verifique as regulamentações locais e solicite o alvará junto à prefeitura da sua cidade.
      
      ### 7. Inscrição Estadual
      
      Se o seu negócio envolver vendas de produtos ou serviços sujeitos à cobrança do ICMS (Imposto sobre Circulação de Mercadorias e Serviços), será necessário obter uma Inscrição Estadual junto à Secretaria da Fazenda estadual.
      
      ### 8. Licenças e Autorizações Especiais
      
      Algumas atividades empresariais requerem licenças ou autorizações especiais, como as relacionadas à saúde, alimentação, segurança ou meio ambiente. Certifique-se de verificar se o seu negócio requer essas licenças específicas.
      
      ### 9. Contabilidade e Obrigações Fiscais
      
      Contratar um contador é uma etapa fundamental para garantir que sua empresa cumpra suas obrigações fiscais e contábeis. Isso inclui a preparação e o pagamento de impostos, a manutenção de registros financeiros e a elaboração de relatórios financeiros.
      
      ### 10. Recursos Humanos e Registros de Funcionários
      
      Se você planeja contratar funcionários, deve registrar sua empresa junto ao Ministério do Trabalho e Emprego (MTE) e cumprir as obrigações trabalhistas, como o pagamento de salários e benefícios.
      
      Lembre-se de que os trâmites para abertura de uma empresa podem variar de acordo com o país e a região, e é fundamental consultar as autoridades locais e profissionais especializados para garantir que você esteja cumprindo todas as exigências legais. Com planejamento e paciência, você estará bem encaminhado para transformar seu sonho empresarial em realidade.`,
  },
  {
    img: imageCard5,
    title: "Formas de Financiamento",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: false,
    text:
      `Explorando as Diferentes Formas de Financiamento: Escolhendo a Melhor Opção para o Seu Projeto

      ---
      
      Seja você um empreendedor em busca de capital para iniciar um novo negócio, um proprietário de uma pequena empresa procurando expandir suas operações ou alguém que deseja concretizar um projeto pessoal, entender as diversas formas de financiamento disponíveis é fundamental. Neste artigo, vamos explorar algumas das principais opções de financiamento que podem ajudá-lo a dar vida aos seus planos.
      
      ### 1. **Financiamento Próprio**
      
      O financiamento próprio envolve o uso de seus próprios recursos financeiros para financiar seu projeto. Isso pode incluir suas economias pessoais, investimentos, ou mesmo a venda de ativos. Uma vantagem do financiamento próprio é a independência financeira, mas também envolve riscos pessoais significativos.
      
      ### 2. **Empréstimos Bancários**
      
      Os empréstimos bancários são uma fonte comum de financiamento para empresas e projetos pessoais. Eles podem ser obtidos por meio de instituições financeiras tradicionais, como bancos, e são geralmente estruturados com taxas de juros e prazos específicos. Os empréstimos podem ser garantidos (com garantias) ou não garantidos (baseados na credibilidade do mutuário).
      
      ### 3. **Investidores Anjo**
      
      Os investidores anjo são indivíduos ou grupos de investidores que fornecem capital em troca de participação acionária ou participação nos lucros de uma empresa. Além do financiamento, eles também podem oferecer orientação e networking valiosos.
      
      ### 4. **Capital de Risco (Venture Capital)**
      
      O capital de risco é uma forma de financiamento para startups e empresas em crescimento. Investidores de capital de risco fornecem fundos em troca de participação acionária significativa e muitas vezes buscam retornos substanciais a longo prazo.
      
      ### 5. **Financiamento Coletivo (Crowdfunding)**
      
      O crowdfunding é uma maneira moderna de financiar projetos por meio da contribuição de várias pessoas pela internet. Plataformas como Kickstarter e Indiegogo permitem que criadores de projetos arrecadem dinheiro em troca de recompensas ou participação nos lucros.
      
      ### 6. **Empréstimos Peer-to-Peer (P2P)**
      
      Os empréstimos P2P conectam mutuários a investidores individuais por meio de plataformas online. Os empréstimos P2P podem oferecer taxas de juros competitivas e flexibilidade em termos de empréstimos pessoais ou empresariais.
      
      ### 7. **Subsídios e Incentivos Governamentais**
      
      Em muitos países, governos locais, estaduais e federais oferecem subsídios e incentivos fiscais para apoiar o crescimento de determinados setores ou promover atividades específicas. Esses programas podem variar amplamente, e é importante verificar se você se qualifica para tais benefícios.
      
      ### 8. **Financiamento por Fornecedores e Clientes**
      
      Negociar termos de pagamento com fornecedores ou obter pré-pagamentos de clientes pode fornecer financiamento direto para o seu negócio. Essa abordagem pode ajudar a gerenciar fluxos de caixa e melhorar a estabilidade financeira.
      
      ### 9. **Linhas de Crédito Comerciais**
      
      Linhas de crédito comerciais são créditos rotativos fornecidos por instituições financeiras para atender às necessidades de capital de giro de uma empresa. Eles são flexíveis e permitem que você retire e pague conforme necessário.
      
      A escolha da forma de financiamento certa depende da sua situação financeira, do estágio do seu projeto e das suas metas a longo prazo. Muitas vezes, uma combinação de várias fontes de financiamento pode ser a estratégia mais eficaz. Lembre-se de que cada opção tem seus próprios prós e contras, e é importante avaliar cuidadosamente os termos, custos e impactos de longo prazo antes de tomar uma decisão. Independentemente de qual opção você escolher, o financiamento adequado pode ser o catalisador que transforma suas ideias em realidade.`,
  },
  {
    img: imageCard6,
    title: "Ativos intangíveis",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: false,
    text:
      `O Valor Inestimável dos Ativos Intangíveis nos Negócios

      ---
      
      Quando falamos sobre ativos nos negócios, muitos de nós imediatamente pensam em bens físicos, como propriedades, estoques ou equipamentos. No entanto, há um tipo de ativo que desafia a tradicional percepção de tangibilidade e se torna cada vez mais valioso nos cenários empresariais modernos: os ativos intangíveis. Neste artigo, vamos explorar o que são ativos intangíveis e por que eles desempenham um papel fundamental no sucesso e na valorização das empresas.
      
      ### Definindo Ativos Intangíveis
      
      Ativos intangíveis são recursos valiosos que uma empresa possui, mas que não têm presença física. Eles incluem elementos como:
      
      1. **Propriedade Intelectual:** Isso abrange patentes, marcas registradas, direitos autorais e segredos comerciais. Esses ativos protegem a propriedade intelectual da empresa e podem ser explorados comercialmente.
      
      2. **Reputação e Marca:** A reputação da empresa, sua imagem de marca e o reconhecimento da marca são ativos intangíveis que podem afetar diretamente a preferência do consumidor e a participação no mercado.
      
      3. **Relações com Clientes e Fornecedores:** Relacionamentos sólidos com clientes, fornecedores e parceiros de negócios podem ser inestimáveis. Eles podem levar a parcerias de longo prazo, fidelização de clientes e maior estabilidade operacional.
      
      4. **Tecnologia e Know-how:** O conhecimento técnico, a experiência da equipe e as tecnologias internas são ativos intangíveis que impulsionam a inovação e a eficiência.
      
      5. **Dados e Informações:** Dados de clientes, análises de mercado e insights estratégicos podem ser ativos valiosos que orientam a tomada de decisões e o desenvolvimento de produtos.
      
      ### O Valor dos Ativos Intangíveis
      
      Os ativos intangíveis desempenham um papel vital nos negócios por várias razões:
      
      1. **Diferenciação Competitiva:** Ter uma marca forte e uma reputação sólida pode diferenciar uma empresa em um mercado saturado, atraindo clientes fiéis.
      
      2. **Inovação e Crescimento:** O know-how tecnológico e a propriedade intelectual impulsionam a inovação, permitindo que as empresas criem produtos e serviços únicos e busquem oportunidades de crescimento.
      
      3. **Valor de Mercado:** Empresas com ativos intangíveis bem desenvolvidos muitas vezes têm um valor de mercado mais alto, o que pode atrair investidores e financiamento.
      
      4. **Geração de Receita:** Propriedade intelectual, como patentes e direitos autorais, pode gerar receita através de licenciamento ou venda.
      
      5. **Resiliência Empresarial:** Ter relacionamentos sólidos e dados valiosos pode ajudar as empresas a enfrentar desafios econômicos e adversidades.
      
      ### Gerenciamento de Ativos Intangíveis
      
      Para maximizar o valor dos ativos intangíveis, as empresas devem adotar uma abordagem estratégica de gestão. Isso envolve:
      
      1. **Identificação e Avaliação:** Identificar e avaliar todos os ativos intangíveis da empresa, atribuindo valores quando possível.
      
      2. **Proteção Legal:** Garantir que a propriedade intelectual esteja protegida por meio de patentes, marcas registradas e direitos autorais.
      
      3. **Desenvolvimento Contínuo:** Investir na construção e no aprimoramento dos ativos intangíveis, como desenvolvimento de marca, inovação e gestão de relacionamentos.
      
      4. **Monitoramento e Avaliação:** Acompanhar regularmente o desempenho dos ativos intangíveis e ajustar as estratégias conforme necessário.
      
      5. **Comunicação Estratégica:** Comunicar efetivamente a presença e o valor dos ativos intangíveis para partes interessadas internas e externas.
      
      Em resumo, os ativos intangíveis não são apenas parte integrante do mundo dos negócios modernos, mas também podem ser os impulsionadores críticos do sucesso empresarial. Reconhecer, proteger e otimizar esses ativos é essencial para construir uma empresa forte, competitiva e resiliente no cenário empresarial atual.`,
  },
  {
    img: imageCard7,
    title: "Cuidados!",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    activeButton: false,
    text:
      `Cuidados Essenciais nos Negócios: O Caminho para o Sucesso Empresarial

      ---
      
      Abrir e gerenciar um negócio pode ser uma jornada emocionante e gratificante, mas também envolve uma série de desafios e riscos. Para garantir o sucesso a longo prazo, é fundamental adotar uma abordagem cuidadosa e estratégica em todas as fases da sua empresa. Neste artigo, vamos explorar alguns dos cuidados essenciais nos negócios que podem ajudá-lo a prosperar e alcançar seus objetivos empresariais.
      
      ### 1. **Planejamento Sólido**
      
      Antes de iniciar qualquer empreendimento, é vital criar um plano de negócios detalhado. Isso inclui definir sua visão, missão e metas claras, bem como identificar seu público-alvo, concorrentes e estratégias de marketing. O planejamento também envolve a projeção de fluxo de caixa e a análise de custos e receitas para garantir a sustentabilidade financeira.
      
      ### 2. **Estudo de Mercado**
      
      Conhecer o mercado em que você atua é essencial. Faça pesquisas de mercado para entender as tendências, as demandas dos clientes e a concorrência. Esse conhecimento ajudará a tomar decisões informadas e a adaptar suas estratégias de acordo com as necessidades do mercado.
      
      ### 3. **Gestão Financeira Eficiente**
      
      Manter um controle financeiro rigoroso é crucial. Isso inclui a criação de um orçamento, o acompanhamento de despesas e receitas, a gestão de fluxo de caixa e a busca de financiamento quando necessário. A gestão financeira eficiente garante que sua empresa permaneça financeiramente saudável.
      
      ### 4. **Atendimento ao Cliente de Qualidade**
      
      A satisfação do cliente é fundamental para o sucesso a longo prazo. Invista no atendimento ao cliente, esteja disponível para ouvir feedback e busque constantemente maneiras de melhorar a experiência do cliente. Clientes satisfeitos são mais propensos a retornar e recomendar sua empresa.
      
      ### 5. **Gestão de Pessoas**
      
      A equipe é um dos ativos mais valiosos de qualquer empresa. Contrate, treine e retenha talentos que compartilhem da visão e dos valores da sua empresa. Uma equipe motivada e bem gerenciada pode impulsionar o crescimento e a inovação.
      
      ### 6. **Compliance e Legalidade**
      
      Cumprir as leis e regulamentos é fundamental para evitar problemas legais e manter uma reputação sólida. Isso inclui questões tributárias, trabalhistas e regulamentações específicas do setor. Consultar profissionais jurídicos e contábeis é aconselhável para garantir o cumprimento adequado.
      
      ### 7. **Inovação e Adaptação**
      
      O ambiente de negócios está em constante evolução. Esteja disposto a inovar e adaptar-se às mudanças do mercado. Mantenha-se atualizado com as tendências e tecnologias emergentes e esteja preparado para ajustar suas estratégias conforme necessário.
      
      ### 8. **Plano de Continuidade**
      
      Tenha um plano de continuidade de negócios em vigor para enfrentar desafios imprevistos, como crises econômicas, desastres naturais ou pandemias. Isso ajuda a manter a resiliência e a sobrevivência do seu negócio em tempos difíceis.
      
      ### 9. **Marketing Efetivo**
      
      Invista em estratégias de marketing efetivas para promover sua marca e produtos/serviços. Isso inclui presença online, publicidade, mídias sociais e estratégias de conteúdo que atinjam seu público-alvo de maneira eficaz.
      
      ### 10. **Feedback e Melhoria Contínua**
      
      Esteja aberto ao feedback, tanto de clientes quanto de funcionários. Use as informações recebidas para fazer melhorias constantes nos produtos, serviços e processos da empresa.
      
      Lembre-se de que cuidados nos negócios não se limitam apenas ao início, mas são uma prática contínua. Adaptar-se às mudanças e aprender com os desafios é o que diferencia os negócios de sucesso. Com um foco constante na qualidade, inovação e gestão sólida, você estará no caminho certo para alcançar seus objetivos empresariais e prosperar em um mercado competitivo.`,
  },
];

export const Home = () => {
  return (
    <Container>
      <section id="home">
        <SectionHeader
          title={"Esse é o pontapé inicial para criação da sua empresa 🙂"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
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

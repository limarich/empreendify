import "./styles.css";

const steps = [
  "Proposta de Valor",
  "Fonte de Receitas",
  "Canais",
  "Relacionamento com clientes",
  "Recursos chave",
  "Atividades chave",
  "Parceiros chave",
  "Estrutura de custo",
  "Segmento de mercado",
];

export const ProgressBar = ({ active = 0, setActive }) => {
  return (
    <div className="progress-container">
      <div
        className="progress"
        id="progress"
        style={{ width: `${(active / 9) * 100}%` }}
      ></div>

      {steps.map((step, index) => (
        <div
          className="step"
          key={step}
          onClick={() => {
            setActive(index);
          }}
        >
          <div className={`circle ${active >= index && "active"}`}>
            {index + 1}
          </div>
          <div className="label">{step}</div>
        </div>
      ))}
    </div>
  );
};

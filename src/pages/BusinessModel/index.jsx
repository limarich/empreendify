import { useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import "./styles.css";

import { ProgressBar } from "../../components/ProgressBar";
import { Canva } from "../../components/Canva";
import { SectionHeader } from "../../components/SectionHeader";

import { CanvaCard } from "../../components/CanvaCard";

import { DownloadSimple, PencilSimple } from "@phosphor-icons/react";
import { Container } from "../../components/Container";

export const BusinessModel = () => {
  const [step, setStep] = useState(0);
  const [enableHint, setEnableHint] = useState(false);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = "userData.user.name" ?? "";

  const location = useLocation();
  const state = location.state;
  let finished = false;
  if(!state) {
    finished = false;
  } else {
    finished = state.finished;
  }
  
  console.log(`Página de redirecionamento: ${finished}`);
  
  // Redirecionamento do modelo de negócios preenchido!
  if(finished) {
    return (
      <Container referenceTo={2}>
        <div id="business-model">
          <SectionHeader
            title={`Olá ${userName}! Esse é o seu Modelo de Negócios 🙂`}
            description={""}
          >
            <div className="iconsContainer">
              <PencilSimple
                size={32}
                color="#000"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate('/business-model', { state: { finished: false }});
                }}
              />
              <DownloadSimple
                size={32}
                color="#000"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {}}
              />
            </div>
          </SectionHeader>
          <div className="business-model-container">
            <div className="grid-container">
              <div className={`grid-item${1}`}>
                <CanvaCard
                  label={"Como?"}
                  type={"how"}
                  title={"Parceiros Chave"}
                  description={
                    "Quem são os seus principais fornecedores (terceirizados)?"
                  }
                />
              </div>
              <div className={`grid-item${2}`}>
                <CanvaCard
                  label={"Como?"}
                  type={"how"}
                  title={"Atividades Chave"}
                  description={
                    "Quais atividades mais importantes para o seu negócio ?"
                  }
                />
              </div>
              <div className={`grid-item${3}`}>
                <CanvaCard
                  label={"Como?"}
                  type={"how"}
                  title={"Recursos Chave"}
                  description={
                    "Quais os ativos fundamentais para fazer o negócio funcionar?"
                  }
                />
              </div>
              <div className={`grid-item${4}`}>
                <CanvaCard
                  label={"O que?"}
                  type={"what"}
                  title={"Proposta de Valor"}
                  description={
                    "Quais beneficios seu produto (ou serviço) entrega para seus clientes?"
                  }
                />
              </div>
              <div className={`grid-item${5}`}>
                <CanvaCard
                  label={"Pra quem?"}
                  type={"to-whom"}
                  title={"Relacionamento com Clientes"}
                  description={
                    "Estratégias que evitam que seus clientes corram para o concorrente."
                  }
                />
              </div>
              <div className={`grid-item${6}`}>
                <CanvaCard
                  label={"Pra quem?"}
                  type={"to-whom"}
                  title={"Canais"}
                  description={
                    "Caminhos pelos quais a empresa comunica e entrega valor para o cliente."
                  }
                />
              </div>
              <div className={`grid-item${7}`}>
                <CanvaCard
                  label={"Pra quem?"}
                  type={"to-whom"}
                  title={"Segmento de Mercado"}
                  description={
                    "É necessário que você defina um nicho de clientes."
                  }
                />
              </div>
              <div className={`grid-item${8}`}>
                <CanvaCard
                  label={"Quanto?"}
                  type={"how-much"}
                  title={"Estrutura de Custo"}
                  description={
                    "Quais os principais custos que têm peso no financeiro e são derivados da operacionalização do negócio?"
                  }
                />
              </div>
              <div className={`grid-item${9}`}>
                <CanvaCard
                  label={"Quanto?"}
                  type={"how-much"}
                  title={"Fontes de Receita"}
                  description={
                    "Por quais maneiras o cliente pagará pelos benefícios recebidos?"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  // Redirecionametno do modelo de negócios não-preenchido!
  return (
    <Container referenceTo={2}>
      <div id="business-model">
        <div className="business-model-container">
          <h1>Modelo de Negócios</h1>
          <ProgressBar
            enableHint={enableHint}
            active={step}
            setActive={setStep}
          />
          <Canva
            enableHint={enableHint}
            setEnableHint={setEnableHint}
            step={step}
            setStep={setStep}
          />
        </div>
      </div>
    </Container>
  );
};

import { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { ProgressBar } from "../../components/ProgressBar";
import { Canva } from "../../components/Canva";
import { SectionHeader } from "../../components/SectionHeader";

import { CanvaCard } from "../../components/CanvaCard";

import { DownloadSimple, PencilSimple } from "@phosphor-icons/react";
import { Container } from "../../components/Container";
import { getUserData } from "../../utils/getUserData";
import { getBusinessModelController } from "./controller";

export const BusinessModel = () => {
  const [step, setStep] = useState(0);
  const [enableHint, setEnableHint] = useState(false);
  const [formData, setFormData] = useState({
    businessId: "",
    mainPartnerships: [""],
    mainActivities: [""],
    mainResources: [""],
    valueProposition: [""],
    customerRelationship: [""],
    channels: [""],
    customerSegments: [""],
    costs: [""],
    revenue: [""],
  });

  const navigate = useNavigate();
  const pdfRef = useRef();

  const userData = getUserData();
  const userName = userData?.name || "";

  const location = useLocation();
  const state = location.state;
  let finished = false;
  if (!state) {
    finished = false;
  } else {
    finished = state.finished;
  }

  const fetchBusinessModel = async () => {
    if (userData && userData.businesses) {
      const res = await getBusinessModelController(userData.businesses[0].id);
      if (res) {
        setFormData(res.businessModel);
        setField(res.businessModel[businessModelStep[step].name]);
      }
    }
  };

  useEffect(() => {
    fetchBusinessModel();
  }, []);

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("l", "mm", "a4", false);

      canvas.style.width = "20px";
      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      /*
      pdf.addImage(imgData, 'PNG', 0, 0, 0, 0);
      */
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Modelo de negócios.pdf");
    });
  };

  const items = [];

  console.log(`Página de redirecionamento: ${finished}`);

  // Redirecionamento do modelo de negócios preenchido!
  if (finished) {
    return (
      <Container referenceTo={3}>
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
                  navigate("/business-model", { state: { finished: false } });
                }}
              />
              <DownloadSimple
                size={32}
                color="#000"
                style={{
                  cursor: "pointer",
                }}
                onClick={downloadPDF}
              />
            </div>
          </SectionHeader>

          <div className="business-model-container" ref={pdfRef}>
            <div className="grid-container">
              <div className={`grid-item${1}`}>
                <CanvaCard
                  label={"Como?"}
                  type={"how"}
                  title={"Parceiros Chave"}
                  description={
                    "Quem são os seus principais fornecedores (terceirizados)?"
                  }
                  items={formData.mainPartnerships}
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
                  items={formData.mainActivities}
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
                  items={formData.mainResources}
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
                  items={formData.valueProposition}
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
                  items={formData.customerRelationship}
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
                  items={formData.channels}
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
                  items={formData.customerSegments}
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
                  items={formData.costs}
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
                  items={formData.revenue}
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
    <Container referenceTo={3}>
      <div id="business-model-initial">
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

import { CaretLeft, CaretRight, Lightbulb } from "@phosphor-icons/react";
import "./styles.css";

import { HintModal } from "../HintModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { businessModelStep } from "./steps";
import { getUserData } from "../../utils/getUserData";
import {
  getBusinessModelController,
  updateBusinessModelController,
} from "../../pages/BusinessModel/controller";

export const Canva = ({ step, setStep, enableHint, setEnableHint }) => {
  const userData = getUserData();
  const [isOpen, setIsOpen] = useState(false);
  const [field, setField] = useState("");
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
  useEffect(() => {
    if (step !== 1) setField(formData[businessModelStep[step].name]);
  }, [step]);
  const handleUpdateBusinessModel = async () => {
    await updateBusinessModelController({
      ...formData,
    });
  };
  return (
    <div class="canva-container">
      <HintModal
        hints={businessModelStep[step].hints}
        isOpen={enableHint}
        setIsOpen={setEnableHint}
      />

      <button
        class="btn"
        id="previous"
        disabled={step === 0}
        onClick={() => {
          if (step - 1 >= 0) setStep(step - 1);
          setFormData({
            ...formData,
            [businessModelStep[step].name]: field,
          });
          setField("");
        }}
      >
        <CaretLeft size={32} color="#fff" style={{ position: "absolute" }} />
      </button>

      <div class="canva">
        <div class="canva-content">
          <div class="canva-header">
            <div class={`canva-tag ${businessModelStep[step].tag}`}>
              {businessModelStep[step].label}
            </div>
            <div class="canva-hint-icon" onClick={() => setEnableHint(true)}>
              <Lightbulb
                size={32}
                color="#000"
                style={{ position: "relative" }}
              />
            </div>
          </div>
          <div class="canva-title">{businessModelStep[step].title}</div>
          <div class="canva-description">
            {businessModelStep[step].description}
          </div>
          <textarea
            class="canva-input"
            name={businessModelStep[step].name}
            onChange={(e) => setField(e.target.value)}
            value={field}
          ></textarea>
        </div>
      </div>

      <button
        class="btn"
        id="next"
        onClick={() => {
          if (step === 8) {
            console.log("Redirecionando!");
            handleUpdateBusinessModel();
            navigate("/business-model", { state: { finished: true } });
          }
          if (step < 8) {
            setFormData({
              ...formData,
              [businessModelStep[step].name]: field,
            });
            setField("");
            setStep(step + 1);
          }
        }}
      >
        <CaretRight size={32} color="#fff" style={{ position: "absolute" }} />
      </button>
    </div>
  );
};

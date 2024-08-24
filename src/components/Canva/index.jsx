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

  const handleUpdateBusinessModel = async (newFormData) => {
    console.log("form data", newFormData);
    await updateBusinessModelController({
      ...newFormData,
    });
  };
  return (
    <div className="canva-container">
      <HintModal
        hints={businessModelStep[step].hints}
        isOpen={enableHint}
        setIsOpen={setEnableHint}
      />

      <button
        className="btn"
        id="previous"
        disabled={step === 0}
        onClick={() => {
          if (step - 1 >= 0) setStep(step - 1);
          setFormData({
            ...formData,
            [businessModelStep[step].name]: `${field}`.split(","),
          });
          setField("");
        }}
      >
        <CaretLeft size={32} color="#fff" style={{ position: "absolute" }} />
      </button>

      <div className="canva">
        <div className="canva-content">
          <div className="canva-header">
            <div className={`canva-tag ${businessModelStep[step].tag}`}>
              {businessModelStep[step].label}
            </div>
            <div
              className="canva-hint-icon"
              onClick={() => setEnableHint(true)}
            >
              <Lightbulb
                size={32}
                color="#000"
                style={{ position: "relative" }}
              />
            </div>
          </div>
          <div className="canva-title">{businessModelStep[step].title}</div>
          <div className="canva-description">
            {businessModelStep[step].description}
          </div>
          <textarea
            className="canva-input"
            name={businessModelStep[step].name}
            onChange={(e) => setField(e.target.value)}
            value={field}
          ></textarea>
        </div>
      </div>

      <button
        className="btn"
        id="next"
        onClick={() => {
          if (step === 8) {
            handleUpdateBusinessModel({
              ...formData,
              [businessModelStep[step].name]: `${field}`.split(","),
            });
            navigate("/business-model", { state: { finished: true } });
            window.location.reload();
          }
          if (step < 8) {
            console.log("aqui: ", field);
            setFormData({
              ...formData,
              [businessModelStep[step].name]: `${field}`.split(","),
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

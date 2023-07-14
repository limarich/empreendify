import { SectionHeader } from "../../components/SectionHeader";
import "./styles.css";

export const NotFound = () => {
  return (
    <div className="notFound">
      <SectionHeader 
        title={`Oops! Página não encontrada ¯\\_(''/)_/¯`}
      />
    </div>
  );
};

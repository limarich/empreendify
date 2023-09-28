import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { EditableRow } from "../../components/EditableRow";

export const NotFound = () => {
  return (
    <div className="notFound">
      <SectionHeader 
        title={`Oops! Página não encontrada!`}
      />
      <div className="contentContainerRow">
        <div className="EditableRowContainer">
          <EditableRow
            index={0}
            showHeader={true}
            key={0}
          />
        </div>
      </div>
    </div>
  );
};

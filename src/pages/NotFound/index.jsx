import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { EditableRow } from "../../components/EditableRow";

import { TextareaAutosize } from '@mui/base/TextareaAutosize';


export const NotFound = () => {
  return (
    <div className="notFound">
      <SectionHeader 
        title={`Oops! Página não encontrada!`}
      />
      <TextareaAutosize/>
    </div>
  );
};

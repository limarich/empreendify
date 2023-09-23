import { Navbar } from "../Navbar";

export const Container = ({ children, referenceTo }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Navbar referenceTo={referenceTo}/>
      {children}
    </div>
  );
};

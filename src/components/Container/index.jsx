import { Navbar } from "../Navbar";

export const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Navbar />
      {children}
    </div>
  );
};

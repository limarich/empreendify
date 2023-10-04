import { handleNotification } from "./handleNotification";
import "react-notifications-component/dist/theme.css";

declare type TYPE = "error" | "success" | "info" | "warning";

const notify = (mess: string) => handleNotification(mess, "Sucesso", "success");

const notifyError = (mess: string) => handleNotification(mess);

const notifyInfo = (mess: string) => handleNotification(mess, "Info", "info");

const notifyWarning = (mess: string) =>
  handleNotification(mess, "Aviso", "warning");

function message(err: any, type: TYPE) {
  let msg = "Erro não identificado.";

  if (typeof err === "string") {
    msg = err.toUpperCase();
  } else if (
    "response" in err &&
    "data" in err.response &&
    "message" in err.response.data
  ) {
    msg = err.response.data.message;
  } else if (err instanceof Error) {
    msg = err.message;
  }
  if (type === "error") {
    return notifyError(msg);
  }
  if (type === "success") {
    return notify(msg);
  }
  if (type === "info") {
    return notifyInfo(msg);
  }
  if (type === "warning") {
    return notifyWarning(msg);
  }
}

export default message;

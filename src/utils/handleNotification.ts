import { Store, NOTIFICATION_TYPE } from "react-notifications-component";

export const handleNotification = (
  message: string,
  title = "Erro",
  type: NOTIFICATION_TYPE = "danger"
) => {
  Store.removeAllNotifications();

  return Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 8000,
      onScreen: true,
      showIcon: true,
      pauseOnHover: true,
    },
  });
};

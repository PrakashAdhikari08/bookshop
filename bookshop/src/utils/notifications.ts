import {store} from "react-notifications-component";

interface messageProps {
  title: string;
  message: string;
}

const showSuccess = (msg: messageProps) => {
  store.addNotification({
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__lightSpeedInRight"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__lightSpeedOutRight"],
    dismiss: {
      duration: 3000,
    },
    title: msg.title,
    message: msg.message,
    type: "success",
  });
};

const showWarning = (msg: messageProps) => {
  store.addNotification({
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__lightSpeedInRight"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__lightSpeedOutRight"],
    dismiss: {
      duration: 3000,
    },
    title: msg.title,
    message: msg.message,
    type: "warning",
  });
};

const showInfo = (msg: messageProps) => {
  store.addNotification({
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__lightSpeedInRight"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__lightSpeedOutRight"],
    dismiss: {
      duration: 3000,
    },
    title: msg.title,
    message: msg.message,
    type: "info",
  });
};

const showError = (msg: messageProps) => {
  store.addNotification({
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__lightSpeedInRight"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__lightSpeedOutRight"],
    dismiss: {
      duration: 3000,
    },
    title: msg.title,
    message: msg.message,
    type: "danger",
  });
};

const handleError = (title: string, err: { data: { message: string } }) => {
  if (err && err.data) {
    showError({ message: err.data.message, title: title });
  }
};

export default {
  showError,
  handleError,
  showWarning,
  showInfo,
  showSuccess,
};

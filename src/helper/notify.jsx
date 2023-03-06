import { ToastContainer, toast } from "react-toastify";

const notify = (text, typeToast) =>
  toast.typeToast("Błędne hasło", {
    position: "top-center",
    autoClose: true,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "colored",
  });

export default notify;

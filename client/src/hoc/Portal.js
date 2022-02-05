import { createPortal } from "react-dom";

const Portal = ({ children, container }) => {
  return createPortal(children, container);
};

export default Portal;

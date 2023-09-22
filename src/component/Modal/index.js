import { useMemo } from "react";
import { AtModal } from 'taro-ui';
import "./index.scss";

function Modal({children, className, ...props }) {
  const _className = useMemo(()=> {
    if (className) return 'modal ' + className
    return 'modal'
  }, [className])
  return (
    <AtModal {...props} className={_className} />
  );
}

export default Modal;

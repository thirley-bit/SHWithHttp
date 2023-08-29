import { useMemo } from "react";
import { AtModal } from 'taro-ui';
import "./index.scss";

function Modal({children, className, ...props }) {
  const _className = useMemo(()=> {
    if (className) return 'modal ' + className
    return 'modal'
  }, [className])
  return (
    //   <AtButton size='small' {...props} className={_className}>{children}</AtButton>
      <AtModal {...props} className={_className} />
  );
}

export default Modal;

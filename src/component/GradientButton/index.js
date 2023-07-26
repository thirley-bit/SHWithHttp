import { useMemo } from "react";
import { AtButton } from 'taro-ui';
import "./index.scss";

function GradientButton({children, className, ...props }) {
  const _className = useMemo(()=> {
    if (className) return 'button ' + className
    return 'button'
  }, [className])
  return (
      <AtButton size='small' {...props} className={_className}>{children}</AtButton>
  );
}

export default GradientButton;

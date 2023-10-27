import {  AtDivider } from 'taro-ui';
import { useMemo } from 'react';
import "./Divider.scss";

function Divider({className, ...props}) {
  const _className = useMemo(() => {
    if(className) return 'divider ' + className;
    return 'divider'
  },[className])
  return (
      <AtDivider {...props} className={_className} />
  );
}

export default Divider;

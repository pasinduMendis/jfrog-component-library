import React, { CSSProperties } from 'react'
import { useButton } from 'react-aria';
import {useRef} from 'react';

type BtnStyles={btnStyles:CSSProperties}

const Button = (props:BtnStyles | any) => {
  let ref:React.MutableRefObject<any>= useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref} style={props.btnStyles}>
      {children}
    </button>
  );

}

export default Button
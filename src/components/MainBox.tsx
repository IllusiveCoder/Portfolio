import React from 'react';
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  
}

export function MainBox({children}: Props):JSX.Element{
  return (<div className = "MainBox">{children}</div>);
}

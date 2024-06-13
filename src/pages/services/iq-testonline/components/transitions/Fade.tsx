import React, { ReactNode } from 'react';
import { Transition } from 'react-transition-group';

// Este componente se usa para hacer una transición al momento de mostrar una maqueta en pantalla

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  transform: 'translateY(100%)',
  opacity: 0,
};

const transitionStyles: { [key: string]: React.CSSProperties } = {
  entering: { transform: 'translateY(100%)', opacity: 0 },
  entered:  { transform: 'translateY(0)', opacity: 1 },
  exiting:  { transform: 'translateY(100%)', opacity: 0 },
  exited:   { transform: 'translateY(100%)', opacity: 0 },
};

interface FadeProps {
  in: boolean;
  children: ReactNode;
}

const Fade: React.FC<FadeProps> = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);

export default Fade;

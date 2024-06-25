// Recuerda siempre añadir estas dos lineas
import { GetStaticPropsContext } from 'next';
import { AppProps } from 'next/app';

import React, { ReactNode } from 'react';
import { Transition } from 'react-transition-group';

// recuerda siempre añadir el tipo Props
type Props = AppProps & {
  t: any
}

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

// Recuerda siempre añadir esto a todos los componentes que crees
export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
  const messages = (await import(`/messages/${locale}.json`)).default
  return {
      props: {
          messages: messages,
          translationNamespace: 'Index', 
          locale: locale,
          timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
      }
  }
}

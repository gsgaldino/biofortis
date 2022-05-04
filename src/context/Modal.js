import React, {
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [open, setIsOpen] = useState(false);

  const state = useMemo(() => ({ open, setIsOpen }), [open]);

  return (
    <ModalContext.Provider value={state}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useModal() {
  const { open, setIsOpen } = useContext(ModalContext);
  return { open, setIsOpen };
}

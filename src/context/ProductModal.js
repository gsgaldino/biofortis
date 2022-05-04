import React, {
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

const ProductModalContext = createContext();

export default function ProductModalProvider({ children }) {
  const [open, setIsOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const state = useMemo(() => ({
    open,
    setIsOpen,
    product,
    setProduct,
  }), [open]);

  return (
    <ProductModalContext.Provider value={state}>
      {children}
    </ProductModalContext.Provider>
  );
}

ProductModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useModal() {
  const {
    open,
    setIsOpen,
    product,
    setProduct,
  } = useContext(ProductModalContext);
  return {
    open,
    setIsOpen,
    product,
    setProduct,
  };
}

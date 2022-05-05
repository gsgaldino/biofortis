import React, {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import PropTypes from 'prop-types';

const FieldsContext = createContext();

export default function FieldsProvider({ children }) {
  const [fields, setFields] = useState([]);

  const state = useMemo(() => ({ fields }), [fields]);

  const [documents] = useAllPrismicDocumentsByType('homepage');

  useEffect(() => {
    const data = documents && documents[0];
    setFields(data);
  }, [documents]);

  return (
    <FieldsContext.Provider value={state}>
      {children}
    </FieldsContext.Provider>
  );
}

FieldsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFields() {
  const { fields } = useContext(FieldsContext);
  return { fields };
}

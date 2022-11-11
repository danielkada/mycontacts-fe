import { useCallback, useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  }, []);

  const removeError = useCallback((fieldName) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
  }, []);

  // eslint-disable-next-line max-len
  const getErrorMessageByFieldName = useCallback((fieldName) => errors.find((error) => error.field === fieldName)?.message, []);

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}

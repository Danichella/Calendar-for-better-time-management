import { useState } from 'react';

export const useHandleInputForm = (initialValues) => {
  const [data, setData] = useState(initialValues);

  const onChangeHandler = (id, value) => {
    setData((previous) =>
      previous.map((element) =>
        element.id === id ? { ...element, value: value } : element
      )
    );
  };

  return {
    data,
    setData,
    onChangeHandler,
  };
};

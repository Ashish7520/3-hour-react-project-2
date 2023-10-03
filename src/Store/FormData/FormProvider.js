import React from "react";

import FormContext from "./form-context";
import { useState } from "react";

const FormProvider = (props) => {
  const [formcontent, setformContent] = useState([]);

  const addProductHandler = (data) => {
    setformContent(data);
  };

  console.log(formcontent);

  const FormContent = formcontent;
  return (
    <FormContext.Provider value={{ formcontent, addProductHandler }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;

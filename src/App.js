import React, { useState } from "react";

import AddshoesForm from "./components/AddProducts/AddshoesForm";
import Product from "./components/Product/Product";
import FormProvider from "./Store/FormData/FormProvider";

function App() {
  const [showShoesForm, setShowShoesForm] = useState(false);

  const setShowShoesFormHandler = () => {
    setShowShoesForm(true);
  };

  const hideformHandler = () => {
    setShowShoesForm(false);
  };

  return (
    <div>
      <FormProvider>
        <button onClick={setShowShoesFormHandler}>Add Product</button>
        {showShoesForm && <AddshoesForm onClick={hideformHandler} />}
        <Product />
      </FormProvider>
    </div>
  );
}

export default App;

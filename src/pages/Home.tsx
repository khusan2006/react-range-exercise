import { useState } from "react";
import FilterRange from "../components/FilterRange";
import FormRange from "../components/FormRange";
import Products from "../components/Products";
import products from '../data/products.json'

const Home = () => {
  const [addedProduct, setAddedProduct] = useState<typeof products[0] | null>(null)

  return (
    <>
      <FilterRange />
      <Products setAddedProduct={setAddedProduct} />
      <FormRange addedPrdouct={addedProduct} setAddedProduct={setAddedProduct} />
    </>
  );
};

export default Home;

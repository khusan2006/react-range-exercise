import products from "../data/products.json";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const Products = () => {
  const location = useLocation();
  const { start: startOfTheRange, end: endOfTheRange } = queryString.parse(location.search);


  let filteredProducts = products.filter((product) => {
    if(!startOfTheRange || !endOfTheRange) return 
    return product.price >= parseInt(startOfTheRange as string) && product.price <= parseInt(endOfTheRange as string);
  });
  if(!startOfTheRange || !endOfTheRange) {
    filteredProducts = products
  }
  return (
    <div className="grid grid-cols-3 gap-4 flex-grow">
      {filteredProducts.map((product) => (
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="w-44 h-44 rounded-lg"
          />
          <h4>{product.name}</h4>
          <p>price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

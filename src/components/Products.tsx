import products from "../data/products.json";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const Products = ({
  setAddedProduct,
}: {
  setAddedProduct: React.Dispatch<
    React.SetStateAction<{
      name: string;
      img: string;
      price: number;
    } | null>
  >;
}) => {
  const location = useLocation();
  const { start: startOfTheRange, end: endOfTheRange } = queryString.parse(
    location.search
  );

  let filteredProducts = products.filter((product) => {
    if (!startOfTheRange || !endOfTheRange) return;
    return (
      product.price >= parseInt(startOfTheRange as string) &&
      product.price <= parseInt(endOfTheRange as string)
    );
  });
  if (!startOfTheRange || !endOfTheRange) {
    filteredProducts = products;
  }

  const handleClick = (product: (typeof products)[0]) => {
    setAddedProduct(product);
  };
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
          <button
            onClick={() => handleClick(product)}
            className="mt-2 bg-red-500 text-white py-1 px-2 text-sm rounded-md"
          >
            add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

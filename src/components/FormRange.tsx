import { useState } from "react";

const FormRange = () => {
// Constants
  const MINIMUM_ITEM = 1;
  const MAXIMUM_ITEM = 300;
  const PRICE_PER_ITEM = 100;
//   setters
  const [quantity, setQuantity] = useState<number>(MINIMUM_ITEM);
  const [discount, setDiscount] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false)
  const totalPrice = quantity * PRICE_PER_ITEM;
  const totalPriceWithDiscount = totalPrice - totalPrice * (discount / 100);
  
// handle changes in range and input elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    const clampedQuantity = Math.min(Math.max(newQuantity, MINIMUM_ITEM), 9999);
    setQuantity(clampedQuantity);

    if (clampedQuantity > 30 && clampedQuantity < 100) {
      setDiscount(3);
    } else if (clampedQuantity >= 100 && clampedQuantity < 300) {
      setDiscount(5);
    } else if (clampedQuantity >= 300) {
      setDiscount(7);
    } else if (clampedQuantity < 30) {
      setDiscount(0);
    }
  };
//handles adding items to the cart
  const addToCart = () => {
    setAddingToCart(true);
  
    // Simulate an API call
    setTimeout(() => {
     
      alert(`Added ${quantity} items to cart`);
  
      // Reset the loading state
      setAddingToCart(false);
    }, 1000); // Simulate a 1-second delay
  };
  
  return (
   <div className="flex flex-col ">
     <div className="flex flex-col py-4 px-6 rounded-md  w-[40rem] bg-gray-200">
      <div className="flex items-center justify-between">
        <h3>количество</h3>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          className="w-[55px] text-sm border-[1px] border-black rounded-md  px-1 text-black appearance-none"
        />
      </div>

      <input
        type="range"
        min={MINIMUM_ITEM}
        max={MAXIMUM_ITEM}
        value={quantity}
        onChange={handleChange}
        className="w-full mt-4"
      />

      <div className="text-xs flex justify-between items-center mt-1">
        <p className="flex flex-col">
          3% <span>30шт </span>
        </p>
        <p className="flex flex-col items-center">
          5% <span>100шт </span>
        </p>
        <p className="flex flex-col items-end">
          7% <span>300шт </span>
        </p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p>стоимость тиража:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p>скидка:</p>
        <p>{discount}%</p>
      </div>
      
      <div className="w-full h-[1px] bg-black my-3" />
      <div className="flex items-center justify-between mt-3">
        <p>итоговая стоимость:</p>
        <p>${totalPriceWithDiscount.toFixed(2)}</p>
      </div>
     
    </div>
    <button onClick={addToCart} className={`w-full bg-red-600 text-white py-2 px-4 mt-4 rounded-md ${addingToCart ? 'opacity-50' : ""}`} disabled={addingToCart}>
        {addingToCart ? "добавление в корзину" : "  в корзину"}
    </button>
   </div>
  );
};

export default FormRange;

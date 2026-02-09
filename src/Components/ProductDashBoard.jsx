import { useState } from "react";

const ProductDashBoard = () => {
  const sampleData = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Fridge", price: 10000 },
    { id: 3, name: "AC", price: 30000 },
  ];

  const [cartIds, setCartIds] = useState([]);

  const toggleCart = (id) => {
    if (cartIds.includes(id)) {
      setCartIds(cartIds.filter((itemId) => itemId !== id));
    } else {
      setCartIds([...cartIds, id]);
    }
  };

  const calculateTotal = () => {
    return cartIds.reduce((total, id) => {
      const product = sampleData.find((p) => p.id === id);
      return total + (product ? product.price : 0);
    }, 0);
  };

  return (
    <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4 gap-4 m-10 w-100">
      <h1 className="text-center font-bold">Product List</h1>

      <table className="border border-gray-500 w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border border-gray-400">Product Name</th>
            <th className="p-2 border border-gray-400">Price</th>
            <th className="p-2 border border-gray-400">Action</th>
          </tr>
        </thead>
        <tbody className="text-center border-t border-gray-300">
          {sampleData.map((product) => {
            const isInCart = cartIds.includes(product.id);
            return (
              <tr key={product.id}>
                <td className="p-2 border border-gray-300">{product.name}</td>
                <td className="p-2 border border-gray-300">{product.price}</td>
                <td className="p-2 border border-gray-300">
                  <button
                    className={`border px-4 py-1 cursor-pointer font-bold rounded-md ${
                      isInCart
                        ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                        : "bg-amber-500 text-white border-yellow-500 hover:bg-amber-600"
                    }`}
                    onClick={() => toggleCart(product.id)}
                  >
                    {isInCart ? "Remove" : "Add to Cart"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="text-xl font-bold text-center">
        Total: {calculateTotal()}
      </h2>
    </div>
  );
};

export default ProductDashBoard;

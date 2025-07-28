export const handleAddToCart = (cart, setCart, product, cantidadItems) => {
  // Verifica si el producto ya está en el carrito
  const productExist = cart.find(item => item.id === product.id);

  if (productExist) {
    // Si el producto existe, actualiza la cantidad
    setCart(cart.map((item) =>
      item.id === product.id ? { ...item, cantidad: item.cantidad + cantidadItems } : item
    ));
  } else {
    // Si el producto no existe, agrega el nuevo producto al carrito con la cantidad indicada
    setCart([...cart, { ...product, cantidad: cantidadItems }]);
  }
};
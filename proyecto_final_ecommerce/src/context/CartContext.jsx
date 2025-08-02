import { createContext, useState, useEffect, useCallback } from 'react';

// Crear el contexto 
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {

  const [products, setProducts] = useState([]);
	const [cargando, setCarga] = useState(true)
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState({})
	const [isCartOpen, setCartOpen] = useState(false);
	const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const API_URI = import.meta.env.VITE_API_URI; // Variable de entorno

  // Wrap las funciones con useCallback para evitar cambios de referencia
  const stableSetProduct = useCallback((data) => setProducts(data), []);
  const stableSetLoading = useCallback((isLoading) => setLoading(isLoading), []);

  // Guardar carrito en el Storage

  // Estado inicial del carrito leyendo del localStorage
  const [cart, setCart] = useState(() => {
    try {
      const cartItems = localStorage.getItem('cartItems');
      return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
      console.error('Error parsing cart items:', error);
      return [];
    }
  });

  // Efecto para sincronizar el carrito con localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);


	// 1. useEffect paa cargar todos productos
	
  useEffect(()=>{
    const findProducts = async () =>{
      try{
        const response = await fetch(API_URI)
        const result = await response.json();
        setTimeout(()=>{
          setProducts(result)
          setCarga(false)
        },1000)
      } catch (error) {
        console.error('Error fetching data:', error);
        setCarga(false);
        setError(true);
      }
    }
    findProducts();
  }, [setProducts, API_URI])


  // 2. Función para agregar un tiem al carrito

  const addToCart = (product, cantidadItems) => {
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
}


// 3. Función para borrar un item del carrtito

	const borrarProducto = (product) => {
    setCart((cart) => {
      /**
       * Si el producto existe y la cantidad del producto existente en el carrito es mayor a 1
       * entonces se resta 1 a la cantidad del producto existente en el carrito (por ejemplo hay seleccionadas 3
       * lapiceras en el carrito se borra 1 y quedan 2).
       * En caso contrario se devuelve un NULL.
       * Por último se filtran todos los productos distintos a NULL y nos quedarán todos los productos existentes en
       * el carrito de compras.
       */
      return cart
        .map((item) => {
          if (item.id === product.id && item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else if (item.id === product.id && item.cantidad === 1) {
            return null;
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };

  // 4. Función para limpiar el carrito

  const vaciarCarrito = () => {
    setCart([]);
  };

	return(
			<CartContext.Provider value={{cart, setCart, products, setProducts: stableSetProduct, 
				cargando, setCarga, error, setError, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito,
				addToCart, loading, setLoading: stableSetLoading, errors, setErrors, cantidad, setCantidad}}>
					{children}
			</CartContext.Provider>
	)
}

export default CartContext
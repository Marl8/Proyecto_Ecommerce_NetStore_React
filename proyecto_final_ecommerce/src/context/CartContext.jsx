import { createContext, useState, useEffect, useCallback } from 'react';

// Crear el contexto 
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {

	const [cart, setCart] = useState([])
  const [products, setProducts] = useState([]);
  //const [isAuthenticated, setIsAuth] = useState(false)
  //const [rol, setRol] = useState('')
	const [cargando, setCarga] = useState(true)
  const [error, setError] = useState(false)
	const [isCartOpen, setCartOpen] = useState(false);
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true);


  /**
   * El estado de autenticación (isAuth) solo vive en memoria (useState / context)
   * y no está persistido en ningún lugar como localStorage o sessionStorage.
   * Cuando el usuario refresca la página o accede directamente a una URL (por ejemplo,
   * escribiendo /admin en la barra de direcciones), todo el estado en memoria se pierde
   * porque React reinicia el ciclo de vida de la app.
   */

  const [isAuthenticated, setIsAuth] = useState(() => {
    return localStorage.getItem('isAuth') === 'true';
  });

  const [rol, setRol] = useState(() => {
    return localStorage.getItem('rol') || '';
  });

  useEffect(() => {
    localStorage.setItem('isAuth', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('rol', rol);
  }, [rol]);

  // Wrap las funciones con useCallback para evitar cambios de referencia
  const stableSetProduct = useCallback((data) => setProducts(data), []);
  const stableSetLoading = useCallback((isLoading) => setLoading(isLoading), []);


	// 1. useEffect paa cargar todos productos
	
  useEffect(()=>{
    const findProducts = async () =>{
      try{
        const response = await fetch('/data/products.json')
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
  }, [setProducts])


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
			<CartContext.Provider value={{cart, setCart, products, setProducts: stableSetProduct, isAuthenticated, setIsAuth,
				cargando, setCarga, error, setError, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito,
				addToCart, product, setProduct, loading, setLoading: stableSetLoading, rol, setRol}}>
					{children}
			</CartContext.Provider>
	)
}

export default CartContext
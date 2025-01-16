const products = {
    1: { name: "Laptop", price: 1000, stock: 5 },
    2: { name: "Mouse", price: 20, stock: 10 },
    3: { name: "Keyboard", price: 50, stock: 0 }
  };
  
  //Se mira el calculo del stock
  function checkStock(productId, quantity) {
    return new Promise((resolve, reject) => {
      const product = products[productId];          //Product guarda el productID
      if (product.stock >= quantity) {              //Si el stock del producto es mayor o igual al seleccionado se podra hacer el pedido 
        resolve(`Stock disponible para el producto ${productId}`);
      } else {
        reject(`Stock insuficiente para el producto ${productId}`);     //Si no es mayor aparecera que el stock es insuficiente
      }
    });
  }
  
  //Se calcula el total del pedido
  function calculateTotal(productId, quantity) {
    return new Promise((resolve) => {
      const product = products[productId];               //Hacemos que product coja el id para en la siguiente linea multiplicarlo
      const total = product.price * quantity;           //Se multiplica el precio del producto por la cantidad
      resolve(`Total para ${quantity} unidades de ${productId}: $${total}`);
    });
  }
  
  //Confirmo el pedido
  function confirmOrder(productId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Pedido confirmado para el producto ${productId}`);
      }, 2000);
    });
  }
  
  //Simulacion del flujo
  async function processOrder(productId, quantity) {
    try {
      const stockMessage = await checkStock(productId, quantity);   //Verificar el stock
      console.log(stockMessage);
      const totalMessage = await calculateTotal(productId, quantity);   //Calcular el total
      console.log(totalMessage);
      const confirmationMessage = await confirmOrder(productId);        //Confirmar pedido
      console.log(confirmationMessage);
    } catch (error) {
      console.log(error);
    }
  }
  

  processOrder(1, 2); //Hacemos una prueba, cogemos el producto 1 (laptop), y le ponemos cantidad dos, por lo tanto multiplica el precio por 2
  processOrder(3, 1);

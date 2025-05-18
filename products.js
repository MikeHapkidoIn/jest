let products = []; // variable vacia donde se agregan los productos
let id = 0; // variable con ID

/**
 * Función para resetear la lista de productos y la id
 */
function resetProducts() {
  products = [];
  id = 0;
}

/**
 * obtiene la lista de productos y la devuelve
 */
function getProducts() {
  return products;
}

/**
 * añade productos a la variable products. Si falta algo o ya existe lanza error
 */
function addProduct(name, price) {
  if (!name || !price) throw new Error('Datos incorrectos');
  if (products.find((product) => product.name === name)) {
    throw new Error('Ya existe este producto');
  }
  const product = { name, price, id: id++ };
  products.push(product);
  return products;
}

/**
 * Eliminar producto de la lista y lanza error si el producto no existe
 */
function removeProduct(id) {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('No existe este producto');
  }
  products = products.filter((product) => product.id !== id);
  return products;
}

/**
 * Obtiene producto por la ID. Si el producto  no existe lanza error al igual que si ya esta en la lista
 */
function getProduct(id) {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('No existe este producto');
  }
  return product;
}

/**
 * Actualiza el producto por nombre, id o precio. Si no existe lanza error
 */
function updateProduct(id, name, price) {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('No existe este producto');
  }
  if (name) {
    product.name = name;
  }
  if (price) {
    product.price = price;
  }
  return product;
}



module.exports = {
  resetProducts,
  getProducts,
  addProduct,
  removeProduct,
  getProduct,
  updateProduct,
};
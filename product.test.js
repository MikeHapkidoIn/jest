const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product'); // importa las funciones que va a probar


/**
 * resetear los productos antes de cada test.
*/
beforeEach(() => {
    resetProducts();
});

/**
 * También podría reiniciar los productos después de cada test en lugar de antes de cada test. Para eso, pode usar el bloque afterEach
 * afterEach(() => {
 *  resetProducts();
 * });
 */

/**
 * Esta función recibe dos parámetros: el nombre del producto y el precio. Si alguno de los dos parámetros no está definido, la función lanzará un error. Si el producto ya existe, la función también lanzará un error.
 */
describe('Adding Products', () => {
    
    it('should add a product', () => {
        expect(()=>addProduct('manzana', 1)).not.toThrow(); // espera que no lance un error al añadir un producto con nombre y precio
        expect(getProducts()).toEqual([{id:0,name: 'manzana', price: 1}]); // espera que nos devuelva un array con un objeto con los datos del producto
        addProduct('platano',3); // añade un producto para comprobar que se añade correctamente y que el id se incrementa correctamente
        expect(getProducts()).toEqual([{id:0,name: 'manzana', price: 1},{id:1,name: 'platano', price: 3}]); // comprueba que se ha añadedo correctamente
    });
    it('should fail when adding a repeated product', () => {
        addProduct('manzana', 1); // añade un producto para poder comprobar que no se añade un producto repetido
        expect(()=>addProduct('manzana', 1)).toThrow(); // espera que lance un error al añadir un producto cuyo nombre ya existe
    });
    it('should fail when adding a product with no name', () => {
        expect(()=>addProduct(null,3)).toThrow(); // espera que lance un error al añadir un producto con nombre null
    });
    it('should fail when adding a product with no price', () => {
        expect(()=>addProduct('fish',null)).toThrow(); // espera que lance un error al añadir un producto con precio null
    });
    
});

/** Esta función recibe un parámetro: el id del producto. Devuelve un objeto con los datos del producto. Si el producto no existe, la función lanzará un error.
 */

describe('Removing Products', () => {
    it('should remove a product', () => {
        addProduct('platano', 2); // añade un producto para poder borrarlo
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 2}]); // comprueba que se ha añadedo bien
        expect(()=>removeProduct('manzana')).toThrow(); // espera que lance un error al intentar eliminar un producto que no existe
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 2}]); // comprueba que no se ha borrado ningún producto
        expect(()=>removeProduct(0)).not.toThrow(); // espera que no lance un error al eliminar un producto que existe
        expect(getProducts()).toEqual([]); // comprueba que se ha borrado correctamente
    });
});


describe('Getting a single product', () => {
    it('should get a product', () => {
        addProduct('platano', 2); // añade un producto para poder obtenerlo
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 2}]); // comprueba que se ha añadedo correctamente
        expect(()=>getProduct('manzana')).toThrow(); // espera que lance un error al intentar obtener un producto que no existe
        expect(()=>getProduct(0)).not.toThrow(); // espera que no lance un error al obtener un producto que existe
        addProduct('manzana', 3); // añade un producto para poder obtenerlo
        expect(()=>getProduct(1)).not.toThrow(); // espera que no lance un error al obtener un producto que existe
        expect(getProduct(1)).toEqual({id:1,name: 'manzana', price: 3}); // comprueba que se ha obtenido correctamente
    });
});

/**
 * Esta función recibe tres parámetros: el id del producto, el nombre del producto y el precio del producto. Si el producto no existe, la función lanzará un error. Si el nombre o el precio no están definidos, la función actualizará el producto con los datos que sí estén definidos.
 */
describe('Updating Products', () => {
    it('should update a product', () => {
        addProduct('platano', 2); // añade un producto para poder actualizarlo
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 2}]); // comprueba que se ha añadedo correctamente
        updateProduct(0,'manzana', 3); // actualiza el producto
        expect(getProducts()).toEqual([{id:0,name: 'manzana', price: 3}]); // comprueba que se ha actualizado correctamente
    });
    it('should fail when updating a product that does not exist', () => {
        expect(()=>updateProduct(0,'manzana', 3)).toThrow(); // espera que lance un error al intentar actualizar un producto que no existe
    });
    it('should only update the price', () => {
        addProduct('platano', 2); // añade un producto para poder actualizarlo
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 2}]); // comprueba que se ha añadedo correctamente
        updateProduct(0,null, 3); // actualiza el producto
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 3}]); // comprueba que se ha actualizado correctamente
    });
    it('should only update the name', () => {
        addProduct('platano', 2); // añade un producto para poder actualizarlo
        expect(getProducts()).toEqual([{id:0,name: 'platano', price: 2}]); // comprueba que se ha añadedo correctamente
        updateProduct(0,'manzana', null); // actualiza el producto
        expect(getProducts()).toEqual([{id:0,name: 'manzana', price: 2}]); // comprueba que se ha actualizado correctamente     
    });
});
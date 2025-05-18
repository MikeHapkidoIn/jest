# Ejercicio: Testing con Jest

## Explicación

En este ejercicio, crearemos una aplicación simple de administración de productos usando JavaScript. Usaremos los test unitarios para asegurarnos de que nuestro código funcione según lo esperado. Para nuestro testing usaremos Jest.

Aprovechando la práctica de desarrollo guiado por test (TDD), primero escribiremos los test unitarios y luego escribiremos el código para que los test pasen. Podéis ir teesteando las funciones a medida que las vayáis implementando o bien escribir todos los test y luego implementar las funciones.

El objetivo es aprender a escribir test unitarios para funciones simples, por lo que el modo de implementación de las funciones es libre, siempre y cuando se cumplan los requisitos de los test.

La aplicación de administración de productos tendrá las siguientes funciones y variables:

- resetProducts(): reinicia la lista de productos y el id.
- addProduct(name, price): agrega un producto a la lista de productos.
- removeProduct(id): elimina un producto de la lista de productos.
- getProducts(): devuelve todos los productos.
- getProduct(id): devuelve un producto por su id.
- updateProduct(id, name, price): actualiza un producto por su id.
- products: array de productos. Por defecto, estará vacío.
- id: id del producto. Por defecto, será 0. Cada vez que se añada un producto, se incrementará en 1.

Para poder testear las distintas funciones, tendremos que asumir que las funciones **resetProducts** y **getProducts** funcionan correctamente. Dado que la implementación de estas funciones es trivial, probar estas funciones no es necesario.

Los tests deberían cubrir los siguientes casos:

- addProduct
  - debería agregar un producto.
  - debería incrementar el id en 1 cada vez que se añada un producto.
  - debería lanzar un error si el nombre o el precio no están definidos.
  - debería lanzar un error si el producto ya existe.
- removeProduct
  - debería eliminar un producto
  - debería lanzar un error si el producto no existe.
- getProduct
  - debería devolver un producto por su id.
  - debería lanzar un error si el producto no existe.
- updateProduct
  - debería actualizar un producto por su id.
  - debería lanzar un error si el producto no existe.

## Paso 1: Configuración del proyecto

Primero, necesitamos configurar nuestro proyecto. En la terminal, escribimos:

```
npm init -y
npm i jest
```

Piensa si jest, o revisa la documentación, la usaremos solo en desarrollo o producción

Luego, agregamos la siguiente línea en tu archivo `package.json` en la sección "scripts":

```json
"scripts": {
    
}
```

## Paso 2: Creación del archivo de pruebas

Crea un archivo `product.test.js`, aquí vamos a escribir los test unitarios para las funciones definidas en `product.js`.

Inicia importando las funciones en el archivo de prueba `product.test.js`:

```javascript
const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');
```

Vamos a ver cómo construir las pruebas individuales para cada una de las funciones.

Antes de cada test, reiniciaremos los productos para garantizar la independencia de los test. Puedes añadir un bloque `beforeEach` para resetear los productos antes de cada test.

```javascript
beforeEach(() => {
    resetProducts();
});
```

**Nota:** También podríamos reiniciar los productos después de cada test en lugar de antes de cada test. Para eso, podemos usar el bloque `afterEach`

```javascript
afterEach(() => {
    resetProducts();
});
```

`beforeEach` y `afterEach` son métodos de JEST.

### Test crear producto

El primer test que vamos a hacer es el de crear un producto. Para ello, vamos a usar la función **addProduct**. Esta función recibe dos parámetros: el nombre del producto y el precio. Si alguno de los dos parámetros no está definido, la función lanzará un error. Si el producto ya existe, la función también lanzará un error.

### Test eliminar producto

El siguiente test que vamos a hacer es el de eliminar un producto. Para ello, vamos a usar la función **removeProduct**. Esta función recibe un parámetro: el id del producto. Si el producto no existe, la función lanzará un error.

### Test obtener producto

El siguiente test que vamos a hacer es el de obtener un producto. Para ello, vamos a usar la función **getProduct**. Esta función recibe un parámetro: el id del producto. Devuelve un objeto con los datos del producto. Si el producto no existe, la función lanzará un error.

### Test actualizar producto

El siguiente test que vamos a hacer es el de actualizar un producto. Para ello, vamos a usar la función **updateProduct**. Esta función recibe tres parámetros: el id del producto, el nombre del producto y el precio del producto. Si el producto no existe, la función lanzará un error. Si el nombre o el precio no están definidos, la función actualizará el producto con los datos que sí estén definidos.

## Paso 3: Creación del módulo de producto

Crea un archivo `product.js` el cual contendrá la lógica de gestión de productos. Tendrá que exportar las funciones que hemos utilizado en el paso anterior.

## Paso 4: Ejecutar los test

Cada vez que quieras ejecutar los test, ejecuta el comando `npm test` en la terminal. Si todo está bien, deberías ver algo como esto:

```bash
 PASS  ./product.test.js
  Adding Products
    ✓ should add a product (3 ms)
    ✓ should fail when adding a repeated product (8 ms)
    ✓ should fail when adding a product with no name (1 ms)
    ✓ should fail when adding a product with no price (1 ms)
  Removing Products
    ✓ should remove a product (1 ms)
  Getting a single product
    ✓ should get a product (1 ms)
  Updating Products
    ✓ should update a product
    ✓ should fail when updating a product that does not exist (1 ms)
    ✓ should only update the price
    ✓ should only update the name

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.31 s, estimated 1 s
Ran all test suites.
```

Si alguno de los tests falla, verás un mensaje de error en la terminal en el que se indicará qué test ha fallado y por qué.

## PISTAS
Para crear cada producto puedes hacer lo siguiente:
```Javascript 
let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0
```
Piensa bien lo que hace cada función que vamos a crear como añadir, borrar, actualizar... y saber como preaprar esos tests y esas funciones.

Decide la mejor manera de hacerlo. Sientete libre y toma tus propias decisiones para crearlo todo en base a lo que pide el ejercicio.

## Recursos

- [Jest](https://jestjs.io/docs/getting-started)
- [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)

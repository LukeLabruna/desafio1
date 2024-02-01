class ProductManager {

  constructor() {
    this.products = [],
    this.nextId = 1
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    
    if (this.products.some(i => i.code === code)) {
      console.error("Product already exist")
      return
    }

    const id = this.nextId++

    this.products.push({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id
    })
  }

  getProducts() {
    console.log(this.products)
  }

  getProductById(id) {
    const product = this.products.find(i => i.id === id)
    product ? console.log(product) : console.error("Product not found")
  }

}

const newProductManager = new ProductManager()

newProductManager.getProducts()

newProductManager.addProduct("Producto", "Esto es un producto de prueba", 200, "Sin imagen", "abc123", 25)

newProductManager.getProducts()

newProductManager.addProduct("Producto", "Esto es un producto de prueba", 200, "Sin imagen", "abc123", 25)

newProductManager.getProductById(1234)

newProductManager.getProductById(1)
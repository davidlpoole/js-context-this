const bookStore = {
  books: ['Ulysses', 'The Great Gatsby'],
  removeBook(itemsInCart) {
    itemsInCart.forEach((itemTitle) => {
      console.log(`Removing ${itemTitle}`)
      let newList = this.books.filter((book) => book != itemTitle)
      this.books = newList
    })
    this.displayBookstore()
  },
  displayBookstore() {
    const renderTarget = document.getElementById('bookstore')
    const bookList = this.books.map((book) => `<p>${book}</p>`)
    renderTarget.innerHTML = bookList.join('')

    shoppingCart.displayCart(this.removeBook.bind(this))
  },
}

const shoppingCart = {
  itemsInCart: ['Ulysses'],
  handleClick(removeBook) {
    const removeThese = this.itemsInCart
    this.itemsInCart = []
    removeBook(removeThese)
  },
  displayCart(clickHandler) {
    const renderTarget = document.getElementById('cart')
    const itemsInCart = this.itemsInCart.map((item) => `<p>${item}</p>`)
    const checkoutButton = "<button id='checkout'>Check out</button>"

    renderTarget.innerHTML = itemsInCart.join('') + checkoutButton
    document
      .getElementById('checkout')
      .addEventListener('click', () => this.handleClick(clickHandler))
  },
}

bookStore.displayBookstore()

export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books

}
export const getWishList = () => {
    let books = []
    const storedBooks = localStorage.getItem('wishlist')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books

}

export const savedBook = (book) => {
    let books = getBooks()
    const isExist = books.find(b => b.id === book.id)
    if (isExist) {
        return false
    }
    else {
        books.push(book)
        updateWishList(book.id);
        localStorage.setItem('books', JSON.stringify(books))
        // toast.success('Add Successfully')
        return true
    }
}
export const savedWishList = (book) => {
    let books = getWishList()
    let savedBookList = getBooks();
    const isExist = books.find(b => b.id === book.id);
    const savedBookExist = savedBookList.find(b => b.id === book.id);
    // console.log(savedBookExist)
    if (savedBookExist) {
        return false
    }
    else if (isExist) {
        return false
    }
    else {
        books.push(book)
        localStorage.setItem('wishlist', JSON.stringify(books))
        // toast.success('Add Successfully')
        return true
    }
}
export const deleteBook = (id) => {
    let books = getBooks()
    const remaining = books.filter(b => b.id !== id)
    localStorage.setItem('wishlist', JSON.stringify(remaining))
    return
    // toast.success('removed Successfully')
    // return true
}
export const updateWishList = (id) => {
    let books = getWishList()
    const isExist = books.find(b => b.id === id);
    if (isExist) {
        const remaining = books.filter(b => b.id !== id)
        localStorage.setItem('wishlist', JSON.stringify(remaining))
        return
    }
    return

    // toast.success('removed Successfully')
    // return true
}
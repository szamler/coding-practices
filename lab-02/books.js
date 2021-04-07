console.log('this works')

const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=painting";

const container = document.querySelector('.container')

function getBooks(){
  fetch(GOOGLE_BOOKS_URL)
  .then(response => response.json())
  .then(data => {
    renderBook(data);
    });
}

function renderBook(books){
    let bookItem = book.items;

    for(idx in bookItem){
        console.log(bookItem[idx]['volumeInfo']['title'])
    }

    }

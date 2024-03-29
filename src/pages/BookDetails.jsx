import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedBook, savedWishList } from "../utiity";

const BookDetails = ({ listedBooks, setListedBooks, whishlistBooks, setWishListBooks }) => {
  const books = useLoaderData()
  const { id } = useParams()
  const bookDetails = books.find(book => book.id == id)
  const { image, bookName, author, category, review, tags, totalpages, yearOfPublishing, rating } = bookDetails

  const handleListedBook = (book) => {

    const response = savedBook(book)
    if (response) {
      toast.success('Add Successfully')
    }
    else {
      toast.error('Already Exist')
    }

  }

  const handleListedBooks = (book) => {
    const response = savedWishList(book)
    if (response) {
      toast.success('Add Successfully')
    }
    else {
      toast.error('Already Exist')
    }
  }
  return (
    <div>
      <div className=" card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Album" /></figure>
        <div className="card-body flex mt-44">
          <h2 className="card-title">{bookName}</h2>
          <ul>
            <li> <span className="mr-32 font-medium">Author:</span> <span> {author}</span> </li>
            <li> <span className="mr-28 font-medium">Category:</span>  <span> {category} </span> </li>
            <li> <span className="mr-32 font-medium">Review:</span>  <span>{review}</span> </li>
            <li className="flex justify-start">
              Tags: {tags.map((tg) => (
                <div className="ml-36 mr-0">
                  <p className="bg-slate-200	 rounded-xl text-lime-700	font-medium px-2 py-0">#{tg}</p>
                </div>

              ))
              }</li>
            <li> <span className="mr-24 font-medium">TotalPages:</span>  <span> {totalpages} </span></li>
            <li> <span className="mr-32 font-medium">Rating:</span>  <span> {rating} </span></li>
            <li> <span className="mr-12 font-medium">Year of publishing:</span> {yearOfPublishing}</li>
          </ul>
          <div className="card-actions justify-center">
            <button onClick={() => handleListedBook(bookDetails)} className="btn btn-outline px-6 text-black">Read</button>
            <button onClick={() => handleListedBooks(bookDetails)} className="btn btn-active text-white bg-[#59C6D2] btn-accent">Wishlist</button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
<ToastContainer />
export default BookDetails;
import { toast } from 'react-toastify';
import {  useLoaderData,  useNavigate,  useParams } from "react-router-dom"; import Tags from "../Tags/Tags";
import { useState } from 'react';
// import testImage from '../../../public/images/one.jpg';
export default function SingleBookDetails() {
    const data = useLoaderData()
    const { bookId } = useParams()
    const book = data.find((book) => book.bookId == bookId)
    console.log(book)
    const { bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, image } = book;
    
    
    // toast
    const [bookClicked ,setBookClicked] = useState(false);
    const [wishlist,setWishlist] = useState(false);
    const handleRead =()=>{
      if(!bookClicked){
        toast("Book Read Successfully");
        return setBookClicked(true);
      } else{
        toast.error('book already read!')
      }
    }
    const handleWishlist =()=>{
        if(!wishlist){
            toast('Book added to wishlist');
            return setWishlist(true);
        } else{
            toast.error('book already added to wishlist!')
        }
    };
    // shared data 
    
    const navigate = useNavigate()
    const handelNavigate =()=>{
        navigate("/listedBook",{state : {books : book}})
    }
    const handleshared =()=>{
        handleRead()
        handelNavigate()
    }
   

    return (
        <div className=" max-w-[90%] mt-20    flex m-auto justify-evenly">
            <div className="h-[720px] w-[580px] rounded-xl bg-[#1313130D] flex justify-center items-center">

                <img className="h-[564px] w-[400px]  " src={image}  alt="" />
            </div>
            
            <div className="w-[600px] ">
                <h1 className="text-[40px] font-bold ">{bookName}</h1>
                <h4 className="text-[20px] font-medium mt-4  border-b pb-4 border-dotted border-gray-500"> By: {author}</h4>
                <h4 className="text-[20px] pb-4 font-medium mt-4 border-b  border-dotted border-gray-500">{category}</h4>
                <p className="mb-12 mt-8 text-[20px]"><span className="font-bold text-[26px]"  >Review</span> {review}</p>
                <div className="flex pb-8  gap-8 border-b  border-dotted border-gray-500">
                    {
                        tags.map((tag, index) => <Tags key={index} tag={tag}></Tags>)
                    }
                </div>
                <div className="text-[16px] flex  justify-between ">
                    <div className=" pl-10">
                        <p className="pt-4">Number of Pages :</p>
                        <p className="pt-4">Publisher :</p>
                        <p className="pt-4">Year of Publishing : </p>
                        <p className="pt-4">Rating : </p>
                    </div>
                    <div className=" pr-10 ">
                        <p className="pt-4">{totalPages}</p>
                        <p className="pt-4">{publisher}</p>
                        <p className="pt-4">{yearOfPublishing}</p>
                        <p className="pt-4">{rating}</p>
                    </div>
                </div>
                <div className="flex gap-12 mt-16">
                    <button  onClick={handleshared} className="btn btn-ghost px-8 border-red-500">Read</button>
                    <button onClick={handleWishlist} className="btn bg-[#50B1C9]  text-[white]">Wishlist</button>
                </div>
            </div>
        </div>
    );
}



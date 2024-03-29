import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import PropTypes from 'prop-types';
const Book = ({book}) => {

    const {image, id, tags, bookName, author, category,publisher, rating} = book
    

    return (
        <div>
            
			<Link 
            to={`/${id}`}
             className="max-w-sm mx-auto shadow-lg bg-slate-100 group transition  hover:scale-105 border-primary hover:border-secondary border-opacity-30% rounded-lg group hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full  rounded h-56" src={image} />
                <div className="p-6 space-y-6 bg-white text-black">
					<h3 className="text-2xl text-black font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
					<div className="flex justify-between">
                        <span className=" bg-gray-300 rounded-3xl p-2">{tags}</span>
                        <span  className=" bg-gray-300 rounded-3xl p-2">{publisher}</span>
                    </div>
                    <p>By: {author}</p>
                    <div className="flex justify-between">
                        <span>{category}</span>
                       <span>{rating} <FcRating></FcRating> </span>
                    </div>
			
				</div>
			</Link>
        </div>
    );
};
  

Book.propTypes={
  book: PropTypes.object.isRequired,
}
export default Book;
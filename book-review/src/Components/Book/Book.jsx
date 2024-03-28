import { FaRegStar } from "react-icons/fa6";
import Tags from "../Tags/Tags";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Book({ book }) {
    const { tags, bookName, author, rating, image, category,bookId } = book;
    console.log(image)
    return (
        <Link to={`/book/${bookId}`} className="hover:scale-105 transition">
            <div className="card bg-base-100 shadow-xl ">
                <div className=" border bg-[#F3F3F3] rounded-3xl  mx-8 ">
                    <figure><img className="h-[400px]  p-8 w-[300px]" src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <div className="flex gap-8 ">
                        {
                            tags.map((tag, index) => <Tags key={index} tag={tag}></Tags>)
                        }
                    </div>
                    <h1 className="text-[24px] py-4  font-bold">{bookName}</h1>
                    <p className="font-medium text-[16px]">By: {author}</p>
                    <div className="card-actions flex justify-between pt-4 border-t border-grey-800 border-dashed">
                        <div className="badge mt-8 font-medium text-[16px]">{category}</div>
                        <div className="badge mt-8 gap-8 font-medium text-[16px]"> {rating}
                            <FaRegStar /></div>
                    </div>
                </div>              
            </div>
        </Link>
    )
}
Book.propTypes = {
    book: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        bookId: PropTypes.string.isRequired
    }).isRequired
};
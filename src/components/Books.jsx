import { useLoaderData } from "react-router-dom";
import Book from "./Book";



const Books = ({listedBooks,setListedBooks,whishlistBooks,setWishListBooks}) => {
    const books = useLoaderData()
    return (
        <div>
           <section className=" text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 21, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a> */}
			
            {
                books.map(book=> (<Book key = { book.id} book={book} listedBooks={listedBooks} setListedBooks={setListedBooks} whishlistBooks={whishlistBooks} setWishListBooks={setWishListBooks}></Book>))
            }
			</div>
		
	</div>
</section>
        </div>
    );
};

export default Books;
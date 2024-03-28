import { useState } from "react";
import { useLocation } from "react-router-dom";


export default function ReadBooks() {
    const [index, setIndex] = useState();

    const location = useLocation()
    // const { image,author,tags,totalPages, rating} = location.state.books
    console.log(location.state)
    return (
        // sort method will be added here 

        <div className=" max-w-[90%] m-auto">
            {/* <div className=" max-w-[90%] m-auto flex justify-center">
                <details >
                    <summary className="bg-green-600 text-white w-28 p-4 font-bold">Sort By</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </div> */}
            {/* tabs  */}

            <div>
                {/* <div className="rounded-lg flex    items-center -mx-4 overflow-x-auto overflow-y-hidden   flex-nowrap mt-8 ">
                    <Link to={'/'} onClick={() => setIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                        <span>Read Books</span>
                    </Link>
                    <Link onClick={() => setIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <span>Wishlist Books</span>
                    </Link>
                </div> */}

                {/* read books data */}
                

            </div>
        </div>
    )
}

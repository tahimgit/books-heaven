import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { getBooks, getWishList } from "../utiity";
import { useNavigate } from "react-router-dom";




const ListedBooks = () => {
  // const book = useLoaderData();
  const navigate = useNavigate();
  //    const {id} = useParams()
  const [listedBook, setListedBook] = useState([]);
  const [whislistBooks, setWhisListedBooks] = useState([]);
  // const { image, bookName, author, category, review, tags, yearOfPublishing, rating } = book
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    const savedBooks = getBooks()
    const wishLists = getWishList()
    setListedBook(savedBooks)
    setWhisListedBooks(wishLists)
  }, [])
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const sortBooksByRating = () => {
    const sortedBooks = [...listedBook].sort((a, b) => b.rating - a.rating);
    const sortedWishList = [...whislistBooks].sort((a, b) => b.rating - a.rating);
    setListedBook(sortedBooks);
    setWhisListedBooks(sortedWishList)
  };
  const sortBooksByPages = () => {
    const sortedBooks = [...listedBook].sort((a, b) => b.totalpages - a.totalpages);
    const sortedWishList = [...whislistBooks].sort((a, b) => b.totalpages - a.totalpages);
    setListedBook(sortedBooks);
    setWhisListedBooks(sortedWishList)
  };
  const sortBooksByYear = () => {
    const sortedBooks = [...listedBook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    const sortedWishList = [...whislistBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    setListedBook(sortedBooks);
    setWhisListedBooks(sortedWishList)
  };
  return (
    <div className="px-12">
      <div className="bg-blue-300	py-6 rounded-lg	">
        <h2 className="text-center text-black	 text-xl	font-medium		">Listed Books</h2>
      </div>

      <div className=" max-w-[90%] m-auto flex justify-center my-6">
        <details >
          <summary className="bg-green-600 text-white w-28 p-4 font-bold">Sort By</summary>
          <ul className="p-2 cursor-pointer bg-slate-200">
            <li className="py-1" onClick={sortBooksByRating}><a>Rating</a></li>
            <li className="py-1" onClick={sortBooksByPages}><a>Number of pages</a></li>
            <li className="py-1" onClick={sortBooksByYear}><a>Publisher year</a></li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked={activeTab === 1}
          onChange={() => handleTabChange(1)} />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {
            listedBook.map((item, index) => (
              <div key={item.id} className=" card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-44 w-44" src={item.image} alt="Album" /></figure>
                <div className="card-body flex mt-44">
                  <h2 className="card-title">{item.bookName}</h2>
                  <ul>
                    <li>By :{item.author} </li>
                    <div className="flex my-2">
                      <li>Tag:
                        <div className="flex justify-start -mt-6 ml-6">
                          {item.tags.map((tg, ind) => (
                            <div key={ind} className="mx-4">
                              <p className="bg-slate-200	 rounded-xl text-lime-700	font-medium px-2 py-0">#{tg}</p>
                            </div>
                          ))}
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span> <FaLocationPin /> </span>
                        <p>Year of publishing:{item.yearOfPublishing}
                        </p> </li>
                    </div>
                    <div className="flex">
                      <li className="flex items-center">
                        <span><FaUsers ></FaUsers> </span>
                        <p>Publisher: {item.publisher}</p>
                      </li>
                      <li className="flex ml-4 items-center">
                        <span><MdOutlineContactPage  ></MdOutlineContactPage> </span>
                        <p> Pages: {item.totalpages}</p></li>
                    </div>

                    <div className="flex my-2 items-center">
                      <li className="bg-teal-100	rounded-xl text-lime-700	font-medium px-2 py-3 mr-2">Category: {item.category}</li>
                      <li className="bg-amber-200	rounded-xl text-lime-700	font-medium px-2 py-3 mx-2">rating: {item.rating}</li>
                      <button className="btn bg-lime-600 text-white" onClick={() => navigate(`/${item.id}`)}>view details </button>
                    </div>

                  </ul>

                </div>
              </div>
            ))
          }

        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked={activeTab === 2}
          onChange={() => handleTabChange(2)} />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {
            whislistBooks.map((item, index) => (
              <div key={item.id} className=" card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-44 w-44" src={item.image} alt="Album" /></figure>
                <div className="card-body flex mt-44">
                  <h2 className="card-title">{item.bookName}</h2>
                  <ul>
                    <li>By :{item.author} </li>
                    <div className="flex my-2">
                      <li>Tag:
                        <div className="flex justify-start -mt-6 ml-6">
                          {item.tags.map((tg, ind) => (
                            <div key={ind} className="mx-4">
                              <p className="bg-slate-200	 rounded-xl text-lime-700	font-medium px-2 py-0">#{tg}</p>
                            </div>
                          ))}
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-1"> <FaLocationPin /> </span>
                        <p>Year of publishing:{item.yearOfPublishing}
                        </p> </li>
                    </div>
                    <div className="flex">
                      <li className="flex items-center">
                        <span className="mr-1"><FaUsers ></FaUsers> </span>
                        <p>Publisher: {item.publisher}</p>
                      </li>
                      <li className="flex ml-4 items-center">
                        <span className="mr-1"><MdOutlineContactPage></MdOutlineContactPage> </span>
                        <p> Pages: {item.totalpages}</p></li>
                    </div>

                    <div className="flex my-2 items-center">
                      <li className="bg-teal-100	rounded-xl text-lime-700	font-medium px-2 py-3 mr-2">Category: {item.category}</li>
                      <li className="bg-amber-200	rounded-xl text-lime-700	font-medium px-2 py-3 mx-2">rating: {item.rating}</li>
                      <button className="btn bg-lime-600 text-white" onClick={() => navigate(`/${item.id}`)}>view details </button>
                    </div>

                  </ul>

                </div>
              </div>
            ))
          }
        </div>
      </div >


    </div >
  );
};

export default ListedBooks;
import { useState } from "react";
import Banner from "../components/Banner";
import Books from "../components/Books";



const Home = () => {
    const [listedBooks, setListedBooks] = useState([])
    const [whishlistBooks, setWishListBooks] = useState([])
    return (
        <div>
            <Banner></Banner>
            <Books listedBooks={listedBooks} setListedBooks={setListedBooks} whishlistBooks={whishlistBooks} setWishListBooks={setWishListBooks}></Books>
        </div>
    );
};

export default Home;
import { useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';
import { getBooks } from "../utiity";
const PageToRead = () => {
    const [listedBook, setListedBook] = useState([]);
    useEffect(() => {
        const savedBooks = getBooks();
        setListedBook(savedBooks)
    },[])
    return (
        <div className='flex justify-center items-center'>
       <div className='border-2 border-gray-400 p-8'>
       <LineChart width={600} height={400} data={listedBook}>
         <Line dataKey="totalpages" stroke="#8884d8"></Line>
        </LineChart>
       </div>
        </div>
    );
};

export default PageToRead;
import { useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';
import { getBooks } from "../utiity";
const PageToRead = () => {
    const studentData = [
        { student: 1, marks: 85 },
        { student: 2, marks: 72 },
        { student: 3, marks: 90 },
        { student: 4, marks: 78 },
        { student: 5, marks: 95 },
        { student: 6, marks: 60 },
        { student: 7, marks: 88 },
        { student: 8, marks: 79 },
        { student: 9, marks: 83 },
        { student: 10, marks: 91 }
    ]; 
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
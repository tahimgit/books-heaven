import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import LIstedBook from './Pages/LIstedBook.jsx';
import PagesToRead from './Pages/PagesToRead.jsx';
import Home from './Pages/Home.jsx';
import SingleBookDtails from './Components/SingleBookDtails/SingleBookDtails.jsx';

import { ToastContainer, } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ReadBooks from './Pages/ReadBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
       
        
      },
      {
        path: '/book/:bookId',
        element: <SingleBookDtails></SingleBookDtails>,
        loader: ()=> fetch('../Books.json')
        // loader: ({params})=> fetch(`\Book-Review\public\Books.json/${params.bookId}`),
        
      },
      {
        path: '/listedBook',
        element: <LIstedBook></LIstedBook>,
        children:[
          {
            path: '',
            element: <ReadBooks></ReadBooks>,
            
          },
          
        ]
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)


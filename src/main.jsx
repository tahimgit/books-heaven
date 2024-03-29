import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import "./index.css";
import Blogs from "./pages/Blogs";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import PageToRead from "./pages/PageToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('books.json')
      },
      {
        path: '/:id',
        element:<BookDetails></BookDetails>,
        loader:() => fetch('/books.json')
      },
      {
        path: '/listed books',
        element: <ListedBooks></ListedBooks>,
        loader:() => fetch('/books.json')
      },
      {
        path: '/page to read',
        element: <PageToRead></PageToRead>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);

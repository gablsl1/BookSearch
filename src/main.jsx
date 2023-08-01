import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import BookList from './components/BookList/BookList.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/book',
                element: <BookList />,
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

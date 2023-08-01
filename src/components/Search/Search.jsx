import { useState } from 'react';

import axios from 'axios';

import BookList from '../BookList/BookList';

import './Search.css';

const Search = () => {
    const [searchKey, setSearchKey] = useState('');
    const [book, setBook] = useState([]);
    const [apiKey, setApiKey] = useState('YOUR_API_KEY');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchKey}&key=${apiKey}`
            )
            .then((response) => {
                setBook(response.data.items);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='search'>
            <div className='form-section'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Enter a book'
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <BookList book={book} />
        </div>
    );
};

export default Search;

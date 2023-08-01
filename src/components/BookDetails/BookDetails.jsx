import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import coverNotFound from '../../assets/cover_not_found.jpg';

import './BookDetails.css';

const BookDetails = () => {
    const [book, setBook] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((e) => console.log(e));
    }, []);

    const handleClick = () => {
        return navigate('/');
    };

    return (
        <div className='bookdetails'>
            <button type='submit' onClick={handleClick}>
                Return
            </button>

            <div className='text-section'>
                <img
                    src={
                        book.volumeInfo?.imageLinks
                            ? book.volumeInfo.imageLinks.thumbnail
                            : coverNotFound
                    }
                    // alt={book.volumeInfo.title}
                />

                <div className='info-title'>
                    <h1>
                        {book.volumeInfo?.title
                            ? book.volumeInfo.title
                            : 'No title'}
                    </h1>
                </div>

                <div className='info'>
                    <label>Author:</label>
                    <p>
                        {book.volumeInfo?.authors[0]
                            ? book.volumeInfo.authors[0]
                            : 'No author'}
                    </p>
                </div>

                <div className='info'>
                    <label>Publisher:</label>
                    <p>
                        {book.volumeInfo?.publisher
                            ? book.volumeInfo.publisher
                            : 'No publisher'}
                    </p>
                </div>

                <div className='info info-publishedData'>
                    <label>Published data:</label>
                    <p>
                        {book.volumeInfo?.publishedData
                            ? book.volumeInfo.publishedData
                            : 'No published data'}
                    </p>
                </div>

                <div className='info'>
                    <label>Description:</label>
                    <p>
                        {book.volumeInfo?.description
                            ? book.volumeInfo.description
                            : 'No description'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;

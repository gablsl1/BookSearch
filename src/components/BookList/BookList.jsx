import { Link } from 'react-router-dom';

import coverNotFound from '../../assets/cover_not_found.jpg';

import './BookList.css';

const BookList = (props) => {
    return (
        <div className='booklist'>
            {props.book.map((data) => (
                <div className='book' key={data.id}>
                    <Link to={`/book/${data.id}`}>
                        <img
                            src={
                                data.volumeInfo?.imageLinks
                                    ? data.volumeInfo.imageLinks.thumbnail
                                    : coverNotFound
                            }
                            alt={data.volumeInfo.title}
                        />
                        <h2>{data.volumeInfo.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BookList;

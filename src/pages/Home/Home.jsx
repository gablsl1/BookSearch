import Search from '../../components/Search/Search';

import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to Bookhub. Search and find every book!</h1>
            <Search />
        </div>
    );
};

export default Home;

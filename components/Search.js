import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const SearchForm = ({ searchTerm }) => {
    const router = useRouter();

    const [ searchQuery, setSearchQuery ] = useState('');
    
    useEffect(() => {
        setSearchQuery(searchTerm)
    }, [searchTerm])
    
    const handleSearchFormSubmit = (event) => {
        event.preventDefault();
        router.push(`/search/${searchQuery}/page/1`);
    }

    return (
        <>
            <form className='search-container' onSubmit={handleSearchFormSubmit}>
                <input type='text' placeholder='Search...' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}></input>
                <input type='submit' value='Search' onClick={handleSearchFormSubmit}></input>
            </form>
        </>
    );
};

export default SearchForm;
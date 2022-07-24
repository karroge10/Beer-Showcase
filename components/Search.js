import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from 'react';

const SearchForm = () => {
    const router = useRouter();
    
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ pageNumber, setPageNumber ] = useState(1);

    const handleSearchFormSubmit = (event) => {
        event.preventDefault();
        router.push(`/search/${searchQuery}/page/${pageNumber}`);
    }


    console.log(searchQuery);
    return (
        <>
            <form className='search-container' onSubmit={handleSearchFormSubmit}>
                <input type='text' placeholder='Search...' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}></input>
                {/* <Link href={`/search?term=${searchQuery}`} text="Search"></Link> */}
                <input type='submit' value='Search' onClick={handleSearchFormSubmit}></input>
            </form>
        </>
    );
};

export default SearchForm;
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Custom404 from "../pages/404";
import styles from '../styles/Search.module.scss';

const SearchForm = ({ searchTerm }) => {
    const router = useRouter();

    const [ searchQuery, setSearchQuery ] = useState('');
    
    useEffect(() => {
        if (searchQuery !== undefined || searchQuery !== ' '){
            setSearchQuery(searchTerm)
        } else{
            setSearchQuery(undefined)
        }
        console.log(searchQuery);
    }, [searchTerm])
    
    const handleSearchFormSubmit = (event) => {
        console.log(searchQuery);
        if (searchQuery === undefined || searchQuery === ' ' || searchQuery === ''){
            alert('This field cannot be empty.')
        } else {
            router.push(`/search/${searchQuery}/page/1`);
        }
        event.preventDefault();
    }

        return (
        <>
            <form className={styles.searchForm} onSubmit={handleSearchFormSubmit}>
                <input className={styles.input} type='text' placeholder='Your Drink...' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}></input>
                <input className={styles.button} type='submit' value='Search' onClick={handleSearchFormSubmit}></input>
            </form>
        </>
    );
    
};

export default SearchForm;
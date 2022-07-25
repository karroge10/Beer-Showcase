import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import styles from '../styles/Search.module.scss';

const SearchForm = ({ searchTerm, flag}) => {
    const router = useRouter();

    const [ searchQuery, setSearchQuery ] = useState('');
    
    useEffect(() => {
        if (searchQuery !== undefined || searchQuery !== ' '){
            setSearchQuery(searchTerm)
        } else{
            setSearchQuery(undefined)
        }
    }, [searchTerm])
    
    const handleSearchFormSubmit = (event) => {
        if (searchQuery === undefined || searchQuery === ' ' || searchQuery === ''){
            alert('This field cannot be empty.')
        } else if (searchQuery === 'ad') {

            router.push(`/search/${searchQuery}/page/1`);
            alert('Disable AdBlock and refresh the page if getting an error. \nAdBlock may filter words like "ad".')
        } else {
            router.push(`/search/${searchQuery}/page/1`);
        }
        event.preventDefault();
    }

    if (!flag){
        return (
            <>
                <form className={styles.searchForm} onSubmit={handleSearchFormSubmit}>
                    <input className={styles.input} type='text' placeholder='Your Drink...' onChange={(event) => setSearchQuery(event.target.value)}></input>
                    <input className={styles.button} type='submit' value='Search' onClick={handleSearchFormSubmit}></input>
                </form>
                <p>Search Results for: "{searchTerm}"</p>
            </>
        );
    } else {
        return (
            <>
                <form className={styles.searchForm} onSubmit={handleSearchFormSubmit}>
                    <input className={styles.input} type='text' placeholder='Your Drink...' onChange={(event) => setSearchQuery(event.target.value)}></input>
                    <input className={styles.button} type='submit' value='Search' onClick={handleSearchFormSubmit}></input>
                </form>
            </>
        );
    }
        

    
};

export default SearchForm;
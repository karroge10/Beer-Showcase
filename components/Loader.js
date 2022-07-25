import styles from '../styles/Loader.module.scss'
import MainContainer from './MainContainer';
import logo from '../styles/images/loading.svg'
import SearchForm from './SearchForm';

const Loader = () => {
    return (    
        <MainContainer pageName="Loading">
            <SearchForm flag={"no-search"}/>
                    <div className={styles.loaderContainer}>
                        <img src={logo.src}/>
                    </div>
        </MainContainer>
            
    );
};

export default Loader;
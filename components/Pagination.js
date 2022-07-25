import styles from '../styles/Page.module.css';
import { useRouter } from "next/router";

const Pagination = ({pageNumber, pageQuery, maxPage}) => {
    const router = useRouter();

    // If pagination is used from /search/, pageQuery is passed. If from /page/ then we have to set it as empty string.
    if (!pageQuery){
        pageQuery = '';
        maxPage = 17;
    }

    return (
        <>
            <div className='pagination-container'>
                <a className={pageNumber < 1 ? styles.disabled : styles.active} onClick={() => {
                    if (pageNumber > 2){
                        router.push(`${pageQuery}/page/${pageNumber - 1}`).then(() => window.scrollTo(0,0))
                    } else if (pageNumber === 2) {
                        if (pageQuery == ''){
                            router.push('/').then(() => window.scrollTo(0,0))
                        } else {
                            router.push(`${pageQuery}/page/1`).then(() => window.scrollTo(0,0))
                        }
                    }
                }}>Previous</a>
                <a className='page-button'>{pageNumber}</a>
                <a className={pageNumber >= maxPage ? styles.disabled : styles.active} onClick={() => {
                    if (pageNumber < maxPage ){
                        router.push(`${pageQuery}/page/${pageNumber + 1}`).then(() => window.scrollTo(0,0))
                    }
                }}>Next</a>
            </div>
        </>
    );
};

export default Pagination;
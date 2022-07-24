import Link from 'next/link'
import styles from '../styles/Page.module.css';
import { useRouter } from "next/router";

const Pagination = ({pageNumber}) => {
    const router = useRouter();
    return (
        <>
            <div className='pagination-container'>
                <a className={pageNumber < 1 ? styles.disabled : styles.active} onClick={() => {
                    if (pageNumber > 2){
                        router.push(`/page/${pageNumber - 1}`).then(() => window.scrollTo(0,0))
                    } else if (pageNumber === 2) {
                        router.push('/').then(() => window.scrollTo(0,0))
                    }
                }}>Previous</a>
                <a className='page-button'>{pageNumber}</a>
                <a className={pageNumber >= 14 ? styles.disabled : styles.active} onClick={() => {
                    if (pageNumber < 13){
                        router.push(`/page/${pageNumber + 1}`).then(() => window.scrollTo(0,0))
                    }
                }}>Next</a>
            </div>
        </>
    );
};

export default Pagination;
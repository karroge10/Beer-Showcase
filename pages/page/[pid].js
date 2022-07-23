import MainContainer from "../../components/MainContainer";
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../../styles/Page.module.css';

const Index = ({items, pageNumber }) => {
    const router = useRouter();
    return items.length ? (
        <MainContainer pageName={"Beer Selection"}>
            <h1>Beer Selection</h1>
            <ul>
                {items.map((item) => 
                    <li key={item.id}>
                        <Link href={`/items/${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>)}
            </ul>
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
        </MainContainer>
    ) : (
        <MainContainer pageName={"Error"}>
            <h1>No items for this page number.</h1>
        </MainContainer>
    )
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pid;

    if (!pageNumber || pageNumber < 1 || pageNumber > 13) {
        return {
            props: {
                items: [],
                pageNumber: 1,
            },
        };
    }

    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}`)
    const items = await response.json();

    return {
        props: {
            items: items,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};

export default Index;
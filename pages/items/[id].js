import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/Item.module.scss'
import Custom404 from '../404'

export default function Item ({item}) {
    if (item.error){
        return (<Custom404 />)
    } else {
        item = item[0];
        const {query} = useRouter();
        return (
            <MainContainer pageName={item.name} keywords={item.tagline}>
                <div className={styles.item}>
                    <h1>Beer id: {query.id}</h1>
                    <div>
                        Beer name: {item.name}
                    </div>
                </div>
            </MainContainer>
        )
    }
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`);
    const item = await response.json();

    return {
        props: {item}, // will be passed to the page component as props
    }
}
import ItemContainer from "../../components/ItemContainer";
import MainContainer from "../../components/MainContainer";
import Custom404 from '../../components/404'

export default function Item ({item}) {
    if (item.error){
        return (<Custom404 />)
    } else {
        item = item[0];
        return (
            <MainContainer pageName={item.name} keywords={item.tagline}>
                <ItemContainer item={item} />
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
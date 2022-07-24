import MainContainer from "../../components/MainContainer";
import Pagination from "../../components/Pagination";
import Link from 'next/link';

const Items = ({items, pageNumber }) => {
    if (items.error){
        return (<h1>ОШИБКА</h1>)
    } else {
        return (
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
                <Pagination pageNumber={pageNumber}/>
            </MainContainer>
        )
    };
};

export async function getServerSideProps({params}) {
    let items = [];
    for (let i = 1; i < 14; i++) {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${i}`);
        const searchResult = await response.json();
        searchResult.forEach(item => {
            if (item.name.toUpperCase().match(params.slug.toUpperCase())){
                items.push(item)
            }
            return items;
        });
    }
    
    // !!! Items length can be bigger than 25. Add pagination feature to display all !!!

    return {
        props: {items}, // will be passed to the page component as props
    }
}

export default Items;
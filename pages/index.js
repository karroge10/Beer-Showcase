import MainContainer from '../components/MainContainer';
import Pagination from '../components/Pagination';
import Link from 'next/link'
import SearchForm from '../components/Search';


const Index = ({items}) => {
    return (
        <MainContainer pageName={"Beer Selection"}>
            <h1>Beer Selection</h1>
            <SearchForm />
            <ul>
                {items.map(item => 
                    <li key={item.id}>
                        <Link href={`/items/${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>)}
            </ul>
            <Pagination pageNumber={1}/>
        </MainContainer>
    )
};

export default Index;

export async function getStaticProps(context) {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const items = await response.json();

    return {
        props: {items}, // will be passed to the page component as props
    }
}
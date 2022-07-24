import MainContainer from '../components/MainContainer';
import Pagination from '../components/Pagination';
import SearchForm from '../components/Search';
import ItemsContainer from '../components/ItemsContainer';

const Index = ({items}) => {
    return (
        <MainContainer pageName={"Beer Selection"} keywords={"Home Page"}>
            <h1 className='page-header'>Our Beer Selection</h1>
            <SearchForm />
            <ItemsContainer items={items}/>
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
import MainContainer from "../../components/MainContainer";
import Pagination from "../../components/Pagination";
import Custom404 from "../404";
import ItemsContainer from "../../components/ItemsContainer";
import SearchForm from "../../components/SearchForm";

const Items = ({items, pageNumber }) => {
    if (items.error || items.length === 0){
        return (<Custom404 />)
    } else {
        return (
            <MainContainer pageName={"Beer Selection"}>
                <SearchForm />
                <Pagination pageNumber={pageNumber}/>
                <ItemsContainer items={items}/>
                <Pagination pageNumber={pageNumber}/>
            </MainContainer>
        )
    };
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pid;

    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=20`)
    const items = await response.json();

    return {
        props: {
            items: items,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};

export default Items;
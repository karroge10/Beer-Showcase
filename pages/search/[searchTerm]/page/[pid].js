import MainContainer from "../../../../components/MainContainer";
import Pagination from "../../../../components/Pagination";
import SearchForm from "../../../../components/SearchForm";
import Custom404 from "../../../../components/404";
import ItemsContainer from "../../../../components/ItemsContainer";

const SearchedItems = ({ items, pageNumber, searchTerm, lastPage }) => {
    if (items.error || items.length === 0 || searchTerm == undefined){
        return (<Custom404 />)
    } else {
        return (
            <MainContainer pageName={'Seach Results For "' + searchTerm + '"'}>
                <SearchForm searchTerm={searchTerm} />
                <Pagination pageNumber={pageNumber} pageQuery={`/search/${searchTerm}`} maxPage={lastPage} />
                <ItemsContainer items={items}/>
                <Pagination pageNumber={pageNumber} pageQuery={`/search/${searchTerm}`} maxPage={lastPage} />
            </MainContainer>
        )
    };
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pid;
    let items = [];

    for (let i = 1; i < 18; i++) {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=20`);
        const searchResult = await response.json();
        searchResult.forEach(item => {
            if (item.name.toUpperCase().match(pageContext.query.searchTerm.toUpperCase())){
                items.push(item)
            }
            return items;
        });
    }
    items.sort((a, b) => a.name.localeCompare(b.name));

    // Slice items list for 20 items per page
    return {
        props: {
            items: items.slice(20 * (pageNumber - 1), 20 * pageNumber),
            pageNumber: Number.parseInt(pageNumber),
            searchTerm: pageContext.query.searchTerm,
            lastPage: parseInt(items.length / 20) + 1,
        },
    };
};

export default SearchedItems;
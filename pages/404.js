import MainContainer from '../components/MainContainer';
import SearchForm from '../components/SearchForm';

const Custom404 = () => {
    return (
        <MainContainer pageName="Craft Beer Delivery">
            <SearchForm />
            <div className="error-message">
                <h1>There has been an error.</h1>
                <h1>No items were found on this page.</h1>
            </div>
        </MainContainer>
    )
};

export default Custom404;
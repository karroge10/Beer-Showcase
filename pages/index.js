import MainContainer from '../components/MainContainer';
import Link from 'next/link'

const Index = ({items}) => {
    return (
        <MainContainer pageName={"Beer Selection"}>
            <h1>Beer Selection</h1>
            <ul>
                {items.map(item => 
                    <li key={item.id}>
                        <Link href={`/items/${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>)}
            </ul>
            <div className='pagination-container'>
                <ul className='pagination-list'>
                    <li><a className='page-button'>Previous</a></li>
                    <li><a className='page-button'>1</a></li>
                    <Link href={`/page/${2}`}>
                        <a>Next Page</a>
                    </Link>
                </ul>
            </div>
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
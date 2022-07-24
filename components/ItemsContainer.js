import Link from 'next/link';

const ItemsContainer = ({items}) => {
    return (
        <>
            <ul className='items-container'>
                {items.map(item => 
                    <li key={item.id} className='item-container'>
                        <Link href={`/items/${item.id}`}>
                            <p className='item-name'>{item.name}</p>
                        </Link>
                        <img src={item.image_url}/>
                        <p className='item-description'>{item.description}</p>
                    </li>)}
            </ul>
        </>
    );
};

export default ItemsContainer;
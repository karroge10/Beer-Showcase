import Link from 'next/link';
import styles from '../styles/Items.module.scss'

const ItemsContainer = ({items}) => {
    return (
        <>
            <ul className={styles.itemsContainer}>
                {items.map(item => 
                    <li key={item.id} className={styles.itemContainer}>
                        <Link href={`/items/${item.id}`}>
                            <div className={styles.imageContainer}>
                                <img className={styles.image} src={item.image_url}/>
                            </div>
                        </Link>
                        <div className={styles.itemInfo}>
                            <div className={styles.itemNameContainer}>
                                <Link href={`/items/${item.id}`}>
                                    <p className={styles.itemName}>{item.name}</p>
                                </Link>
                            </div>
                            <p>{item.description.substring(0, 140) + '...'}</p>
                        </div>
                    </li>)}
            </ul>
        </>
    );
};

export default ItemsContainer;
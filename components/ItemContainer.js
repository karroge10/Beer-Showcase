import styles from '../styles/Item.module.scss'
import { useRouter } from "next/router";

const ItemContainer = ({item}) => {
    console.log(item)
    const {query} = useRouter();
    return (
        <>
            <div className={styles.item}>
                <h1>Beer name: {item.name}</h1>
                <p>{item.tagline}</p>
                <p>{item.description}</p>
                <p>{item.abv}</p>
                <p>{item.food_pairings}</p>
                <img src={item.image_url} />
            </div>
        </>
    );
};

export default ItemContainer;
import styles from '../styles/Item.module.scss'

const ItemContainer = ({item}) => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={item.image_url} />
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.name}>{item.name}</h1>
                    <i className={styles.tagline}>{item.tagline}</i>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.abv}>ABV: {item.abv}</p>
                    <p className={styles.foodPairings}>Food pairings:</p>
                    {item.food_pairing.map((pairing, index) => 
                        <li key={index}>{pairing}</li>
                    )}
                </div>

                
            </div>
        </>
    );
};

export default ItemContainer;
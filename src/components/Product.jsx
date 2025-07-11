import styles from "./Product.module.css";

export function Product({ product }) {
  return (
    <div className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>Price: ${product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <button className={styles.button}>Adicionar ao carrinho</button>
    </div>
  );
}

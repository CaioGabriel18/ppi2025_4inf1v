import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h1>TJA Megastore</h1>
      </Link>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link to="/login" className={styles.link}>
          <button className={styles.navButton}>Login</button>
        </Link>

        <Link to="/register" className={styles.link}>
          <button className={styles.navButton}>Cadastro</button>
        </Link>

        <Link to="/manage-products" className={styles.link}>
          <button className={styles.navButton}>Gerenciar Produtos</button>
        </Link>


        <Link to="/cart" className={styles.link}>
          <div className={styles.cartInfo}>
            <div className={styles.cartIcon}>
              <ShoppingBasket size={32} />
              {cart.length > 0 && (
                <span className={styles.cartCount}>
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
            <p>
              Total: R${" "}
              {cart
                .reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

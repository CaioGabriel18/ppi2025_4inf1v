import styles from "./Cart.module.css";

export function Cart({ cart, updateQuantity, removeAll }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>PRODUTO E SERVIÇO</h2>
      <button
        onClick={removeAll}
        style={{
          color: "#e53935",
          border: "2px solid #e53935",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          fontSize: "1.6rem",
          background: "#fff",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
      >
        REMOVER TODOS OS PRODUTOS
      </button>
      {cart.length === 0 ? (
        <p style={{ fontSize: "1.8rem" }}>Seu carrinho está vazio.</p>
      ) : (
        <ul style={{ width: "100%" }}>
          {cart.map((product) => (
            <li
              key={product.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                borderBottom: "2px solid #eee",
                padding: "2rem 0",
                fontSize: "1.6rem",
              }}
            >
              <img src={product.thumbnail} alt={product.title} width={120} style={{ borderRadius: "1rem" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: "2rem" }}>{product.title}</h3>
                <p style={{ margin: "0.5rem 0", fontSize: "1.4rem" }}>
                  Preço unitário: <b>$ {product.price}</b>
                </p>
              </div>
              <div>
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  style={{ padding: "0.7rem", marginRight: "0.5rem", fontSize: "1.4rem", cursor: "pointer" }}
                >
                  -
                </button>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  style={{ padding: "0.7rem", marginLeft: "0.5rem", fontSize: "1.4rem", cursor: "pointer" }}
                >
                  +
                </button>
              </div>
              <span
                style={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "1.6rem",
                }}
              >
                Total: $ {(product.price * product.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => updateQuantity(product.id, -product.quantity)}
                style={{
                  marginLeft: "2rem",
                  background: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.7rem",
                  padding: "0.7rem 1.5rem",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <div
        style={{
          marginTop: "2rem",
          background: "#f8f9fa",
          padding: "1.5rem",
          borderRadius: "1rem",
          width: "100%",
          textAlign: "right",
          fontSize: "2rem",
        }}
      >
        <strong>Valor dos Produtos: $ {total.toFixed(2)}</strong>
      </div>
    </div>
  );
}
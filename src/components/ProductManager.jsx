import React, { useState } from "react";
import styles from "./ProductManager.module.css";

export default function ProductManager() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const novosProdutos = [...produtos];
      novosProdutos[editIndex] = { nome, preco };
      setProdutos(novosProdutos);
      setEditIndex(null);
    } else {
      setProdutos([...produtos, { nome, preco }]);
    }

    setNome("");
    setPreco("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNome(produtos[index].nome);
    setPreco(produtos[index].preco);
  };

  const handleDelete = (index) => {
    setProdutos(produtos.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setNome("");
      setPreco("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleAddOrUpdate}>
        <h2>Gerenciar Produtos</h2>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <button type="submit">
          {editIndex !== null ? "Atualizar" : "Adicionar"}
        </button>
      </form>

      <ul className={styles.list}>
        {produtos.map((p, i) => (
          <li key={i}>
            <span>
              {p.nome} - R$ {parseFloat(p.preco).toFixed(2)}
            </span>
            <div>
              <button onClick={() => handleEdit(i)}>Editar</button>
              <button onClick={() => handleDelete(i)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

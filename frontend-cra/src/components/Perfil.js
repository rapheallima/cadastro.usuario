import React, { useState, useEffect } from "react";
import { buscarUsuario, salvarUsuario } from "../services/usuarioService";

function Perfil() {
  const [usuario, setUsuario] = useState({
    nome: "",
    idade: "",
    rua: "",
    bairro: "",
    estado: "",
    biografia: "",
    imagemUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarUsuario();
        if (dados) setUsuario(dados);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await salvarUsuario(usuario);
      alert("Perfil salvo com sucesso!");
      setEditando(false);
    } catch (err) {
      alert("Erro ao salvar: " + err.message);
    }
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <img
        src={usuario.imageUrl || "https://via.placeholder.com/150"}
        alt="Foto do perfil"
        width="150"
        height="150"
      />
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            disabled={!editando}
          />
        </label>
        <label>
          Idade:
          <input
            name="idade"
            type="number"
            value={usuario.idade}
            onChange={handleChange}
            disabled={!editando}
          />
        </label>
        <label>
          Rua:
          <input
            name="rua"
            value={usuario.rua}
            onChange={handleChange}
            disabled={!editando}
          />
        </label>
        <label>
          Bairro:
          <input
            name="bairro"
            value={usuario.bairro}
            onChange={handleChange}
            disabled={!editando}
          />
        </label>
        <label>
          Estado:
          <input
            name="estado"
            value={usuario.estado}
            onChange={handleChange}
            disabled={!editando}
          />
        </label>
        <label>
          Biografia:
          <textarea
            name="biografia"
            value={usuario.biografia}
            onChange={handleChange}
            disabled={!editando}
          />
        </label>
        <button type="button" onClick={() => setEditando(!editando)}>
          {editando ? "Cancelar" : "Editar"}
        </button>
        {editando && <button type="submit">Salvar</button>}
      </form>
    </div>
  );
}

export default Perfil;

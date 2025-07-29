import React, { useState, useEffect } from "react";
import {
  buscarUsuario,
  buscarUsuarioPorId,
  salvarUsuario,
  deletarUsuario,
} from "../services/usuarioService";
import "./Perfil.css";

const usuarioVazio = {
  nome: "",
  idade: "",
  rua: "",
  bairro: "",
  estado: "",
  biografia: "",
  imagemUrl: "",
};

function Perfil() {
  const [usuario, setUsuario] = useState(usuarioVazio);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [error, setError] = useState(null);
  const [idBusca, setIdBusca] = useState("");
  const [mensagem, setMensagem] = useState("");

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

  async function handleBuscarPorId() {
    if (!idBusca) {
      setMensagem("Digite um ID para buscar.");
      return;
    }
    setLoading(true);
    try {
      const dados = await buscarUsuarioPorId(idBusca);
      setUsuario(dados);
      setMensagem("Usuário carregado com sucesso.");
      setEditando(false);
    } catch (err) {
      setMensagem(err.message);
      setUsuario(usuarioVazio);
    } finally {
      setLoading(false);
    }
  }

  function handleNovoCadastro() {
    setUsuario(usuarioVazio);
    setEditando(true);
    setMensagem("Criando novo usuário.");
  }

  async function handleDeletar() {
    if (!usuario.id) {
      alert("Nenhum usuário carregado para deletar.");
      return;
    }
    if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
      try {
        await deletarUsuario(usuario.id);
        alert("Usuário deletado com sucesso.");
        setUsuario(usuarioVazio);
        setEditando(false);
      } catch (err) {
        alert("Erro ao deletar: " + err.message);
      }
    }
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="perfil-container">
      <h1 className="titulo">Perfil do Usuário</h1>

      <div className="inputId">
        <input        
          type="number"
          placeholder="ID do usuário"
          value={idBusca}
          onChange={(e) => setIdBusca(e.target.value)}
        />
        <button onClick={handleBuscarPorId} className="botao editar">
          Buscar por ID
        </button>
        <button
          onClick={handleNovoCadastro}
          className="botao editar"
        >
          Novo Usuário
        </button>
        <button
          onClick={handleDeletar}
          className="botao"
          disabled={!usuario.id}
        >
          Deletar
        </button>
      </div>

      <img
        src={
          usuario.imagemUrl ||
          `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
            usuario.nome || "User"
          )}`
        }
        alt="Foto do perfil"
        className="foto-perfil"
      />

      <form className="formulario" onSubmit={handleSubmit}>
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

        <div className="botoes">
          <button
            type="button"
            onClick={() => setEditando(!editando)}
            className="botao editar"
          >
            {editando ? "Cancelar" : "Editar"}
          </button>
          {editando && (
            <button type="submit" className="botao salvar">
              Salvar
            </button>
          )}
        </div>
      </form>
      {mensagem && <p style={{ marginTop: 10 }}>{mensagem}</p>}
    </div>
  );
}

export default Perfil;

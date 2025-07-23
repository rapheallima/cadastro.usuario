const BASE_URL = "http://localhost:8080/usuario";

export async function buscarUsuario() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Erro ao buscar usuário");
  }
  return await response.json();
}

export async function buscarUsuarioPorId(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }
  return await response.json();
}

export async function salvarUsuario(usuario) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!response.ok) {
    throw new Error("Erro ao salvar usuário");
  }
  return await response.json();
}

export async function deletarUsuario(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao deletar usuário");
  }
  return true;
}

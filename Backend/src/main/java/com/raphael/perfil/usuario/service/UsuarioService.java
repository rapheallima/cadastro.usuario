package com.raphael.perfil.usuario.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.raphael.perfil.usuario.model.Usuario;
import com.raphael.perfil.usuario.repository.UsuarioRepository;

@Service
public class UsuarioService {

	private final UsuarioRepository repository;

	public UsuarioService(UsuarioRepository repository) {
		this.repository = repository;
	}

	public List<Usuario> getUsuarios() {
		return repository.findAll();
	}

	public Usuario salvarouAtualizar(Usuario usuario) {
		if (usuario.getId() != null && repository.existsById(usuario.getId())) {
			return repository.save(usuario);
		}
		return repository.save(usuario);
	}

	public Optional<Usuario> buscarPorId(Long id) {
		return repository.findById(id);
	}

	public void deletarPorId(Long id) {
		repository.deleteById(id);
	}

}

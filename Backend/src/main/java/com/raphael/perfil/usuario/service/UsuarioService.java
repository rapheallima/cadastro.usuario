package com.raphael.perfil.usuario.service;

import org.springframework.stereotype.Service;

import com.raphael.perfil.usuario.model.Usuario;
import com.raphael.perfil.usuario.repository.UsuarioRepository;

@Service
public class UsuarioService {

	private final UsuarioRepository repository;

	public UsuarioService(UsuarioRepository repository) {
		this.repository = repository;
	}

	public Usuario getUsuario() {
		return repository.findAll().stream().findFirst().orElse(null);
	}

	public Usuario salvarouAtualizar(Usuario usuario) {
		if (usuario.getId() != null && repository.existsById(usuario.getId())) {
			return repository.save(usuario);
		}
		return repository.save(usuario);
	}

}

package com.raphael.perfil.usuario.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.raphael.perfil.usuario.model.Usuario;
import com.raphael.perfil.usuario.service.UsuarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	private final UsuarioService service;

	public UsuarioController(UsuarioService service) {
		this.service = service;
	}

	@GetMapping
	public List<Usuario> listarUsuarios() {
		return service.getUsuarios();
	}

	@PostMapping
	public Usuario salvarUsuario(@RequestBody Usuario usuario) {
		return service.salvarouAtualizar(usuario);
	}

}

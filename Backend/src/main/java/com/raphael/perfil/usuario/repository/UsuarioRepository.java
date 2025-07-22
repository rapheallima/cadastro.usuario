package com.raphael.perfil.usuario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.raphael.perfil.usuario.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}

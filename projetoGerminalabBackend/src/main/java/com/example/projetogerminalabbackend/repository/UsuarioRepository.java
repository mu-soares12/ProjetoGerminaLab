package com.example.projetogerminalabbackend.repository;

import com.example.projetogerminalabbackend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}

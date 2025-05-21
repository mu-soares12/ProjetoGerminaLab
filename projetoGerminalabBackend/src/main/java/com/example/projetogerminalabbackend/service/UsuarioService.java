package com.example.projetogerminalabbackend.service;

import com.example.projetogerminalabbackend.model.Usuario;
import com.example.projetogerminalabbackend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario create(@RequestBody Usuario usuario) {
        Optional<Usuario> usuario1 = usuarioRepository.findById(usuario.getCduser());
        if(usuario1.isPresent()){
            return null;
        }

        return usuarioRepository.save(usuario);
    }

    public List<Usuario> getAll() {
        return usuarioRepository.findAll();
    }

    public ResponseEntity<Usuario> findById(@RequestParam String email, @RequestParam String senha) {
        if(usuarioRepository.findByEmailAndSenha(email, senha).isPresent()){
            return ResponseEntity.ok(usuarioRepository.findByEmailAndSenha(email, senha).get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}

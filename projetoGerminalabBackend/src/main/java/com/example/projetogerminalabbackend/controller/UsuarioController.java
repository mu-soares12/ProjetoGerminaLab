package com.example.projetogerminalabbackend.controller;

import com.example.projetogerminalabbackend.model.Usuario;
import com.example.projetogerminalabbackend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/cadastrar")
    public Usuario create(@RequestBody Usuario usuario) {
        Optional<Usuario> usuario1 = usuarioRepository.findById(usuario.getCduser());
        if(usuario1.isPresent()){
            return null;
        }

        return usuarioRepository.save(usuario);
    }

    @GetMapping
    public List<Usuario> getAll() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/login")
    public ResponseEntity<Usuario> findById(@RequestParam String email, @RequestParam String senha) {
        if(usuarioRepository.findByEmailAndSenha(email, senha).isPresent()){
            return ResponseEntity.ok(usuarioRepository.findByEmailAndSenha(email, senha).get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}

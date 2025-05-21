package com.example.projetogerminalabbackend.controller;

import com.example.projetogerminalabbackend.model.Usuario;
import com.example.projetogerminalabbackend.repository.UsuarioRepository;
import com.example.projetogerminalabbackend.service.UsuarioService;
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
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public Usuario create(@RequestBody Usuario usuario) {
        return usuarioService.create(usuario);
    }

    @GetMapping
    public List<Usuario> getAll() {
        return usuarioService.getAll();
    }

    @GetMapping("/login")
    public ResponseEntity<Usuario> findById(@RequestParam String email, @RequestParam String senha) {
        return usuarioService.findById(email, senha);
    }
}

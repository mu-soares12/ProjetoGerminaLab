package com.example.projetogerminalabbackend.controller;

import com.example.projetogerminalabbackend.model.Usuario;
import com.example.projetogerminalabbackend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/login")
@CrossOrigin("localhost:4200")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
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

    @GetMapping("/")
    public Usuario findById(@RequestParam Integer cdUser) {
        if(usuarioRepository.findById(cdUser).isPresent()){
            return usuarioRepository.findById(cdUser).get();
        }
        return null;
    }
}

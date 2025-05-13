package com.example.projetogerminalabbackend.controller;

import com.example.projetogerminalabbackend.model.Aluno;
import com.example.projetogerminalabbackend.repository.AlunoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/home")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;

    @PostMapping
    public Aluno create(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    @GetMapping
    public List<Aluno> getAll() {
        return alunoRepository.findAll();
    }

    @GetMapping("/{nome}")
    public Aluno getById(@PathVariable String nome) {
        return alunoRepository.findById(nome)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    @PutMapping("/{nome}")
    public Aluno update(@PathVariable String nome, @RequestBody Aluno alunoEditado) {
        Aluno aluno = getById(nome);

        BeanUtils.copyProperties(alunoEditado, aluno);

        return alunoRepository.save(aluno);
    }

    @DeleteMapping("/{nome}")
    public void delete(@PathVariable String nome) {
        alunoRepository.deleteById(nome);
    }
}

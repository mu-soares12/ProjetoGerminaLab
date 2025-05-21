package com.example.projetogerminalabbackend.controller;

import com.example.projetogerminalabbackend.model.Aluno;
import com.example.projetogerminalabbackend.repository.AlunoRepository;
import com.example.projetogerminalabbackend.service.AlunoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/alunos")
@CrossOrigin(origins = "http://localhost:4200")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public Aluno create(@RequestBody Aluno aluno) {
        return alunoService.create(aluno);
    }

    @GetMapping("/tabela")
    public List<Aluno> getAll() {
        List<Aluno> alunos = alunoService.getAll();
        float media;

        for (Aluno aluno : alunos) {
            media = (aluno.getNotaExatas() + aluno.getNotaLinguagens() + aluno.getNotaCiencias()) / 3;
            aluno.setMediaGeral(media);
            if (aluno.getMediaGeral() >= 70){
                aluno.setStatusFinal("Aprovado");
            }
            else {aluno.setStatusFinal("Reprovado");}
        }
        return alunos;
    }

    @GetMapping("/")
    public Aluno getById(@RequestParam String nomecompleto) {
        return alunoService.getById(nomecompleto);
    }

    @PutMapping("/{nomecompleto}")
    public Aluno update(@PathVariable String nomecompleto, @RequestBody Aluno alunoEditado) {
        return alunoService.update(nomecompleto, alunoEditado);
    }

    @DeleteMapping("/{nomecompleto}")
    public void delete(@PathVariable String nomecompleto) {
        alunoService.delete(nomecompleto);
    }
}

package com.example.projetogerminalabbackend.bff.controller;

import com.example.projetogerminalabbackend.model.Aluno;
import com.example.projetogerminalabbackend.repository.AlunoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;


@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class bffController {
    public float media;

    private final AlunoRepository alunoRepository;

    public bffController(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    @GetMapping("/tabela")
    public List<Aluno> listarAluno() {
        List<Aluno> alunos = alunoRepository.findAll();

        for (Aluno aluno : alunos) {
            media = (aluno.getNotaExatas() + aluno.getNotaLinguagens() + aluno.getNotaCiencias()) / 3;
            aluno.setMediaGeral(media);
            if (aluno.getMediaGeral() >= 7){
                aluno.setStatusFinal("Aprovado");
            }
            else {aluno.setStatusFinal("Reprovado");}
        }

        return alunos;
    }
}

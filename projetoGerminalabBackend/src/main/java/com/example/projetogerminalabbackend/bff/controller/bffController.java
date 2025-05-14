package com.example.projetogerminalabbackend.bff.controller;

import com.example.projetogerminalabbackend.bff.model.alunoDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.ArrayList;


@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class bffController {

    @GetMapping("/tabela")
    public ArrayList<alunoDTO> listarAluno() {
        ArrayList<alunoDTO> alunoList = new ArrayList<>();
        alunoDTO aluno = new alunoDTO();

        aluno.nomeCompleto = "Joao Rosa";
        aluno.email = "joao@gmail.com";
        aluno.ano = 2;
        aluno.serie = 'A';
        aluno.notaExatas = 10.0f;
        aluno.notaLinguagens = 9.0f;
        aluno.notaCiencias = 5.0f;
        aluno.mediaGeral = (aluno.notaLinguagens + aluno.notaCiencias + aluno.notaExatas) /3;
        if(aluno.mediaGeral >= 7) {
            aluno.statusFinal = true;
        }
        else aluno.statusFinal = false;

        alunoList.add(aluno);

        return alunoList;
    }
}

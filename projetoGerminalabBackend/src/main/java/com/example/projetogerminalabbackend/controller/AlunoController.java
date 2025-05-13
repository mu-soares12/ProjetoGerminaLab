package com.example.projetogerminalabbackend.controller;

import com.example.projetogerminalabbackend.model.Aluno;
import com.example.projetogerminalabbackend.repository.AlunoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/home")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;

    @PostMapping
    public Aluno create(@RequestBody Aluno aluno) {
        Optional<Aluno> alunoR = alunoRepository.findById(aluno.getNomecompleto());
        if(alunoR.isPresent()){
            return null;
        }

        return alunoRepository.save(aluno);
    }

    @GetMapping
    public List<Aluno> getAll() {
        return alunoRepository.findAll();
    }

    @GetMapping("/")
    public Aluno getById(@RequestParam String nomecompleto) {
        return alunoRepository.findById(nomecompleto)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
    }

    @PutMapping("/{nomecompleto}")
    public Aluno update(@PathVariable String nomecompleto, @RequestBody Aluno alunoEditado) {
        Aluno aluno = getById(nomecompleto);

        aluno.setEmail(alunoEditado.getEmail());
        aluno.setAno(alunoEditado.getAno());
        aluno.setSerie(alunoEditado.getSerie());
        aluno.setGenero(alunoEditado.getGenero());
        aluno.setDataNascimento(alunoEditado.getDataNascimento());
        aluno.setEscolaridadePais(alunoEditado.getEscolaridadePais());
        aluno.setTipoAlimentacao(alunoEditado.getTipoAlimentacao());
        aluno.setNotaExatas(alunoEditado.getNotaExatas());
        aluno.setNotaLinguagens(alunoEditado.getNotaLinguagens());
        aluno.setNotaCiencias(alunoEditado.getNotaCiencias());

        return alunoRepository.save(aluno);
    }

    @DeleteMapping("/{nomecompleto}")
    public void delete(@PathVariable String nomecompleto) {
        alunoRepository.deleteById(nomecompleto);
    }
}

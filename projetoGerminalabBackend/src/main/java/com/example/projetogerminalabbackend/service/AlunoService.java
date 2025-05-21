package com.example.projetogerminalabbackend.service;

import com.example.projetogerminalabbackend.model.Aluno;
import com.example.projetogerminalabbackend.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public Aluno create(@RequestBody Aluno aluno) {
        Optional<Aluno> alunoR = alunoRepository.findById(aluno.getNomecompleto());
        if(alunoR.isPresent()){
            return null;
        }

        return alunoRepository.save(aluno);
    }

    public List<Aluno> getAll() {
        return alunoRepository.findAll();
    }

    public Aluno getById(@RequestParam String nomecompleto) {
        return alunoRepository.findById(nomecompleto)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
    }
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

    public void delete(@PathVariable String nomecompleto) {
        alunoRepository.deleteById(nomecompleto);
    }

}

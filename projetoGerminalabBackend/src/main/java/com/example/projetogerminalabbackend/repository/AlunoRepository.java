package com.example.projetogerminalabbackend.repository;

import com.example.projetogerminalabbackend.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, String> {
}

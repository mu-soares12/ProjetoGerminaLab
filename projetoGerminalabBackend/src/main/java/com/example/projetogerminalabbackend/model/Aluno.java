package com.example.projetogerminalabbackend.model;


import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "alunos")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private String nomecompleto;

    private String email;
    private int ano;
    private char serie;
    private String genero;
    @Column(name = "data_nascimento")
    private Date dataNascimento;
    @Column(name = "escolaridade_pais")
    private String escolaridadePais;
    @Column(name = "tipo_alimentacao")
    private String tipoAlimentacao;
    @Column(name = "nota_exatas")
    private Float notaExatas;
    @Column(name = "nota_linguagens")
    private Float notaLinguagens;
    @Column(name = "nota_ciencias")
    private Float notaCiencias;
    @Column(name = "media_geral")
    private Float mediaGeral;
    @Column(name = "rank_geral")
    private int rankGeral;
    private String desempenho;
    @Column(name = "status_exatas")
    private String statusExatas;
    @Column(name = "status_linguagens")
    private String statusLinguagens;
    @Column(name = "status_ciencias")
    private String statusCiencias;
    @Column(name = "status_final")
    private String statusFinal;
    @Column(name = "data_prova")
    private Date dataProva;
}
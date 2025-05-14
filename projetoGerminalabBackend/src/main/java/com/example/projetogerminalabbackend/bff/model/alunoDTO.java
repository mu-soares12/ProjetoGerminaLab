package com.example.projetogerminalabbackend.bff.model;

public class alunoDTO {
    public String nomeCompleto;
    public String email;
    public int ano;
    public char serie;
    public float notaExatas;
    public float notaLinguagens;
    public float notaCiencias;
    public float mediaGeral;
    public boolean statusFinal;

    public alunoDTO() {}

    public alunoDTO(String nomeCompleto, String email, int ano, char serie, float notaExatas, float notaLinguagens, float notaCiencias, float mediaGeral, boolean statusFinal){
        this.nomeCompleto= nomeCompleto;
        this.email = email;
        this.ano = ano;
        this.serie = serie;
        this.notaExatas = notaExatas;
        this.notaLinguagens = notaLinguagens;
        this.notaCiencias = notaCiencias;
        this.mediaGeral = mediaGeral;
        this.statusFinal = statusFinal;
    }
}
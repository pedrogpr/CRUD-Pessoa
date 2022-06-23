package com.crud.backend.entidade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaREST {

    @Autowired
    private PessoaRepositorio repositorio;

    @GetMapping
    public List<Pessoa> listar() {
        return repositorio.findAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.PARTIAL_CONTENT)
    public Pessoa listarPessoa(@PathVariable Integer id) {
        return repositorio.findById(id).get();
    }

    @PostMapping
    public void salvar(@RequestBody Pessoa pessoa) {
        repositorio.save(pessoa);
    }

    @PutMapping("{id}")
    public void alterar(@RequestBody Pessoa newPessoa, @PathVariable Integer id) {
        repositorio
                .findById(id)
                .map(pessoa -> {
                    pessoa.setNome(newPessoa.getNome());
                    pessoa.setCpf(newPessoa.getCpf());
                    pessoa.setTelefone(newPessoa.getTelefone());
                    pessoa.setEmail(newPessoa.getEmail());
                    pessoa.setEndereco(newPessoa.getEndereco());
                    pessoa.setBairro(newPessoa.getBairro());
                    pessoa.setCidade(newPessoa.getCidade());
                    pessoa.setEstado(newPessoa.getEstado());
                    repositorio.save(pessoa);
                    return Void.TYPE;
                });
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id) {
        repositorio
                .findById(id)
                .map(pessoa -> {
                    repositorio.delete(pessoa);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pessoa não encontrada"));
    }
}

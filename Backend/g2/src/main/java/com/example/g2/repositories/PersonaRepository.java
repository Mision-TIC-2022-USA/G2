/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.g2.repositories;

import com.example.g2.Models.Persona;
import com.example.g2.repositories.CRUD.IPersonaCrudRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ASUS RYZEN
 */
@Repository
public class PersonaRepository {

    @Autowired
    private IPersonaCrudRepository crudPersonaRepository;

    public List<Persona> getAll() {
        return crudPersonaRepository.findAll();
    }
}

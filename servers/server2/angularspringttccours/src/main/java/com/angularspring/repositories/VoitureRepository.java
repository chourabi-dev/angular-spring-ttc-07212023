package com.angularspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularspring.entities.Voiture;

public interface VoitureRepository extends JpaRepository<Voiture,Long> {

}

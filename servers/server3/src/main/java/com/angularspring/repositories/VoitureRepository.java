package com.angularspring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularspring.entities.Voiture;

public interface VoitureRepository extends JpaRepository<Voiture,Long> {

	
		// SELECT * FROM VOITUEES WHERE YEAR = ?
		List<Voiture> findByYearGreaterThan( int year );
	
	
}

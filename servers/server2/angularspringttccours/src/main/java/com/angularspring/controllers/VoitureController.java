package com.angularspring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angularspring.entities.Voiture;
import com.angularspring.repositories.VoitureRepository;
import com.angularspring.requests.VoitureModel;
import com.angularspring.responses.GlobalResponse;

@RestController
@RequestMapping("/api/voitrue")
public class VoitureController {
	
	
	@Autowired
	private VoitureRepository voitureRepository;
	
	
	
	
	// GET !!
	// we need to get the list of vehicules from database !!!
	@GetMapping("/list")
	public ResponseEntity<?> getData(){
		
		
		List<Voiture> voitures = this.voitureRepository.findAll();
		
		
		return ResponseEntity.ok(   voitures    );
	}
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addVoiture( @RequestBody VoitureModel model ){
			
		
		// CREATE THE ENTITY
		Voiture voiture = new Voiture();
		
		
		// FILL THE ENTITY
		voiture.setMark( model.getMark() );
		voiture.setModel(model.getModel());
		voiture.setColor(model.getColor());
		voiture.setPf(model.getPf());
		voiture.setMatricule(model.getMatricule());
		voiture.setVin(model.getVin());
		voiture.setYear(model.getYear());
			
		// SAVE THE ENTITY
		
		this.voitureRepository.save(voiture);
		
		
		// 
		GlobalResponse res = new GlobalResponse();
		
		res.setSuccess(true);
		res.setMessage("Voiture inseré avec success");
		
		
		return ResponseEntity.ok(   res    );
	}
	
	

}

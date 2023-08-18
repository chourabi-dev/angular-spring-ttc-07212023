package com.angularspring.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angularspring.entities.Voiture;
import com.angularspring.repositories.VoitureRepository;
import com.angularspring.requests.VoitureModel;
import com.angularspring.responses.GlobalResponse;

@RestController
@RequestMapping("/api/voitrue")
@CrossOrigin( value="*" )
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
	
	
	
	
	// UPDATE 
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateVoiture( @RequestBody VoitureModel model, @PathVariable long id ){
			
		
		try {
			// WE NEED TO FIND THE ENTITY
			Voiture voiture =  this.voitureRepository.findById( id ).get();
			
			
			// FILL THE ENTITY
			voiture.setMark( model.getMark() );
			voiture.setModel(model.getModel());
			voiture.setColor(model.getColor());
			voiture.setPf(model.getPf());
			voiture.setMatricule(model.getMatricule());
			voiture.setVin(model.getVin());
			voiture.setYear(model.getYear());
				
			// UPDATE THE ENTITY
			
			this.voitureRepository.save(voiture); // INSERT UPDATE ?
			
			
			// 
			GlobalResponse res = new GlobalResponse();
			
			res.setSuccess(true);
			res.setMessage("Voiture mise a jour avec success");
			
			
			return ResponseEntity.ok(   res    );
		}catch(NoSuchElementException e) {
			GlobalResponse res = new GlobalResponse();
			
			res.setSuccess(false);
			res.setMessage("Voiture non trouvé.");
			
			
			return ResponseEntity.ok(   res    );
		}
		
		
	}
	
	
	
	// DELETE
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteVoiture(   @PathVariable long id ){
			
		
		try {
			// WE NEED TO FIND THE ENTITY
			Voiture voiture =  this.voitureRepository.findById( id ).get();
			
			
			  
			this.voitureRepository.delete(voiture); // DELETE from ... where id ...
			
			
			// 
			GlobalResponse res = new GlobalResponse();
			
			res.setSuccess(true);
			res.setMessage("Voiture supprimé avec success");
			
			
			return ResponseEntity.ok(   res    );
		}catch(NoSuchElementException e) {
			GlobalResponse res = new GlobalResponse();
			
			res.setSuccess(false);
			res.setMessage("Voiture non trouvé.");
			
			
			return ResponseEntity.ok(   res    );
		}
		
		
	}
	
	
	
	
	
	@GetMapping("/list/year")
	public ResponseEntity<?> getDataByYear( @RequestParam int year  ){
		
		
		List<Voiture> voitures = this.voitureRepository.findByYearGreaterThan(year);
		
		
		return ResponseEntity.ok(   voitures    );
	}
	
	
	
	
	
	
	

}

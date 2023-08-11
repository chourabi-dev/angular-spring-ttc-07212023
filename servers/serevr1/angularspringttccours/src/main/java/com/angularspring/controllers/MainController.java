package com.angularspring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angularspring.requests.AddProductModel;

@RestController
@RequestMapping("/demo")
public class MainController {

	
	
	// GET
	
	// simply return a string  "bonjour" !!!
	@GetMapping("/bonjour")
	public String sayHello() {
		return "Bonjour !!";
	}
	
	
	
	@GetMapping("/employees")
	public String employees( @RequestParam( required=true ) String year  ) {
		
		
		
		return "employees list from ".concat(year);
	}
	
	
	
	@GetMapping("/somme")
	public int somme(@RequestParam( required = true ) int x, @RequestParam( required = true ) int y) {
		return (x+y);
	}
	
	
	
	@GetMapping("/employee/details/{id}")
	public String details(  @PathVariable(name="id") int id  ) {
		
		
		System.out.println( id );
		
		return "...";
	}
	
	
	
	
	
	// POST
	@PostMapping("/add/product")
	public void addProduct(  @RequestBody AddProductModel model  ) {
		
		System.out.println( model.getName() );
		System.out.println( model.getPrice() );
		System.out.println( model.getStock() );
		
		
		
		
	}
	
	
	
	// PUT
	
	
	
	
	// DELETE
	
	
	
	
}

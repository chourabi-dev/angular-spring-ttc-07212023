package com.angularspring.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table( name="voitures" )
public class Voiture {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private long id;
	
	@Column( name="mark", nullable=false )
	private String mark;
	
	@Column( name="model", nullable=false )
	private String model;
	
	@Column( name="year", nullable=false )
	private int year;
	
	@Column( name="vin", nullable=false )
	private String vin;
	
	@Column( name="matricule", nullable=false )
	private String matricule;
	
	@Column( name="color", nullable=false )
	private String color;
	
	@Column( name="pf", nullable=false )
	private int pf;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMark() {
		return mark;
	}

	public void setMark(String mark) {
		this.mark = mark;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getVin() {
		return vin;
	}

	public void setVin(String vin) {
		this.vin = vin;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getPf() {
		return pf;
	}

	public void setPf(int pf) {
		this.pf = pf;
	}

	public Voiture() {
		super();
	}
	
	
	
	
	
}

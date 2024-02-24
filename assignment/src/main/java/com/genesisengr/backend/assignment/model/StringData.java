package com.genesisengr.backend.assignment.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class StringData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    private String appUser;
    private String string;
    
    // Constructors, getters, and setters
    public StringData() {
    }

    public StringData(String user, String string) {
        this.appUser = user;
        this.string = string;
    }

    public String getAppUser() {
        return appUser;
    }

    public void setAppUser(String user) {
        this.appUser = user;
    }

    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }
}

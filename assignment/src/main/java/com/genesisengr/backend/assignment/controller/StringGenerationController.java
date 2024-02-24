package com.genesisengr.backend.assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.genesisengr.backend.assignment.request.GenerateStringRequest;
import com.genesisengr.backend.assignment.response.StringGenerationResponse;
import com.genesisengr.backend.assignment.service.StringGenerationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/strings")
@CrossOrigin
public class StringGenerationController {

	@Autowired
	StringGenerationService generationService;

	@PostMapping("/generate")
	public StringGenerationResponse generateStrings(@Valid @RequestBody GenerateStringRequest request) {
		return generationService.generateString(request);
	}
}

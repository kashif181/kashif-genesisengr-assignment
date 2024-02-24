package com.genesisengr.backend.assignment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.genesisengr.backend.assignment.model.StringData;
import com.genesisengr.backend.assignment.repository.DataRepository;
import com.genesisengr.backend.assignment.request.GenerateStringRequest;
import com.genesisengr.backend.assignment.response.StringGenerationResponse;
import com.genesisengr.backend.assignment.util.StringGeneratorUtil;

import jakarta.transaction.Transactional;

@Service
public class StringGenerationService {
	
	@Autowired
	DataRepository dataRepository;

	@Transactional
	public StringGenerationResponse generateString(GenerateStringRequest request) {
		List<String> list = StringGeneratorUtil.generateStrings(request.getNumberOfStrings(), request.getNumberOfCharacters(),
				request.isUniqueStrings(), request.getAllowedType());
		
		for (String string : list) {
			StringData data = new StringData(request.getUserName(), string); 
			dataRepository.save(data);
		}
		
		StringGenerationResponse generationResponse = new StringGenerationResponse();
		generationResponse.setGeneratedStrings(list);
		
		return generationResponse;
	}

}

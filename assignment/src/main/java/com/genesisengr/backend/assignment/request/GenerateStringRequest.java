package com.genesisengr.backend.assignment.request;

import lombok.Data;

@Data
public class GenerateStringRequest {
	private String userName;
	private int numberOfStrings;
    private int numberOfCharacters;
    private boolean uniqueStrings;
    private String allowedType;
}

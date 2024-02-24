package com.genesisengr.backend.assignment.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class StringGeneratorUtil {

	public static List<String> generateStrings(int numberOfStrings, int numberOfCharacters, boolean uniqueStrings,
			String allowedCharType) {
		List<String> generatedStrings = new ArrayList<>();
		Random random = new Random();
		String allowedCharacters = getAllowedCharacters(allowedCharType);

		while (generatedStrings.size() < numberOfStrings) {
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < numberOfCharacters; i++) {
				char randomChar = allowedCharacters.charAt(random.nextInt(allowedCharacters.length()));
				sb.append(randomChar);
			}
			String generatedString = sb.toString();
			if (!uniqueStrings || !generatedStrings.contains(generatedString)) {
				generatedStrings.add(generatedString);
			}
		}

		return generatedStrings;
	}

	private static String getAllowedCharacters(String allowedCharType) {
		StringBuilder sb = new StringBuilder();
		if (allowedCharType.contains("n")) {
			sb.append("0123456789");
		}
		if (allowedCharType.contains("u")) {
			sb.append("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		}
		if (allowedCharType.contains("l")) {
			sb.append("abcdefghijklmnopqrstuvwxyz");
		}
		// If no specific type is specified, include all characters
		if (sb.length() == 0) {
			sb.append("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		int numberOfStrings = 5;
		int numberOfCharacters = 20;
		boolean uniqueStrings = true;
		String allowedCharType = "nul";

		List<String> generatedStrings = generateStrings(numberOfStrings, numberOfCharacters, uniqueStrings,
				allowedCharType);
		for (String str : generatedStrings) {
			System.out.println(str);
		}
	}
}

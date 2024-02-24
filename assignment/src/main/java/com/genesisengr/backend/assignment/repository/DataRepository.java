package com.genesisengr.backend.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.genesisengr.backend.assignment.model.StringData;

@Repository
public interface DataRepository extends JpaRepository<StringData, String> {
}

package com.devsuperior.dspesquisa.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.domain.model.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
package com.devsuperior.dspesquisa.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dspesquisa.api.dto.RecordDTO;
import com.devsuperior.dspesquisa.api.dto.inserts.RecordInsertDTO;
import com.devsuperior.dspesquisa.domain.services.RecordService;

@RestController
@RequestMapping("/records")
public class RecordController {
	
	@Autowired
	private RecordService service;


	@PostMapping
	public ResponseEntity<RecordDTO> create(@RequestBody RecordInsertDTO insertDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(service.insert(insertDTO));
	}
}

package com.devsuperior.dspesquisa.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dspesquisa.api.dto.GameDTO;
import com.devsuperior.dspesquisa.domain.services.GameService;

@RestController
@RequestMapping("/games")
public class GameController {
	
	@Autowired
	private GameService gameService;


	@GetMapping
	public ResponseEntity<List<GameDTO>> findAll(){
		return ResponseEntity.ok().body(gameService.findAll());
	}
}

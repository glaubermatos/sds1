package com.devsuperior.dspesquisa.domain.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dspesquisa.api.dto.GameDTO;
import com.devsuperior.dspesquisa.domain.model.Game;
import com.devsuperior.dspesquisa.domain.repository.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll(){
		List<Game> list = gameRepository.findAll();
		return list.stream()
				.map(game -> new GameDTO(game))
				.collect(Collectors.toList());
	}
}

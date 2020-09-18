package com.devsuperior.dspesquisa.domain.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dspesquisa.api.dto.RecordDTO;
import com.devsuperior.dspesquisa.api.dto.inserts.RecordInsertDTO;
import com.devsuperior.dspesquisa.domain.model.Game;
import com.devsuperior.dspesquisa.domain.model.Record;
import com.devsuperior.dspesquisa.domain.repository.GameRepository;
import com.devsuperior.dspesquisa.domain.repository.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto){
		
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		
		return new RecordDTO(entity);
	}
}

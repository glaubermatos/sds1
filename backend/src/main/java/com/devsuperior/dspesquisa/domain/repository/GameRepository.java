package com.devsuperior.dspesquisa.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.domain.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}

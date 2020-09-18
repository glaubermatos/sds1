package com.devsuperior.dspesquisa.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.domain.model.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}

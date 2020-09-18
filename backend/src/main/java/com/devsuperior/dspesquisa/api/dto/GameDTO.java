package com.devsuperior.dspesquisa.api.dto;

import java.io.Serializable;

import com.devsuperior.dspesquisa.domain.model.Game;
import com.devsuperior.dspesquisa.domain.model.enums.Platform;

public class GameDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private Platform platform;
	
	/**
	 * 
	 */
	public GameDTO() { }

	/**
	 * @param game
	 */
	public GameDTO(Game game) {
		this.id = game.getId();
		this.title = game.getTitle();
		this.platform = game.getPlatform();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}
	
	
}

package com.TourViaggi.service;

import java.util.List;

import com.TourViaggi.entity.Localita;

public interface LocalitaService {
	public List<Localita> getAllLocalita();
	public Localita getLocalitaById(Long id);
}

package com.TourViaggi.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TourViaggi.entity.Localita;
import com.TourViaggi.service.LocalitaServiceImpl;

@RestController
@RequestMapping("/api/localita")
public class LocalitaController {

  @Autowired
  private LocalitaServiceImpl localitaService;

  @GetMapping
  public ResponseEntity<List<Localita>> getAllLocalita() {
    List<Localita> localitaList = localitaService.getAllLocalita();
    return new ResponseEntity<>(localitaList, HttpStatus.OK);
  }
}

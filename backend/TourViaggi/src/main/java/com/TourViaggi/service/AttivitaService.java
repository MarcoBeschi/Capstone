package com.TourViaggi.service;



import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TourViaggi.entity.Attivita;
import com.TourViaggi.entity.Localita;
import com.TourViaggi.repository.AttivitaRepository;

@Service 
public class AttivitaService {

    @Autowired
    private AttivitaRepository attivitaRepository;

    public Attivita creaAttivita(String titolo, String descrizione, String foto, Localita localita) {
        Attivita attivita = new Attivita();
        attivita.setTitolo(titolo);
        attivita.setDescrizione(descrizione);
        attivita.setFoto(foto);
        attivita.setLocalita(localita);
        return attivita;
    }

    public void salvaAttivita(Attivita attivita) {
        attivitaRepository.save(attivita);
    }
}

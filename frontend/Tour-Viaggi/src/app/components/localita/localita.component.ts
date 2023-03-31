import { Component, OnInit } from '@angular/core';
import { Localita } from './localita.interface';
import { LocalitaServiceService } from './localita-service.service';


@Component({
  selector: 'app-localita',
  templateUrl: './localita.component.html',
  styleUrls: ['./localita.component.scss']
})
export class LocalitaComponent implements OnInit {
  localita: Localita[]=[];

  constructor(private localitaService:LocalitaServiceService) { }

  ngOnInit(): void {
    this.localitaService.getLocalita().subscribe((localita)=>{
      this.localita=localita;
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activo-card',
  templateUrl: './activo-card.component.html',
  styleUrls: ['./activo-card.component.css']
})
export class ActivoCardComponent implements OnInit {

  @Input() activoInfo: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verInfoCompleta(): void{
    sessionStorage.setItem('activo', JSON.stringify(this.activoInfo));
    this.router.navigate(['infoActivo']);
  }

}

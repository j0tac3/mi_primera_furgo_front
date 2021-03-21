import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menu_URL = ["camperizar", "blog", "articulos", "administrar"]

  constructor() { }

  ngOnInit(): void {
  }

  ocultarMenu(ocultar: boolean) {
    console.log("funciona");
    console.log(ocultar);
  }

}

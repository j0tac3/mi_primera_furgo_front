import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

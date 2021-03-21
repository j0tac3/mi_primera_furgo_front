import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  @Input() ruta:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  goBack = () => {
    this.router.navigateByUrl(`/${this.ruta}`);
  }

}

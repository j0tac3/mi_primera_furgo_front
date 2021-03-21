import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {
  @Output() ocultarMenu = new EventEmitter<boolean>();
  private isHiddenMenu: boolean = true;

  constructor() { }

  @Input()
  url: string;

  ngOnInit(): void {
  }

  onOcultarMenu() {
    this.ocultarMenu.emit(this.isHiddenMenu);
  }

}

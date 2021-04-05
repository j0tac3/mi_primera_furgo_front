import { Component, Input, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-image-header',
  templateUrl: './input-image-header.component.html',
  styleUrls: ['./input-image-header.component.css']
})
export class InputImageHeaderComponent implements OnInit {
  @Input() formGroupParent: FormGroup;
  @Input() headerImage: File;

  public url_header: any;

  @ViewChild('headerSelect',  {
    read: ElementRef
  }) headerSelect: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  openFile(){
    this.headerImage = this.headerSelect.nativeElement.files[0];
    let reader = new FileReader();
    reader.onload = e => this.url_header = e.target.result;
    reader.readAsDataURL(this.headerImage);
    console.log(this.url_header);
  }
}

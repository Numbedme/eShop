import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {
  @Input() private imageBase64:string;
  @Input() private altText: string

  constructor(private sanitiser:DomSanitizer) { }

  ngOnInit() {
  }

}

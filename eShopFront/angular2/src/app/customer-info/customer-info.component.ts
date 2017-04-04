import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {Customer} from "../customer";
import {Http} from "@angular/http";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  @Input() private customer:Customer;

  constructor(private element: ElementRef,
              private http:Http) {}

  changeListner(event) {
    let file: File = event.target.files[0];
    let formData:FormData = new FormData();
    formData.append('file', file);
    this.http.post("http://localhost:8080/eShopBack/images", formData)
      .subscribe(res => console.log(res),
                err => console.log(err));

  }

  ngOnInit() {
  }

}

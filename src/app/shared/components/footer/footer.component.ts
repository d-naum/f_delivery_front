import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: any = null;
  constructor() { }

  ngOnInit() {
    let date = new Date()
    this.year = date.getFullYear();
  }

}

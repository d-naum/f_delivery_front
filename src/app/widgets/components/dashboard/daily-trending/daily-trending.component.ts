import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-daily-trending',
  templateUrl: './daily-trending.component.html',
  styleUrls: ['./daily-trending.component.scss']
})


export class DailyTrendingComponent implements OnInit {
  fetched = 0;
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {

    // this.productService.getProducts().subscribe((res) => {
    //   this.fetched = 1;
    // })
  }

}

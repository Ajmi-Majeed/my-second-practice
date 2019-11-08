import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productInterface';

@Component({
  selector: 'app-image-body',
  templateUrl: './image-body.component.html',
  styleUrls: ['./image-body.component.css']
})
export class ImageBodyComponent implements OnInit {

  constructor() { }

  Products: Array<Product> = [
    {
    name: 'CC1001',
    imgAlt: `https://rukminim1.flixcart.com/image/800/960/jve4pe80/top/t/s/d/l-1861-buynewtrend-original-imafc9nhwn7znm8y.jpeg?q=50`,
    description: 'Casual Collections',
    price: 800,
    isAvailable: true
  },
  {
    name: 'CC1002',
    imgAlt: `https://rukminim1.flixcart.com/image/800/960/jt4olu80/dress/f/k/q/s-highway-rachana-fashion-original-imafffb6q7wdhz9q.jpeg?q=50`,
    description: 'Casual Collections',
    price: 1200,
    isAvailable: false
  },
  {
    name: 'CC1003',
    imgAlt: `https://rukminim1.flixcart.com/image/800/960/jrwdyfk0/dress/a/k/9/xxl-group1-raghumaya-original-imafbqxetqznckq2.jpeg?q=50`,
    description: 'Casual Collections',
    price: 900,
    isAvailable: true
  },
  {
    name: 'CC1004',
    imgAlt: `https://rukminim1.flixcart.com/image/800/960/jyeq64w0/dress/b/g/z/free-gn213-dev-fashion-original-imafgnnhm4zkqwcz.jpeg?q=50`,
    description: 'Casual Collections',
    price: 600,
    isAvailable: true
  }

];


  ngOnInit() {
  }

}

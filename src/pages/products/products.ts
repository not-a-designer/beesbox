import { Component, OnInit } from '@angular/core';

import { IonicPage, 
         NavController, 
         NavParams }       from 'ionic-angular';

import { Observable }      from 'rxjs/Observable';
import * as firebase       from 'firebase';

import {ToolbarAnimation } from '../../animations/toolbar.animation';
import { AuthService }     from '../../app/shared/services/auth.service';
//import { SearchService }   from '../../app/shared/services/search.service';
import { HelperService }   from '../../app/shared/services/helper.service';
import { User }            from '../../models/user.model';



@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  animations: [
    ToolbarAnimation
  ]
})
export class ProductsPage implements OnInit {

  curUser$: firebase.User;
  isAuthenticated: boolean;
  view: string = 'list';

  sampleProducts: any[] = [
    {
      title: 'Item 1',
      desc: 'This is item 1',
      img: 'book',
      price: '5.00'
    }, {
      title: 'Item 2',
      desc: 'This is item 2',
      img: 'book',
      price: '10.00'
    }, {
      title: 'Item 3',
      desc: 'This is item 3',
      img: 'book',
      price: '7.00'
    }, {
      title: 'Item 4',
      desc: 'This is item 4',
      img: 'book',
      price: '17.00'
    }, {
      title: 'Item 5',
      desc: 'This is item 5',
      img: 'book',
      price: '99.00'
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthService, 
    //public searchService: SearchService,
    public helperService: HelperService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    
    
  }


  ngOnInit() {
    /*this.wooApi.fetchItems('products')
      .then((products) => {
        console.log('productList = ' + products);
      });*/
    this.authService.user$.subscribe((user) => {
      this.curUser$ = user;
      console.log('curUser = ' + this.curUser$);
    });

    /*this.searchService.view.subscribe((state: string) => {
      this.view = state;
    });*/
  }

}
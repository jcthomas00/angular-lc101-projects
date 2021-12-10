import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  title:string = "Few of my Favorite Links";

  favLinks = [
    {link:'http://google.com', text:'Google'},
    {link:'http://yahoo.com', text:'Yahoo'},
    {link:'http://bing.com', text:'Bing'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

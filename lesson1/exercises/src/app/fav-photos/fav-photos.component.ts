import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://cdn.pixabay.com/photo/2017/04/14/17/36/archery-2230855_1280.png';
  image2 = 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
  image3 = 'https://images.unsplash.com/photo-1639134501889-66bc86217baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80';

  constructor() { }

  ngOnInit() {
  }

}
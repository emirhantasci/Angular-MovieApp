import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const movies=[
      {id:1, name:"Cinayet Süsü", description:"Ali Atay'dan harika komedi", imageUrl:"1.jpg"},
      {id:2, name:"Aile Arasında", description:"Gülse Birsel'den harika komedi", imageUrl:"2.jpg"},
      {id:3, name:"Lucy", description:"Scarlet Johansson'dan harika bilim-kurgu",imageUrl:"3.jpg"},
      {id:4, name:"Marslı", description:"Mars'ta yıllar geçirmek zorunda kalan astronotun hikayesi",imageUrl:"4.jpg"},
      {id:5, name:"Ölümlü Dünya", description:"Ali Atay ve ekibinden harika komedi",imageUrl:"5.jpg"},
      {id:6, name:"Edge of Tomorrow", description:"Yaşa-Öl-Tekrar Et",imageUrl:"6.jpg"},
  ];
  return {movies};
  }
  constructor() { }
}

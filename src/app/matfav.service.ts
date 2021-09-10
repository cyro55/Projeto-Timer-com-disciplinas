import { Injectable } from '@angular/core';

interface Matfav{
  title: string;
}

@Injectable()
export class MatfavService {
  list: Array<Matfav> = [];

  constructor() {}
  
  getList(){
    return this.list;
  }
    add(title: string){
    this.list.push({title});
  }
  remove(index: number){
    this.list.splice(index, 1);
  }
  
  

}
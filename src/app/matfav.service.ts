import { Injectable } from '@angular/core';

interface Matfav{
  title: string;
}

@Injectable()
export class MatfavService {
  list: Array<any> = ['Desenvolvimento para Dispositivos Móveis',
  'Tópicos Especiais em Sistemas para Internet II',
  'Desenvolvimento para Servidores II',
  'Negocios e Marketing'];

  constructor() {}
  
  getList(){
    return this.list;
  }
    add(title: string){
    this.list.push(title);
  }
  remove(index: number){
    this.list.splice(index, 1);
  }
  
  

}
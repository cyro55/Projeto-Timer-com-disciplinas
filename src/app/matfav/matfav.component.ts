import { Component, OnInit } from '@angular/core';
import { MatfavService } from '../matfav.service';

@Component({
  selector: 'app-matfav',
  templateUrl: './matfav.component.html',
  styleUrls: ['./matfav.component.css']
})
export class MatfavComponent implements OnInit {

  constructor(public matfav: MatfavService) { }

  ngOnInit() {
  }

}
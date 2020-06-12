import { Component } from '@angular/core';
import {Quote} from './quote'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1,name:'Inspirational quote'},
    {id:2,name:'Entrepreneural quotes'},
    {id:3,name:'African quotes'},
  ];
  
}

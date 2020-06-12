import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
  

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Oscar Wilde Inspirational Quote', 'Be yourself; everyone else is already taken'),
    new Quote(2, 'Steve Martin Entrepreneural Quotes', 'Be so good they can’t ignore you'),
    new Quote(3,'Jack Oyugi African Quotes', 'If you are not part of the solution then you are part of the problem'),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }

  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index, 1);
    }
  }
  

  constructor() { }

  ngOnInit()  {
  }

}

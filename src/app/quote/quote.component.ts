import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
  

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Oscar Wilde Inspirational Quote', 'Be yourself; everyone else is already taken', new Date(1923,2,30)),
    new Quote(2, 'Steve Martin Entrepreneural Quotes', 'Be so good they can’t ignore you', new Date(1978,4,15)),
    new Quote(3,'Jack Oyugi African Quotes', 'If you are not part of the solution then you are part of the problem', new Date(2020,1,1)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
      if (toDelete){
      this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit()  {
  }

}

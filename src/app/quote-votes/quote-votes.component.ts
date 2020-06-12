import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-votes',
  templateUrl: './quote-votes.component.html',
  styleUrls: ['./quote-votes.component.css']
})
export class QuoteVotesComponent implements OnInit {

  @Input() qouteVote: string;
  numberOfVotes: number=0;

  upvoteButtonClick(){
    this.numberOfVotes++;
  }

  downvoteButtonClick(){
    this.numberOfVotes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

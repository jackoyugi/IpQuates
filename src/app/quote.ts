export class Quote {
    public upvote: number;
    public downvote: number;
   showDescription: boolean;
    constructor(public id: number,public name:string,public description:string, public completeDate:Date){
        this.upvotes=0;
        this.downvotes=0;
        this.showDescription=false
    }
}

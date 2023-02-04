export class Article {
	title: string;
	link: string;
	votes: number;

	constructor(t:string, l:string, v?: number) {
		this.title = t;
		this.link = l;
		this.votes = v || 0;
	}

  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }

  // domain(): string {
  //   try{
  //     const domainAndPath: string = this.link.split('//')[1];

  //     return domainAndPath.split('/')[0];
  //   } catch (err) {
  //     return `err ${err}`;
  //   }
  // }
}

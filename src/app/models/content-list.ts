import { IContent } from "../icontent";


export class ContentList {
    private _betta: IContent[];

    constructor() {
        this._betta = [];
      }

       get betta(): IContent[]{
        return this._betta;
        }

  // set videoGames(g: IContent[]){
  //   this._videoGames = g;
  // }
  // example of what it looks like when we use the getter on a ContentList object
// let games = new ContentList();
// console.log(games.videoGames);
    
    addContent(newFish: IContent) {
        this._betta.push(newFish);

    }
    arrayLength(): number {
      
        return this._betta.length;
        } 
     
                    
                
}

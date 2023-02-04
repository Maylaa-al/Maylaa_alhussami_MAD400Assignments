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

    toString(index: number): string {
        const betta: IContent = this._betta[index];
        let prettyHtmlOutput = `
            <h2>${betta.title}</h2>
            <img src="${betta.imgSrc}">
            <p>${betta.description}</p>
            <span class="author">${betta.author}</span>
            <span class="type">${betta.type}</span>`;

            if (betta.tags) // If our tags array exists
            {
                prettyHtmlOutput += '<div class="tags">';
                // Add a wrapper around the tags that are going to be added
                
                betta.tags?.forEach((tag) => {
                    prettyHtmlOutput += `<span>${tag}</span>`;
                // Add each tag to the html output
                });

                prettyHtmlOutput += "</div>"; // Close the wrapper around the tags that were added
            }
            return prettyHtmlOutput

            }
    }
     
                    
                

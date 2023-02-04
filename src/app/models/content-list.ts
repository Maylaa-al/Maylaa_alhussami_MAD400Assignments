import { IContent } from "../icontent";


export class ContentList {
    static contentCount = 0;
    private _items: IContent[];
   
    
    constructor(  _items: IContent ) {
         
        this._items = [];
      }

       get iContent(): IContent[]{
        return this._items;
        }
    
    addContent(IContent: any) {
        this._items.push(IContent)

    }
    arrayLength () {
        let array = this._items.length   
        return array
        } 
     increaseCount() {
        return ++ContentList.contentCount;

         }
                    
                
}

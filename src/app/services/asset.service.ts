import {Asset} from '../model/asset.model'
import {Items} from '../model/item.model'
export class AssetService{
    public assets:Asset[]=[];
    public items:Items[]=[];
    public constructor(){

    }
    public getAssetInfo(){
        return this.assets;
    }
    public getItems(id){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i].assetId==id){
            return this.items[i]
        }
      }
      
    }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AssetService } from '../services/asset.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from '../model/item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
addItemForm; FormGroup;
  id_asset: any;
  items: any;
  constructor(private formBuilder: FormBuilder, public assetService: AssetService,public router:Router,private route:ActivatedRoute) {
    this.addItemForm = formBuilder.group({
      id: [null, [Validators.required]],
      item_name: [null, [Validators.required]],
      date_of_manufacture: [null,[Validators.required]],
      quantity:[null,[Validators.required]],
      date_of_purchase:[null,[Validators.required]]
    });
   }

addItem(form){
  console.log(form.value)
 
  this.route.params.subscribe(param=>{
    
    this.id_asset=param.assetId
  form.value.assetId=this.id_asset;
   this.assetService.items.push(form.value);
   console.log(this.assetService.items)
   this.getItems()
  })
 

 //console.log()
}
getItems(){
 this.items=this.assetService.items;
}

  ngOnInit() {
    this.getItems()
  }


}

import { Component ,} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Asset } from './model/asset.model';
import { AssetService } from './services/asset.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addAssetForm: FormGroup;
  //updateform: FormGroup;
  assets: Asset[] = [];
  assetId: any;
 assetName: any;
  // IsForUpdate:boolean=false;
  // disableField:boolean=false;
  constructor(private formBuilder: FormBuilder, public assetService: AssetService,public router:Router) {
    // this.updateform = formBuilder.group({
    //   _id: [''],
    //   firstname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9.\\-_.,*#]*$')]],
    //   lastname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9.\\-_.,*# ]*$')]],
    //   email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]]
    // });
    this.addAssetForm = formBuilder.group({
      assetId: [null, [Validators.required]],
      assetName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(40), Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9.\\-_.,*# ]*$')]],
     // email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]]
    });

  }

  ngOnInit() {
  this.getAssets();
   // console.log(this.user)
  }
  addAsset(frm) {
   // console.log(frm.value);
   // if (frm.value.firstName || frm.value.lastName || frm.value.email != '') {
      if (this.addAssetForm.valid) {
    //     this.userService.registerUser(frm.value).subscribe(res => {
    //  //     console.log(res);
    //       alert(res.message)
    //       window.location.reload();
        // })
        this.assetService.assets.push(frm.value)
        this.getAssets();
      }
      else {
        alert("Invalid Credentials")
        window.location.reload();
      }
  

  }
  itemInfo(id){
    console.log(id)
    this.router.navigate(['/item/'+id])
  }
  getAssets(){
   this.assets=this.assetService.getAssetInfo();
  }
  // delete(index) {
  //   // console.log("Item to be del:"+this.products[j].pname);
  //  // console.log(index)
  //   // console.log("Item to be del:"+this.user);
  //   // this.products.splice(j,1);
  //   this.userService.delete(index);
  //   window.location.reload()

  // }
  // EditUser(u) {

  //   this.id = u._id;
  //   let Assets: Asset;
  //   this.Assets.forEach(asset => {
  //     if (asset._id == this.id) {
  //       Assets = user;
  //       //console.log(Users);
  //     }
  //   })
  //   this.updateform.patchValue(Users);
  // }
  // // console.log(id);

  // updateUser(frm) {
  //  // console.log(frm.value);
  //   this.userService.update(frm.value);
  //   window.location.reload();
  // }
}

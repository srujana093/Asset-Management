import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetService } from './services/asset.service';
import { ItemComponent } from './item/item.component';
import { Router, RouterModule, Routes } from '@angular/router';
const appRoutes: Routes=[

  {path: 'item/:assetId',component: ItemComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing:true}
      ),
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

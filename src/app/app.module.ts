import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { CoiffureAboutComponent } from './coiffure-about/coiffure-about.component';
import { CoiffureProductsComponent } from './coiffure-products/coiffure-products.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntComponent } from './input-int/input-int.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingListComponent,
    CoiffureAboutComponent,
    CoiffureProductsComponent,
    InputIntComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

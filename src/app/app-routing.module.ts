import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoiffureAboutComponent } from './coiffure-about/coiffure-about.component';
import { CoiffureProductsComponent } from './coiffure-products/coiffure-products.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: CoiffureProductsComponent
    },
    {
        path: 'about',
        component: CoiffureAboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

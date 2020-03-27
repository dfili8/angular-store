import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'phones', 
    pathMatch: 'full' 
  },
  {
    path: 'phones',
    children: [
      {
        path:'',
        loadChildren: () => import('./phones/phones.module').then( m => m.PhonesPageModule)
      },
      {
        path:':phoneId',
        loadChildren: () => import('./phone-detail/phone-detail.module').then( m => m.PhoneDetailPageModule)
      }
    ]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CardComponent } from './card/card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProuctListComponent } from './customer-prouct-list/customer-prouct-list.component';
import { CustomerRegistorComponent } from './customer-registor/customer-registor.component';
import { DirectPaymentComponent } from './direct-payment/direct-payment.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyPaymentComponent } from './my-payment/my-payment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
{ path: '', component:HomeComponentComponent},
{ path: 'customerlogin', component: CustomerLoginComponent},
{ path: 'reset', component: ResetPasswordComponent},
{ path: 'reset/:userName', component: ResetPasswordComponent},
{ path: 'customerregister', component:CustomerRegistorComponent},
{ path: 'adminlogin', component:AdminLoginComponent},
{ path: '', redirectTo: 'product' , pathMatch:'full' },
{ path:'products', component: ProductListComponent  },
{ path:'add', component: AddProductComponent  },
{ path:'update/:pId', component: UpdateProductComponent  },
{ path:'details/:pId', component: ViewProductComponent  },
{ path:'adminpage' ,component:AdminPageComponent},
{ path:'about' ,component:AboutUsComponent},
{ path:'contact' ,component:ContactUsComponent},
{ path:'cplist/:cId' ,component:CustomerProuctListComponent},
{ path:'cplist' ,component:CustomerProuctListComponent},
{ path:'cart' ,component:MyCartComponent},
{ path:'cart/:cId' ,component:MyCartComponent},

{ path:'payment' ,component:MyPaymentComponent},
{ path:'payment/:payId' ,component:MyPaymentComponent},
{ path:'payment/:cId' ,component:MyPaymentComponent},
{ path:'card' ,component:CardComponent},
{ path:'card/:payId' ,component:CardComponent},
{ path:'directpay' ,component:DirectPaymentComponent},
{ path:'search' ,component:SearchProductComponent},
{ path:'view' ,component:ViewPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

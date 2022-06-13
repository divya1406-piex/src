import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerRegistorComponent } from './customer-registor/customer-registor.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerProuctListComponent } from './customer-prouct-list/customer-prouct-list.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyPaymentComponent } from './my-payment/my-payment.component';
import { CardComponent } from './card/card.component';
import { DirectPaymentComponent } from './direct-payment/direct-payment.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerRegistorComponent,
    CustomerLoginComponent,
    HomeComponentComponent,
    AdminPageComponent,
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    ViewProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    CustomerProuctListComponent,
    MyCartComponent,
    MyPaymentComponent,
    CardComponent,
    DirectPaymentComponent,
    ResetPasswordComponent,
    ViewPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

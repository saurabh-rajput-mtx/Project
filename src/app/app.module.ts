import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WrongurlComponent } from './wrongurl/wrongurl.component';
import { UserComponent } from './user/user.component';
import { UserModel } from './shared/userModel';
import { RegisterComponent } from './register/register.component';
// service
import { DishService } from './service/dish.service';
import { RegisterService } from './service/register.service';
import { ApiService } from './service/api.service';
// routes
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

// Server
import { HttpClientModule,HttpClient } from '@angular/common/http';
// import { HttpModule }
import { baseURL } from './shared/baseurl';
import { FooterComponent } from './service/footer/footer.component';
import { LoginService } from './service/login.service';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './service/cart.service';
import { ForgetComponent } from './forget/forget.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishdetailComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    WrongurlComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    RegisterComponent,
    FooterComponent,
    SignupComponent,
    CartComponent,
    ForgetComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'menu',component:MenuComponent},
      // 'dishdetail/:id' with variable
      {path:'dishdetail/:id',component:DishdetailComponent},
      {path:'',redirectTo:'home',pathMatch:'full' },
      //  path match full
      {path:'user',component:UserComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'cart',component:CartComponent},
      {path:'forget',component:ForgetComponent},
      {path:'**',component:WrongurlComponent}
    ])
  ],
// import { ApiService } from './service/api.service';
providers: [DishService,{provide: 'BaseURL', useValue: baseURL},RegisterService,ApiService,LoginService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

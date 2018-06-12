

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';

//import { BlogService } from './core/services/blog/blog.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArmorComponent } from './Goods/armor/armor.component';
import { WeponsComponent } from './Goods/wepons/wepons.component';
import { SheildsComponent } from './Goods/sheilds/sheilds.component';
import { BonusComponent } from './Goods/bonus/bonus.component';
import { ArmorService } from './core/services/armor/armor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { BlogComponent } from './blog/blog.component';
import { environment } from '../environments/environment';
import { PostService } from './posts/shared/post.service';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,    
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ArmorComponent,
    WeponsComponent,
    SheildsComponent,
    BonusComponent,
    PostsComponent,
    PostComponent,
    PostListComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [/*BlogService,*/ ArmorService, AuthService, AuthGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

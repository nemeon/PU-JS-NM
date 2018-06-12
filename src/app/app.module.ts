

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
<<<<<<< HEAD

//import { BlogService } from './core/services/blog/blog.service';
=======
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './core/services/blog/blog.service';
import { ItalianFoodsComponent } from './recipes/italian-foods/italian-foods.component';
import { SpanishFoodsComponent } from './recipes/spanish-foods/spanish-foods.component';
import { RecipeService } from './core/services/recipe/recipe.service';
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
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

=======
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LandingPageComponent,
<<<<<<< HEAD
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
=======
    AboutComponent,
    BlogComponent,
    ItalianFoodsComponent,
    SpanishFoodsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [/*BlogService,*/ ArmorService, AuthService, AuthGuard, PostService],
=======
  ],
  providers: [BlogService, RecipeService],
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
  bootstrap: [AppComponent]
})
export class AppModule { }

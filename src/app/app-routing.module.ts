import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArmorComponent } from './Goods/armor/armor.component'
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './auth.guard';

=======
import { ItalianFoodsComponent } from './recipes/italian-foods/italian-foods.component';
import { SpanishFoodsComponent } from './recipes/spanish-foods/spanish-foods.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8

const routes: Routes =
[
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: LandingPageComponent },
{ path: 'about', component: AboutComponent },
<<<<<<< HEAD
{ path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
{ path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
{ path: 'armor', component: ArmorComponent },
=======
{ path: 'blog', component: BlogComponent },
{ path: 'italian', component: ItalianFoodsComponent },
{ path: 'spanish', component: SpanishFoodsComponent },
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }

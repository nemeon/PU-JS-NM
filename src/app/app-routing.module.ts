import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArmorComponent } from './Goods/armor/armor.component'
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './auth.guard';


const routes: Routes =
[
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: LandingPageComponent },
{ path: 'about', component: AboutComponent },
{ path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
{ path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
{ path: 'armor', component: ArmorComponent },
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

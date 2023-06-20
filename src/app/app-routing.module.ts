import { Component, NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WorkComponent } from "./work/work.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./shared/auth.guard";
import { BlogeditComponent } from "./admin/blogedit/blogedit.component";
import { UrlshortnerComponent } from "./admin/urlshortner/urlshortner.component";
import { CloudspaceComponent } from "./admin/cloudspace/cloudspace.component";
import { AngularFirestore } from '@angular/fire/compat/firestore'

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'skill', component: MyskillsComponent},
    { path: 'work', component: WorkComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'login', component: LoginComponent},
    { path: 'admin',
    children:[{path:'blogedit',component:BlogeditComponent},
            {path:'urlshortner',component:UrlshortnerComponent},
            {path:'cloudspace',component:CloudspaceComponent}],
     component: AdminComponent,canActivate:[AuthGuard]},
]



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRoutingModule{

}
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WorkComponent } from "./work/work.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { RouterModule } from "@angular/router";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'skill', component: MyskillsComponent},
    { path: 'work', component: WorkComponent},
    { path: 'blog', component: BlogComponent},
]



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRoutingModule{

}
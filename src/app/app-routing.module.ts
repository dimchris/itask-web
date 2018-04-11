import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MakeGameComponent } from './make-game/make-game.component';
import { PreviewGameComponent } from './preview-game/preview-game.component';
import { SearchGameComponent } from './search-game/search-game.component';
import { TutorProfilComponent } from './tutor-profil/tutor-profil.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
    {path:'home', component:HomepageComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'makegame', component:MakeGameComponent},
    {path:'previewgame', component:PreviewGameComponent},
    {path:'searchgame', component:SearchGameComponent},
    {path:'tutorprofil', component:TutorProfilComponent},
    {path:'navigation', component:NavigationBarComponent}
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}

export const routingComponents = [HomepageComponent, RegisterComponent, LoginComponent, MakeGameComponent, PreviewGameComponent, SearchGameComponent, TutorProfilComponent];
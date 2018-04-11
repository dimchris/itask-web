import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as  $ from 'jquery';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
//import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
//import { SearchGameComponent } from './search-game/search-game.component';
//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
//import { TutorProfilComponent } from './tutor-profil/tutor-profil.component';
//import { PreviewGameComponent } from './preview-game/preview-game.component';
//import { MakeGameComponent } from './make-game/make-game.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule, routingComponents} from './app-routing.module';






export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  //{ path: 'home', component: HomepageComponent },
  //{ path: 'search', component:SearchGameComponent},
  //{ path: 'register', component:RegisterComponent},
  //{ path: 'login', component:LoginComponent},
  //{ path: 'profil', component:TutorProfilComponent},
  //{ path: 'preview', component: PreviewGameComponent},
  //{ path: 'make', component: MakeGameComponent}
  
];



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents
    //HomepageComponent,
    //SearchGameComponent,
    //RegisterComponent,
    //LoginComponent,
    //TutorProfilComponent
    //PreviewGameComponent,
    //MakeGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )



  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

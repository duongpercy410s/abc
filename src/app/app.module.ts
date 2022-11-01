import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    FooterComponent,
    MoviesComponent,
    TodoDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'logins',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'todos/:id',
        component: TodoDetailComponent,
      },
      {
        path: 'todos',
        component: MainComponent,
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

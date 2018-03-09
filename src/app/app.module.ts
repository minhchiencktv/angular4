
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RecuitmentComponent } from './recuitment/recuitment.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroductionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'recuitment', component: RecuitmentComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    ProductsComponent,
    RecuitmentComponent,
    PicturesComponent,
    NewsComponent,
    IntroductionComponent,
    ContactsComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes) ],
  bootstrap: [AppComponent]
})
export class AppModule { }

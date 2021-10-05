import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingComponent } from './trending/trending.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { ElementComponent } from './element/element.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FooterComponent } from './footer/footer.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingComponent,
    AboutComponent,
    ContactComponent,
    DetailsComponent,
    CategoryComponent,
    ElementComponent,
    BlogComponent,
    BlogDetailsComponent,
    FooterComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { ElementComponent } from './element/element.component';
import { TrendingComponent } from './trending/trending.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
const routes: Routes = [
  {
    path : "",
    component : TrendingComponent
  },
  {
    path : "home",
    component : TrendingComponent
  },
  {
    path : "category",
    component : CategoryComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "latest-news",
    component : LatestNewsComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "elements",
    component : ElementComponent
  },
  {
    path : "blog",
    component : BlogComponent
  },
  {
    path : "blog-details",
    component : BlogDetailsComponent
  },
  {
    path : "latest-news/:id",
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

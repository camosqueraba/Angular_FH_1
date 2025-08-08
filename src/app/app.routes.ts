import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: "dashboard" , loadComponent: () => import("./gifs/paginas/dashboard-page/dashboard-page.component"),
      children : [
        {
          path: "trending" ,
          loadComponent: () => import("./gifs/paginas/trending-page/trending-page.component")
        }, 
        {
          path: "search" ,
          loadComponent: () => import("./gifs/paginas/search-page/search-page.component")
        }
      ]    
    },
   
    {
      path: "**", redirectTo : "dashboard"
    }
];

//   Title: app-routing.component.ts
//   Author: Gunner Bradley
//   Date: March 23rd 2022
//   Description: routing for app

import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInGuard } from './sign-in.guard';
import { AuthLayoutComponent} from './shared/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/* configure routes*/
const routes: Routes = [
  {
    // main routes
    path: '',
    component: BaseLayoutComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
          canActivate: [SignInGuard]
        },
        {
          path: 'home',
          component: HomeComponent,
          canActivate: [SignInGuard]
        },
        {
          path: 'contact',
          component: ContactComponent,
          canActivate: [SignInGuard],
        },
        {
          path: 'about',
          component: AboutComponent,
          canActivate: [SignInGuard],
        },
        {
        path: 'not-found',
        component: NotFoundComponent
      }
      ]
   },

  //  login routes
   {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },

  // all unknown to 404 page
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

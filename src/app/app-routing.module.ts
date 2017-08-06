import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes,  RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from './shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login.guard';
import { ClassicComponent } from './forms/classic/classic.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'forms/classic', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type',
        component: CardsComponent,
        canActivate: [LoginGuard]
      },
      { path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      },
      { path: 'forms/classic', component: ClassicComponent }
  ]},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

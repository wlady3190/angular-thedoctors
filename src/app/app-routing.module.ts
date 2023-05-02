import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './components/e404/e404.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FormCitaComponent } from './components/form-cita/form-cita.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: CarrouselComponent },
  { path: 'app-cita', component: FormCitaComponent },
  { path: 'contacto', component: MapComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

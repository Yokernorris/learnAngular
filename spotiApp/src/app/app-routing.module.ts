import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from './components/home/home.component';
import  {SearhComponent} from './components/searh/searh.component';
import {ArtistaComponent} from "./components/artista/artista.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'searh', component: SearhComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

/*Generando el routing desde angular es mucho mas sencillo, en este caso simplemente añadimos las rutas en routes
y como queremos hash lo agregamos en el forRoot*/

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

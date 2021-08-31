import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KesehatanComponent } from './pages/kesehatan/kesehatan.component';
import { PajakComponent } from './pages/pajak/pajak.component';
import { KependudukanComponent } from './pages/kependudukan/kependudukan.component';
import { PendidikanComponent } from './pages/pendidikan/pendidikan.component';
import { DaruratComponent } from './pages/darurat/darurat.component';

const routes: Routes = [
  { path: '', component: KependudukanComponent},
  { path: 'kependudukan', component: KependudukanComponent},
  { path: 'kesehatan', component: KesehatanComponent},
  { path: 'pajak', component: PajakComponent},
  { path: 'pendidikan', component: PendidikanComponent},
  { path: 'darurat', component: DaruratComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

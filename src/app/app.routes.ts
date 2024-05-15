import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { PostsComponent } from './pages/posts/posts.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

export const routes: Routes = [
    {path: 'post', title: 'Post', component: PostsComponent},
    {path: 'suma', title: 'Operación suma', component: SumaComponent},
    {path: 'mensajes', title: 'Mensajes', component: MensajesComponent},
    {path: 'resta', title: 'Operación resta', component: RestaComponent},
    {path: 'acercade', title: 'Acerca de...', component: AcercadeComponent},
    {path: 'calculadora', title: 'Caculadora', component: CalculadoraComponent}
];

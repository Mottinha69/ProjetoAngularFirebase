import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'super-mario',
    loadChildren: () => import('./super-mario/super-mario.module').then( m => m.SuperMarioPageModule)
  },
  {
    path: 'princesa-peach',
    loadChildren: () => import('./princesa-peach/princesa-peach.module').then( m => m.PrincesaPeachPageModule)
  },
  {
    path: 'luigi',
    loadChildren: () => import('./luigi/luigi.module').then( m => m.LuigiPageModule)
  },
  {
    path: 'yoshi',
    loadChildren: () => import('./yoshi/yoshi.module').then( m => m.YoshiPageModule)
  },
  {
    path: 'bowser',
    loadChildren: () => import('./bowser/bowser.module').then( m => m.BowserPageModule)
  },
  {
    path: 'toad',
    loadChildren: () => import('./toad/toad.module').then( m => m.ToadPageModule)
  },
  {
    path: 'wario',
    loadChildren: () => import('./wario/wario.module').then( m => m.WarioPageModule)
  },
  {
    path: 'waluigi',
    loadChildren: () => import('./waluigi/waluigi.module').then( m => m.WaluigiPageModule)
  },
  {
    path: 'princesa-daisy',
    loadChildren: () => import('./princesa-daisy/princesa-daisy.module').then( m => m.PrincesaDaisyPageModule)
  },
  {
    path: 'rosalina',
    loadChildren: () => import('./rosalina/rosalina.module').then( m => m.RosalinaPageModule)
  },
  {
    path: 'donkey-kong',
    loadChildren: () => import('./donkey-kong/donkey-kong.module').then( m => m.DonkeyKongPageModule)
  },
  {
    path: 'diddy-kong',
    loadChildren: () => import('./diddy-kong/diddy-kong.module').then( m => m.DiddyKongPageModule)
  },
  {
    path: 'lakitu',
    loadChildren: () => import('./lakitu/lakitu.module').then( m => m.LakituPageModule)
  },
  {
    path: 'shy-guy',
    loadChildren: () => import('./shy-guy/shy-guy.module').then( m => m.ShyGuyPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

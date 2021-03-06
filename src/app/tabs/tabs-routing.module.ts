import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'mile2',
        loadChildren: () => import('../mile2/mile2.module').then(m => m.Mile2PageModule)
      },
      {
        path: 'mile3',
        loadChildren: () => import('../mile3/mile3.module').then(m => m.Mile3PageModule)
      },
      {
        path: 'taquero',
        loadChildren: () => import('../taquero/taquero.module').then( m => m.TaqueroPageModule)
      },
      {
        path: 'crepaselrey',
        loadChildren: () => import('../crepaselrey/crepaselrey.module').then( m => m.CrepaselreyPageModule)
      },
      {
        path: 'tacoslospelones',
        loadChildren: () => import('../tacoslospelones/tacoslospelones.module').then( m => m.TacoslospelonesPageModule)
      },
      {
        path: 'elotero',
        loadChildren: () => import('../elotero/elotero.module').then( m => m.EloteroPageModule)
      },
      {
        path: 'tamalera',
        loadChildren: () => import('../tamalera/tamalera.module').then( m => m.TamaleraPageModule)
      },
      {
        path: 'churros',
        loadChildren: () => import('../churros/churros.module').then( m => m.ChurrosPageModule)
      },
      {
        path: 'fruitstand',
        loadChildren: () => import('../fruitstand/fruitstand.module').then( m => m.FruitstandPageModule)
      },
      {
        path: 'tacoselmazapan',
        loadChildren: () => import('../tacoselmazapan/tacoselmazapan.module').then( m => m.TacoselmazapanPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

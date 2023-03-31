import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'language-modal',
    loadChildren: () => import('./pages/language-modal/language-modal.module').then( m => m.LanguageModalPageModule)
  },
  {
    path: 'papers',
    loadChildren: () => import('./pages/papers/papers.module').then( m => m.PapersPageModule)
  },
  {
    path: 'papers-list',
    loadChildren: () => import('./pages/papers-list/papers-list.module').then( m => m.PapersListPageModule)
  },
  {
    path: 'recommended',
    loadChildren: () => import('./pages/recommended/recommended.module').then( m => m.RecommendedPageModule)
  },
  {
    path: 'recommended-list',
    loadChildren: () => import('./pages/recommended-list/recommended-list.module').then( m => m.RecommendedListPageModule)
  },
  {
    path: 'location-explore',
    loadChildren: () => import('./pages/location-explore/location-explore.module').then( m => m.LocationExplorePageModule)
  },
  {
    path: 'video-list',
    loadChildren: () => import('./pages/video-list/video-list.module').then( m => m.VideoListPageModule)
  },
  {
    path: 'single-post',
    loadChildren: () => import('./pages/single-post/single-post.module').then( m => m.SinglePostPageModule)
  },
  {
    path: 'single-video',
    loadChildren: () => import('./pages/single-video/single-video.module').then( m => m.SingleVideoPageModule)
  },
  {
    path: 'single-paper',
    loadChildren: () => import('./pages/single-paper/single-paper.module').then( m => m.SinglePaperPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

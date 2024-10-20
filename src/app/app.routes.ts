import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TagsComponent } from './pages/tags/tags.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddArticleComponent } from './pages/articles/add-article/add-article.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard]
            },
            {
                path: 'articles',
                component: ArticlesComponent,
                canActivate: [authGuard],
                children: [
                    {
                        path: 'addarticle',
                        component: AddArticleComponent,
                    }
                ]
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                canActivate: [authGuard]
            },
            {
                path: 'addarticlenew',
                component: AddArticleComponent,
                canActivate: [authGuard]
            },
            {
                path: 'tags',
                component: TagsComponent,
                canActivate: [authGuard]
            },
            {
                path: 'statistics',
                component: StatisticsComponent,
                canActivate: [authGuard]
            },
            {
                path: 'settings',
                component: SettingsComponent,
                canActivate: [authGuard]
            },
        ]
    },
];

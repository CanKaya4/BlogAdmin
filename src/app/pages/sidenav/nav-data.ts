import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Anasayfa'
    },
    {
        routeLink: 'articles',
        icon: 'fal fa-file-alt',
        label: 'Makaleler',
        items: [ // Virgül eklendi
            {
                routeLink: 'articles/addarticle',
                label: 'Makale Ekle'
            },
            {
                routeLink: 'articles/updatearticle',
                label: 'Makale Güncelle'
            },
            {
                routeLink: 'articles/deletearticle',
                label: 'Makale Sil'
            }
        ]
    },
    {
        routeLink: 'categories',
        icon: 'fal fa-folder-open',
        label: 'Kategoriler'
    },
    {
        routeLink: 'tags',
        icon: 'fal fa-tags',
        label: 'Etiketler'
    },
    // {
    //     routeLink: 'statistics',
    //     icon: 'fal fa-chart-bar',
    //     label: 'İstatistikler'
    // },
    // {
    //     routeLink: 'settings',
    //     icon: 'fal fa-chart-bar',
    //     label: 'Ayarlar'
    // }
];


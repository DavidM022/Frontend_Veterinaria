import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        data: {
          title: 'Base'
        },
        children: [
            {
              path: '',
              redirectTo: 'cards',
              pathMatch: 'full'
            },
            {
              path: 'reservas',
              loadComponent: () => import('./reservas/reservas.component').then(m => m.ReservasComponent),
              data: {
                title: 'Reservas'
              }
            },
            {
              path: 'pacientes',
              loadComponent: () => import('./pacientes/pacientes.component').then(m => m.PacientesComponent),
              data: {
                title: 'Pacientes'
              }
            },
            {
                path: 'reportes',
                loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
                data: {
                  title: 'Reportes'
                }
              },
        ]
    }

]
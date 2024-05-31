import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },

  ///------------------------------VETERINARIA INICIO
  {
    title: true,
    name: 'indice de Reservas'
  },
  {
    name: 'Veterinaria',
    url: '/veterinaria',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Reservas',
        url: '/veterinaria/reservas',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pacientes',
        url: '/veterinaria/pacientes',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Reportes',
        url: '/veterinaria/reportes',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  ///------------------------------VETERINARIA FINAL


];

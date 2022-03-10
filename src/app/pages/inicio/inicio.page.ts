import { Component, OnInit } from '@angular/core';

interface componente {

  icon: string;
  name: string;
  redirecTO: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: componente[] = [

    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTO: '/action-sheet'

    },

    {
      icon: 'alert-outline',
      name: 'alert',
      redirecTO: '/alert'

    },

    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirecTO: '/avatar'

    },

    {
      icon: 'radio-button-on-outline',
      name: 'botones',
      redirecTO: '/botones'

    },

    {
      icon: 'card-outline',
      name: 'cards',
      redirecTO: '/card'

    },

    {
      icon: 'checkmark-circle-outline',
      name: 'chekout',
      redirecTO: '/check'

    },

    {
      icon: 'calendar-outline',
      name: 'dateTime',
      redirecTO: '/date-time'

    },

    {
      icon: 'car-outline',
      name: 'Fab',
      redirecTO: '/fab'

    },

    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecTO: '/grid'

    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

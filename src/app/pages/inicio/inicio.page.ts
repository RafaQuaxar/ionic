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
      icon: 'logo-apple-appstore',
      name: 'alert',
      redirecTO: '/alert'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

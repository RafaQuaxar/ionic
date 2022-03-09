import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'foto',
      message: 'Esta saeguro que desea eliminar la foto',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [

        {

          text: 'ok!',
          handler: () => {
            console.log('click en ok')
          },



        },

        {

          text: 'cancelar',
          role:'cancel'
        }



      ]
    });

    await alert.present();
  }
}

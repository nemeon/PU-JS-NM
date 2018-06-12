import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ArmorModule } from '../../models/armor.module';

@Injectable()
export class ArmorService {

  constructor() { }

  takeAllArmors() {
    const armors: ArmorModule[] = [
      {
        Id: 'armor-001',
        Title: 'Roman gold armor',
        Description: 'This armor is pure gold, made by romans, it protects from direct cut.',
   
        ImgSrc: '../assets/images/ar1.jpg'
      },
      {
        Id: 'armor-002',
        Title: 'Roman Commander',
        Description: "This stunning muscle cuirass and back plate have been hand formed by our master metalsmiths from steel, then plated in brass and antiqued.",
        
        ImgSrc: '../assets/images/ar2.jpeg'
      },
      {
        Id: 'armor-003',
        Title: 'Gladiator Armor',
        Description: 'This is gold gladiator armor, made for battles at the arena, very durable and  ',
       
        ImgSrc: '../assets/images/ar3.jpg'
      },
      {
        Id: 'armor-004',
        Title: "Womens Leather Body Armour",
        Description: "This leather armor is made for womens. It`s comfortable, light and suitable for fast movements.",
        
        ImgSrc: '../assets/images/ar4.jpg'
      }
    ];
    return armors;
  }
}

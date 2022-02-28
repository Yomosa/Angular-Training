import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Yomochi',
      description: 'Mon perso ff14!',
      createdDate: new Date(),
      snaps: 14,
      imageUrl:
        'https://img2.finalfantasyxiv.com/f/f6306757b4bb1345d3f20965becee9de_feaf0a2e88ff164813fbc9b85876fa48fl0_640x873.jpg?1646036794',
      location: 'Eorzea',
    },
    {
      id: 2,
      title: 'Brotonsaure',
      description: 'Le bro-dinosaure!',
      createdDate: new Date(),
      snaps: 134,
      imageUrl:
        'https://www.ikea.com/be/fr/images/products/jaettelik-peluche-dinosaure-dinosaure-brotonsaure__0804796_pe769337_s5.jpg?f=s',
    },
    {
      id: 3,
      title: 'YomonEndwalkero',
      description: 'La dernière extension ff14!',
      createdDate: new Date(),
      snaps: 845,
      imageUrl:
        'https://img.finalfantasyxiv.com/lds/promo/h/g/yAhkYrzwI7-C_PVf9LP32Bu3_A.jpg',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(faceSnap) return faceSnap;
      else throw new Error('No faceSnap with this id : ' + faceSnapId);
  }

  SnapFaceSnapById(faceSnapId: number, snapType:'snap'|'unsnap'): void {  
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}

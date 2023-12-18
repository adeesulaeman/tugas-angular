import { Injectable } from '@angular/core';
import { ProfileModel } from '../model/profilemodel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  profileList: ProfileModel[] = [
    {
      nik: 1,
      name: 'Albert',
      job: 'Programmer',
      join_date: '2020-01-01'
    },
    {
      nik: 2,
      name: 'Juni',
      job: 'System Analys',
      join_date: '2020-05-01'
    },
    {
      nik: 3,
      name: 'Agus',
      job: 'QA',
      join_date: '2022-01-01'
    }
  ];

  getProfileList() {
    return this.profileList;
  }

  getProfileByNik(_nik: number) {
    return this.profileList.find(x => x.nik === _nik);
  }

}

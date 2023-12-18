import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from 'src/app/model/profilemodel';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private pService: ProfileService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((x: any) => {
      this.nikKaryawan = x.id;
    });
  }

  karyawan: ProfileModel[] = [];
  nikKaryawan: any;
  karwayanTerpilih: ProfileModel = new ProfileModel();

  ngOnInit(): void {
    this.karyawan = this.pService.profileList;

    if (this.nikKaryawan) {
      this.karwayanTerpilih = this.pService.getProfileByNik(Number(this.nikKaryawan)) || new ProfileModel();
    }
  }
}

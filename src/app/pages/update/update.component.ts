import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileModel } from 'src/app/model/profilemodel';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private pService: ProfileService) { }

  updateForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl('', Validators.required)
  });

  data = this.pService.getProfile()

  @Input() tipe: string = '';
  @Input() karyawan: ProfileModel[] = [];

  updateData(form: FormGroup) {
    if(this.tipe === 'update'){
      this.pService.updateProfile(form, this.karyawan)
    } else {
      this.pService.addProfile(form, this.karyawan)
    }
    
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../model/usermodel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dataUser } from '../mock/datauser.mock';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getProfileList() {
    return this.http.get('https://reqres.in/api/users');
  }

  getProfileByNik(_nik: number) {
    return this.http.get('https://reqres.in/api/users/?id=' + _nik);
  }

  getProfile(): UserModel[] {
    return dataUser;
  }

  addProfile(form: FormGroup) {
    if (form.valid) {
      const newUser: UserModel = {
        name: form.value.name,
        email: form.value.email,
        birthdate: form.value.birthdate,
        address: form.value.address
      };

      const existingUserIndex = dataUser.findIndex(user => user.email === form.value.email);

      if (existingUserIndex > -1) {
        this.showMessage('Email sudah digunakan !');
      } else {
        dataUser.push(newUser);
        this.showMessage('Berhasil menambahkan data !');
        form.reset();
      }

    } else {
      this.showMessage('Formulir tidak valid !')
    }
  }

  updateProfile(form: FormGroup) {
    const updateUser: UserModel = {
      name: form.value.name,
      email: form.value.email,
      birthdate: form.value.birthdate,
      address: form.value.address
    };

    const indexToUpdate = dataUser.findIndex(user => user.email === form.value.email);

    if (indexToUpdate > -1) {
      dataUser[indexToUpdate] = updateUser;
      form.reset()
      this.showMessage('Data berhasil diubah !')
    } else {
      this.showMessage('Data tidak ditemukan !')
    }
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

}

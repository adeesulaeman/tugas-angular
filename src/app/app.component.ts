import { Component } from '@angular/core';
import { DosenTetap } from './model/dosenTetap';
import { DosenKontrak } from './model/dosenKontrak';
import { Hukum } from './model/hukum';
import { SistemInformasi } from './model/sistemInformasi';
import { KampusA } from './model/kampusA';
import { KampusB } from './model/kampusB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.dosenTetap.nidn = "abc12345678";
    this.dosenTetap.nama = "Supardi";
    this.dosenTetap.umur = 40;
    this.dosenTetap.alamat = "Bekasi";
    this.dosenTetap.gaji = 10000;

    this.dosenKontrak.nidk = "def12345678";
    this.dosenKontrak.nama = "Suherman";
    this.dosenKontrak.umur = 43;
    this.dosenKontrak.alamat = "Jakarta";
    this.dosenKontrak.gaji = 7000;

    this.hukum.idJurusan = "ab123";
    this.hukum.namaJurusan = "Hukum";
    this.hukum.pidana = true;

    this.sistemInformasi.idJurusan = "si123";
    this.sistemInformasi.namaJurusan = "Sistem Informasi";
    this.sistemInformasi.algoritma = true;

    this.kampusA.nama = "Kampus A";
    this.kampusA.luas = 6000;
    this.kampusA.warna = "Hijau";
    this.kampusA.perpustakaan = true;

    this.kampusB.nama = "Kampus B";
    this.kampusB.luas = 3000;
    this.kampusB.warna = "Blue";
    this.kampusB.laboratorium = true;
  }

  dosenTetap: DosenTetap = new DosenTetap();
  dosenKontrak: DosenKontrak = new DosenKontrak();

  hukum: Hukum = new Hukum();
  sistemInformasi: SistemInformasi = new SistemInformasi();

  kampusA: KampusA = new KampusA();
  kampusB: KampusB = new KampusB();

}

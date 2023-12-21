import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(){}

  // Jalan saat pertama kali aplikasi dibuka dan hanya sekali
  ngOnInit(): void {
    console.log('Masuk Sini');
  }

  // Jalan saat aplikasi berhenti
  ngOnDestroy(): void {
    console.log('Destroy');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private _isDarkMode: boolean;

  constructor() {
    // Ler a preferência do modo a partir do localStorage
    const savedMode = localStorage.getItem('darkMode');
    this._isDarkMode = savedMode === 'true';
    this.applyMode();
  }

  get isDarkMode(): boolean {
    return this._isDarkMode;
  }

  setDarkMode(value: boolean): void {
    this._isDarkMode = value;
    localStorage.setItem('darkMode', value.toString());
    this.applyMode();
  }

  private applyMode() {
    const body = document.body;
    if (this._isDarkMode) {
      body.classList.remove('light');
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
    }
  }
}

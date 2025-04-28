import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private allowDeleteOnHome: boolean = false;

  constructor() {
    this.loadSettings();
  }

  async loadSettings() {
    const { value } = await Preferences.get({ key: 'allowDeleteOnHome' });
    this.allowDeleteOnHome = value === 'true';
  }

  getAllowDeleteOnHome(): boolean {
    return this.allowDeleteOnHome;
  }

  async setAllowDeleteOnHome(value: boolean) {
    this.allowDeleteOnHome = value;
    await Preferences.set({ key: 'allowDeleteOnHome', value: value.toString() });
  }
}

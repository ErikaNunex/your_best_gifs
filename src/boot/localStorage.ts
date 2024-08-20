import { LocalStorage } from 'quasar';

export function saveToLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function getFromLocalStorage(key: string): string {
  return localStorage.getItem(key) || '';
}

export function removeFromLocalStorage(key: string) {
  LocalStorage.remove(key);
}

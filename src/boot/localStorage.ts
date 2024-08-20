import { LocalStorage } from 'quasar';

export function saveToLocalStorage<T>(key: string, value: T): void {
  LocalStorage.set(key, value);
}

export function getFromLocalStorage(key: string) {
  return LocalStorage.getItem(key);
}

export function removeFromLocalStorage(key: string) {
  LocalStorage.remove(key);
}

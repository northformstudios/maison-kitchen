import { Reservation } from '../types';

export function formatNGN(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}

const RESERVATIONS_STORAGE_KEY = 'maison_kitchen_demo_reservations';

export function getStoredReservations(): Reservation[] {
  try {
    const data = localStorage.getItem(RESERVATIONS_STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveReservation(reservation: Reservation): void {
  try {
    const existing = getStoredReservations();
    const updated = [reservation, ...existing];
    localStorage.setItem(RESERVATIONS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to store reservation in localStorage', e);
  }
}

/**
 * Interfaz genérica `Collectable` que define los métodos `addItem`,
 * `getItem`, `removeItem` y `getNumberOfItems`.
 */
export interface Collectable<T> {
    addItem(item: T): void;
    getItem(item: number): T | undefined;
    removeItem(index: number): number | undefined;
    getNumberOfItems(): number;
  }
  
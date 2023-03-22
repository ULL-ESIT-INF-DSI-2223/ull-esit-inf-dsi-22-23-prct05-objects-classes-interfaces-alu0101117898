/**
 * @file Pokemon.ts
 * Se define la interfaz Pokemon con sus métodos, que
 * que son: `getName()`, `getType()`, `getId()` y `getWeaknesses()`.
 */
export interface Pokemon {
    getName(): string;
    getType(): string;
    getId(): number;
    getWeaknesses(): string;
    setName(name: string): void;
    setType(type: string): void;
    setId(id: number): void;
    setWeaknesses(weaknesses: string): void;
}

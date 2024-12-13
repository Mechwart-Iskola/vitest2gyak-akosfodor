import {it, expect, describe} from 'vitest'
import { commonKeys, compareObjectArrays, compareObjects } from './functions'

describe ('compareObjects', () => {

    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };
    const obj3 = { a: 1, b: 2, d: 4 };
    const obj4 = {};
    const obj5 = {};
    const Akos = { name: "Akos", age: 17, city: "Puspokladany" };

    it('identical key-value pairs', () => {
        expect(compareObjects(obj1, obj2)).toBe(true);
    });

    it('should return false for different objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        
        expect(compareObjects(obj1, obj3)).toBe(false);
    });

    it('empty objects', () => {
        expect(compareObjects(obj4, obj5)).toBe(true);
    });

    it('should handle real world objects correctly', () => {
        expect(compareObjects(Akos, Akos)).toBe(true);
        expect(compareObjects(Akos, {name: "Joska", age: 30, city: "Kazincbarcika"})).toBe(false);
    });
})

describe ('compareObjectArrays', () => {
    const objarray1 = [
        {a: 1, b: 2, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 7, h: 8, i: 9},
        {j: 10, k: 11, l:12},
    ]

    const objarray2 = [
        {a: 1, b: 2, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 7, h: 8, i: 9},
        {j: 10, k: 11, l:12},
    ]

    const objarray4 = [
        {a: 1, b: 222, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 96, h: 8, i: 9},
    ]

    const SS = [
        {id: 1, name: "Akos", age: 17, city: "Puspokladany"},
        {id: 2, name: "Marton", age: 18, city: "Hajduszovat"}, 
        {id: 3, name: "Arpad", age: 17, city: "Hajdunanas"},
        {id: 4, name: "Mark", age: 18, city: "Nadudvar"},
        {id: 5, name: "David", age: 18, city: "Debrecen"},
    ]

    it('should return true for arrays of identical objects', () => {
        expect(compareObjectArrays(objarray1, objarray2)).toBe(true);
    });

    it('should return false for arrays of different objects', () => {
        expect(compareObjectArrays(objarray1, objarray4)).toBe(false);
    });

    it('should return real world objects correctly', () => {
        expect(compareObjectArrays(SS, SS)).toBe(true);
        expect(compareObjectArrays(SS, [{id: 1, name: "Akos", age: 17, city: "Puspokladany"}])).toBe(false);
    });
})

describe ('commonKeys', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };
    const obj4 = {};
    const obj5 = {};
    const Akos = {id: 1, name: "Akos", age: 17, city: "Puspokladany"};

    it('returns every key name', () => {
        expect(commonKeys(obj1, obj2)).toEqual(['a', 'b', 'c']);
    });

    it('returns empty array', () => {
        expect(commonKeys(obj4, obj5)).toEqual([]);
    });

    it('doesnt have common keys', () => {
        expect(commonKeys({}, {})).toEqual([]);
    });

    it('should handle real world objects correctly', () => {
        expect(commonKeys(Akos, Akos)).toEqual(['id', 'name', 'age', 'city']);
    });
})
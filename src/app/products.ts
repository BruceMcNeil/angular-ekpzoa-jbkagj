export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Stalker Foto translated into English',
    price: 799,
    description: 'The lost translation revived.',
  },
  {
    id: 2,
    name: 'Stalker Foto translated into Chinese',
    price: 699,
    description: 'Breaking new ground on the Continent.',
  },
  {
    id: 3,
    name: 'Stalker Foto translated into Korean',
    price: 299,
    description: 'Hard to find Korean version.',
  },
  {
    id: 4,
    name: 'Stalker Foto translated into Japanese',
    price: 299,
    description: 'Rare Japanese version.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

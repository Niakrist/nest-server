// {
//   "id": 1,
//   "boiler_manufacturer": "Saunier Duval",
//   "price": 9205,
//   "parts_manufacturer": "Sensor",
//   "vendor_code": "XD5UDIjNGqQY2nL",
//   "name": "Modi congregatio.",
//   "description": "Crebro barba vinculum magnam apparatus auditor auxilium adsidue perspiciatis inventore.",
//   "images": "[\"https://avatars.githubusercontent.com/u/2001371\",\"https://avatars.githubusercontent.com/u/63894384\",\"https://avatars.githubusercontent.com/u/62374154\",\"https://avatars.githubusercontent.com/u/76398403\",\"https://avatars.githubusercontent.com/u/51773331\",\"https://avatars.githubusercontent.com/u/72853263\",\"https://avatars.githubusercontent.com/u/37735566\"]",
//   "in_stock": 4,
//   "bestseller": false,
//   "new": true,
//   "popularity": 197,
//   "compatibility": "Comitatus facilis sol demergo vae voluntarius celebrer.",
//   "createdAt": "2025-01-19T09:45:27.000Z",
//   "updatedAt": "2025-01-19T09:45:27.000Z"
// }

import { ApiProperty } from '@nestjs/swagger';

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 1 })
  id: number;
}

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Album {
  userId: number;
  id: number;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  albums: Album[] = [];

  constructor(private http: HttpClient) {}
  getAllAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}

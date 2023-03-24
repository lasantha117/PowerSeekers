import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageUrls: string[] = [];

  constructor() {}

  getImageUrls() {
    return this.imageUrls;
  }

  setImageUrl(imageUrl: string, index: number) {
    this.imageUrls[index] = imageUrl;
  }
}

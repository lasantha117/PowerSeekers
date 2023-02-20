import { Component } from '@angular/core';
import {Router} from "@angular/router";


function upload(params: { ContentType: any; Bucket: string; ACL: string; Body: any; Key: string }, param2: (err: any, data: any) => void) {

}

@Component({
  selector: 'app-admin-test-control',
  templateUrl: './admin-test-control.component.html',
  styleUrls: ['./admin-test-control.component.css']
})
export class AdminTestControlComponent {
  private url: any;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }


  imageUrl1: any;
  imageUrl2: any;
  imageUrl3: any;
  imageUrl4: any;

  onFileSelected(event: any, imageNumber: number) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (imageNumber === 1) {
          this.imageUrl1 = e.target.result;
        } else if (imageNumber === 2) {
          this.imageUrl2 = e.target.result;
        } else if (imageNumber === 3) {
          this.imageUrl3 = e.target.result;
        } else if (imageNumber === 4) {
          this.imageUrl4 = e.target.result;
        }


        const params = {
          Bucket: 'YOUR_S3_BUCKET_NAME',
          Key: `image${imageNumber}.jpg`,
          Body: file,
          ACL: 'public-read',
          ContentType: file.type
        };

        upload(params, (err: any, data: any) => {
          if (err) {
            console.log('Error uploading file:', err);
          } else {
            console.log('File uploaded successfully:', data.Location);
          }
        });
      };
      reader.readAsDataURL(file);
    }
  }



}



import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent implements OnInit {
  constructor(private imagesgeneration : ImagesgenerationService) {}

  ngOnInit(): void {
  }

  result : string = "";
  description : string = "";

  postCompletion() {
    let myprompt = `${this.description}`

      var payload = {
        prompt: myprompt,
        n: 1,
        size: "512x512"
      }
    
      this.imagesgeneration.postCompletion(payload)
      .subscribe((data:any) => {
        console.log(data);
        this.result = data.data[0].url;
      })
  }

}

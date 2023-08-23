import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit {
  constructor(private moderations : ModerationsService) {}

  ngOnInit(): void {
  }

  result : string = "";
  prompt : string = "";

  postCompletion() {
    let myprompt = `${this.prompt}`

      var payload = {
        input: myprompt,
      }
    
      this.moderations.postCompletion(payload)
      .subscribe((data:any) => {
        console.log(data);

        var flags = Object.keys(data.results[0].categories).map(flag => data.results[0].categories[flag] ? flag : ``).filter(flag => flag != ``);

        this.result = data.results[0].flagged ? "The prompt was not flagged" : `The prompt got flagged in the following categories: ${flags}`;
      })
  }

}

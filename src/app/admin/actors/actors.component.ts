import { Component } from '@angular/core';
import { ActorModel } from '../models/actor-model';
import { ActorService } from '../services/actor.service';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  actorsList: ActorModel[] = [];

  constructor(private actorService: ActorService, private errorService: ErrorService, private router: Router) {

  }
  ngOnInit() {
    this.get();
  }

  get() {
    this.actorService.getAll().subscribe((res: any) => {
      this.actorsList = res.data;
      console.log(res.data);
    })
  }

  delete(id?: number) {
    this.actorService.delete(id).subscribe((res:any) => {
      this.get();
    }, (err) => this.errorService.errorHandler(err))
  }
}

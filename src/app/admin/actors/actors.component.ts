import { Component } from '@angular/core';
import { ActorModel } from '../models/actor-model';
import { ActorService } from '../services/actor.service';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  actorsList: ActorModel[] = [];
  filterText:string="";

  constructor(private actorService: ActorService, private errorService: ErrorService, private router: Router,private toastr:ToastrService) {

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
      this.toastr.success('Actor successfully deleted.', 'Delete !');

    }, (err) => this.errorService.errorHandler(err))
  }
}

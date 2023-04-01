import { Component } from '@angular/core';
import { ActorModel } from '../../models/actor-model';
import { ActorService } from '../../services/actor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.css']
})
export class ActorAddComponent {
  actorModel:ActorModel = new ActorModel();
  constructor(private actorService:ActorService,private router:Router,private errorService: ErrorService, private toastr: ToastrService){}

  add(form: any) {
    
    this.actorService.add(this.actorModel).subscribe((res: any) => {
      
      this.toastr.success('Actor successfully saved.', 'Save !');
      form.reset();

    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
}

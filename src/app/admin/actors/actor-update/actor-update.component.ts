import { Component } from '@angular/core';
import { ActorModel } from '../../models/actor-model';
import { ActorService } from '../../services/actor.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-actor-update',
  templateUrl: './actor-update.component.html',
  styleUrls: ['./actor-update.component.css']
})
export class ActorUpdateComponent {

  id: number | undefined;
  actorModel: ActorModel = new ActorModel();
  newdate:string;

  constructor(private actorService: ActorService, private router: Router, private activatedRoute: ActivatedRoute, private errorService: ErrorService, private toastr: ToastrService,private datePipe:DatePipe) {
    this.newdate="";
  }

  ngOnInit() {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.get(this.id);

  }

  get(id: number) {
    this.actorService.get(id).subscribe((res: any) => {
      this.actorModel = res.data;
      console.log("res data:"+res.data);
      // this.newdate=(this.datePipe.transform(res.data.birthDate,"yyyy-mm-dd")) as any
      console.log("Model:"+this.actorModel);

    })
  }

  update(form: NgForm) {
    console.log("before update"+this.actorModel);
    // this.actorModel.birthDate=(this.actorModel.birthDate)as Date
    this.actorService.update(this.actorModel).subscribe((res: any) => {

      //this.toastr.success("Updated successful.");
      this.toastr.success('Updated Successfull', 'Update !');
      this.router.navigateByUrl("admin/actors");

    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
}

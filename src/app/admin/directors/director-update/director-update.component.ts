import { Component } from '@angular/core';
import { DirectorModel } from '../../models/director-model';
import { DirectorService } from '../../services/director.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-director-update',
  templateUrl: './director-update.component.html',
  styleUrls: ['./director-update.component.css']
})
export class DirectorUpdateComponent {
  id: number | undefined;
  directorModel: DirectorModel = new DirectorModel();
  newdate: string;

  constructor(private directorService: DirectorService, private router: Router, private activatedRoute: ActivatedRoute, private errorService: ErrorService, private toastr: ToastrService, private datePipe: DatePipe) {
    this.newdate = "";
  }
  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.get(this.id);
  }
  get(id: number) {
    this.directorService.get(id).subscribe((res: any) => {
      this.directorModel = res.data;
    })
  }
  update(form: NgForm) {
    console.log("before update" + this.directorModel);
    this.directorService.update(this.directorModel).subscribe((res: any) => {
      this.toastr.success('Updated Successfull', 'Update !');
      this.router.navigateByUrl("admin/directors");
    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
}

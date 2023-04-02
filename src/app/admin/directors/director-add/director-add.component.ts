import { Component } from '@angular/core';
import { DirectorModel } from '../../models/director-model';
import { DirectorService } from '../../services/director.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-director-add',
  templateUrl: './director-add.component.html',
  styleUrls: ['./director-add.component.css']
})
export class DirectorAddComponent {
  directorModel:DirectorModel = new DirectorModel();
  constructor(private directorService:DirectorService,private router:Router,private errorService: ErrorService, private toastr: ToastrService){}

  add(form: any) {
    
    this.directorService.add(this.directorModel).subscribe((res: any) => {
      
      this.toastr.success('Director successfully saved.', 'Save !');
      form.reset();

    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
}

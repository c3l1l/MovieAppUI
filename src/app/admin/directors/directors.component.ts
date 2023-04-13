import { Component } from '@angular/core';
import { DirectorModel } from '../models/director-model';
import { DirectorService } from '../services/director.service';
import { ErrorService } from '../services/error.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent {
  directorsList: DirectorModel[] = [];
  filterText:string="";

  constructor(private directorService: DirectorService, private errorService: ErrorService, private router: Router,private toastr:ToastrService) {

  }
  ngOnInit() {
    this.get();
  }

  get() {
    this.directorService.getAll().subscribe((res: any) => {
      this.directorsList = res.data;
      console.log(res.data);
    })
  }

  delete(id?: number) {
    this.directorService.delete(id).subscribe((res:any) => {
      this.get();
      this.toastr.success('Director successfully deleted.', 'Delete !');

    }, (err) => this.errorService.errorHandler(err))
  }
}

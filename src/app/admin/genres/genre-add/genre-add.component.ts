import { Component } from '@angular/core';
import { GenreModel } from '../../models/genre-model';
import { GenreService } from '../../services/genre.service';
import { Router } from '@angular/router';
import { ErrorService } from '../../services/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-genre-add',
  templateUrl: './genre-add.component.html',
  styleUrls: ['./genre-add.component.css']
})
export class GenreAddComponent {
  genreModel:GenreModel = new GenreModel();
  constructor(private genreService:GenreService,private router:Router,private errorService: ErrorService, private toastr: ToastrService){}

  add(form: any) {
    
    this.genreService.add(this.genreModel).subscribe((res: any) => {
      
      this.toastr.success('Genre successfully saved.', 'Save !');
      form.reset();

    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
}

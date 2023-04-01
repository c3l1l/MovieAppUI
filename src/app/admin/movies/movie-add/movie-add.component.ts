import { Component } from '@angular/core';
import { DirectorDropList } from '../../models/director-drop-list';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DirectorService } from '../../services/director.service';
import { ErrorService } from '../../services/error.service';
import { MovieService } from '../../services/movie.service';
import { NgForm } from '@angular/forms';
import { MovieAddModel } from '../../models/movie-add-model';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {

  directorDropList: DirectorDropList[] = [];
  movieAddModel:MovieAddModel;

  constructor(private movieService: MovieService, private directorService: DirectorService, private router: Router, private activatedRoute: ActivatedRoute, private errorService: ErrorService, private toastr: ToastrService) {
    this.movieAddModel={name:"", directorId:0 }
  }

  ngOnInit(){
    this.getDirectors();
  }

  getDirectors() {
    this.directorService.getAll().subscribe((res: any) => {
      this.directorDropList = res.data;
    })
  }
  directorChange(value: any) {
    //console.log(value);
    this.movieAddModel.directorId=value;
  }
  add(form: any) {
    
    this.movieService.add(this.movieAddModel).subscribe((res: any) => {
      
      this.toastr.success('Movie successfully saved.', 'Save !');
      form.reset();

    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }

  }

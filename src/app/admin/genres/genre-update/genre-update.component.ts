import { Component } from '@angular/core';
import { GenreModel } from '../../models/genre-model';
import { GenreService } from '../../services/genre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-genre-update',
  templateUrl: './genre-update.component.html',
  styleUrls: ['./genre-update.component.css']
})
export class GenreUpdateComponent {
  id: number | undefined;
  genreModel: GenreModel = new GenreModel();


  constructor(private genreService: GenreService, private router: Router, private activatedRoute: ActivatedRoute, private errorService: ErrorService, private toastr: ToastrService) {

  }

  ngOnInit() {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.get(this.id);

  }

  get(id: number) {
    this.genreService.get(id).subscribe((res: any) => {
      this.genreModel = res.data;

    })
  }

  update(form: NgForm) {
    this.genreService.update(this.genreModel).subscribe((res: any) => {

      //this.toastr.success("Updated successful.");
      this.toastr.success('Updated Successfull', 'Update !');
      this.router.navigateByUrl("admin/genres");

    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
}
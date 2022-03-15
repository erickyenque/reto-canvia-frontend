import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  user: User = {
    id: "",
    firstname: "",
    lastname: "",
    email: ""
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.findUser();
  }

  findUser() {
    this.userService.findByUserId(this.id).subscribe(response => {
      if(response.success) {
        this.user = response.data[0];
      }
    })
  }

  onSubmit(f: NgForm) {
    if(f.valid) {
      this.userService.updateUser(this.user).subscribe(response => {
        if(response.success) {
          Swal.fire("Usuario actualizado correctamente");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error!'
          })
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incompletos!'
      })
    }
  }
}

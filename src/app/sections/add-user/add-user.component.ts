import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(f.valid) {
      this.user = { ...f.value };
      this.userService.createUser(this.user).subscribe(response => {
        if(response.success) {
          Swal.fire("Usuario agregado correctamente");
          f.resetForm();
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

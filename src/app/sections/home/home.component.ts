import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { CatService } from 'src/app/services/cat.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User> = [];
  file: string;
  p: number = 1;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers() {
    this.userService.listUsers().subscribe(response => {
      if (response.success) {
        this.users = response.data;
      }
    })
  }

  deleteUser(user: User) {
    Swal.fire({
      title: 'Eliminar usuario?',
      text: "Está a punto de eliminar un usuario!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user).subscribe(response => {
          if (response.success) {
            Swal.fire('Usuario eliminado con éxito');
            this.getListUsers();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error!'
            })
          }
        })
      }
    })
  }

  editUser(user: User) {
    this.router.navigate(['/update', user.id ]);
  }
  
}

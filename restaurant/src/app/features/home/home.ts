import { Component, inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-home',
  imports: [Footer, NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private userServce = inject(UserService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initUsers();
  }

  initUsers() {
    this.userServce
      .getUsers()
      .then((users) => console.log(users))
      .catch((error) => console.error(error));
  }
}

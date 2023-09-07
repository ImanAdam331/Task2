import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent implements OnInit {
  newitem = '';
  arritem: string[] = [];

  ngOnInit() {
    //this code to Load To-Do items from local storage on component initialization
    const storeditem = localStorage.getItem('arritem');
    if (storeditem) {
      this.arritem = JSON.parse(storeditem);
    }
  }

  addTodo() {
    if (this.newitem.length >= 4 && this.newitem.length <= 200 && /^[a-zA-Z0-9\s]*$/.test(this.newitem)) {
      this.arritem.push(this.newitem);
      this.newitem = '';
      this.saveToLocalStorage();
    } else {
      alert(' item should had 4-200 characters and no special characters');
    }
  }

  removeTodo(index: number) {
    this.arritem.splice(index, 1);
    this.saveToLocalStorage();
  }

  validateInput(event: KeyboardEvent) {
    const input = event.key;
    const isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(input);
    if (isSpecialCharacter) {
      event.preventDefault();
    }
  }

  private saveToLocalStorage() {
    // Save To-Do items to local storage
    localStorage.setItem('arritem', JSON.stringify(this.arritem));
  }
}
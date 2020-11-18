// import { fileInput, addAttachment, OnInit} from '@angular/core';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

handleClick() {
  document.getElementById('upload-file').click();
}

addAttachment(fileInput: any) {
  const fileReaded = fileInput.target.files[0];
  //  handle the rest 
}
}

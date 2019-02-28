import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-instructor-quizzes',
  templateUrl: './instructor-quizzes.component.html',
  styleUrls: ['./instructor-quizzes.component.scss']
})
export class InstructorQuizzesComponent implements OnInit {

  modalRef: BsModalRef;
  modalConfig = {
    animated: true,
    keyboard: false,
    ignoreBackdropClick: true
  };


  constructor(private _modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template, this.modalConfig);
  }

}

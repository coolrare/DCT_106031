import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

function mustInKaoshuang(ctrl: AbstractControl) {
  if(ctrl.value.indexOf('高雄') >= 0) {
    return null;
  } else {
    return { 'must-in-kaoshuang': '地址必須有「高雄」字樣' };
  }
}


@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Hello', [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      group1: this.fb.group({
        subtitle: ['World', [
            Validators.required
          ]
        ]
      }),
      addresses: this.fb.array([
        this.fb.control('Taipei'),
        this.fb.control('Kaoshuang')
      ])
    })
  }

  doSubmit() {
    console.log(this.form);
  }

  AddAddress() {
    let addresses = (this.form.get('addresses') as FormArray);
    addresses.push(this.fb.control('New Address', [
      Validators.required,
      mustInKaoshuang
    ]));
  }
}

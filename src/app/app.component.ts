import { Component, ViewChild } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //@ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  formfields;

  submit(value: any) {}

  header =  this.settings.config.form.header;
  description =  this.settings.config.form.description;
  language = "";

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private settings: AppConfigService
  ) { 
    this.PrintParams();
    this.setTitle(this.settings.config.apptitle);
    this.formfields = this.settings.config.formfields
    this.language = this.GetParam('lang')
  }
  
  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  GetParam(name){
    const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(!results){
      return "english";
    }
    return results[1] || "english";
  }

  PrintParams() {
    console.log("app");
  }

}

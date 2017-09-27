import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	template: `
  <h1>Login</h1>
  <div> 
    
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Text input" value="bulma">
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>
     
    
    <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="password" placeholder="Text input" value="bulma">
      <span class="icon is-small is-left">
        <i class="fa fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fa fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>
   
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link">Cancel</button>
      </div>
    </div> 
  </div>
    
  `,
	styles: []
})
export class LoginComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/login/login.component';
import { PanelComponent } from './admin/panel/panel.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'admin/login', component: LoginComponent },
	{ path: 'admin/panel', component: PanelComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		PanelComponent,
		LandingComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true })
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

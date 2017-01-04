import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from './../pages/users/users';
import { ReposPage } from './../pages/repos/repos';
import { OrganisationsPage } from './../pages/organisations/organisations';

@NgModule({
	declarations: [
		MyApp,
		UsersPage,
		ReposPage,
		OrganisationsPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		UsersPage,
		ReposPage,
		OrganisationsPage
	],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

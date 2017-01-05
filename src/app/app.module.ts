import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from './../pages/users/users';
import { ReposPage } from './../pages/repos/repos';
import { OrganisationsPage } from './../pages/organisations/organisations';
import { UserDetailsPage } from './../pages/user-details/user-details';

import { GithubUsers } from '../providers/github-users';

@NgModule({
	declarations: [
		MyApp,
		UsersPage,
		ReposPage,
		OrganisationsPage,
    UserDetailsPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		UsersPage,
		ReposPage,
		OrganisationsPage,
    UserDetailsPage
	],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
		GithubUsers]
})
export class AppModule {}

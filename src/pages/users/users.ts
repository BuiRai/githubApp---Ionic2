import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserDetailsPage } from './../../pages/user-details/user-details';

import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';

/*
	Generated class for the Users page.

	See http://ionicframework.com/docs/v2/components/#navigation for more info on
	Ionic pages and navigation.
*/
@Component({
	selector: 'page-users',
	templateUrl: 'users.html'
})
export class UsersPage {

	users: User[];
	originalUsers: User[];

	constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
		githubUsers.load().subscribe( users => {
			this.users = users;
			this.originalUsers = users;
		});
	}

	ionViewDidLoad() {
		console.log('Hello Users Page');
	}

	goToDetails(login: string) {
		this.navCtrl.push(UserDetailsPage, {login});
	}

	search(searchEvent) {
		let term = searchEvent.target.value;
		// We will only perform the search if we have 3 or more characters

		if (term.trim() === '' || term.trim().length < 3) {
			// Load cached users
			this.users = this.originalUsers;
		} else {
			// Get the searched users from github
			console.log("Tesrm:", term);
			this.githubUsers.searchUsers(term).subscribe(data => {
				this.users = data['items'];
				
			});
		}
	}
}

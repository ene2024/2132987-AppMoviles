import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

import { inject } from '@angular/core';

interface UserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);

  constructor() { }

  async register({ email, password }: UserCredentials) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	async login({ email, password }: UserCredentials) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	logout() {
		return signOut(this.auth);
	}

	
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../servives/auth.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  credentials: FormGroup;
  showProfile = false;
  header: any;
  message:any;
  profileImageUrl: string | null = null;
  eamail: string | null = null;


	constructor(
		private fb: FormBuilder,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router,
		private storage: Storage

	) {}

	async ngOnInit() {
		this.credentials = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});

		const user = await this.authService.getCurrentUser();
		if (user) {
			this.showProfile = true;
			this.eamail = user.email;
			const imgRef = ref(this.storage, `images/${user.uid}.jpg`);
		try {
			this.profileImageUrl = await getDownloadURL(imgRef);
		} catch (error) {
			console.log('Error al obtener la URL de la imagen de perfil:', error);
		}
    }
	  }

	  async uploadImage(event: any):  Promise<void> {
		const file = event.target.files[0];
		const user = await this.authService.getCurrentUser();
		if (user) {
		  const imgRef = ref(this.storage, `images/${user.uid}.jpg`);
	
		  try {
			await uploadBytes(imgRef, file);
			const url = await getDownloadURL(imgRef);
			this.profileImageUrl = url;
			await this.authService.updateProfileImageUrl(user.uid, url);
		  } catch (error) {
			console.log('Error al subir la imagen:', error);
		  }
		}
	  }

	  async loadProfileImage(userId: string) {
		const url = await this.authService.getProfileImageUrl(userId);
		if (url) {
		  this.profileImageUrl = url;
		}
	  }



	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

	
	

	async register() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.credentials.value.email, this.credentials.value.password);
		await loading.dismiss();

		if (user) {
			this.showProfile = !this.showProfile;
			this.eamail = this.credentials.value.eamail;

		} else {
			this.showAlert('El registro falló:(', '¡Intenta de nuevo!');
		}
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();


		const user = await this.authService.login(this.credentials.value.email, this.credentials.value.password);
		await loading.dismiss();

		if (user) {
			this.showProfile = !this.showProfile;
			this.eamail = this.credentials.value.eamail;
		} else {
			this.showAlert('Fallo el ingreso', '¡Por favor inténtalo de nuevo!');
		}
	}

	async showAlert(header: string, message: string) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}

	async logout(): Promise<void> {
		await this.authService.logout();
		this.showProfile = false;
		this.profileImageUrl = null;
		this.eamail = null;
	  }
}

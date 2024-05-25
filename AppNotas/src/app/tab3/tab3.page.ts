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

	uploadImage(event: any): void {
		const file = event.target.files[0];
		console.log(file);
	
		const imgRef = ref(this.storage, `images/${file.name}`);
	
		uploadBytes(imgRef, file)
		  .then(() => {
			getDownloadURL(imgRef)
			  .then(url => {
				console.log('URL de descarga:', url);
				this.profileImageUrl = url; // Guarda la URL de la imagen como URL de perfil
			  })
			  .catch(error => console.log('Error al obtener la URL de descarga:', error));
		  })
		  .catch(error => console.log('Error al subir la imagen:', error));
	  }



	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	async register() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.showProfile = !this.showProfile;
		} else {
			this.showAlert('El registro falló:(', '¡Intenta de nuevo!');
		}
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();


		const user = await this.authService.login(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.showProfile = !this.showProfile;

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
}

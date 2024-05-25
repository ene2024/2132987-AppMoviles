import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface UserProfile {
  profileImageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged(user => {
        resolve(user);
      }, error => {
        reject(error);
      });
    });
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  }

  async register(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Register error:', error);
      return null;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  async updateProfileImageUrl(userId: string, imageUrl: string) {
    try {
      await this.firestore.collection('users').doc(userId).set({ profileImageUrl: imageUrl }, { merge: true });
    } catch (error) {
      console.error('Error updating profile image URL:', error);
    }
  }

  async getProfileImageUrl(userId: string): Promise<string | null> {
    try {
      const db = getFirestore();
      const docRef = doc(db, `users/${userId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as UserProfile;
        return data.profileImageUrl || null;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error getting profile image URL:', error);
      return null;
    }
  }
}

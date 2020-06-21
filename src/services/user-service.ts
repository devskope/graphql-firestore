import { Service } from 'typedi';

import firebase from '@config/firebase';
import logger from '@config/logger';

/**
 * Service layer for user operations on firestore
 */
@Service()
class UserService {
  private auth: firebase.auth.Auth;
  private db: FirebaseFirestore.Firestore;

  constructor() {
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  /**
   * Create a new user document in firestore
   */
  async createUser(userData: CreateUserInput) {
    const userRef = await this.db.collection('users').add(userData);
    await userRef.update({ id: userRef.id });
    const user = await userRef.get();
    logger('User Created ✔');
    return user.data();
  }

  /**
   * Get user document from firestore
   */
  async getUser(email: string) {
    const {
      docs: [user],
    } = await this.db.collection('users').where('email', '==', email).get();
    logger('User Fetched ✔');
    return user.data();
  }
}

interface CreateUserInput {
  email: string;
  username: string;
}

export default UserService;

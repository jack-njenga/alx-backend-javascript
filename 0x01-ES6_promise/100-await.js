import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (photo) {
    if (user) {
      return { photo, user };
    }
  }
  return { photo: null, user: null };
}

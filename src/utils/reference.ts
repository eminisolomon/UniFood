import { RestaurantModel } from '@models/Restaurant';

export default async function generateReference(restaurantId: string): Promise<string> {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  const restaurant = await RestaurantModel.findById(restaurantId).exec();
  if (!restaurant) {
    throw new Error('Restaurant not found');
  }

  let reference = restaurant.name.slice(0, 6).toUpperCase();

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    reference += letters[randomIndex];
  }

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    reference += numbers[randomIndex];
  }

  return reference;
}

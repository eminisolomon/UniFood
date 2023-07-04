import { RestaurantModel } from '@models/Restaurant';

export const generateUniqueCode = async (): Promise<string> => {
  const numbers = '0123456789';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = 'UNI';

  for (let i = 0; i < 7; i++) {
    const randomNumIndex = Math.floor(Math.random() * numbers.length);
    const randomNum = numbers.charAt(randomNumIndex);
    code += randomNum;
  }

  const randomLetterIndex = Math.floor(Math.random() * letters.length);
  const randomLetter = letters.charAt(randomLetterIndex);
  code += randomLetter;

  const existingRestaurant = await RestaurantModel.findOne({ uniqueCode: code }).exec();
  if (existingRestaurant) {
    return generateUniqueCode();
  }

  return code;
};

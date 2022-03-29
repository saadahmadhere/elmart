import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Earphones",
    image:
      "https://drive.google.com/uc?export=view&id=1bZhEMD46AmPyxMa1kT2nHxQa2wWpZbF_",
  },
  {
    _id: uuid(),
    categoryName: "Mobile Phones",
    image:
      "https://drive.google.com/uc?export=view&id=1_Fj3AZUQqlLgpkoE2r2I70OR2aWlmj6C",
  },
  {
    _id: uuid(),
    categoryName: "Keyboards",
    image:
      "https://drive.google.com/uc?export=view&id=1z8vkJSFpFWvCX-fGztWFKi9Hu5LXyvwl",
  },
  {
    _id: uuid(),
    categoryName: "Tablets",
    image:
      "https://drive.google.com/uc?export=view&id=1V5eDqKPhXG_5ZRnOaJYTUVJTddz-iU_s",
  },
];

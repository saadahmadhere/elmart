import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "8de737a2-1df8-4001-821a-4a0ba104dd77",
    name: "Boat Air Dopes",
    image:
      "https://drive.google.com/uc?export=view&id=132cLoMt9OzjVD9T7em1vkrnJ8Co-uHXW",
    price: "1200.00",
    brand: "Boat",
    categoryName: "Ear Phones",
    inStock: 7,
    fastDelivery: true,
    ratings: 4.5,
    reviews: 1993,
    description:
      "Bring home the boAt Airdopes 131 that comes with a carrying case. This carrying case also acts as a 650 mAh portable charger that extends the playback time of these earbuds by up to 15 hours, i.e. 4 times its normal charging capacity. The normal battery capacity of each of these earbuds is 40 mAh and this delivers up to 3 hours of playback time. These earbuds feature Bluetooth v5.0 technology that delivers a stable connection that lets your rock on without connectivity issues.",
  },
  {
    _id: "c924859d-0c44-4a00-84c1-e38df860bdf7",
    name: "JBL Earphones",
    image:
      "https://drive.google.com/uc?export=view&id=1bZhEMD46AmPyxMa1kT2nHxQa2wWpZbF_",
    price: "699.00",
    brand: "JBL",
    categoryName: "Ear Phones",
    inStock: 5,
    fastDelivery: true,
    ratings: 4,
    reviews: 388,
    description:
      "You can enjoy the sound of deepened notes with stellar bass response and manage your calls conveniently with the JBL C150SI wired headset. It features a one-button universal remote that helps you operate this headset with ease. Moreover, it is equipped with a noise-isolation microphone that enables the recipient of your call to hear your voice clearly without any disturbance caused by the noise in the background.",
  },
  {
    _id: "6314d639-0640-4853-9eb0-1dc1b5dee717",
    name: "Realme Buds",
    image:
      "https://drive.google.com/uc?export=view&id=1lcPFJAH5T012opERMsxYWDOX4wZJawdE",
    price: "1600.00",
    brand: "Realme",
    categoryName: "Ear Phones",
    inStock: 3,
    fastDelivery: true,
    ratings: 4.6,
    reviews: 399,
    description:
      "Enjoy an immersive audio experience while listening to music with the realme Buds Wireless 2 Earphones. Featuring active noise cancellation (ANC) technology and vocplus AI, these earphones can help eliminate ambient sounds so that you are not disturbed while enjoying your favourite music or speaking to your loved ones on a phone call. Moreover, the Sony LDAC Bluetooth technology delivers high-resolution audio for an enhanced audio experience.",
  },
  {
    _id: "c5e33e3a-af78-4e43-a223-5019e85a95d9",
    name: "Sony Ear Phones",
    image:
      "https://drive.google.com/uc?export=view&id=1m66ed0vZPHch2ArwdwE2Esta4DXLdEWN",
    price: "800.00",
    brand: "Sony",
    categoryName: "Ear Phones",
    inStock: 8,
    fastDelivery: true,
    ratings: 4.1,
    reviews: 827,
    description:
      "Enhance your aural experience with this pair of Sony in-the-ear headphones. Thanks to its 9 mm Neodymium Drivers and 8 Hz–22 kHz Frequency Range, these headphones ensure powerful and balanced sound.In-line Mic for Hands-free Calling Featuring an In-line Mic, this pair of Sony wired headphones allows you to easily switch from listening to music to answering your calls. It also works vice-versa as it allows you to end your call and then switch back to your music.",
  },
  {
    _id: "1c7ee45b-f971-48ad-8bb4-939d39a8e19c",
    name: "Cosmic Byte GK-16",
    image:
      "https://drive.google.com/uc?export=view&id=1pAvugySg4ppJ3ofNQHLoEOV9Dsv6MLan",
    price: "3100.00",
    brand: "Cosmic Byte",
    categoryName: "Keyboards",
    inStock: 0,
    fastDelivery: true,
    ratings: 4.6,
    reviews: 27,
    description:
      "Metal panel with metal frame, blue light-transparent border, cool lighting, FN+0-9 preset effective lighting effect",
  },
  {
    _id: "d3d7d36b-87a4-468b-9fad-e4f17d8c08a2",
    name: "Logitech G213 keyboard",
    image:
      "https://drive.google.com/uc?export=view&id=1z8vkJSFpFWvCX-fGztWFKi9Hu5LXyvwl",
    price: "2500.00",
    brand: "Logitech",
    categoryName: "Keyboards",
    inStock: 6,
    fastDelivery: true,
    ratings: 4.1,
    reviews: 837,
    description:
      "Metal panel with metal frame, blue light-transparent border, cool lighting, FN+0-9 preset effective lighting effect",
  },
  {
    _id: "58937716-a80e-4b86-8f24-39bb9838c807",
    name: "HP GK-16",
    image:
      "https://drive.google.com/uc?export=view&id=1hC7YSqUbzrEMYF5141nWApfJA70AAKQb",
    price: "2900.00",
    brand: "HP",
    categoryName: "Keyboards",
    inStock: 4,
    fastDelivery: true,
    ratings: 2,
    reviews: 938,
    description:
      "Metal panel with metal frame, blue light-transparent border, cool lighting, FN+0-9 preset effective lighting effect",
  },
  {
    _id: "400e3469-cd5a-4d0e-8425-41e97e389af9",
    name: "Zebronics Transformer",
    image:
      "https://drive.google.com/uc?export=view&id=1BvksK6LkeKhU7qfQ1GM8Y64BZ7KRIhED",
    price: "2600.00",
    brand: "Zebronics",
    categoryName: "Keyboards",
    inStock: 4,
    fastDelivery: true,
    ratings: 1.5,
    reviews: 432,
    description:
      "Metal panel with metal frame, blue light-transparent border, cool lighting, FN+0-9 preset effective lighting effect",
  },
  {
    _id: "5bb49369-b550-4605-be90-20ed93723712",
    name: "iPhone 13",
    image:
      "https://drive.google.com/uc?export=view&id=1_Fj3AZUQqlLgpkoE2r2I70OR2aWlmj6C",
    price: "80699.00",
    brand: "Apple",
    categoryName: "Mobile Phones",
    inStock: 2,
    fastDelivery: true,
    ratings: 5,
    reviews: 1837,
    description:
      "4K Video Recording (at 24 fps, 25 fps, 30 fps or 60 fps), 1080p HD Video Recording (at 25 fps, 30 fps or 60 fps), 720p HD Video Recording (at 30 fps), Slow‑motion Video Support: Rear Camera (1080p at 120 fps or 240 fps), Front Camera (1080p at 120 fps)",
  },
  {
    _id: "baa4c503-d5ea-4c56-ae23-cd61ed5046c1",
    name: "Realme c31",
    image:
      "https://drive.google.com/uc?export=view&id=1tvZTBTVTVn6NmVtBG6oZ5l_6QgI3-m5n",
    price: "9499.00",
    brand: "Realme",
    categoryName: "Mobile Phones",
    inStock: 0,
    fastDelivery: true,
    ratings: 3.5,
    reviews: 74,
    description:
      " Driven by an Octa-core processor, the unmatched performance executed by this phone is sure to mesmerise you. With two SIM card slots and a microSD card slot you can seamlessly enjoy uninterrupted connection and unrivalled storage. Furthermore, this smartphone comes with a 5 MP selfie camera that enables you to capture breathtaking selfies.",
  },
  {
    _id: "27b1a01e-e1f1-407a-8adb-169b35fd3ef6",
    name: "Reno 6 Pro",
    image:
      "https://drive.google.com/uc?export=view&id=181QOCBtLqTsjhN9MY8dklPDksquIlFH3",
    price: "39900.00",
    brand: "Oppo",
    categoryName: "Mobile Phones",
    inStock: 12,
    fastDelivery: true,
    ratings: 2.5,
    reviews: 83,
    description:
      "If life captured through a lens is what excites you or intrigues you, then OPPO Reno6 Pro 5G Diwali Edition can help you click stunning, immersive, and lifelike photos and videos. This OPPO smartphone features Bokeh Flare Portrait Video, AI Highlight Video, and Focus Tracking to capture AI-powered high-quality videos, 64 MP AI Quad Camera to click crystal-clear photos and videos, and a MediaTek Dimensity 1200 processor for seamless multitasking.",
  },
  {
    _id: "376020e7-4e6b-47f4-bf27-0233c436cf11",
    name: "Samsung Galaxy S21",
    image:
      "https://drive.google.com/uc?export=view&id=1tHqjSD87FbFRAPhQPnW7hv-5sQGiIYO6",
    price: "51900.00",
    brand: "Samsung",
    categoryName: "Mobile Phones",
    inStock: 3,
    fastDelivery: true,
    ratings: 4.6,
    reviews: 899,
    description:
      "Take your love for capturing photos and recording videos (up to 8K resolution) to the next level with the Samsung Galaxy S21 Smartphone as it comes with a 64 MP camera setup. The 8K Video Snap feature helps you capture high-quality photos up to 33 MP resolution even from the 8K videos. This phone is 5G ready, helping you browse and stream data from the Internet with minimal lag.",
  },
  {
    _id: "d144ab71-33ba-4b4f-b5f4-70ab79efa03d",
    name: "iPad 9th Gen",
    image:
      "https://drive.google.com/uc?export=view&id=1V5eDqKPhXG_5ZRnOaJYTUVJTddz-iU_s",
    price: "60000.00",
    brand: "Apple",
    categoryName: "Tablets",
    inStock: 0,
    fastDelivery: true,
    ratings: 4.6,
    reviews: 1399,
    description:
      "Retina Display, LED-backlit Multi-Touch Display with IPS Technology, True Tone Display, Fingerprint-resistant Oleophobic Coating, Supports Apple Pencil (1st Generation)",
  },
  {
    _id: "03f15534-b87a-4b5f-96ed-5a18e822da31",
    name: "Lenovo Yoga",
    image:
      "https://drive.google.com/uc?export=view&id=1s5gVprB7fjl-Ckw3wUIyjXHtGe4oAmuK",
    price: "34000.00",
    brand: "Lenovo",
    categoryName: "Tablets",
    inStock: 3,
    fastDelivery: true,
    ratings: 2.9,
    reviews: 165,
    description:
      "Watch movies, listen to music or work on your office projects on this Lenovo smart tab. It features a 25.65 cm screen that provides sufficient viewing space, so you can watch your favourite content on it conveniently. Also, its 64 GB of ROM helps you store your personal files in it with ease. What's more, its 7000 mAh battery ensures long-lasting entertainment",
  },
  {
    _id: "e4f1e553-edf0-49c9-9a22-f260da45e541",
    name: "Realme Pad 4",
    image:
      "https://drive.google.com/uc?export=view&id=1vW-C4bIRJaAaLbMZsgy42SIgPlJ-KXk6",
    price: "19000.00",
    brand: "Realme",
    categoryName: "Tablets",
    inStock: 8,
    fastDelivery: true,
    ratings: 3.5,
    reviews: 65,
    description:
      "Binge-watch your favourite TV shows and browse the internet for hours with the realme Pad 3 tablet. This tablet comes with a 7100 mAh battery and 18 W Quick charge feature so that you can remain engrossed in the device throughout the day. Moreover, it features a 26.31 cm (10.4) WUXGA+ Immersive display and a powerful Octa-core processor to offer vibrant visuals, as well as, smooth performance.",
  },
  {
    _id: "7422feba-248c-411d-bb70-89ff2fb0ccb3",
    name: "Samsung Tab S8",
    image:
      "https://drive.google.com/uc?export=view&id=1gqIVVX3nS9nsO2vBTk724bI7Jb_iQjSn",
    price: "59000.00",
    brand: "Samsung",
    categoryName: "Tablets",
    inStock: 4,
    fastDelivery: false,
    ratings: 4.5,
    reviews: 1256,
    description:
      "You can watch movies, play games, and make creative content wherever you go with the Samsung Galaxy Tab S8. Its S Pen snaps into place at the back, making charging a breeze. And, thanks to its thin and stylish Armor aluminium casing, this tablet is protected from accidental knocks and drops. Moreover, the S Pen can translate your handwriting into text. So, you'll be able to scribble down any idea that comes to mind without forgetting it.",
  },
];

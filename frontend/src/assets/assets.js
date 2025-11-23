import menu_icon from "./menu_icon.png";
import bin_icon from "./bin_icon.png";
import cart_icon from "./cart_icon.png";
import profile_icon from "./profile_icon.png";
import cross_icon from "./cross_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import home_icon from "./home_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_icon from "./support_icon.png";
import logo from "./logo.png";
import hero_img from "./hero_img.jpeg";
import like_icon from "./like_icon.png";
import unlike_icon from "./unlike_icon.png";
import wifi_icon from './wifi_icon.png';
import tv_icon from './tv_icon.png';
import air_conditioner from './air_conditioner.png';
import swimming from './swimming.png';
import kitchen_table from './kitchen_table.png';
import parked_car from './parked_car.png';
import breakfast from './breakfast.png';
import cctv_camera from './cctv_camera.png';
import dumbbell from './dumbbell.png';
import pet_care from './pet_care.png';
import balcony from './balcony.png';
import heater from './heater.png';
import facial_treatment from './facial_treatment.png';
import bar_counter from './bar_counter.png';
import mountains from './mountains.png';
import beach from './beach.png';
import bed from './bed.png';
import room_service from './room_service.png';
import review_icon from './review.png';
import mission from './mission.jpg';
import our_story from './our_story.jpg';
import community from './community.png';
import trust from './trust.png';
import innovation from './innovation.png';
import sustainability from './sustainability.png';
import mappin from './pin.png';
import phone from './phone.png';
import email from './email.png';
import contact from './contact.jpeg';
import lock from './lock.png';
import google from './google.png';
import eye_open from './eye_open.png';
import eye_close from './eye_close.png';
import user from './user.png';
import calendar from './calendar.png';
import search from './search.png';

export const assests = {
  logo,
  menu_icon,
  bin_icon,
  cart_icon,
  profile_icon,
  cross_icon,
  dropdown_icon,
  exchange_icon,
  home_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  support_icon,
  hero_img,
  like_icon,
  unlike_icon,
  wifi_icon,
  tv_icon,
  air_conditioner,
  swimming,
  kitchen_table,
  parked_car,
  breakfast,
  cctv_camera,
  dumbbell,
  pet_care,
  balcony,
  heater,
  facial_treatment,
  bar_counter,
  mountains,
  beach,
  bed,
  room_service,
  review_icon,
  mission,
  our_story,
  community,
  trust,
  innovation,
  sustainability,
  mappin,
  phone,
  email,
  contact,
  lock,
  google,
  eye_close,
  eye_open,
  user, 
  calendar,
  search
};

import beach_villa from "./stays/beach_villa.jpg";
import mountain_cottage from "./stays/mountain_cottage.jpg";
import city_apartment from "./stays/city_apartment.jpg";
import jungle_resort from "./stays/jungle_resort.jpg";
import desert_camp from "./stays/desert_camp.jpg";
import houseboat from "./stays/houseboat.jpg";
import lakeview_homestay from "./stays/lakeview_homestay.jpeg";
import snow_cabin from "./stays/snow_cabin.jpeg";
import treehouse from "./stays/treehouse.jpeg";
import beach_bungalow from "./stays/beach_bungalow.jpeg";
import cliffside_stay from "./stays/cliffside_stay.jpeg";
import riverside_cottage from "./stays/riverside_cottage.jpeg";
import hilltop_villa from "./stays/hilltop_villa.jpeg";
import backwater_resort from "./stays/backwater_resort.jpeg";
import farmhouse from "./stays/farmhouse.jpeg";
import palace_stay from "./stays/palace_stay.jpeg";
import tea_garden from "./stays/tea_garden.jpeg";
import tree_pod from "./stays/tree_pod.jpeg";
import glass_villa from "./stays/glass_villa.jpeg";
import ocean_resort from "./stays/ocean_resort.jpeg";
import ayush_image from './author/ayush_image.jpg'

export const products = [
  {
    id: 1,
    name: "Cozy Beachside Villa",
    description: "Five Star stay with peace and natural beauty beside the ocean waves.",
    location: "Goa, India",
    city: "Goa",
    author_name: "Aarav Mehta",
    author_image: ayush_image,
    price: 4200,
    review: "4.8/5",
    images: [beach_villa, beach_villa, beach_villa, beach_villa, beach_villa, beach_villa, beach_villa, beach_villa, beach_villa, ],
    amenities: [
      "Free Wi-Fi", "Smart TV", "Air Conditioning", "Swimming Pool", "King Size Bed",
      "Free Parking", "Breakfast Included", "24/7 CCTV", "Mini Bar", "Sea View"
    ]
  },
  {
    id: 2,
    name: "Mountain Retreat Cottage",
    description: "Tranquil hillside retreat offering comfort and serene mountain views.",
    city: "Manali",
    location: "Manali, India",
    author_name: "Riya Sharma",
    author_image: ayush_image,
    price: 3800,
    review: "4.6/5",
    images: [mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, mountain_cottage, ],
    amenities: [
      "Free Wi-Fi", "Fireplace", "Heating", "Mountain View", "Kitchen Access",
      "Free Parking", "Breakfast Included", "Private Balcony", "CCTV", "Pet Friendly"
    ]
  },
  {
    id: 3,
    name: "Urban Chic Apartment",
    description: "Modern stay in the heart of the city with premium interiors.",
    location: "Mumbai, India",
    city: "Mumbai",
    author_name: "Karan Patel",
    author_image: ayush_image,
    price: 5000,
    review: "4.7/5",
    images: [city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, city_apartment, ],
    amenities: [
      "Free Wi-Fi", "Smart TV", "Air Conditioning", "Elevator Access", "Room Service",
      "Gym Access", "Free Parking", "24/7 CCTV", "Mini Bar", "Kitchen Access"
    ]
  },
  {
    id: 4,
    name: "Luxury Jungle Resort",
    description: "Five Star stay with peace and natural beauty surrounded by lush forests.",
    location: "Manali, India",
    city: "Manali",
    author_name: "Ayush Patidar",
    author_image: ayush_image,
    price: 6100,
    review: "4.9/5",
    images: [jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, jungle_resort, ],
    amenities: [
      "Free Wi-Fi", "Swimming Pool", "Breakfast Included", "24/7 CCTV", "Spa Access",
      "Private Balcony", "Air Conditioning", "Restaurant", "Bar", "Nature Trails"
    ]
  },
  {
    id: 5,
    name: "Desert Camp Experience",
    description: "Golden sands, cultural nights, and peaceful desert dunes await you.",
    location: "Jaisalmer, India",
    city: "Jaisalmer",
    author_name: "Sneha Kapoor",
    author_image: ayush_image,
    price: 3200,
    review: "4.4/5",
    images: [desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, desert_camp, ],
    amenities: [
      "Free Wi-Fi", "Cultural Nights", "Campfire Area", "24/7 CCTV", "Fitness Center", "Breakfast Included",
      "Free Parking", "Air Conditioning", "Pet Friendly", "Bar", "Desert View"
    ]
  },
  {
    id: 6,
    name: "Houseboat Stay",
    description: "Relaxing water stay offering scenic views and peaceful moments.",
    location: "Goa, India",
    city: "Goa",
    author_name: "Ananya Rao",
    author_image: ayush_image,
    price: 5600,
    review: "4.8/5",
    images: [houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, houseboat, ],
    amenities: [
      "Free Wi-Fi", "Smart TV", "Air Conditioning", "Breakfast Included", "Lake View",
      "Mini Bar", "Private Balcony", "CCTV", "Room Service", "Kitchen Access"
    ]
  },
  {
    id: 7,
    name: "Lakeview Homestay",
    description: "Charming homestay with mesmerizing lake views and cozy ambiance.",
    location: "Udaipur, India",
    city: "Udaipur",
    author_name: "Rohan Singh",
    author_image: ayush_image,
    price: 3500,
    review: "4.5/5",
    images: [lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, lakeview_homestay, ],
    amenities: [
      "Free Wi-Fi", "Breakfast Included", "Private Balcony", "Free Parking",
      "Lake View", "Air Conditioning", "Kitchen Access", "CCTV", "Room Service", "Pet Friendly"
    ]
  },
  {
    id: 8,
    name: "Snow Cabin Retreat",
    description: "Beautiful snow-covered cabin offering a warm and serene escape.",
    location: "Manali, India",
    city: "Manali",
    author_name: "Diya Malhotra",
    author_image: ayush_image,
    price: 6400,
    review: "4.9/5",
    images: [snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, snow_cabin, ],
    amenities: [
      "Free Wi-Fi", "Fireplace", "Heating", "Mountain View", "Breakfast Included",
      "Free Parking", "CCTV", "King Size Bed", "Pet Friendly", "Private Balcony"
    ]
  },
  {
    id: 9,
    name: "Tropical Treehouse",
    description: "Eco-friendly treehouse nestled amid nature for a peaceful getaway.",
    location: "Manali, India",
    city: "Manali",
    author_name: "Arjun Desai",
    author_image: ayush_image,
    price: 4500,
    review: "4.7/5",
    images: [treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, treehouse, ],
    amenities: [
      "Free Wi-Fi", "Nature Trails", "Breakfast Included", "Private Balcony",
      "CCTV", "Pet Friendly", "Free Parking", "Double Bed", "Air Conditioning", "Kitchen Access"
    ]
  },
  {
    id: 10,
    name: "Beachfront Bungalow",
    description: "Wake up to ocean breezes and sunsets from your private bungalow.",
    location: "Goa, India",
    city: "Goa",
    author_name: "Mira Joshi",
    author_image: ayush_image,
    price: 4800,
    review: "4.6/5",
    images: [beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, beach_bungalow, ],
    amenities: [
      "Free Wi-Fi", "Sea View", "Breakfast Included", "Private Balcony", "Free Parking",
      "Air Conditioning", "Smart TV", "Mini Bar", "24/7 CCTV", "Pet Friendly"
    ]
  },
  {
    id: 11,
    name: "Cliffside Ocean View Stay",
    description: "Luxury resort perched over cliffs with breathtaking sea views.",
    location: "Goa, India",
    city: "Goa",
    author_name: "Ishaan Kapoor",
    author_image: ayush_image,
    price: 5200,
    review: "4.8/5",
    images: [cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, cliffside_stay, ],
    amenities: [
      "Free Wi-Fi", "Heating", "Fireplace", "Mountain View", "Breakfast Included",
      "Free Parking", "Private Balcony", "CCTV", "Restaurant", "Pet Friendly"
    ]
  },
  {
    id: 12,
    name: "Riverside Cottage",
    description: "A calm riverside cottage surrounded by greenery and tranquility.",
    location: "Manali, India",
    city: "Manali",
    author_name: "Neha Bansal",
    author_image: ayush_image,
    price: 3100,
    review: "4.5/5",
    images: [riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, riverside_cottage, ],
    amenities: [
      "Free Wi-Fi", "Farm Access", "Kitchen Access", "Breakfast Included",
      "Free Parking", "Pet Friendly", "24/7 CCTV", "Outdoor Games", "Bonfire Area", "Air Conditioning"
    ]
  },
  {
    id: 13,
    name: "Hilltop Luxury Villa",
    description: "Stay above the clouds in this scenic luxury hilltop villa.",
    location: "Manali, India",
    city: "Manali",
    author_name: "Amit Verma",
    author_image: ayush_image,
    price: 5800,
    review: "4.9/5",
    images: [hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, hilltop_villa, ],
    amenities: [
      "Free Wi-Fi", "Nature Trails", "CCTV", "Breakfast Included", "Private Balcony",
      "Free Parking", "King Size Bed", "Kitchen Access", "Pet Friendly", "Spa Access"
    ]
  },
  {
    id: 14,
    name: "Backwater Eco Resort",
    description: "Peaceful backwater retreat offering natural beauty and comfort.",
    location: "Udaipur, India",
    city: "Udaipur",
    author_name: "Priya Das",
    author_image: ayush_image,
    price: 6000,
    review: "4.7/5",
    images: [backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, backwater_resort, ],
    amenities: [
      "Free Wi-Fi", "Smart TV", "Air Conditioning", "Gym Access", "Elevator",
      "24/7 CCTV", "Private Balcony", "Mini Bar", "Breakfast Included", "Kitchen Access"
    ]
  },
  {
    id: 15,
    name: "Countryside Farmhouse",
    description: "Rustic farmhouse with modern comfort surrounded by nature.",
    location: "Mumbai, India",
    city: "Mumbai",
    author_name: "Devansh Rao",
    author_image: ayush_image,
    price: 4300,
    review: "4.5/5",
    images: [farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, farmhouse, ],
    amenities: [
      "Free Wi-Fi", "Fan", "Breakfast Included", "Pet Friendly", "Outdoor Shower",
      "Nature Trails", "CCTV", "Free Parking", "Double Bed", "Kitchen Access"
    ]
  },
  {
    id: 16,
    name: "Luxury Palace Stay",
    description: "Live like royalty in this grand heritage palace experience.",
    location: "Udaipur, India",
    city: "Udaipur",
    author_name: "Megha Singh",
    author_image: ayush_image,
    price: 7200,
    review: "4.9/5",
    images: [palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay, palace_stay],
    amenities: [
      "Free Wi-Fi", "Smart TV", "Air Conditioning", "Breakfast Included", "Cultural Nights",
      "Mini Bar", "24/7 CCTV", "Restaurant", "Private Balcony", "Bar"
    ]
  },
  {
    id: 17,
    name: "Tea Garden Homestay",
    description: "Wake up to misty mornings in a cozy tea estate homestay.",
    location: "Manali, India",
    city: "Manali",
    author_name: "Rudra Thakur",
    author_image: ayush_image,
    price: 3700,
    review: "4.6/5",
    images: [tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, tea_garden, ],
    amenities: [
      "Free Wi-Fi", "River View", "Yoga Space", "Breakfast Included", "Free Parking",
      "CCTV", "Air Conditioning", "Private Balcony", "Restaurant", "Pet Friendly"
    ]
  },
  {
    id: 18,
    name: "Luxury Tree Pod",
    description: "Unique elevated pod stay surrounded by lush greenery.",
    location: "Araku Valley, India",
    city: "Araku Valley",
    author_name: "Sanya Arora",
    author_image: ayush_image,
    price: 4600,
    review: "4.7/5",
    images: [tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, tree_pod, ],
    amenities: [
      "Free Wi-Fi", "Private Beach", "Air Conditioning", "Breakfast Included",
      "Swimming Pool", "Bar", "24/7 CCTV", "Sea View", "Mini Bar", "Spa Access"
    ]
  },
  {
    id: 19,
    name: "Glass House Villa",
    description: "Transparent luxury villa offering panoramic nature views.",
    location: "Mahabaleshwar, India",
    city: "Mahabaleshwar",
    author_name: "Aditya Menon",
    author_image: ayush_image,
    price: 6500,
    review: "4.9/5",
    images: [glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, glass_villa, ],
    amenities: [
      "Free Wi-Fi", "Smart TV", "Air Conditioning", "Swimming Pool", "Spa Access",
      "Private Balcony", "Mini Bar", "24/7 CCTV", "Restaurant", "Breakfast Included"
    ]
  },
  {
    id: 20,
    name: "Ocean Breeze Resort",
    description: "A lavish seaside escape where ocean meets luxury.",
    location: "Mumbai, India",
    city: "Mumbai",
    author_name: "Ritika Sinha",
    author_image: ayush_image,
    price: 7400,
    review: "4.8/5",
    images: [ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ocean_resort, ],
    amenities: [
      "Free Wi-Fi", "Fireplace", "Mountain View", "Heating", "Breakfast Included",
      "Free Parking", "Private Balcony", "CCTV", "Pet Friendly", "Kitchen Access"
    ]
  }
]


export const userProfile = {
    name: "Ayush Patidar",
    email: "ayush@example.com",
    joined: "January 2024",
    location: "Bhopal, India",
    avatar: ayush_image,
};

export const fetchedBookings = [
        {
          id: 1,
          place: "Goa Beachfront Villa",
          checkIn: "2025-12-10",
          checkOut: "2025-12-14",
          price: 9500,
          image: beach_bungalow,
        },
        {
          id: 2,
          place: "Manali Hill Cottage",
          checkIn: "2026-01-05",
          checkOut: "2026-01-09",
          price: 7800,
          image:hilltop_villa,
        },
];


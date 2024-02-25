import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilTruck,UilCar, UilBus } from "@iconscout/react-unicons";
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Cars",
      color: {
        backGround: "linear-gradient(180deg, #01377d 0%, #009DD1 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilCar,
      series: [
        {
          name: "Cars",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Trucks",
      color: {
        backGround: "linear-gradient(180deg, #009DD1 0%, #97E7F5 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilTruck,
      series: [
        {
          name: "Trucks",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Buses",
      color: {
        backGround:
          "linear-gradient(180deg, #03254c 0%, #1167b1  100%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilBus,
      series: [
        {
          name: "Buses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
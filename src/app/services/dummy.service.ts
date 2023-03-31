import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  lang = [
    {
      name : 'Gujrati',
      color : '#c70e55'
    },
    {
      name : 'Hindi',
      color : '#78bbeb'
    },
    {
      name : 'English',
      color : '#c435b6'
    },
    {
      name : 'Marathi',
      color : '#c5c96d'
    },
    {
      name : 'Panjabi',
      color : '#b86d12'
    },
    {
      name : 'Nepali',
      color : '#f0610e'
    },
    {
      name : 'Tamil',
      color : '#f0cc00'
    },
    {
      name : 'Telugu',
      color : '#44f000'
    },
    {
      name : 'Bengali',
      color : '#ad11f5'
    },
    {
      name : 'Urdu',
      color : '#35734e'
    },
    {
      name : 'Kannada',
      color : '#bc57c9'
    },
    {
      name : 'Malayalam',
      color : '#34a2c9'
    },
    {
      name : 'Odia',
      color : '#349158'
    },
    {
      name : 'Assamese',
      color : '#2f11f5'
    },
  ];

  news = [
    {
      logo : 'assets/imgs/news_icn1.png',
      img : 'assets/imgs/news1.jpg',
      detail : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      logo : 'assets/imgs/news_icn2.png',
      img : 'assets/imgs/news4.jpg',
      detail : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      logo : 'assets/imgs/news_icn3.png',
      img : 'assets/imgs/news6.jpg',
      detail : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece'
    },
    {
      logo : 'assets/imgs/news_icn4.png',
      img : 'assets/imgs/news2.jpg',
      detail : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.There are many variations of passages.'
    },
    {
      logo : 'assets/imgs/news_icn5.png',
      img : 'assets/imgs/news3.jpg',
      detail : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
    },
    {
      logo : 'assets/imgs/news_icn6.png',
      img : 'assets/imgs/news5.jpg',
      detail : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    },
  ];

  newspapers = [
    {
      img : 'assets/imgs/news_icn1.png',
      name : 'News Paper1'
    },
    {
      img : 'assets/imgs/news_icn2.png',
      name : 'News Paper2'
    },
    {
      img : 'assets/imgs/news_icn3.png',
      name : 'News Paper1'
    },
    {
      img : 'assets/imgs/news_icn4.png',
      name : 'News Paper3'
    },
    {
      img : 'assets/imgs/news_icn5.png',
      name : 'News Paper4'
    },
    {
      img : 'assets/imgs/news_icn6.png',
      name : 'News Paper5'
    },
    {
      img : 'assets/imgs/news_icn7.png',
      name : 'News Paper1'
    },
    {
      img : 'assets/imgs/news_icn8.png',
      name : 'News Paper2'
    },
    {
      img : 'assets/imgs/news_icn9.png',
      name : 'News Paper1'
    },
    {
      img : 'assets/imgs/news_icn10.png',
      name : 'News Paper3'
    }
  ];

  places = [
    {
      img : 'assets/imgs/gujrat.jpg',
      name : 'Gujrat'
    },
    {
      img : 'assets/imgs/lucknow.jpeg',
      name : 'Lunknow'
    },
    {
      img : 'assets/imgs/kashmir.jpeg',
      name : 'Kashmir'
    },
    {
      img : 'assets/imgs/delhi.jpeg',
      name : 'Delhi'
    },
    {
      img : 'assets/imgs/kerala.jpeg',
      name : 'Kerala'
    },
    {
      img : 'assets/imgs/chandigrah.jpeg',
      name : 'Chandigrah'
    },
  ];

  homeSlider = [
    {
      img : 'assets/imgs/home_slider/slide1.jpg',
      name : 'Corona As s Pandemic'
    },
    {
      img : 'assets/imgs/home_slider/slide2.jpg',
      name : 'Corona Vaccine Trial'
    },
    {
      img : 'assets/imgs/home_slider/slide3.jpg',
      name : 'Countries declared national emergancy'
    },
    {
      img : 'assets/imgs/home_slider/slide4.jpg',
      name : 'Arogya setu app launched'
    },
    {
      img : 'assets/imgs/home_slider/slide5.jpg',
      name : 'PM-CARES Funds'
    },
  ];

  city = [
    'add',
    'Delhi',
    'Kokata',
    'Bengaluru',
    'Mumbai',
    'Chennai'
  ];

  users = [
    'assets/imgs/users/user1.jpg',
    'assets/imgs/users/user2.jpg',
    'assets/imgs/users/user3.jpg',
    'assets/imgs/users/user4.jpg',
    'assets/imgs/users/user5.jpg',
  ];

  constructor() { }
}

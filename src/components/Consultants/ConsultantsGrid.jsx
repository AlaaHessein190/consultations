import React from 'react';
import ConsultantCard from '../ConsultantCard/ConsultantCard'; // تأكد من استيراد المكون

const consultants = [
  {
    name: 'د. خالد حسن',
    specialty: 'استشاري نفسي',
    rating: 4.8,
    reviews: 290,
    price: 300,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. سارة محمد',
    specialty: 'استشاري أسري',
    rating: 4.5,
    reviews: 230,
    price: 250,
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEBUREBAQFRAVDxAQDw8PEA8PFQ8QFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgMEB//EADcQAAIBAgQEBAQFAwQDAAAAAAABAgMRBBIhMQVBUWEGInGBE5Gh0SMyQsHwUmKxFDPh8VNyov/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD5MAAA0hiGAwEMBgIYAOwhgAxDAAEMAABAFwAQDAQAAAJgJgAgJXEAAAxABEAABoYkMBggQAAwAAGhIYDAAsAWEMQAACYA2ACAABiAdwuK4mAxBcQEgBAwAAACKGCQwAAAAGAAAxDAYAADuAXJQa3S+YEbEHNf9HaN2nfa176r6I8s5a6f4A6RmNM5LXnqdXTaWz9uQAJoXvoSt/EBECTREBXENiAAAAGhisMABANAJDEOIAAwAAAAAAABgwO8aWaGt7LnokvuB56UE9Xdrm1pZ+p6HBKN7pLkr6v0W7OeDrJLK9LX6J3fqQoK7btr0ettQOVSpJ6Jtxvt1fJhd2skvUsaGGnJSVKDlfeSjdpdjlOlKMUnCSaatdNeVcwK/wCHJO2p6YLL126nWMc0s1nbZ2Wnueeo5JvTR8mgJOGba3ucajcXp7ruN6WaelthTd/UCcJXQ2Qo7E2AmIbEAAAwAYJAA0MSGBFDQIYAAAAAAAAAMBPY64LHJLJNaXvd6/TmQUbp67K/r2OkaWZc31XQCWEw/wAavGMb5ZNRTa+cj6JgeEUqUbRgr2td63KXwdwpufxZRtFLLTXVveXyv82buhQVgKing3ySPLisHGStKCfLY1KpJangxVC7vYDJ1uGwX5Ypd0VtfAxa1Rr8TR7dipxUFe1gMXjOF227lU4O/ubXFUrPsZjHQyyemnIDjCFlqRI/EurN6brsEN/YB2ESIgAxDAYAADQyKGwAYAAAAADAYgAAGBKnUSTv0X+Sx4MoOpo9M9rPmrb/AEZWO1teyLvwjgk8Rf8ATBZmureiA+icMhZKy5Ky2LqENORnafEYU/zSWZ3yxSu2lzsdsP4qwkXlqVcrv+pfYC+lS5PrpqcZ0rux2wWPoV1+FVhNf2yVzrVp2aApsVQW1jO4vDPNtpyNhjHCKcpSUUl+ppL6mQ4p4iwUX/uOVt8kXJL32ArsVD+bmZ4tH7GixHFsPNaSdnteEl8+hRY6GZNJ94tagUE3Ynh5HKS11J0t9AO7IkiIDQCGA0AIAGhAAEgAAAaEMAEMGAhoQASlTbTyxbtr6LqafwHQlL4kuuWC9rlTwGi51JRTavSmnZXdna9l6Gt8DUMlOSdnJVqkW01ZtO112sBpqM6OGgs2WOnmnK12+7e5T8T8W8Mn5akI1FfnTjJd9xeKeDSxMY5Xqmnleqt3S3PHxXgVetFeShBKlSh5IzS/DcmnCH6fztPV8ttQLvguA4fUca2G8kk7/hycfnF8jU46SUM1zD+HuHTpzjf4cUoKDtCSlO3Nu9r+xfcTxn4MorXfW+wFHxvFUsRONOc3kV20mld9bnhqV+F4azUKblo05Rz+8XLf1Rnab+JUleVm27NpyS9ubLnE8MdWjlj8FPI1NqEr1XmUlNtt+ZWevR+lgWJ8SUa2iyuOis1a2myKivh4p3h+V8lsmebFcHrXissFlv5oqzd5X1+xZQoOMNXcDI8Rp5ajXe69yNOk1Zva113PdxWlmqpLey/ySxdPLCK55pc09MsdPm2B5GJg2AAABcBgJABKITEJgTAAAaAEAADAQAFgQwLvwdOSxN4WzKjUaur3dlpY1HhPD5Y2UnaVScrWUXCSdnFr5P3MPwjHOhWhVV7RfmS3cXo7d/sfToOjJU8RSd3Kyla6zJwzKTXJ6oC2jpK9ufdnatiI3y87N2WuiaucsLVPVGkr6f8AIHgxNOyut2nbt3PBiY/h25eZv1LziEbU0lrKUsq7aN/sUXEMPXdO2XnpyTs+oGBy5azttm7/ADNXw+6Se6023MtjpSVVtrVO0kbnhOCtTUkrJq4HhxNndpWv2/n8RS4yWn1NFxGDSfT+bGTxtSzYFNiqV5fEe2ZRS682HG6t6iS2UIu3dpfZFlQpQdPNNaRV9dl5vzP6IocZWzzcur09OQHEAAAAAAAAAGhAAHQAYAO4CGgExMbABIYAA0W/AcfU/wBRSi5vKrU7XavBKTjFq9nZvS+xT3OuErZKkJ/0zjL2TuB9pwTTS06FtCJTcLmnCLW1kWNas4K+tuiTYE8XC8Wr8v5qVmMw1RQjGnVeia/Eed69XzI4jxBhYtqVR5lq4OEk0u6aViqxXivDfm1stYvPT152smBn6nD506kozkpJzzybWsn68l2NZw7HRyZZbdehkOJ+I6U5uVmnzyvP+x34Rjfj+SOdJq2aSy312XUDQ8Xay35GF4g7tvkbXiqUKOTorGE4jLLF+j+bAq5cQqOLhfyuKja1vKmnb/5R5QQAAAAAAAAAAXAAAAOomAAAwsAACAAAQxMAABAfSfAPF1UpfCk/xKaSt/VD9L/Y2e+jPh/B8RKniKcoNp/EhG65xlJJr01Pr+Exz0U9H15MD21cHCerjqua3XuU/EeD029IQ7NxRfUW2tGefG0pPmBhsdwBRd3rrpokvkPAyVOV9LpaJaalpxfFSirP05amWxGL1AvOIYzOrvoYnjGJvLKvVljWxLayp+vZFFjf9x+3+AOIBcAAAAAEMVgAAEA0MSYwOgAAAAAA7gIAAAFcAuIVwuB7OE081ekl/wCWD+Tv+x9gw9BOOvQ+Y+DMI54hTt5YX1/uelvlc+sUaWiAjQdSGi1W6/7J18XJLWnK/pc9EIHSUU1sBiuN06lR/lt3k/sZjF4ZRe931+x9C4pSVjFY6F5MCshTKXiUbVG+ppfh6lPxfDu1+af0AqUAgAkgEhgAgAAEAANDIkgJggABgIAGK4XEAABFO7sldtpLu2A2evAcNqVXorQ5za0t26mk4R4VtaVW0pf0/pj9zT4fh6jstPYDj4W4WqcY22/M3zd+praSK/hdNKKXTy/Lb9izpoDoov7jm9CPx0pKNndxk08rasrXvLZPVaPfXoFVgVPFZaGVeHvJt9TWY2ndFVPD5dQM/iaVmePG4b6ouK1LM7k6mGvEDA4vASTbitL6x6eh4TZvC3u+r09ORWcW4bFwlPZpXuufZ9QKBDZyjPrsdLgIAABiAAAYhgTAAAAOcqiRzlUbA7ymkc5VuiOIAScm9zrRnlkpdJKXydziiaA+y8NcZ04yTVnFP5osIwMP4I4hKdJ0k/NDZc3B7M0FfE1o8tQLqDUZXvpK1/VaXPZTrLqY2rj6z/SyeHx1WSuk+4GwlVRF1kzJLi1RSyz25WPdheIagXtSFyr4vG0e566eOiePiTcleKAqKdSOXuTc04ZVu9Pbn9LlRiFNNvZbnnozq3za9t9gL2thVbToZbxRXy0snOTt7LV/sXFPGVOf1Mf4jxvxKzs9I+VW68/r/gCokOMrCbADopjucgTA7XERUh3AkgEmO4EjnVZ0OTYHMBsJIBoQRG0AkTREYHu4Vj54erGrDdPVf1R5xPsHCMZSxFKNSNnddFdPmn3PiaZd+GuOzws9bulJ+ePT+5AfXZYOD5HknhFF3S0e/ZjwHEY1IKcJJxa0adz0SrfzdAUPEsIpO9tjyKhJFzU5pr/1fVHD4KSslZLbsBww+bnfbp+5Z0KjSt2OFOPbQVSvyju/ouoHmxOHU5W/SmnLu/6Rf6Vckvc9cLKKS+f7nh4xxKlh6bnN67Rgt5y6JfuBReK8YqMMsbfEnfKlyXORhJM9XEMbOtUdSo/M3tyiuUV2R5QEAAAmIYMBDTCwgOg7kIskB//Z',
  },
  {
    name: 'د. أمل يوسف',
    specialty: 'استشاري تغذية',
    rating: 4.9,
    reviews: 310,
    price: 350,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. هند أحمد',
    specialty: 'استشاري تطوير ذات',
    rating: 4.7,
    reviews: 250,
    price: 280,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. عمر يوسف',
    specialty: 'استشاري أعمال',
    rating: 4.6,
    reviews: 270,
    price: 320,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. مريم علي',
    specialty: 'استشاري علاقات أسرية',
    rating: 4.8,
    reviews: 300,
    price: 340,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. ياسر الزهراني',
    specialty: 'استشاري مهني',
    rating: 4.7,
    reviews: 280,
    price: 310,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. ليلى حسين',
    specialty: 'استشاري صحة نفسية',
    rating: 4.9,
    reviews: 320,
    price: 380,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
  {
    name: 'د. محمود عبدالله',
    specialty: 'استشاري مالي',
    rating: 4.6,
    reviews: 260,
    price: 290,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
  },
];

const ConsultantsGrid = () => {
  return (
    <section className="w-full md:w-3/4">
      <div className="mb-6 flex justify-between items-center">
        <span className="text-gray-700">عرض 9 من 50 مستشارًا</span>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>الأعلى تقييماً</option>
          <option>الأقل سعراً</option>
          <option>الأحدث</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultants.map((consultant, index) => (
          <ConsultantCard key={index} {...consultant} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300">
          تحميل المزيد (50 مستشاراً)
        </button>
      </div>
    </section>
  );
};

export default ConsultantsGrid;
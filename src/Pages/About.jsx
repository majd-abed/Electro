import React, { useState } from "react";
import { people } from "../data";
import { Container } from "../components";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const About = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className='bg-gray-200 pt-6'>
        <Container>
          <h1 className='text-center text-4xl font-bold text-blue-900'>Our Crew</h1>
          <div className='text-4xl font-bold bg-blue-900 h-1 w-16 m-auto mb-3 mt-1 rounded-lg'></div>
          <div className='bg-white text-center md:w-[60vw] mdx:w-[85vw] mx-auto shadow-md rounded-sm p-5'>
            <div className='w-44 h-44 relative m-auto'>
              <img
                src={image}
                alt={name}
                className='rounded-full shadow-md w-full h-full block object-cover'
              />
              <span className='absolute top-0 left-0 w-10 h-10 rounded-full grid justify-center items-center bg-blue-500 text-white'>
                <FaQuoteRight />
              </span>
            </div>
            <h4 className='my-1 font-semibold text-lg'>{name}</h4>
            <p className='mb-2 uppercase text-blue-500 text-base'>{job}</p>
            <p className='mb-1 m-auto'>{text}</p>
            <div className='button-container'>
              <button
                className='text-blue-600 text-base mx-2 cursor-pointer'
                onClick={prevPerson}>
                <FaChevronLeft />
              </button>
              <button
                className='text-blue-600 text-base mx-2 cursor-pointer'
                onClick={nextPerson}>
                <FaChevronRight />
              </button>
            </div>
            <button
              className='bg-blue-200 py-1 px-2 rounded-sm text-blue-500 my-3'
              onClick={randomPerson}>
              Surprise Me
            </button>
          </div>
        </Container>
      </article>
      <section class='spikes'></section>
      <article className="pt-8">
        <Container>
          <h1 className='text-center text-4xl font-bold text-blue-900'>Our Story</h1>
          <div className='text-4xl font-bold bg-blue-900 h-1 w-16 m-auto mb-3 mt-1 rounded-lg'></div>
          <div className='grid xl:grid-cols-2 xlx:grid-cols-1 pb-12 pt-1'>
            <div className='m-auto'>
              <img
                src={require("../assets/gaming-mouse.webp")}
                alt=' '
                className=' h-96 smx:h-56 min-w-fit'
              />
            </div>
            <div className="xlx:pt-5 smx:px-5 max-w-2xl m-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi numquam consectetur aliquid corporis ratione labore. Suscipit recusandae ducimus mollitia voluptatibus incidunt ut doloremque, accusantium ad, quos consequuntur asperiores placeat dolor. Molestiae odio quisquam amet dolorem consectetur perferendis recusandae omnis ipsam voluptas, explicabo accusantium quaerat ex delectus sint obcaecati sit hic iure fugiat id quod rerum enim! Ratione quod sapiente, soluta cupiditate nisi alias tempora! Vel eveniet incidunt accusamus aperiam atque eaque reprehenderit mollitia molestiae, saepe autem est deleniti facere, et officia dolor ipsum aliquam ab! Laboriosam doloribus facere doloremque expedita delectus officia. Labore vitae tenetur atque deserunt magni vel, voluptatibus reprehenderit natus iure sint aspernatur sunt sequi accusantium sed facere nisi enim, cumque quaerat, inventore placeat? Asperiores repellat obcaecati sapiente harum iure quod tempore, illo ipsam, nam amet exercitationem, commodi vitae sint? Eum deserunt dolores aliquid voluptas. Sint, quo animi modi expedita magnam doloribus. Magni corrupti a consequatur error culpa!
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
};
export default About;

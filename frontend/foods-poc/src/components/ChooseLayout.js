import { Select, Option, Radio } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import graphic1 from '../assets/images/Grafik-01.png';
import graphic2 from '../assets/images/Grafik-02.png';
import graphic3 from '../assets/images/Grafik-03.png';
import graphic4 from '../assets/images/Grafik-04.png';
import graphic5 from '../assets/images/Grafik-05.png';
import graphic6 from '../assets/images/Grafik-06.png';
import graphic7 from '../assets/images/Grafik-07.png';
import graphic8 from '../assets/images/Grafik-08.png';
import graphic9 from '../assets/images/Grafik-09.png';
import graphic10 from '../assets/images/Grafik-10.png';
import graphic11 from '../assets/images/Grafik-11.png';
import graphic12 from '../assets/images/Grafik-12.png';
import graphic13 from '../assets/images/Grafik-13.png';
import graphic14 from '../assets/images/Grafik-14.png';
import graphic15 from '../assets/images/Grafik-15.png';
import graphic16 from '../assets/images/Grafik-16.png';
import graphic17 from '../assets/images/Grafik-17.png';
import graphic18 from '../assets/images/Grafik-18.png';

function ChooseLayout({ setChosenLayout }) {
  const [value, setValue] = useState();
  const [iconX, setIconX] = useState();
  const [iconY, setIconY] = useState();
  const [iconZ, setIconZ] = useState();
  const [iconsArr, setIconsArr] = useState([
    graphic1,
    graphic2,
    graphic3,
    graphic4,
    graphic5,
    graphic6,
    graphic7,
    graphic8,
    graphic9,
    graphic10,
    graphic11,
    graphic12,
    graphic13,
    graphic14,
    graphic15,
    graphic16,
    graphic17,
    graphic18,
  ]);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <div className='flex justify-center w-20 mt-6'>
        <Select
          label='Choose graphic for'
          value={value}
          onChange={handleChange}
        >
          <Option value='x'>X</Option>
          <Option value='y'>Y</Option>
          <Option value='z'>Z</Option>
        </Select>
      </div>
      {value === 'x' ? (
        <div className='flex flex-wrap mt-2 gap-4 max-w-[50%]'>
          <Radio
            id='joystick'
            name='image'
            label={<img src={graphic1} className='w-12' alt='joystick icon' />}
          />
          <Radio
            id='controller'
            name='image'
            label={
              <img src={graphic2} className='w-12' alt='controller icon' />
            }
          />
          <Radio
            id='half-circle-green'
            name='image'
            label={
              <img
                src={graphic3}
                className='w-12'
                alt='half-circle-green icon'
              />
            }
          />
          <Radio
            id='triangle'
            name='image'
            label={<img src={graphic4} className='w-12' alt='triangle icon' />}
          />
          <Radio
            id='book-green'
            name='image'
            label={
              <img src={graphic5} className='w-12' alt='book-green icon' />
            }
          />
          <Radio
            id='meatball'
            name='image'
            label={<img src={graphic6} className='w-12' alt='meatball icon' />}
          />
          <Radio
            id='hotdog'
            name='image'
            label={<img src={graphic7} className='w-12' alt='hotdog icon' />}
          />
          <Radio
            id='circle-green'
            name='image'
            label={
              <img src={graphic8} className='w-12' alt='circle-green icon' />
            }
          />
          <Radio
            id='circle-pink'
            name='image'
            label={
              <img src={graphic9} className='w-12' alt='circle-pink icon' />
            }
          />
          <Radio
            id='line-pink'
            name='image'
            label={
              <img src={graphic10} className='w-12' alt='line-pink icon' />
            }
          />
          <Radio
            id='leaf'
            name='image'
            label={<img src={graphic11} className='w-12' alt='leaf icon' />}
          />
          <Radio
            id='fire'
            name='image'
            label={<img src={graphic12} className='w-12' alt='fire icon' />}
          />
          <Radio
            id='square-blue'
            name='image'
            label={
              <img src={graphic13} className='w-12' alt='square-blue icon' />
            }
          />
          <Radio
            id='square-red'
            name='image'
            label={
              <img src={graphic14} className='w-12' alt='square-red icon' />
            }
          />
          <Radio
            id='book-blue'
            name='image'
            label={
              <img src={graphic15} className='w-12' alt='book-blue icon' />
            }
          />
          <Radio
            id='half-circle-orange'
            name='image'
            label={
              <img
                src={graphic16}
                className='w-12'
                alt='half-circle-orange icon'
              />
            }
          />
          <Radio
            id='sandwich'
            name='image'
            label={<img src={graphic17} className='w-12' alt='sandwich icon' />}
          />
          <Radio
            id='bookcase'
            name='image'
            label={<img src={graphic18} className='w-12' alt='bookcase icon' />}
          />
        </div>
      ) : value === 'y' ? (
        <></>
      ) : value === 'z' ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
}

export default ChooseLayout;

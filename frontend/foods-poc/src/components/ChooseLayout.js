import {
  Select,
  Option,
  Radio,
  Input,
  Button,
  Chip,
} from '@material-tailwind/react';
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
  const [icon, setIcon] = useState();
  const [layout, setLayout] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    console.log(layout);
  }, [layout]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSave = (e) => {
    setChosenLayout(layout);
    setErrorMsg('');
  };

  const addGraphic = () => {
    console.log(value);
    console.log(icon);

    if (value) {
      if (icon) {
        for (let graphic in layout) {
          if (layout[graphic].id === value) {
            setErrorMsg('Art.nr is already taken!');
            return;
          }
        }
        setLayout([...layout, { id: value, icon: icon }]);
        setErrorMsg('');
      } else {
        setErrorMsg('No icon chosen!');
      }
    } else {
      setErrorMsg('No art.nr entered!');
    }
  };

  const removeGraphic = (graphic) => {
    const updatedLayout = layout.filter((data) => data.id !== graphic.id);
    setLayout(updatedLayout);
    // setEmployeeData(previousEmployeeData => previousEmployeeData.filter(data)=> data.id != employeeId )
  };

  return (
    <>
      <div className='flex flex-row mt-10 items-center'>
        <span className='text-xs whitespace-nowrap mr-2'>
          Choose graphic for:{' '}
        </span>
        <Input label='Art.nr' onChange={handleChange} />
      </div>
      <div className='flex flex-wrap justify-center mt-2 gap-4 max-w-[80%] 2xl:max-w-[50%]'>
        <Radio
          id='joystick'
          name='icon'
          value='Grafik-01'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic1} className='w-8 sm:w-12' alt='joystick icon' />
          }
        />
        <Radio
          id='controller'
          name='icon'
          value='Grafik-02'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic2} className='w-8 sm:w-12' alt='controller icon' />
          }
        />
        <Radio
          id='half-circle-green'
          name='icon'
          value='Grafik-03'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img
              src={graphic3}
              className='w-8 sm:w-12'
              alt='half-circle-green icon'
            />
          }
        />
        <Radio
          id='triangle'
          name='icon'
          value='Grafik-04'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic4} className='w-8 sm:w-12' alt='triangle icon' />
          }
        />
        <Radio
          id='book-green'
          name='icon'
          value='Grafik-05'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic5} className='w-8 sm:w-12' alt='book-green icon' />
          }
        />
        <Radio
          id='meatball'
          name='icon'
          value='Grafik-06'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic6} className='w-8 sm:w-12' alt='meatball icon' />
          }
        />
        <Radio
          id='hotdog'
          name='icon'
          value='Grafik-07'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic7} className='w-8 sm:w-12' alt='hotdog icon' />
          }
        />
        <Radio
          id='circle-green'
          name='icon'
          value='Grafik-08'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img
              src={graphic8}
              className='w-8 sm:w-12'
              alt='circle-green icon'
            />
          }
        />
        <Radio
          id='circle-pink'
          name='icon'
          value='Grafik-09'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img
              src={graphic9}
              className='w-8 sm:w-12'
              alt='circle-pink icon'
            />
          }
        />
        <Radio
          id='line-pink'
          name='icon'
          value='Grafik-10'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic10} className='w-8 sm:w-12' alt='line-pink icon' />
          }
        />
        <Radio
          id='leaf'
          name='icon'
          value='Grafik-11'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic11} className='w-8 sm:w-12' alt='leaf icon' />
          }
        />
        <Radio
          id='fire'
          name='icon'
          value='Grafik-12'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic12} className='w-8 sm:w-12' alt='fire icon' />
          }
        />
        <Radio
          id='square-blue'
          name='icon'
          value='Grafik-13'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img
              src={graphic13}
              className='w-8 sm:w-12'
              alt='square-blue icon'
            />
          }
        />
        <Radio
          id='square-red'
          name='icon'
          value='Grafik-14'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img
              src={graphic14}
              className='w-8 sm:w-12'
              alt='square-red icon'
            />
          }
        />
        <Radio
          id='book-blue'
          name='icon'
          value='Grafik-15'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic15} className='w-8 sm:w-12' alt='book-blue icon' />
          }
        />
        <Radio
          id='half-circle-orange'
          name='icon'
          value='Grafik-16'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img
              src={graphic16}
              className='w-8 sm:w-12'
              alt='half-circle-orange icon'
            />
          }
        />
        <Radio
          id='sandwich'
          name='icon'
          value='Grafik-17'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic17} className='w-8 sm:w-12' alt='sandwich icon' />
          }
        />
        <Radio
          id='bookcase'
          name='icon'
          value='Grafik-18'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic18} className='w-8 sm:w-12' alt='bookcase icon' />
          }
        />
      </div>
      {layout.length > 0 ? (
        <div>
          {layout.map((graphic) => (
            <Chip
              className='mt-4 mr-2'
              key={graphic.id}
              value={graphic.id}
              icon={
                <img
                  src={require(`../assets/images/${graphic.icon}.png`)}
                  alt='joystick icon'
                />
              }
              dismissible={{ onClose: () => removeGraphic(graphic) }}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
      <div>
        <Button className='mt-4' onClick={addGraphic}>
          Add graphic
        </Button>
        {layout.length > 0 ? (
          <Button className='ml-2' onClick={onSave}>
            Save
          </Button>
        ) : (
          <></>
        )}
      </div>
      {errorMsg ? <span className='mt-2 text-red-500'>{errorMsg}</span> : <></>}
    </>
  );
}

export default ChooseLayout;

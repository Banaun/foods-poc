import { Radio, Input, Button, Chip } from '@material-tailwind/react';
import { useState } from 'react';
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

function ChooseLayout({ chosenLayout, setChosenLayout }) {
  const [value, setValue] = useState('');
  const [price, setPrice] = useState('');
  const [icon, setIcon] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const addGraphic = () => {
    if (value) {
      if (price) {
        if (icon) {
          for (let graphic in chosenLayout) {
            if (chosenLayout[graphic].id === value) {
              setErrorMsg('Art.nr is already taken!');
              return;
            }
          }
          setChosenLayout([
            ...chosenLayout,
            { id: value, price: price, icon: icon },
          ]);
          setErrorMsg('');
          setValue('');
          setPrice('');
          setIcon('');
        } else {
          setErrorMsg('No icon chosen!');
        }
      } else {
        setErrorMsg('No price entered!');
      }
    } else {
      setErrorMsg('No art.nr entered!');
    }
  };

  const removeGraphic = (graphic) => {
    const updatedLayout = chosenLayout.filter((data) => data.id !== graphic.id);
    setChosenLayout(updatedLayout);
    setValue(graphic.id);
    setPrice(graphic.price);
    // setEmployeeData(previousEmployeeData => previousEmployeeData.filter(data)=> data.id != employeeId )
  };

  return (
    <>
      <div className='flex flex-row mt-10 items-center'>
        <span className='text-xs whitespace-nowrap mr-2'>
          Choose graphic for:{' '}
        </span>
        <Input label='Art.nr' value={value} onChange={handleChange} />
        <span className='text-xs whitespace-nowrap mr-2 ml-2'>
          {`Set price for${value ? ' ' + value + ':' : ':'}`}{' '}
        </span>
        <Input label='Price' value={price} onChange={handlePriceChange} />
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
          checked={icon === 'Grafik-01'}
        />
        <Radio
          id='controller'
          name='icon'
          value='Grafik-02'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic2} className='w-8 sm:w-12' alt='controller icon' />
          }
          checked={icon === 'Grafik-02'}
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
          checked={icon === 'Grafik-03'}
        />
        <Radio
          id='triangle'
          name='icon'
          value='Grafik-04'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic4} className='w-8 sm:w-12' alt='triangle icon' />
          }
          checked={icon === 'Grafik-04'}
        />
        <Radio
          id='book-green'
          name='icon'
          value='Grafik-05'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic5} className='w-8 sm:w-12' alt='book-green icon' />
          }
          checked={icon === 'Grafik-05'}
        />
        <Radio
          id='meatball'
          name='icon'
          value='Grafik-06'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic6} className='w-8 sm:w-12' alt='meatball icon' />
          }
          checked={icon === 'Grafik-06'}
        />
        <Radio
          id='hotdog'
          name='icon'
          value='Grafik-07'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic7} className='w-8 sm:w-12' alt='hotdog icon' />
          }
          checked={icon === 'Grafik-07'}
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
          checked={icon === 'Grafik-08'}
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
          checked={icon === 'Grafik-09'}
        />
        <Radio
          id='line-pink'
          name='icon'
          value='Grafik-10'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic10} className='w-8 sm:w-12' alt='line-pink icon' />
          }
          checked={icon === 'Grafik-10'}
        />
        <Radio
          id='leaf'
          name='icon'
          value='Grafik-11'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic11} className='w-8 sm:w-12' alt='leaf icon' />
          }
          checked={icon === 'Grafik-11'}
        />
        <Radio
          id='fire'
          name='icon'
          value='Grafik-12'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic12} className='w-8 sm:w-12' alt='fire icon' />
          }
          checked={icon === 'Grafik-12'}
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
          checked={icon === 'Grafik-13'}
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
          checked={icon === 'Grafik-14'}
        />
        <Radio
          id='book-blue'
          name='icon'
          value='Grafik-15'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic15} className='w-8 sm:w-12' alt='book-blue icon' />
          }
          checked={icon === 'Grafik-15'}
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
          checked={icon === 'Grafik-16'}
        />
        <Radio
          id='sandwich'
          name='icon'
          value='Grafik-17'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic17} className='w-8 sm:w-12' alt='sandwich icon' />
          }
          checked={icon === 'Grafik-17'}
        />
        <Radio
          id='bookcase'
          name='icon'
          value='Grafik-18'
          onChange={(e) => setIcon(e.target.value)}
          label={
            <img src={graphic18} className='w-8 sm:w-12' alt='bookcase icon' />
          }
          checked={icon === 'Grafik-18'}
        />
      </div>
      {chosenLayout?.length > 0 ? (
        <div className='mt-4'>
          {chosenLayout.map((graphic) => (
            <Chip
              className='mr-1 ml-1'
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
      {chosenLayout?.length < 2 ? (
        <span className='text-sm font-bold mt-4'>
          Select at least two graphics
        </span>
      ) : (
        <></>
      )}
      <div className='mt-4'>
        <Button onClick={addGraphic}>Add graphic</Button>
      </div>
      {errorMsg ? <span className='mt-2 text-red-500'>{errorMsg}</span> : <></>}
    </>
  );
}

export default ChooseLayout;

import { useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  Button,
  Card,
  CardTitle,
  Container,
  ImageContainer,
  PromoBox,
  RulesContainer,
  Title,
} from '../styles/Promo.styled';
import Icon from './icon';

import bottlesImage from '../assets/bottels.png';
import receiptImage from '../assets/receipt.png';
import bottleImage from '../assets/2bottle.png';
import hnyImage from '../assets/hny.png';

const rules = [
  {
    title: 'Приобрети от 5 бутылок Samal Water',
    url: bottlesImage,
  },
  {
    title: 'Зарегистрируй чек на нашем сайте',
    url: receiptImage,
  },
  {
    title:
      'Сделать фото с водой Samal и выложить в инстаграм stories с отметкой нашей страницы @Samal_Water',
    url: bottleImage,
  },
  {
    title: 'Получай призы',
    url: hnyImage,
  },
];

export const Promo = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    Instagram_handle: '',
    file: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(typeof file);

    // Validate file type and size
    if (file && isValidFile(file)) {
      setFormData({
        ...formData,
        file: file,
      });
    } else {
      // Clear the file input if the file is invalid
      e.target.value = null;
    }
  };

  const isValidFile = (file) => {
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      alert('Только jpeg, png форматы');
      return false;
    }

    // Check file size (10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      alert('Файл больше 10 мб');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFormDataToBackend(formData);

    // setFormData({
    //   full_name: '',
    //   phone_number: '',
    //   Instagram_handle: '',
    //   file: null,
    // });
  };

  const sendFormDataToBackend = async (data) => {
    console.log(data);
    try {
      const response = await fetch('http://78.40.108.123:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Failed to send data:', response.statusText);
        // Handle failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error sending data:', error.message);
      // Handle other errors, e.g., network issues
    }
  };
  return (
    <Container id="rules">
      <Title>Как принять участие в Промо</Title>
      <RulesContainer>
        <ImageContainer>
          {rules.map((rule, index) => (
            <div key={index}>
              <img
                src={rule.url}
                alt={rule.title}
                style={{ borderRadius: '8px' }}
              />
              <p>{rule.title}</p>
            </div>
          ))}
        </ImageContainer>
        <Button as={'a'} href="#check">
          Зарегестрировать чек
        </Button>
      </RulesContainer>
      <Title id="check">
        Регистрируй свой чек и участвуй в еженедельном розыгрыше призов
      </Title>
      <p>
        Важно!!! Изображение чека должно быть четким. На нем должны
        присутствовать и хорошо читаться: название магазина, дата и время
        покупки, название, количество и сумма купленного акционного продукта
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="full_name"
            placeholder="ФИО"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar="_"
            type="tel"
            name="phone_number"
            placeholder="Номер телефона"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Instagram_handle"
            placeholder="instagram"
            value={formData.Instagram_handle}
            onChange={handleChange}
            required
            />
            </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <input type="checkbox" required />
            <span>
              Даю согласие на сбор и обработку{' '}
              <a href="https://docs.google.com/document/d/1eNZt9_9Ts6IsbifPgvMFyiHS-tpivJqu27sIoK0Al10/edit#heading=h.9v13mydxs1c0">
                персональных данных
              </a>
            </span>
          </div>
        <Card>
          <CardTitle>Загрузить фото чека</CardTitle>
          <PromoBox>
            <div>
              <input
                type="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
                required
              />
              <Button
                type="button"
                onClick={() => fileInputRef.current.click()}
              >
                <Icon /> Выберите фото
              </Button>
              <h3>
                Перетяни в эту область фото (скан) чека или нажми, чтобы выбрать
                файл с устройства
              </h3>
            </div>
            {formData.file && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                <Icon fill="#000"/> <p style={{color: 'black', fontSize:"14px"}}>{formData.file.name}</p>
              </div>
            )}
            <p>формат файла: jpeg, png до 10 мб.</p>
          </PromoBox>
        </Card>

        <Button type="submit" style={{ minWidth: '230px', maxWidth: '30%' }}>
          Зарегистрировать чек
        </Button>
      </form>
    </Container>
  );
};

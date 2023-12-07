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
    fullName: '',
    phoneNumber: '',
    instagram: '',
    selectedFile: null,
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

    // Validate file type and size
    if (file && isValidFile(file)) {
      setFormData({
        ...formData,
        selectedFile: file,
      });
    } else {
      // Clear the file input if the file is invalid
      e.target.value = null;
    }
  };

  const isValidFile = (file) => {
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPEG and PNG files are allowed.');
      return false;
    }

    // Check file size (10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      alert('File size must be less than 10MB.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFormDataToBackend(formData);

    setFormData({
      fullName: '',
      phoneNumber: '',
      instagram: '',
      selectedFile: null,
    });
  };

  const sendFormDataToBackend = (data) => {
    console.log('Sending data to backend:', data);
  };
  return (
    <Container id='rules'>
      <Title>Как принять участие в Промо</Title>
      <RulesContainer>
        <ImageContainer>
          {rules.map((rule, index) => (
            <div key={index}>
              <img src={rule.url} alt={rule.title} style={{borderRadius: '8px'}}/>
              <p>{rule.title}</p>
            </div>
          ))}
        </ImageContainer>
        <Button as={'a'} href='#check'>Зарегестрировать чек</Button>
      </RulesContainer>
      <Title id='check'>
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
            name="fullName"
            placeholder="ФИО"
            value={formData.fullName}
            onChange={handleChange}
          />
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar="_"
            type="tel"
            name="phoneNumber"
            placeholder="Номер телефона"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>
        <Card>
          <CardTitle>Загрузить фото чека</CardTitle>
          <PromoBox>
            <div>
              <input
                type="file"
                name="selectedFile"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
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

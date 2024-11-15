import React, { useEffect, useRef, useState } from "react";
import "./MainPage.css";

const MainPage = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Анимация срабатывает, когда элемент на 50% виден
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add("visible");
        } else {
          target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (section1Ref.current) {
      observer.observe(section1Ref.current.querySelector("h1")!);
    }

    if (section2Ref.current) {
      observer.observe(section2Ref.current.querySelector("button")!);
    }

    if (section3Ref.current) {
      section3Ref.current.querySelectorAll("img").forEach((img) => {
        observer.observe(img);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const sensitivity = 50; // Уменьшаем чувствительность прокрутки

      if (event.deltaY > sensitivity) {
        // Прокрутка вниз (следующий слайд)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Здесь 4 - количество секций
      } else if (event.deltaY < -sensitivity) {
        // Прокрутка вверх (предыдущий слайд)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Здесь 4 - количество секций
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        // Стрелка вниз (следующий слайд)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Здесь 4 - количество секций
      } else if (event.key === "ArrowUp") {
        // Стрелка вверх (предыдущий слайд)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Здесь 4 - количество секций
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Отменить событие по умолчанию
      event.preventDefault();
      // Chrome требует установки свойства returnValue
      event.returnValue = '';
      setCurrentIndex(0);
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';

    // Фиксируем позицию прокрутки в самом верху
    window.scrollTo(0, 0);

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }

      // Возвращаем прокрутку страницы
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.style.transition = 'transform 0.5s ease-in-out'; // Плавная анимация
      sliderElement.style.transform = `translateY(-${currentIndex * 100}vh)`;
    }
  }, [currentIndex]);

  return (
    <div className="mainpage" ref={sliderRef}>
      <div className="section section-1" ref={section1Ref}>
        <h1 className="slide-up">Akvelon RPG</h1>
        <p>Вау, это круто! Давай заходи!</p>
      </div>
      <div className="section section-2" ref={section2Ref}>
        <button className="slide-up">Начать игру</button>
        <p>Присоединяйся к нашему сообществу!</p>
      </div>
      <div className="section section-3" ref={section3Ref}>
        <img src="/images/1.jpg" alt="Placeholder 1" className="slide-up" />
        <img src="/images/2.jpg" alt="Placeholder 2" className="slide-up" />
        <img src="/images/3.jpg" alt="Placeholder 3" className="slide-up" />
      </div>
      
    </div>
  );
};

export default MainPage;
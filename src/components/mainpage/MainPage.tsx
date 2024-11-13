import React, { useEffect, useRef } from "react";
import "./MainPage.css";

const MainPage = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

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
          if (target.tagName === "H1") {
            target.classList.add("visible");
          } else if (target.tagName === "BUTTON") {
            target.classList.add("visible");
          } else if (target.tagName === "IMG") {
            target.classList.add("visible");
          }
        } else {
          // Удаляем класс visible, чтобы анимация могла сработать при следующем появлении
          if (target.tagName === "H1") {
            target.classList.remove("visible");
          } else if (target.tagName === "BUTTON") {
            target.classList.remove("visible");
          } else if (target.tagName === "IMG") {
            target.classList.remove("visible");
          }
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

  return (
    <div className="mainpage">
      <div className="section section-1" ref={section1Ref}>
        <h1>Akvelon RPG</h1>
        <p>Вау, это круто! Давай заходи!</p>
      </div>
      <div className="section section-2" ref={section2Ref}>
        <button>Начать игру</button>
        <p>Присоединяйся к нашему сообществу!</p>
      </div>
      <div className="section section-3" ref={section3Ref}>
        <img src="/images/1.jpg" alt="Placeholder 1" />
        <img src="/images/2.jpg" alt="Placeholder 2" />
        <img src="/images/3.jpg" alt="Placeholder 3" />
        {/* <img src="/images/4.jpg" alt="Placeholder 4" /> */}
      </div>
      <div className="section section-4 footer">
        <p>Контактная информация:</p>
        <p>Email: info@akvelonrpg.com</p>
        <p>Телефон: +123 456 789</p>
      </div>
    </div>
  );
};

export default MainPage;

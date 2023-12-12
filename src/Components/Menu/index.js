import Headline from "../ReusableComponents/Headline";
import "./index.sass";
const Menu = () => {
  const menu = [
    {
      name: "Espresso",
      priceSmall: 9.99,
      priceLarge: 12.99,
      id: 0,
    },
    {
      name: "Cappuccino",
      priceSmall: 12.99,
      priceLarge: 15.99,
      id: 1,
    },
    {
      name: "Latte",
      priceSmall: 14.99,
      priceLarge: 17.99,
      id: 2,
    },
    {
      name: "Herbata",
      priceSmall: 7.99,
      priceLarge: 10.99,
      id: 3,
    },
    {
      name: "Ciastko czekoladowe",
      priceSmall: 5.99,
      priceLarge: 7.99,
      id: 4,
    },
    {
      name: "Kawa mrożona",
      priceSmall: 16.99,
      priceLarge: 19.99,
      id: 5,
    },
    {
      name: "Bagietka z serem",
      priceSmall: 8.99,
      priceLarge: 11.99,
      id: 6,
    },
    {
      name: "Herbata z miodem",
      priceSmall: 6.49,
      priceLarge: 9.49,
      id: 7,
    },
    {
      name: "Mocha",
      priceSmall: 15.49,
      priceLarge: 18.49,
      id: 8,
    },
  ];

  return (
    <div className="menu">
      <Headline h="h2" text="Menu" />
      <div className="menu__content">
        <div className="menu__content--left"></div>
        <div className="menu__content--right" id="border">
          <Headline h="h3" text="Mała" />
          <Headline h="h3" text="Duża" />
        </div>
      </div>
      {menu.map((menu) => (
        <div className="menu__content" key={menu.id}>
          <div className="menu__content--left">
            <Headline h="h3" text={menu.name} />
          </div>
          <div className="menu__content--right">
            <Headline h="h3" text={menu.priceSmall} />
            <Headline h="h3" text={menu.priceLarge} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

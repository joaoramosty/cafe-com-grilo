import { ShoppingCart } from "phosphor-react";
import { useState , useEffect} from "react";
import { QuantityInput } from "../../../../components/QuantifyInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  // const [quantity, setQuantity] = useState(1); guardar o estado da quantidade de café que o usuário deseja comprar

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,

    };
    addCoffeeToCart(coffeeToAdd);

  }

  function handleRemoveToCart() {
    const coffeeToRemove = {
      ...coffee,
      quantity,
      image,
      formattedPrice,
    };

    deleteCoffeeToCart(coffeeToRemove);
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>

      <img src={`/coffees/${coffee.photo}`} />

      <Tags>

        {coffee.tags.map((tag) => (
          
          <span key={`${coffee.id}${tag}`}>{tag}</span>

        ))}
        
      </Tags>

      <Name>{coffee.name}</Name>

      <Description>{coffee.description}</Description>

      <CardFooter>
        
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        
        useEffect(() ={">"}{
          const interceptorId = addCoffeeToCart(coffeeToAdd);
        } 

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
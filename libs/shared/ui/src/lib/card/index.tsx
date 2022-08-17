export interface ICard {
  title: string;
}

export const Card = ({ title = 'Card Component' }: ICard) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;

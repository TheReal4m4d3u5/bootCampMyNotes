import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function Display() {
  return (
    <div>
      {/* TODO: Write logic that will render a Card component for the kitten */}
      {/* {feline.map((kitte, index) => (
        <Card key={index} kitten={kitten} />
      ))} */}
      <Card
        name={feline.name}
        description={feline.description}
        id={feline.id}
      />

      <Card {...feline} />


      {/* TODO: Pass `name`, `description`, and `id` to the Card component as props */}
      {/* {kittens.map((kitten) => (
        <Card key={kitten.id} id={kitten.id} name={kitten.name} description={kitten.description} />
      ))} */}
    </div>
  );
}

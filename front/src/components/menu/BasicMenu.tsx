import MenuButton from './MenuButton';

export default function BasicMenu() {

  return (
    <div>
      {MenuButton("/", "Home")}
      {MenuButton("/contents", "Contents")}
    </div>
  );
}
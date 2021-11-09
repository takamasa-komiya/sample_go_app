import BasicMenu from "../components/menu/BasicMenu";

function HomePage() {
  const menu = BasicMenu()

  const contents = (
    <div>
      <h1>HOME</h1>
      <img src="sisisin.svg" width="400"/>
    </div>
  )

  const jsx = (
    <div>
      {menu}
      {contents}
    </div>
  )

  return jsx
}

export default HomePage;
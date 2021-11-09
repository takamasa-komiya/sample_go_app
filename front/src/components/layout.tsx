import BasicMenu from "./menu/BasicMenu";

export default function Layout({ children }) {
  return (
    <>
      <BasicMenu />
      <main>{children}</main>
    </>
  )
}
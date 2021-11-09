import MultiLineForm from "../../components/common/MultiLineForm";

export default function HomePage() {

  return (
    <>
      <h1>CONTENTS</h1>
      <MultiLineForm
        label="SQL"
        defaultValue="SELECT * FROM data"
      />
    </>
  )
}

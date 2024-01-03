import Feature from "./components/feature";
import Header from "./components/header";
import Hero from "./components/hero";
import SecondFeature from "./components/second_feature";

export default function Page(){
  return (
    <div>
      <Header/>
      <Hero/>
      <Feature/>
      <SecondFeature/>
    </div>
  )
}
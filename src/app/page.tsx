import Feature from "./components/feature";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import PharmacyUi from "./components/pharmacy";
import SecondFeature from "./components/second_feature";

export default function Page(){
  return (
    <div>
 
      <Hero/>
      <Feature/>
      <SecondFeature/>
      <PharmacyUi/>
    </div>
  )
}
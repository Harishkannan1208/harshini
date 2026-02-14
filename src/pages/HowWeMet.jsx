import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";

export default function HowWeMet() {
  const nav = useNavigate();

  return (
    <section className="center glass">
      <h1>HOW WE MET ✨</h1>
      <p>Harshini... Actually namba meet panathey enoda frd oda amma vaala thaan. avanga tha ena unga veetla tution seythuvida soli enga amma kita sonaga
        unmiyavey apa without intreast konjam kuda intreast ilama tha unga veetuku varuven.inga area la friend elam vilayaduvanga but naa matum unga veeta padichitu irupen........ so that was the first moment we met each other
        Reallyyy enaku apa una paatha kovam tha varum naa veetuku ponum nu seekram padichi opichiduven but u r a dumpppppp ,,, makku saambranii(just kidding) nee romba late ha padichu athulaum thappa opichii epaa......like that apadiyeee pochuuuu konjam konjama nambalum frds aanom u r my first female friend also
        nambalum apadiyee 6th vanthutom.... intha kathaya inga stop pandren click next page anga namba journeyyy soldrennn (Lets meet in next page) .</p>
      <NextButton
        text="Next Page 💖"
        onClick={() => nav("/journey")}
      />
    </section>
  );
}

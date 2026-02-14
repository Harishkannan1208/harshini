import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";

export default function Journey() {
  const nav = useNavigate();

  return (
    <section className="center glass">
      <h1>Our Journey 💫</h1>
      <p>Vanakammm namba love Journey epdi start aachu paapoma............. 6th mudichitu naanum unga veetla iruthu tution ninuten Romba happy naaalam tution poga theyva ilanu vaanathukum boomikum kuthikiren.... Apdiyee 7th run thidilnu enga irunthu un mela feelings vanthuthu thrlaa ....takunu i have some feeling on you ...Feeling na normal haa ila very strong ....en Frds um pathathathuku ....ena machan harshini thana un aalu apdi kalaika aarambichitanga 
enakaaa takunu oru spark .... avanga sonathu en unmaiya iruka koodathunu ...... Aprm yosichu paathen naa en life la mukavaasi neram un kudatha irunthu iruken like paaru morning auto , orey school , again evening auto , againn unga veetla tution,, ithu pathathunuuu orey hindhi tutionnn veraaaaa ...mukavaasi neram iva kudatha irukom peysama en life fulla iva kudayee iruka koodathunu neynachen 
....Avlotha vera ethum yosikala neraa auto la unkita una library la meet pananum sonen athuku aprm you know many things happend bla bla blaaa....sudden haa naa konjam kuda execpt panala (lovers day Feb 14 2017) nee enaku dairy milk eduthu vanthu thara That's the date we officially become lovers (Athavathuu today) exactlly 9 years ago....that's how 
our love journey begins....Athuku aprm ena thrla correct haa love pana aarambichadhum full unkudaye iruntha naa only auto laa meet pandra maari first aachu then veedum maarita ...apa apa book vaangura maari vanthutu irunthen nee veedu shift panathu athuvum pochuu....enaku dengue nu 10th la paathi naal varala ...unmiya soldren harshuuu thudipen unkita peysa mudiyala paaka mudiyala 
the only person all know is hariii aluven avala paakanum peysanum nuu but mudiyathuu then konja naal elam seri aaitu vanthen again corona came...avlotha mudichu vitangaaa Really that time enatha kastam irunthalum i was mature Antha situation handle panitenn.....aprm 11th vanthom konja naal school vanthom again mooditan ....then thirupii 12th came apa thaa konjam nimathiya daily paapen nee mrg tution vitu varum pothu paapen 
apa apa class kita varuven ....Unmiyaa soldren dii avlo aasa irukum una oru vaati thotuda maatana ..oru vaati bike la looptu poida maatananuuu enguvannn....hari suvathy haa kootu povan enaku avlo aasaya irukum.....romba kasta paduven en iva vara maatranuu...then finally after exam ( our first meet(........)last page ku athan password correct ha potatha ula pogum)................... 
antha edathuku poituu namba apadiyee ooru suthitu very happy bridge la suthitu jollya irunthen aprmm thaan clg laam seynthu......konjam kuda naa ethir paaka nariya visiyam nadanthuthuuu....unkuda oru vaati bike la poga mudiyatha neynachen but neynacha pora maari situation amanjithuu......Thanks to god.....(KADAISIYA THA VANTHARI VINAYAK) maari taste of italy ponommm namba that's the point enga na una school padikum pothu oru vaatiyathu thodanum neynachano 
apdiye una thodatha edamey ilandra alavuku maathuchuu......i never dreamed also like that .....namba apdi la irunthu irukomm u known naa solitha theriyanum ilaa first from delma to last pondicheyy ipa ponathu.....solanum na nariya solalam but pothummm this how our journey is going lets wait 4years kandipa marriage namaku nadakum i will never leave you at any cost Love You Soo muchhhhhh (next page ) .</p>

      <NextButton
        text="Next Page 💖"
        onClick={() => nav("/letter")}
      />
    </section>
  );
}

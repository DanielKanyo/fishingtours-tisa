import React, { Component } from 'react';
import FacebookProvider, { Like } from 'react-facebook';
/** style */
import './Blog1.css';
/** components */
import Sidebar from '../Sidebar/Sidebar';

class Blog1 extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Blog">
        <div className="Content">
          <div className="title blogTitle">{this.props.objectProp.data.blogContent.title}</div>
          <div className="contentWrapper blogContentWrapper">
            <div className="blogContentTitle">
              A "Glavinjar" - vertikális mű csali - 1. rész
            </div>
            <div className="blogContent">
              Pár évvel ezelőtt vettem először kezembe a „Glavinjar”-t, majd az idén már kipróbálásra is sor került.
              Legendákat hallottam róla! Innen-onnan jöttek a hírek, hogy jó kezekben, igazán ütős fegyver, a harcsákkal szemben.
              Egy barátom közreműködésével - neki köszönhetően - jó vételáron, rögtön 43 darabot sikerült megvennem egy csomagban.
              Volt ott <b>„Vidra-Perca-Drasko-Tadic-Dule-Sebil”</b> féle „Glavinjar”, 20 grammtól - 40 grammig,
              különböző színben és alakban. Ezekkel már el lehetett kezdeni! Indulhatott a tesztelés! Irányt vettem a Tisza felé…
            </div>
            <div className="blogContent">
              <b>Vertikális horgászat</b> - csordogálva csónakból!
            </div>
            <div className="blogContent">
              Felmentem több kiló métert csónakommal a Tiszán, majd elkezdtem csorogni lefelé. Először egy 20 grammos
              „Vida- Glavinjar”-t raktam fel, erős, sima kapocsra, leeresztettem fenékre, majd visszahúztam egy
              fél métert és mozgatni kezdtem. Mekkorát húzzak rajta? Rögtön felmerült a kérdés.
              Ha lassan húztam, nem vibrált be, gyorsítottam rajta. Most jó volt! Ejtettem vissza, ment lefelé,
              mint egy darab kő, de nem éppen, mert volt egy kis oldalra mozgása is, esés közben. Ismételgettem,
              húzás - vibrálás, ejtés! Húzás- vibrálás, ejtés! 40-50 cm-t húztam a nyéllel felfelé,
              szépen éreztem a nyél végén, hogy dolgozik a csali. Még annak ellenére is, hogy erősebb,
              gerincesebb botot használtam. Teltek az órák. Semmi kapás nem volt. Kezdtem variálni a húzások nagyságát,
              sőt néha meg-megálltam a botom mozgatásával, hogy a csali megálljon egy pár másodpercre. Kitartó munkával emelgettem,
              csordogáltam lefelé.  Követtem a meder alakulásait, hol utána engedtem, hol tekertem rajta.
            </div>
            <div className="blogContent">
              - Talán változtatnom kellene a helyet! Másik szakaszt keresni! - gondoltam.
            </div>
            <div className="blogContent">
              Telt az idő, elhalt a kezem. Cseréltem, átvettem a bal kezembe. Jó lesz ez így is, morogtam magamban.
              Sőt még jobb, mert fújdogált egy kicsit a szél és a jobb kezemmel tudtam a csónakot az evező segítségével tartani,
              irányítani. Kerestem a mélyebb részeket, töréseket. A víz mélysége változott alattam, utánaengedtem,
              a felkapó kart felemeltem, majd lepörgött vagy 2-3 méter zsinórom. Visszacsaptam. Megint emelni akartam, de elakadt!
              A nyél végén rúgást éreztem.
            </div>
            <div className="blogContent">
              - Jó ég, ez nem elakadás, ez hal! Komolyan bele kellett kapaszkodnom a botba, az ellenfelem is rájött,
              hogy valami nem stimmel. Türelmes fárasztás után, kézzel beemelve egy olyan 20 kiló körüli harcsát
              húztam a csónakomba. Meglett az első „Glavinjar”-os harcsám, egy nagyobb leeresztésben.
              Bizony itt egy nagyobb törés volt és ott lapult a bajszos. Elkezdtem keresni a nagyobb töréseket és környéküket.
              A víz felszíne szépen elárulta, hogy hol vannak ezek a törések, nagyobb akadók.
            </div>
            <div className="blogContent">
              Általában a kapások nagyobb része ejtésben következtek be, de sokszor az álló mű csalit is elkapta.
              Múltak a hetek, hónapok szaporodtak a kapások, a fogások. Kirajzolódott előttem a mederfenék.
              Pontosan tudtam csorgás közben, amikor kinéztem a partra, hogy melyik fánál, vagy partszakasznál
              következik törés, vagy valami akadó. Nem kellett a radar! Sokszor kérdezték tőlem, hogy van e radarom.
            </div>
            <div className="blogContent">
              - Igen! - válaszoltam. - Itt van a fejemben!
            </div>
            <div className="blogContent"><b>Tapasztalatom:</b></div>
            <div className="blogContent">
              Azt hiszem, hogy ez a technika különösebben nem igényel nagy tudást. Inkább kitartást, összpontosítást,
              meg „jó időben, jó helyen” tartózkodást! Felszerelésben meg egy összehangolt szerelést.
              Egész nyáron alkalmaztam ezt a módszert, sőt késő őszig, egészen addig, míg a víz hőmérséklete
              le nem esett 7C fok alá. Éjjel is eredményes, azzal a változtatással, hogy sötétben már közelebb
              csorogtam a parthoz, sekélyebb vízben történtek a kapások. Nem egyszer 3 méteres vízben is.
              Persze jobban oda kell figyelni, hogy ne zörögjünk, és ne kopogjunk. A csend a társunk.
              Sokszor fogtam így süllőt is, de márnát meg bagoly keszegeket is - szabályosan! Ellentétben azzal a híreszteléssel,
              hogy a vertikális csalikkal sokszor kívülről is akadnak halak. Biztosan előfordul az is,
              megtörténhet! - de én még egyszer sem akasztottam így semmilyen halat sem!
            </div>
            <div className="blogContent">
              Csordogálva 20 és 30 grammos „Glavinjarok” - at használtam. Csónakból, bekötéskor viszont 40-60 grammosat is.
              Ez függ a víz mélységétől és sodrásától, de ez már egy következő írásomban lesz olvasható, ahol majd leírom,
              hogy hogyan használom a „Glavinjar”-t „Jig”-elve!
            </div>
            <div className="contentSocialFooter">
              <FacebookProvider appId="320234841816215">
                <Like href="http://fishingtours-tisa/blog1" action="recommend" layout="button_count" share />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Blog1;

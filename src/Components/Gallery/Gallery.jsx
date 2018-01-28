import React, { Component } from 'react';
import GalleryGrid from 'react-grid-gallery';
import FacebookProvider, { Like } from 'react-facebook';
import FontAwesome from 'react-fontawesome';
/** components */
import Sidebar from '../Sidebar/Sidebar';
/** style */
import './Gallery.css';

//catches
const IMAGES1 =
  [{
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/23795203_1759101104397629_7110252603429195312_n.jpg?oh=b3e6af8869789debcfd202d0b9d5793b&oe=5AE683D3",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/23795203_1759101104397629_7110252603429195312_n.jpg?oh=b3e6af8869789debcfd202d0b9d5793b&oe=5AE683D3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Hal1",
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13151621_1532584827049259_4894983886404299573_n.jpg?oh=c1f7ca288d035098af83e2bd20802179&oe=5AF2C3B3",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13151621_1532584827049259_4894983886404299573_n.jpg?oh=c1f7ca288d035098af83e2bd20802179&oe=5AF2C3B3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/21761576_1737601849880888_2976028068383160735_n.jpg?oh=11775ce701f2830d1e02d0443118439f&oe=5AFC44BC",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/21761576_1737601849880888_2976028068383160735_n.jpg?oh=11775ce701f2830d1e02d0443118439f&oe=5AFC44BC",
    thumbnailWidth: 192,
    thumbnailHeight: 256,
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22310177_1743561909284882_1940833018192050604_n.jpg?oh=5046eefe8b2bdbb4746a76bcee875dd1&oe=5AF2A7B2",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22310177_1743561909284882_1940833018192050604_n.jpg?oh=5046eefe8b2bdbb4746a76bcee875dd1&oe=5AF2A7B2",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22788860_1749404932033913_1991210277718169247_n.jpg?oh=6092dc063fecc20a37db10ae8e64c063&oe=5AF8B33B",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22788860_1749404932033913_1991210277718169247_n.jpg?oh=6092dc063fecc20a37db10ae8e64c063&oe=5AF8B33B",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13177411_1532584750382600_6780149359419435070_n.jpg?oh=ff2dea7e3350fa6a3422e907292d4928&oe=5AF2EC84",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13177411_1532584750382600_6780149359419435070_n.jpg?oh=ff2dea7e3350fa6a3422e907292d4928&oe=5AF2EC84",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/26814954_1780137548960651_5528240219602367330_n.jpg?oh=4d8cd248e3ab5282bed5778c5e0de1d7&oe=5B2410DD",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/26814954_1780137548960651_5528240219602367330_n.jpg?oh=4d8cd248e3ab5282bed5778c5e0de1d7&oe=5B2410DD",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/18077411_1677611839213223_1303916959698852219_o.jpg?oh=03e61cc7e280b576c3243720a6b3ffac&oe=5AE5B5BA",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/18077411_1677611839213223_1303916959698852219_o.jpg?oh=03e61cc7e280b576c3243720a6b3ffac&oe=5AE5B5BA",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/21762799_1737601843214222_6645350189902015600_o.jpg?oh=d68c00ddc2e0073686e3342ec1b24b9c&oe=5AE814E3",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/21762799_1737601843214222_6645350189902015600_o.jpg?oh=d68c00ddc2e0073686e3342ec1b24b9c&oe=5AE814E3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/12342697_1487228951584847_5799443346958655844_n.jpg?oh=0c850edb3a6a8d3d4e2094f9ad2be415&oe=5B232E8F",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/12342697_1487228951584847_5799443346958655844_n.jpg?oh=0c850edb3a6a8d3d4e2094f9ad2be415&oe=5B232E8F",
    thumbnailWidth: 192,
    thumbnailHeight: 192,
  }]
//naturephotos
const IMAGES2 =
  [{
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24131399_1760195460954860_1326540979652795284_n.jpg?oh=32379e0174abbd2975e35d4bebd1114e&oe=5B2236A4",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24131399_1760195460954860_1326540979652795284_n.jpg?oh=32379e0174abbd2975e35d4bebd1114e&oe=5B2236A4",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24900191_1763214813986258_1231001527733647292_n.jpg?oh=aa68f38e84c155f26455cbf1d159c844&oe=5AF2B651",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24900191_1763214813986258_1231001527733647292_n.jpg?oh=aa68f38e84c155f26455cbf1d159c844&oe=5AF2B651",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/18700795_1689867777987629_6518748544889446018_o.jpg?oh=4fe54c379d2d1958ead614544b9f788d&oe=5AE2874E",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/18700795_1689867777987629_6518748544889446018_o.jpg?oh=4fe54c379d2d1958ead614544b9f788d&oe=5AE2874E",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  }]
//guests
const IMAGES3 =
  [{
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/23467377_1755156584792081_6048964554595184853_o.jpg?oh=417cbedd61246403a147c4eea4dfcc62&oe=5AE1FBFD",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/23467377_1755156584792081_6048964554595184853_o.jpg?oh=417cbedd61246403a147c4eea4dfcc62&oe=5AE1FBFD",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21366944_1732084243765982_1020901936057238393_o.jpg?oh=c7a519f041bf96907ee9b38c78672eb6&oe=5AF3F886",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21366944_1732084243765982_1020901936057238393_o.jpg?oh=c7a519f041bf96907ee9b38c78672eb6&oe=5AF3F886",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21427447_1732589203715486_7704748176345071656_o.jpg?oh=0c3ff56c72da99c5351990888b38100c&oe=5AF031C9",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21427447_1732589203715486_7704748176345071656_o.jpg?oh=0c3ff56c72da99c5351990888b38100c&oe=5AF031C9",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21272833_1730023660638707_1969689800499857993_o.jpg?oh=4f8674992d5faca2760c1aa287b43bfa&oe=5AE52EFA",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21272833_1730023660638707_1969689800499857993_o.jpg?oh=4f8674992d5faca2760c1aa287b43bfa&oe=5AE52EFA",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21167420_1728700014104405_3958092863123346577_o.jpg?oh=495c17372982b81273f2d76e985b020d&oe=5AD81819",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/21167420_1728700014104405_3958092863123346577_o.jpg?oh=495c17372982b81273f2d76e985b020d&oe=5AD81819",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/18238850_1682221732085567_4107968537557912782_o.jpg?oh=c929a7b84747bf9e6b9e1326106dac3b&oe=5ADD31F2",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/18238850_1682221732085567_4107968537557912782_o.jpg?oh=c929a7b84747bf9e6b9e1326106dac3b&oe=5ADD31F2",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t1.0-9/14963226_1595154564125618_221186378495661144_n.jpg?oh=878d1f242bfe863e572a63b8afcc6bd0&oe=5AE36A8A",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t1.0-9/14963226_1595154564125618_221186378495661144_n.jpg?oh=878d1f242bfe863e572a63b8afcc6bd0&oe=5AE36A8A",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14054495_1567125260261882_5454407998335392474_o.jpg?oh=ce8764f49d3914fd9b320d00bfa8b215&oe=5B247697",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14054495_1567125260261882_5454407998335392474_o.jpg?oh=ce8764f49d3914fd9b320d00bfa8b215&oe=5B247697",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/13131728_1531446047163137_3414470534560913884_o.jpg?oh=e9d80ac82afd67ba962d203b63671514&oe=5ADD5BF3",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/13131728_1531446047163137_3414470534560913884_o.jpg?oh=e9d80ac82afd67ba962d203b63671514&oe=5ADD5BF3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/21366884_1732589290382144_3886010228944250846_o.jpg?oh=f8876c7f6853b0c01aace63c080a9b09&oe=5B25615C",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/21366884_1732589290382144_3886010228944250846_o.jpg?oh=f8876c7f6853b0c01aace63c080a9b09&oe=5B25615C",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/12821383_1513557888951953_7057113118438841409_n.jpg?oh=2e8e397af1e934574230e49947c41a4d&oe=5AE2B0EB",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/12821383_1513557888951953_7057113118438841409_n.jpg?oh=2e8e397af1e934574230e49947c41a4d&oe=5AE2B0EB",
    thumbnailWidth: 192,
    thumbnailHeight: 256,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/15016449_1595154560792285_2445550946649748127_o.jpg?oh=01e0a78e03907c3cc91ed483e66f825c&oe=5AF20125",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/15016449_1595154560792285_2445550946649748127_o.jpg?oh=01e0a78e03907c3cc91ed483e66f825c&oe=5AF20125",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/21122551_1728699827437757_2301396642475982376_o.jpg?oh=8c375987ff071f324c4795989035c097&oe=5AF0096F",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/21122551_1728699827437757_2301396642475982376_o.jpg?oh=8c375987ff071f324c4795989035c097&oe=5AF0096F",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  }]
//competition
const IMAGES4 =
  [{
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/24297307_1762112550763151_5902389751600519144_o.jpg?oh=a5e3f9f06607980bf610c260791f6f3f&oe=5AE56AD8",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/24297307_1762112550763151_5902389751600519144_o.jpg?oh=a5e3f9f06607980bf610c260791f6f3f&oe=5AE56AD8",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t1.0-9/17498396_1661855357455538_6166464686615059462_n.jpg?oh=5c9974be58ed3ac97a826b642161d4db&oe=5B1F269E",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t1.0-9/17498396_1661855357455538_6166464686615059462_n.jpg?oh=5c9974be58ed3ac97a826b642161d4db&oe=5B1F269E",
    thumbnailWidth: 203,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14543666_1582634038711004_5323552142321359555_o.jpg?oh=98566db8cef6e15882bac0ba1f7f65fb&oe=5B24BBFF",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14543666_1582634038711004_5323552142321359555_o.jpg?oh=98566db8cef6e15882bac0ba1f7f65fb&oe=5B24BBFF",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/14444768_1577220765918998_8787892025362092302_o.jpg?oh=e526f98066d2388347f2aeb83bfe5dc4&oe=5AEECFD1",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/14444768_1577220765918998_8787892025362092302_o.jpg?oh=e526f98066d2388347f2aeb83bfe5dc4&oe=5AEECFD1",
    thumbnailWidth: 339,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/12244332_1485161345124941_5468212894340371590_o.jpg?oh=b24ba122b43b04bf085e8e4381b0b9e2&oe=5B1D5BFD",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/12244332_1485161345124941_5468212894340371590_o.jpg?oh=b24ba122b43b04bf085e8e4381b0b9e2&oe=5B1D5BFD",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/15440315_1608704189437322_3328653996736715039_o.jpg?oh=df86d1b4dbfa7e0098c638279f36e66a&oe=5ADAED80",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/15440315_1608704189437322_3328653996736715039_o.jpg?oh=df86d1b4dbfa7e0098c638279f36e66a&oe=5ADAED80",
    thumbnailWidth: 339,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/17952504_1673453299629077_8690797131152239265_n.jpg?oh=5d14e8d1ed259f11ee5f30d84d8dc6a4&oe=5AE9978E",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/17952504_1673453299629077_8690797131152239265_n.jpg?oh=5d14e8d1ed259f11ee5f30d84d8dc6a4&oe=5AE9978E",
    thumbnailWidth: 144,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/24273857_1379536165508129_6440915319699701354_o.jpg?oh=ab4db92b3ddcc7e81c991d646efaed23&oe=5AE81491",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/24273857_1379536165508129_6440915319699701354_o.jpg?oh=ab4db92b3ddcc7e81c991d646efaed23&oe=5AE81491",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/11051938_659385834189836_3482322036698997321_o.jpg?oh=55e53477602cfbccdae5c63252027304&oe=5AEE19E7",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/11051938_659385834189836_3482322036698997321_o.jpg?oh=55e53477602cfbccdae5c63252027304&oe=5AEE19E7",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/13710702_1554878024819939_6783832824398748587_o.jpg?oh=3c4831cd94d164baf8a2fc024dfe64fe&oe=5ADA0C85",
    thumbnail: "https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/13710702_1554878024819939_6783832824398748587_o.jpg?oh=3c4831cd94d164baf8a2fc024dfe64fe&oe=5ADA0C85",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  }]

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    document.getElementById('example-0')
    return (
      <div className="Gallery">
        <div className="Content">
          <div className="title galleryTitle">
            <FontAwesome name="picture-o" className="titleIcon" />{this.props.objectProp.data.galleryContent.title}
          </div>
          <div className="contentWrapper galleryContentWrapper">
            <div className="albumTitle myCatches">
              {this.props.objectProp.data.galleryContent.album[0]}
            </div>
            <GalleryGrid id="myCatchesGallery" images={IMAGES1} backdropClosesModal={true} enableKeyboardInput={true} />

            <div className="albumTitle naturePhotos">
              {this.props.objectProp.data.galleryContent.album[1]}
            </div>
            <GalleryGrid id="naturePhotosGallery" images={IMAGES2} backdropClosesModal={true} enableKeyboardInput={true} />

            <div className="albumTitle guestsPhotos">
              {this.props.objectProp.data.galleryContent.album[2]}
            </div>
            <GalleryGrid id="guestsPhotosGallery" images={IMAGES3} backdropClosesModal={true} enableKeyboardInput={true} />

            <div className="albumTitle competitionPhotos">
              {this.props.objectProp.data.galleryContent.album[3]}
            </div>
            <GalleryGrid id="competitionPhotosGallery" images={IMAGES4} backdropClosesModal={true} enableKeyboardInput={true} />

            <div className="gallerySocialWrapper">
              <div className="contentSocialFooter">
                <FacebookProvider appId="320234841816215">
                  <Like href="https://www.fishingtours-tisa.com/gallery" action="recommend" layout="button_count" share />
                </FacebookProvider>
              </div>
            </div>
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Gallery;

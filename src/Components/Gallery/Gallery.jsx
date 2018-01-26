import React, { Component } from 'react';
import GalleryGrid from 'react-grid-gallery';
import FacebookProvider, { Like } from 'react-facebook';
import FontAwesome from 'react-fontawesome';
/** components */
import Sidebar from '../Sidebar/Sidebar';
/** style */
import './Gallery.css';

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
  }]

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
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/14494814_1582166432091098_5148920780296772228_n.jpg?oh=0d971a5c6d2c5f653a2b07345f3c50a9&oe=5AE9DF39",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/14494814_1582166432091098_5148920780296772228_n.jpg?oh=0d971a5c6d2c5f653a2b07345f3c50a9&oe=5AE9DF39",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  }]

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
  }
  ,
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14054495_1567125260261882_5454407998335392474_o.jpg?oh=ce8764f49d3914fd9b320d00bfa8b215&oe=5B247697",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14054495_1567125260261882_5454407998335392474_o.jpg?oh=ce8764f49d3914fd9b320d00bfa8b215&oe=5B247697",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  }
  ,
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/13131728_1531446047163137_3414470534560913884_o.jpg?oh=e9d80ac82afd67ba962d203b63671514&oe=5ADD5BF3",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/13131728_1531446047163137_3414470534560913884_o.jpg?oh=e9d80ac82afd67ba962d203b63671514&oe=5ADD5BF3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  }]

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
    thumbnailWidth: 256,
    thumbnailHeight: 192,
  },
  {
    src: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14543666_1582634038711004_5323552142321359555_o.jpg?oh=98566db8cef6e15882bac0ba1f7f65fb&oe=5B24BBFF",
    thumbnail: "https://scontent.fbud1-1.fna.fbcdn.net/v/t31.0-8/14543666_1582634038711004_5323552142321359555_o.jpg?oh=98566db8cef6e15882bac0ba1f7f65fb&oe=5B24BBFF",
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
                  <Like href="http://fishingtours-tisa/gallery" action="recommend" layout="button_count" share />
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

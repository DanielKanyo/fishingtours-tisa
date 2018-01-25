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
    enableImageSelection: false
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13151621_1532584827049259_4894983886404299573_n.jpg?oh=c1f7ca288d035098af83e2bd20802179&oe=5AF2C3B3",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13151621_1532584827049259_4894983886404299573_n.jpg?oh=c1f7ca288d035098af83e2bd20802179&oe=5AF2C3B3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Csali",
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/21761576_1737601849880888_2976028068383160735_n.jpg?oh=11775ce701f2830d1e02d0443118439f&oe=5AFC44BC",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/21761576_1737601849880888_2976028068383160735_n.jpg?oh=11775ce701f2830d1e02d0443118439f&oe=5AFC44BC",
    thumbnailWidth: 192,
    thumbnailHeight: 256,
    caption: "Csali",
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22310177_1743561909284882_1940833018192050604_n.jpg?oh=5046eefe8b2bdbb4746a76bcee875dd1&oe=5AF2A7B2",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22310177_1743561909284882_1940833018192050604_n.jpg?oh=5046eefe8b2bdbb4746a76bcee875dd1&oe=5AF2A7B2",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Csali",
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22788860_1749404932033913_1991210277718169247_n.jpg?oh=6092dc063fecc20a37db10ae8e64c063&oe=5AF8B33B",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22788860_1749404932033913_1991210277718169247_n.jpg?oh=6092dc063fecc20a37db10ae8e64c063&oe=5AF8B33B",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Csali",
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13177411_1532584750382600_6780149359419435070_n.jpg?oh=ff2dea7e3350fa6a3422e907292d4928&oe=5AF2EC84",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13177411_1532584750382600_6780149359419435070_n.jpg?oh=ff2dea7e3350fa6a3422e907292d4928&oe=5AF2EC84",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    customOverlay: "Fogás",
    caption: "Csali",
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/26814954_1780137548960651_5528240219602367330_n.jpg?oh=4d8cd248e3ab5282bed5778c5e0de1d7&oe=5B2410DD",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/26814954_1780137548960651_5528240219602367330_n.jpg?oh=4d8cd248e3ab5282bed5778c5e0de1d7&oe=5B2410DD",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    customOverlay: "Fogás",
    caption: "Csali",
  }]

  const IMAGES2 =
  [{
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24131399_1760195460954860_1326540979652795284_n.jpg?oh=32379e0174abbd2975e35d4bebd1114e&oe=5B2236A4",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24131399_1760195460954860_1326540979652795284_n.jpg?oh=32379e0174abbd2975e35d4bebd1114e&oe=5B2236A4",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Hal1",
    enableImageSelection: false
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24900191_1763214813986258_1231001527733647292_n.jpg?oh=aa68f38e84c155f26455cbf1d159c844&oe=5AF2B651",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/24900191_1763214813986258_1231001527733647292_n.jpg?oh=aa68f38e84c155f26455cbf1d159c844&oe=5AF2B651",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Csali",
  },
  {
    src: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/14494814_1582166432091098_5148920780296772228_n.jpg?oh=0d971a5c6d2c5f653a2b07345f3c50a9&oe=5AE9DF39",
    thumbnail: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/14494814_1582166432091098_5148920780296772228_n.jpg?oh=0d971a5c6d2c5f653a2b07345f3c50a9&oe=5AE9DF39",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Csali",
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

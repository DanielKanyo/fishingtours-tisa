import React, { Component } from 'react';
import GalleryGrid from 'react-grid-gallery';
/** components */
import Sidebar from '../Sidebar/Sidebar';
/** style */
import './Gallery.css';

const IMAGES =
  [{
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/23795203_1759101104397629_7110252603429195312_n.jpg?oh=b3e6af8869789debcfd202d0b9d5793b&oe=5AE683D3",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/23795203_1759101104397629_7110252603429195312_n.jpg?oh=b3e6af8869789debcfd202d0b9d5793b&oe=5AE683D3",
    thumbnailWidth: 256,
    thumbnailHeight: 192,
    caption: "Hal1",
    enableImageSelection: false
  },
  {
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/23905505_1758760231098383_3190445347337382373_n.jpg?oh=6a7f15b164ecbff6e4a2f0357ad4c1fe&oe=5AF58C3B",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/23905505_1758760231098383_3190445347337382373_n.jpg?oh=6a7f15b164ecbff6e4a2f0357ad4c1fe&oe=5AF58C3B",
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
    src: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22450120_1744931579147915_5468299739751487217_n.jpg?oh=8b7646372ad90ff5f84579390ea47dbc&oe=5AF9A26A",
    thumbnail: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/22450120_1744931579147915_5468299739751487217_n.jpg?oh=8b7646372ad90ff5f84579390ea47dbc&oe=5AF9A26A",
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
          <div className="title galleryTitle">{this.props.objectProp.data.galleryContent.title}</div>
          <div className="contentWrapper galleryContentWrapper">
            <GalleryGrid images={IMAGES} backdropClosesModal={true} />
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Gallery;

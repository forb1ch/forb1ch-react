import React, {Component} from "react";
import proj from '../../images/portfolio/Projektmagazin.png';
import WehaveAnyspace from '../../images/portfolio/WehaveAnyspace.png';
import nikon from '../../images/portfolio/nikon.png';
import dancoly from '../../images/portfolio/nikon.png';
import uaz from '../../images/portfolio/uaz.png';
import './portfolio-block.scss';
import PortfolioPopup from "./PortfolioPopup";

const portfolioItem = [
    {
        name: 'Projektmagazin',
        imagePath: proj,
        projectPath: 'https://www.projektmagazin.de/',
        popupTitle: 'Projektmagazin',
        popupContent: 'Projektmagazin content',
        imageFullSize:proj,
        id: 1,
    },
    {
        name: 'WehaveAnyspace',
        imagePath: WehaveAnyspace,
        projectPath: 'https://www.wehaveanyspace.com/',
        popupTitle: 'WehaveAnyspace',
        popupContent: 'WehaveAnyspace content',
        imageFullSize: WehaveAnyspace,
        id: 2,
    },
    {
        name: 'I AM NIKON',
        imagePath: nikon,
        projectPath: 'https://iamnikon.ru/',
        popupTitle: 'I AM NIKON',
        popupContent: 'I AM NIKON content',
        imageFullSize: nikon,
        id: 3,
    },
    {
        name: 'Dancoly',
        imagePath: dancoly,
        projectPath: 'http://dancoly.pl/',
        popupTitle: 'Dancoly',
        popupContent: 'Dancoly content',
        imageFullSize: dancoly,
        id: 4,
    },
    {
        name: 'UAZ contest',
        imagePath: uaz,
        projectPath: 'http://www.uaz.ru/75',
        popupTitle: 'UAZ contest',
        popupContent: 'UAZ contest content',
        imageFullSize: uaz,
        id: 5,
    },
];


class PortfolioBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
    }

    togglePopup = (id) => {
        let body = document.querySelector('body');

        this.setState(()=>({
            visibility: id}));

        body.classList.toggle('popup-opened');
    };

    render () {
        return(
            <div className='portfolio-section'>
                <h1 className="portfolio-main-title">Portfolio</h1>

                <div className="portfolio" id="portfolio">
                    {portfolioItem.map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <p className="portfolio-item-title">{item.name}</p>
                            <div className="portfolio-item-image">
                                <img alt="thumbnail" src={item.imagePath} className="images"/>
                            </div>
                            <button type="button" onClick={() => this.togglePopup(item.id)}>
                                View Project
                            </button>

                            <PortfolioPopup
                                title={item.popupTitle}
                                content={item.popupContent}
                                image={item.imageFullSize}
                                projectPath={item.projectPath}
                                isOpen={this.state.visibility === item.id}
                                classes={(this.state.visibility === item.id) ? 'visible portfolio-popup' : 'portfolio-popup'}
                                toggleFunc={this.togglePopup}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PortfolioBlock;
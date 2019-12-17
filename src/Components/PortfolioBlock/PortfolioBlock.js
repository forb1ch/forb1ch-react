import React, {Component} from "react";
import './portfolio-block.scss';
import PortfolioPopup from "./PortfolioPopup";

const portfolioItem = [
    {
        name: 'Projektmagazin',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2019-06/ProjektMagazin.png?itok=TD-V56fS',
        projectPath: 'https://www.projektmagazin.de/',
        popupTitle: 'Projektmagazin',
        popupContent: 'Projektmagazin content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2019-06/ProjektMagazin.png',
        id: 1,
    },
    {
        name: 'WehaveAnyspace',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/whehaveany.png?itok=IVEckbmk',
        projectPath: 'https://www.wehaveanyspace.com/',
        popupTitle: 'WehaveAnyspace',
        popupContent: 'WehaveAnyspace content',
        imageFullSize: 'https://anyforsoft.com/themes/custom/anyforsoft/images/showcases/monitor.png',
        id: 2,
    },
    {
        name: 'I AM NIKON',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/nikon_0.png?itok=hyOF16wj',
        projectPath: 'https://iamnikon.ru/',
        popupTitle: 'I AM NIKON',
        popupContent: 'I AM NIKON content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2016-09/nikon_0.png',
        id: 3,
    },
    {
        name: 'Dancoly',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/dancoly_0.png?itok=oynphIQ1',
        projectPath: 'http://dancoly.pl/',
        popupTitle: 'Dancoly',
        popupContent: 'Dancoly content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2016-09/dancoly_0.png',
        id: 4,
    },
    {
        name: 'UAZ contest',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/uaz.png?itok=wnhfsU9T',
        projectPath: 'http://www.uaz.ru/75',
        popupTitle: 'UAZ contest',
        popupContent: 'UAZ contest content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2016-09/uaz.png',
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
            <section>
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
            </section>
        );
    }
}

export default PortfolioBlock;
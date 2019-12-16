import React, {Component} from "react";
import './portfolio-block.scss';
import PortfolioPopup from "./PortfolioPopup";

const portfolioItem = [
    {
        name: 'Projektmagazin',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2019-06/ProjektMagazin.png?itok=TD-V56fS',
        projectPath: 'https://anyforsoft.com/portfolio/projektmagazin',
        popupTitle: 'Projektmagazin',
        popupContent: 'Projektmagazin content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2019-06/ProjektMagazin.png',
        open: 'false',
    },
    {
        name: 'WehaveAnyspace',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/whehaveany.png?itok=IVEckbmk',
        projectPath: 'https://anyforsoft.com/wehaveanyspace',
        popupTitle: 'WehaveAnyspace',
        popupContent: 'WehaveAnyspace content',
        imageFullSize: 'https://anyforsoft.com/themes/custom/anyforsoft/images/showcases/monitor.png',
        open: 'false',
    },
    {
        name: 'I AM NIKON',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/nikon_0.png?itok=hyOF16wj',
        projectPath: 'https://anyforsoft.com/portfolio/i-am-nikon',
        popupTitle: 'I AM NIKON',
        popupContent: 'I AM NIKON content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2016-09/nikon_0.png',
        open: 'false',
    },
    {
        name: 'Dancoly',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/dancoly_0.png?itok=oynphIQ1',
        projectPath: 'https://anyforsoft.com/portfolio/dancoly',
        popupTitle: 'Dancoly',
        popupContent: 'Dancoly content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2016-09/dancoly_0.png',
        open: 'false',
    },
    {
        name: 'UAZ contest',
        imagePath: 'https://anyforsoft.com/sites/default/files/styles/blog_wide/public/portfolio/2016-09/uaz.png?itok=wnhfsU9T',
        projectPath: 'https://anyforsoft.com/portfolio/uaz-contest',
        popupTitle: 'UAZ contest',
        popupContent: 'UAZ contest content',
        imageFullSize: 'https://anyforsoft.com/sites/default/files/portfolio/2016-09/uaz.png',
        open: 'false',
    },
];


class PortfolioBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        }
    }

    toggleMenu = () => {
        this.setState((prevState)=>({active: !prevState.active}))
    }

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
                            <button type="button" onClick={this.toggleMenu}>
                                View Project
                            </button>
                            <PortfolioPopup
                                title={item.popupTitle}
                                content={item.popupContent}
                                image={item.imageFullSize}
                                index={index}
                                isOpen={this.state.active}
                                toggleFunc={this.toggleMenu}
                            />
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default PortfolioBlock;
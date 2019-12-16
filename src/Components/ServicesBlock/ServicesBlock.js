import React from "react";
import './services-stack-block.scss';
import './services-info-block.scss'

const ServicesBlock = () => {
    return (
        <section>
            <div className="services-info-wrapper">
                <h2 className="h2 title-left">Our Services</h2>
                <p>AnyforSoft works in close partnership with clients on every stage of a project. We are ready to
                    provide the following list of services.</p>

                <ul>
                    <li><strong>Drupal 7 &amp; 8 Custom Development</strong>: our team has 5 years of experience working
                        with Drupal solutions. The group of professionals will help you with goals and challenges.
                    </li>
                    <li><strong>Drupal Consulting</strong>: we have an extensive experience with Drupal and ready to
                        advise you on developing your strategy.
                    </li>
                    <li><strong>Drupal Site building</strong>: in addition to a custom development we could assist
                        with&nbsp;a default Drupal website creation.
                    </li>
                    <li><strong>Drupal Theming</strong>: either you need a prepared theme or to create one from scratch
                        our developers here to assist you.
                    </li>
                    <li><strong>Drupal Migration &amp; Upgrade</strong>: during past years we've been upgrading our
                        client's Drupal projects to up-to-date versions and migrating them from other CMS like WordPress
                        to Drupal.
                    </li>
                    <li><strong>Drupal Support &amp; Maintenance</strong>: after a project was completed we are eager to
                        provide further support and maintenance.&nbsp;</li>
                </ul>
            </div>

            <div className="services-stack-wrapper">
                <div className="services-stack">
                    <article className="small">
                        <h5 className="h5">Drupal 8</h5>
                        <ul>
                            <li>Composer</li>
                            <li>Drupal Console</li>
                            <li>Drush</li>
                            <li>Phing</li>
                            <li>Code standards and sniffers</li>
                            <li>Configuration manager</li>
                            <li>Migrations</li>
                            <li>Display Suite</li>
                            <li>Paragraphs</li>
                            <li>Drupal.org contributions</li>
                            <li>Pattern Lab</li>
                            <li>Search API (Solr, Elasticsearch)</li>
                            <li>Layout builder</li>
                            <li>Acquia Cloud</li>
                        </ul>
                    </article>
                    <article className="small">
                        <h5 className="h5">Drupal 7</h5>
                        <ul>
                            <li>Drush</li>
                            <li>Code standards and sniffers</li>
                            <li>Features</li>
                            <li>Drupal Commerce</li>
                            <li>i18n</li>
                            <li>Panels</li>
                            <li>Display Suite</li>
                            <li>Paragraphs</li>
                            <li>Context</li>
                        </ul>
                    </article>
                </div>
                <div className="services-stack">
                    <article className="small">
                        <h5 className="h5">Workflow</h5>
                        <ul>
                            <li>Git
                                <ul>
                                    <li>Forks</li>
                                    <li>Branch per task</li>
                                    <li>Merge requests</li>
                                    <li>Code review</li>
                                </ul></li>
                            <li>CI
                                <ul>
                                    <li>Code standards &amp; sniffers</li>
                                    <li>Builds</li>
                                    <li>Tests (if necessary)</li>
                                    <li>Automatic deploy</li>
                                </ul></li>
                            <li>Vagrant</li>
                            <li>Docker</li>
                            <li>Redmine or Jira</li>
                            <li>JetBrains PhpStorm and WebStorm</li>
                            <li>Local-&gt;Dev-&gt;Stage-&gt;Live environments</li>
                            <li>QA
                                <ul>
                                    <li>Functional testing</li>
                                    <li>Compatibility testing (wide range of browsers and devices)</li>
                                    <li>Security review</li>
                                    <li>Performance review</li>
                                </ul></li>
                        </ul>
                    </article>
                    <article className="small">
                        <h5 className="h5">LAMP Stack</h5>
                        <ul>
                            <li>Linux</li>
                            <li>APACHE / Nginx</li>
                            <li>PHP 5.6 / PHP 7</li>
                            <li>MySQL / MariaDB</li>
                            <li>AJAX</li>
                            <li>Memcache</li>
                            <li>Varnish</li>
                        </ul>
                    </article>
                </div>
                <div className="services-stack">
                    <article className="small">
                        <h5 className="h5">Front-end</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>Gulp</li>
                            <li>Bower</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>AngularJS</li>
                            <li>TypeScript</li>
                            <li>BrowserStack</li>
                            <li>Pixel-Perfect</li>
                        </ul>
                    </article>
                    <article className="small">
                        <h5 className="h5">Alternative technologies</h5>
                        <ul>
                            <li>Symfony Framework</li>
                            <li>Laravel Framework</li>
                            <li>React JS library</li>
                            <li>Vue.js Framework</li>
                            <li>Angular Framework</li>
                            <li>Hybrid Mobile Apps
                                <ul>
                                    <li>React Native</li>
                                    <li>Ionic Framework</li>
                                </ul></li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ServicesBlock;
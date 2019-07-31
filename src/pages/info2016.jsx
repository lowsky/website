import React from "react"

export default () => (
    <>
        {
        <div className="container logo-container">
            <img src="/img/jscc-logo-without-text.svg" width="300" className="logo-img"/>
        </div>

        }
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <h1 className="header center blue-text">JSCraftCamp 2016</h1>
                    <h3 className="header center light">Thanks to all Participants for a great Barcamp in 2016!</h3>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <h4 className="header center blue-text">Place & Date</h4>
                    <h5 className="header center light">Munich, October 8+9 2016</h5>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12">
                    <h4 className="header center blue-text">Moderation</h4>
                    <h5 className="header center light">Pierluigi Pugliese <a
                        href="https://www.linkedin.com/in/ppugliese"
                        target="_blank"><i className="fa fa-linkedin-square"
    aria-hidden="true"/></a></h5>
                </div>
            </div>

            <a name="sponsors"/>
            <div className="row">
                <div className="col s12 m12">
                    <h4 className="header center blue-text">Sponsors</h4>
                </div>

                <div className="col s12 m4 offset-m2">
                    <br/>
                    <a href="http://www.tngtech.com/"><img className="responsive-img" src="img/tng_logo.png"
                                                           alt="TNG Technology Consulting GmbH "/></a>
                </div>
                <div className="col s12 m4">
                    <br/>
                    <a href="https://www.atoss.com/"><img className="responsive-img" src="img/atoss_logo.png"
                                                          alt="ATOSS Software AG"/></a>
                    <br/> <br/>
                </div>

                <div className="col s12 m4 offset-m2">
                    <br/>
                    <a href="http://www.gutefrage.net/"><img className="responsive-img" src="img/gf_logo.png"
                                                             alt="gutefrage.net GmbH"/></a>
                    <br/> <br/>
                </div>
                <div className="col s12 m4">
                    <br/>
                    <a href="http://virtual-identity.com/"><img className="responsive-img" src="img/vi_logo.jpeg"
                                                                alt="Virtual Identity AG"/></a>
                    <br/> <br/>
                </div>

                <div className="col s12 m4 offset-m2">
                    <br/>
                    <a href="https://www.innoq.com/"><img className="responsive-img" src="img/innoq_logo.png"
                                                          alt="innoQ Deutschland GmbH"/></a>
                </div>
                <div className="col s12 m4">
                    <br/> <br/>
                    <a href="https://www.codecentric.de/"><img className="responsive-img" src="img/cc_logo.png"/></a>
                    <br/> <br/>
                </div>

                <div className="col s12 m4 offset-m2">
                    <br/>
                    <a href="http://simplabs.com"><img className="responsive-img" src="img/simplelabs-logo.png"
                                                       alt="simplabs GmbH"/></a>
                </div>
                <div className="col s12 m4">
                    <a href="https://www.scandio.de">
                        <img className="responsive-img" src="img/scandio_logo_google.jpg" alt="Scandio GmbH"/>
                    </a>
                </div>
            </div>

            <a name="schedule"></a>
            <div className="row">
                <div className="col s12 m12">
                    <h4 className="header center blue-text">Schedule</h4>
                    <div className="col s12 m6">
                        <h5 className="header center light">Saturday</h5>
                        <table className="bordered">
                            <tr>
                                <td>9:30</td>
                                <td>Doors open</td>
                            </tr>
                            <tr>
                                <td>10:00-11:00</td>
                                <td>Opening & Marketplace</td>
                            </tr>
                            <tr>
                                <td>11:00-13:00</td>
                                <td>Sessions</td>
                            </tr>
                            <tr>
                                <td>13:00-14:00</td>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td>14:00-17:00</td>
                                <td>Sessions</td>
                            </tr>
                            <tr>
                                <td>17:00-18:00</td>
                                <td>Review</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col s12 m6">
                        <h5 className="header center light">Sunday</h5>
                        <table className="bordered">
                            <tr>
                                <td>9:30</td>
                                <td>Doors open</td>
                            </tr>
                            <tr>
                                <td>10:00-11:00</td>
                                <td>Marketplace</td>
                            </tr>
                            <tr>
                                <td>11:00-13:00</td>
                                <td>Sessions</td>
                            </tr>
                            <tr>
                                <td>13:00-14:00</td>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td>14:00-16:00</td>
                                <td>Sessions</td>
                            </tr>
                            <tr>
                                <td>16:00-17:00</td>
                                <td>Review & Closing</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <div className="row">
                {
                    /*
                <script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDr5F59SnCVuS2CjZqWGvuZDy4JnlkdXp0"></script>
               */ }
            </div>
        </div>

        <a name="location"></a>
        <h4 className="header center blue-text">Location</h4>
        <div id="map_wrapper">
            <div id="map"></div>
            <div id="map_overlay">
                <img src="img/vi_logo.jpeg" alt="Virtual Identity AG" width="120px"/>
                <h5>Virtual Identity AG</h5>
                <p className="lead">
                    Isarwinkel 16<br/>
                    81379 München<br/>
                    <a href="http://virtual-identity.com/">http://virtual-identity.com</a>
                </p>
                <p className="lead">
                    by U-Bahn: Thalkirchen (U3), 5 minute walk<br/>
                    by Car: There are parking areas nearby
                </p>
            </div>
        </div>

    </>
)

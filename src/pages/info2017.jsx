import React from "react"

export default () => (
    <>

<div className="container">
    <div className="row">
        <div className="col s12 m12">
            <h1 className="header center blue-text">JSCraftCamp 2017</h1>
            <h3 className="header center light">Thanks to all Participants for a great Barcamp in 2017!</h3>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
        <div className="col s12 m12">
            <h4 className="header center blue-text">Place & Date</h4>
            <h5 className="header center light">Munich, July 21+22 2017</h5>
        </div>
    </div>

    <div className="row">
        <div className="col s12 m12">
            <h4 className="header center blue-text">Facilitation</h4>
            <h5 className="header center">Tobias Goeschel (
                <a href="https://twitter.com/w3ltraumpirat">@w3ltraumpirat</a>
                )
            </h5>
        </div>
    </div>

    <div className="row" id="sponsors">
        <div className="col s12">
            <h4 className="header center blue-text">Sponsors</h4>
        </div>
        <div className="col s12 sponsor-logos">
            <a href="http://virtual-identity.com/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/vi_logo.jpeg" alt="Virtual Identity AG"/>
            </a>
            <a href="https://sinnerschrader.com/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/sinnerschrader.png"/>
            </a>
            <a href="https://www.trustyou.com/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/trustyou-logo.png" alt="TrustYou GmbH"/>
            </a>
            <a href="https://www.codecentric.de/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/codecentric.png"/>
            </a>
            <a href="http://www.mercateo.com/corporate/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/mercateo.jpg"/>
            </a>
            <a href="https://www.tngtech.com" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/tng.png"/>
            </a>
            <a href="https://holidaycheck.de" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/holidaycheck.jpg"/>
            </a>
            <a href="https://peerigon.com/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/peerigon.png"/>
            </a>
            <a href="https://wunder.io" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/wunder.png"/>
            </a>
            <a href="https://2017.js-kongress.de/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/jskongress_logo.png"/>
            </a>
            <a href="http://campudus.com" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/campudus-developers-logo-rgb.svg"/>
            </a>
            <a href="https://www.jambit.com/" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/jambit_logo.jpg"/>
            </a>
            <a href="https://www.adesso.de" className="sponsor" target="_blank">
                <img className="responsive-img" src="img/sponsor-2017/adesso_logo.png"/>
            </a>
        </div>
    </div>

    <a name="schedule"></a>
    <h4 className="header center blue-text">Schedule</h4>
    <div className="row">
        <div className="col s12 m12">
            <div className="col s12 m6">
                <h5 className="header center">Friday</h5>
                <table className="bordered">
                    <tr>
                        <td>9:00</td>
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
                        <td>Lunch
                            <a className="<%= public._data.baseColor %>-text" href="https://github.com/jscraftcamp/website/issues/192">
                                <i>sponsored</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>14:00-17:00</td>
                        <td>Sessions</td>
                    </tr>
                    <tr>
                        <td>17:00-18:00</td>
                        <td>Review</td>
                    </tr>
                    <tr>
                        <td>18:00-24:00</td>
                        <td>Party
                            <a className="<%= public._data.baseColor %>-text" href="https://github.com/jscraftcamp/website/issues/201">
                                <i>sponsored</i>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="col s12 m6">
                <h5 className="header center">Saturday</h5>
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
                        <td>Lunch
                            <a className="<%= public._data.baseColor %>-text" href="https://github.com/jscraftcamp/website/issues/193">
                                <i>sponsored</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>14:00-17:00</td>
                        <td>Sessions</td>
                    </tr>
                    <tr>
                        <td>17:00-18:00</td>
                        <td>Review & Closing</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDr5F59SnCVuS2CjZqWGvuZDy4JnlkdXp0"></script>
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
                Isarwinkel 16
                <br/> 81379 München
                <br/>
                <a href="http://virtual-identity.com/">http://virtual-identity.com</a>
            </p>
            <p className="lead">
                by U-Bahn: Thalkirchen (U3), 5 minute walk
                <br/> by Car: There are parking areas nearby
            </p>
        </div>
    </div>
</div>
</>)
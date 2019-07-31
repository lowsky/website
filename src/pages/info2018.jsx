import React from "react"

//<script src="js/bonsai.min.js"></script>

const staticLogo = function() {
    const el = document.getElementById('staticLogo');
    /*
    bonsai.run(el, 'https://jscraftcamp.github.io/logo/src/static-logo.js', {
        height: el.style.height,
        width: el.style.width,
        framerate: 50
    });
    */

    var logoClassList = document.getElementById('logoContainer').classList;
    var onFirstScroll = function() {
        if(window.scrollY === 0) {
            logoClassList.add('centered');
        } else {
            logoClassList.remove('centered');
        }
    };
    document.addEventListener('scroll', onFirstScroll);
};

var styleCenter = {"textAlign": "center"};

export default () => (
    <>

        <div id="logoContainer" className="container logo centered">
            <div id="staticLogo"></div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <h1 className="header center <%= public._data.baseColor %>-text">JSCraftCamp 2018</h1>
                    <h3 className="header center light">Munich, August 10 &amp; 11</h3>
                    <h3 className="header center light">A BarCamp about JavaScript and Crafting Software</h3>
                    <h3 className="header center light">For some impressions from the last event, you can check out
                        these <a href="/photos2017">photos</a>.</h3></div>
            </div>
        </div>


        <div className="container">
            <div className="row" id="mc_embed_signup_container_row">
                <div className="col s12 m4 offset-m4">
                    <div id="mc_embed_signup">
                        <h4 className="header center <%= public._data.baseColor %>-text" id="registration">
                            Follow us on
                            <a href="https://twitter.com/JSCraftCamp">
                                Twitter&nbsp;<img src="img/twitter.png" />
                            </a>
                        </h4>
                        <p style={styleCenter}>Be the first to know informations about JSCC18!</p>
                        <p style={styleCenter}>(*we had to close the Newletter due to GDPR regulations)</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row flow-text">
                <div className="col s12 m6">
                    <h5 className="header center">JavaScript</h5>
                    <p className="block">The focus of this BarCamp are JavaScript and related technologies. Possible
                        topics are:
                        Popular frameworks like AngularJS and React, the latest ECMAScript standard, languages like Elm
                        or
                        TypeScript which transpile to JavaScript, server-side programming with node.js, paradigms like
                        event
                        driven programming or future technologies like WebAssembly.</p>
                </div>
                <div className="col s12 m6">
                    <h5 className="header center">Crafting Software</h5>
                    <p className="block">Have you ever struggled with an huge old JavaScript codebase? Or rolled your
                        eyes about an
                        <code>'undefined' is not a function</code> error? We will discuss which tools, practices and
                        architecture patterns – from continuous integration to modular components – can help to create
                        and
                        maintain long-living, evolvable JavaScript applications.</p>
                </div>
            </div>
            <div className="row flow-text">
                <div className="col s12 m6">
                    <h5 className="header center">BarCamp</h5>
                    <p className="block">A barcamp – also called an unconference – is an event without any previously
                        fixed agenda.
                        All the participants meet in the morning and decide about the schedule for the day.
                        Everyone can offer a session - from a short hands-on workshop to moderating a discussion. The
                        goal is to
                        make everything as participative as possible. Read more
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Unconference">about
                            BarCamp on Wikipedia</a>.
                    </p>
                </div>
                <div className="col s12 m6">
                    <h5 className="header center">How to register?</h5>
                    <p className="block">Attendance is <strong>free of charge</strong> and we encourage to sign up in
                        advance.
                        Registration happens by submitting your name and some other information via
                        <a href="http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request"
                           target="_blank">Pull
                            Request</a>.
                        More infos and explanations can be found on the <a href="./registration.html">Registration
                            Page.</a>
                    </p>
                </div>
            </div>

            <a name="schedule"></a>
            <h4 className="header center <%= public._data.baseColor %>-text">Schedule</h4>
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
                                <td>Lunch <a href="https://github.com/jscraftcamp/website/issues/360">sponsored by
                                    TNG</a></td>
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
                                <td>Party <a href="https://github.com/jscraftcamp/website/issues/367">sponsored by
                                    ProSiebenSat1</a></td>
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
                                <td>Lunch <a href="https://github.com/jscraftcamp/website/issues/361">sponsored by
                                    Netcentric</a></td>
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

            <h4 className="header center <%= public._data.baseColor %>-text">Facilitation by</h4>
            <h5 className="header center">Cecilia Maria Zannini</h5>

            <div className="row" id="sponsors">
                <div className="col s12">
                    <h4 className="header center <%= public._data.baseColor %>-text">Sponsors</h4>
                    { false && <h5 className="center">not yet anounced</h5> }
                </div>

                <div className="col s12 sponsor-logos">
                    <a href="http://virtual-identity.com/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/vi_logo.jpeg" alt="Virtual Identity AG"/>
                    </a>
                    <a href="https://www.jambit.com/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/jambit_logo.jpg"/>
                    </a>
                    <a href="https://netcentric.biz/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/netcentric.png"/>
                    </a>
                    <a href="https://peerigon.com/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/peerigon.png"/>
                    </a>
                    <a href="https://www.methodpark.de/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/method_park_logo.png"/>
                    </a>
                    <a href="https://www.tngtech.com" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/tng.png"/>
                    </a>
                    <a href="https://www.codecentric.de/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2017/codecentric.png"/>
                    </a>
                    <a href="https://entwicklerstube.com" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2017/entwicklerstube_logo.jpg"/>
                    </a>
                    <a href="https://cioplenu.com/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/cioplenu.jpg"/>
                    </a>
                    <a href="https://www.futurice.com/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/futurice.png"/>
                    </a>
                    <a href="http://tech.prosiebensat1.com" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/pro7sat1.png"/>
                    </a>
                    <a href="https://www.mayflower.de/" className="sponsor" target="_blank">
                        <img className="responsive-img" src="img/sponsor-2018/mayflower.png"/>
                    </a>
                    {
                        // commented sponsors out - we might need some of the logos again for 2018
                        //     <a href="https://sinnerschrader.com/" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/sinnerschrader.png"/>
                        //     </a>
                        //     <a href="https://www.trustyou.com/" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/trustyou-logo.png" alt="TrustYou GmbH">
                        //     </a>
                        //     <a href="http://www.mercateo.com/corporate/" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/mercateo.jpg"/>
                        //     </a>
                        //     <a href="https://holidaycheck.de" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/holidaycheck.jpg"/>
                        //     </a>
                        //     <a href="https://wunder.io" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/wunder.png"/>
                        //     </a>
                        //     <a href="https://2017.js-kongress.de/" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/jskongress_logo.png"/>
                        //     </a>
                        //     <a href="http://campudus.com" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/campudus-developers-logo-rgb.svg"/>
                        //     </a>
                        //     <a href="https://www.adesso.de" className="sponsor" target="_blank">
                        //       <img className="responsive-img" src="img/sponsor-2017/adesso_logo.png"/>
                        //     </a>
                    }
                </div>
            </div>

            <a name="location"></a>
            <h4 className="header center <%= public._data.baseColor %>-text">Location</h4>
            <h5 className="header center">
                <a href="https://www.google.com/maps/place/Virtual+Identity+AG+M%C3%BCnchen/@48.0970276,11.5430163,17z/data=!3m1!4b1!4m5!3m4!1s0x479e75eb96bfb00b:0x2cd12f60e6a5c63c!8m2!3d48.097024!4d11.545205">
                    Virtual Identity AG<br/>
                    Isarwinkel 16<br/>
                    81379 München<br/>
                </a>
            </h5>
        </div>
    </>)

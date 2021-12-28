import React, {FunctionComponent} from "react"

const TopBar : FunctionComponent = () =>{

    return(
        <header id="header">
            <div  className="row">
                {/* <!-- Logo Area --> */}
                <div  className="col-md-4 col-lg-5">
                    <div  className="logo">
                        <a href="/">
                            <img src={require("./../../assets/images/cf-bank-logo.png")} alt="CF-BANK logo" style={{width : 260, height: 100, objectFit : "cover"}} />
                        </a>
                        {/* <div  className="icon-logo">
                            <i  className="fa fa-university"></i>
                        </div>
                        <a href="/">
                            Coop Bank
                            <span>Your money is safe.</span>
                        </a> */}
                    </div>
                </div>

                {/* <!-- Login Area --> */}
                <LoginArea />
            </div>
        </header>
    )
}

const LoginArea : FunctionComponent = () =>{
    return(
        <div  className="col-md-8 col-lg-7">
            <div  className="info-login">
                <div  className="head-info-login">
                    <p>Make here your online transactions!</p>
                    <span>
                        <a href="register">Register Here</a>
                    </span>
                </div>
                <div  className="form-theme">
                    <form action="template-user-area.html">
                        <div  className="selector">
                            <select  className="guests-input">
                                <option>Citizenship Card</option>
                                <option>Foreigners Card</option>
                                <option>Tax identification number</option>                    
                                <option>Identity Card</option>
                                <option>Username</option>
                            </select>
                            <span  className="custom-select">Document type</span>
                            </div>
                            <input type="number" placeholder="Document Number"  className="input" />
                        <input type="submit"  className="btn" value="Go" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TopBar

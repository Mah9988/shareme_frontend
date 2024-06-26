import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { gapi } from "gapi-script";
// ** assets :
import logo from "../../assets/logowhite.png";
import { client } from "../../client";
const shareVedio = require("../../assets/share.mp4");

// ** types :
type docType = {
  _id: string;
  userName: string;
  image: string;
  _type: string;
};

// ** Components :
const Login: React.FC = () => {
  const navigate = useNavigate();

  // fix google auth issue :
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "696267206716-fk381nctcb6rb1ptdo563r5rcu5qth8h.apps.googleusercontent.com",
      });
    });
  }, []);

  const responseGoogle = (response: any) => {
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc: docType = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then((res) => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVedio}
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width={"130px"} />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId="696267206716-fk381nctcb6rb1ptdo563r5rcu5qth8h.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor  flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" />
                  Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import "./Register.css";

export default function Register() {
  return (
    <>
      <div className="container-register">
        <div className="overlay-register " />

        <div className="div-register">
          <div className="left-register">
            <h1>
              Register <span>Here</span>
            </h1>
            <h3>
              Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed
              pulvinar est sit anrt tellus iaculis hendrerit.
            </h3>
            <p>
              Lorem, ipsumolor sit amet consectetur adipisicing elit.
              Consequuntur quis, tempora nesciunt quidem repellat dolorem quae
              mollitia, eius quia Lorem, ipsumolor sit amet consectetur
              adipisicing elit. Consequuntur quis, tempora nesciunt quidem
              repellat dolorem quae mollitia, eius quia
            </p>
          </div>
          <div className="right-register">
            <form>
              <input value="First Name" />
              <input value="Last Name" />
              <input  value="Phone Number" />
              <input type="email" value="Email Adrees" />
              <button className="reg-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

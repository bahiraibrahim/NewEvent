import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container-contact">
        <div className="left-contact">
<div className="content-left">
            <h1>
              New<span> Event</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quis, tempora nesciunt quidem repellat Lorem, ipsum
              dolor sit amet consectetur
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quis, tempora nesciunt quidem repellat Lorem, ipsum
              dolor sit amet consectetur
            </p>

            <button>DownLoad Now</button>
</div>
        </div>
        <div className="right-contact">
          <h1>
            Keep In <span>Touch</span>
          </h1>
          <form>
            <input className="input" placeholder="Name" type="text" />
            <input className="input" placeholder="Email" type="email" />
            <input className="input" placeholder="Massege" type="text" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

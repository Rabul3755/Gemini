import '../Contact/Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <div className=" col-xl-9 col-xxl-8">
        <div className="content-wrap">
          <div className="contact-wrapper ">
            <div className="page-title-wrap mb-15">
              <h2 className="page-titles">Contact</h2>
            </div>
          </div>
          <div className="section-contact-wrappers ">
            <div className="contact-area">
              <h5 className="contact-title">I'm always open to discussing about work</h5>
              <h5 className="contact-title-b ">Contact me through</h5>
              <form action="#" className="contact-form">
                <div className="form-input-item">
                  <label className="input-lebel name " style={{color: "rgb(254, 120, 120)"}} >Name *</label>
                  <input
                    type="text"
                    className="input-box name height" style={{borderBottom : "1px solid rgb(254, 120, 120)"}}
                    required
                  />
                </div>
                <div className="form-input-item">
                  <label className="input-lebel gmail " style={{color: "rgb(27, 116, 228)"}}>Email *</label>
                  <input
                    type="email"
                    className="input-box gmail height"
                    style={{borderBottom: "1px solid rgb(27, 116, 228)"}}
                    name="email"
                    required
                  />
                </div>
                <div className="form-input-item">
                  <label className="input-lebel  message " style={{color: "rgb(206, 101, 243)"}}>Message *</label>
                  <textarea name="message" className="input-box message height " cols="30" rows="10" style={{borderBottom: "1px solid rgb(206, 101, 243)"}}></textarea>
                </div>
                <div >
                  <button type="submit" className="form-btn" value="send">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

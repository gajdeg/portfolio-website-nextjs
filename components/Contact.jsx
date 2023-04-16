import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center md:mt-0 rounded-xl border-2 border-[#49345e] w-3/4 md:w-3/6 lg:w-2/6">
      <div className="text text-lg w-full pl-8 pt-4 uppercase">
        Get in Touch
      </div>
      <div className="text-5xl w-full pl-8 pt-2">Contact.</div>
      <div></div>
      <form
        id="contact-form"
        method="POST"
        className="w-full px-8 py-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col py-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button
          type="submit"
          className="flex justify-center bg-[#b366ff67] text-center rounded w-24 mt-2 py-1 hover:bg-[#b366ff]"
        >
          Send
        </button>
      </form>
    </div>
  );
}

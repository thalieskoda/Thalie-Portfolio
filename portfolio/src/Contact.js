import styled from "styled-components";
import { FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

//const { Public_Key, Template, Service_Id } = process.env;

const Contact = () => {
  const [emailSuccess, setEmailSuccess] = useState(null);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7fzizn",
        "template_uid4lzi",
        form.current,
        "jWmq6N7D5-IRELapD"
      )
      .then(
        (result) => {
          console.log(result.text, "GOOD");
          setEmailSuccess(true);
        },
        (error) => {
          console.log(error.text, "BAD");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Wrapper>
        <h2>Don't be a stranger, let's connect!</h2>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" placeholder="Name" name="from_name"></Input>
          <Input type="email" placeholder="Email" name="reply_to"></Input>
          <Textarea
            placeholder="Message"
            className="message"
            name="message"
          ></Textarea>
          <Button type="submit" onSubmit={sendEmail}>
            Send Message
          </Button>
          {emailSuccess ? (
            <small>
              <br />
              Thanks for getting in touch ! ⭐️
            </small>
          ) : (
            <span></span>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

const Input = styled.input`
  background-color: transparent;
  border: 1px solid lightgrey;

  border-radius: 1px;
  font-family: "poppins";
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 30px;
  min-width: 100%;
  outline: none;
  padding: 10px 15px;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: 1px solid lightgrey;
  border-radius: 1px;
  font-family: "poppins";
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 30px;
  min-width: 100%;
  outline: none;
  padding: 10px 15px;
  height: 180px;
  resize: none;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50vw;
  align-items: center;
  height: 60vh;
`;
const Button = styled.button`
  border: none;
  border-radius: 1px;
  font-size: 15px;
  margin: 10px 0 25px 0;
  padding: 15px 30px;
  transition: all 200ms ease-in-out;
  border: black 1px solid;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  align-items: center;
`;
export default Contact;

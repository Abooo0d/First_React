import React,{useRef} from "react";
import Container from "../../Components/Container/Container";
import FAQ from "../../Components/FAQ/FAQ";
const FAQs = () => {
  // Get The Question Elemets\
  let questionRefs = useRef([]);
  questionRefs.current = [...Array(4).keys()].map(
    (index) =>(questionRefs.current[index] = React.createRef()));
  let Questions = Array.from(questionRefs.current);
  // Get The Answer Elemets
  let answerRefs = useRef([]);
  answerRefs.current = [...Array(4).keys()].map(
    (index) =>(answerRefs.current[index] = React.createRef()));
  let Answers = Array.from(answerRefs.current);
  // Fn To Rests The Class 
  function Reset() {
    Questions.forEach((q) => {
      q.current.classList.remove("active");
    })
  }
  // The Question Click Events
  function QEvent(e){
    if(e.target.parentElement.classList.contains("active")){
      Reset();
    }else if(!e.target.parentElement.classList.contains("active")){
      Reset();
      e.target.parentElement.classList.add("active");
    }
    // console.log(e.target.parentElement);
  }
  // Timeer To Add The Events To The Question Elements
  let AddEvents = setInterval(() => {
    Questions.forEach((q) => {
      q.current.addEventListener("click" ,(e) => QEvent(e));
    });
    clearInterval(AddEvents);
  }, 100);
  var AQ = [
    [
      "Non consectetur a erat nam at lectus urna duis?",
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    ],
    [
      "Feugiat scelerisque varius morbi enim nunc?",
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    ],
    [
      "Dolor sit amet consectetur adipiscing elit?",
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
    ],
    [
      "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
    ],
  ];
  var text =
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
  return (
    <Container title="FAQs" text={text} class="faqs colored">
      <div className="faqs-con">
        <FAQ q={AQ[0][0]} a={AQ[0][1]} qref = {questionRefs.current[0]} aref={answerRefs.current[0]} />
        <FAQ q={AQ[1][0]} a={AQ[1][1]} qref = {questionRefs.current[1]} aref={answerRefs.current[1]} />
        <FAQ q={AQ[2][0]} a={AQ[2][1]} qref = {questionRefs.current[2]} aref={answerRefs.current[2]} />
        <FAQ q={AQ[3][0]} a={AQ[3][1]} qref = {questionRefs.current[3]} aref={answerRefs.current[3]} />
      </div>
    </Container>
  );
};
export default FAQs;

import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="Ques-ans">
      <div className="1st-ques">
        <h2> What is Context API?</h2>
        <h4>
          {" "}
          Ans: In React if we want to use a data from upper conponent we have to
          send the data to the destination as a props through other components
          ,this is called props drilling. <br /> In this case we need to send
          the data through those components who dosen't need the data .To solve
          this props drilling problem we need to use Context API. <br /> Context
          API is a React structure that helps to exchange details and solving
          prop-drilling from all levels of our application.
        </h4>{" "}
        <br />
        <h2>What is Semantic Tags?</h2>
        <h4>
          Ans: A semantic element clearly describes its meaning to both the
          browser and the developer.Through this tags we can easily indicate
          which is header ,which is footer,which is article or blogs etc. <br />{" "}
          By adding semantic tags to our document,we provide additional
          information about that document. <br /> Specifically, semantic tags
          make it clear to the browser what the meaning of a page and its
          content is.It also improve the Search Engine Optimization.
        </h4>
      </div>
    </div>
  );
};

export default Blogs;

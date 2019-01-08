import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <p class="title">My Name</p>
                  <p class="subtitle">
                    is Jake Jonghun Choi
                    <br />
                    a.k.a
                    <br />
                    DemiKaiser Da Vinci
                  </p>
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">Defined</p>
                  <p class="subtitle">
                    as a Renaissance Man
                    <br />
                    trying to tear down walls of prejudice and self-righteous
                  </p>
                </article>
                <article class="tile is-child notification is-danger">
                  <p class="title">Resume/CV</p>
                  <p class="subtitle">
                    Click <a href={require("../achievements/Resume_Jake_J._Choi.pdf")} target="_blank" rel="noopener noreferrer">here</a> to if you
                    want to see my resume/CV
                  </p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Dreamed</p>
                  <p class="subtitle">to be a Musician</p>
                  <img src={require("../images/about/me00.jpg")} alt="Me Playing a Violin"/>
                  <p class="content">
                    Frustrated myriad times in numbers of different areas since
                    when I was young, but I didn't give up yet! Currently, I am
                    working on vocal music, jazz theories, and algorithmic
                    composition.
                  </p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Introduced</p>
                <p class="subtitle">as a Creator, Maker, or Hacker</p>
                <p class="content">
                  Currently, I am exploring the world of Software Engineering! I
                  have been having so much interests in IT technologies since
                  when I was a kid, but finally got a chance to learn it in a
                  deep level. My ultimate goal is to build a small system from
                  the bottom to the top, which means from logical gates to
                  circuits, firmware, operating systems, assembly languages,
                  high-level languages, native frameworks, virtual machines
                  (including web br/owsers), and applications on the top of
                  those. It will be (and must be) challenging, but I believe the
                  true understanding comes from an ability to see trees,
                  forests, and the earth simultaneously. Most of all, I can't
                  rein my curiosity on how things work! It's my nature and I
                  would not be me without it.
                </p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">Interested</p>
                <p class="subtitle">in the Following Subjects (in DDC)</p>
                <div class="content">
                  000. Computer Science
                  <br />
                  020. Library &amp; Info. Science
                  <br />
                  101. Theory of Philosophy
                  <br />
                  110. Metaphysics
                  <br />
                  111. Ontology
                  <br />
                  113. Cosmology
                  <br />
                  121. Epistemology
                  <br />
                  130. Occultism
                  <br />
                  138. Physiognomy
                  <br />
                  150. Psychology
                  <br />
                  210. Theory of Religion
                  <br />
                  301. Anthropology
                  <br />
                  320. Political Science
                  <br />
                  330. Economics
                  <br />
                  348. Laws, Regulations, Cases
                  <br />
                  378. Higher education
                  <br />
                  384. Communications
                  <br />
                  410. Linguistics
                  <br />
                  510. Mathematics
                  <br />
                  539. Modern physics
                  <br />
                  570. Biology
                  <br />
                  571. Physiology
                  <br />
                  576. Genetics and Evolution
                  <br />
                  577. Ecology
                  <br />
                  624. Civil Engineering
                  <br />
                  712. Landscape Architecture
                  <br />
                  720. Architecture
                  <br />
                  740. Graphic Arts
                  <br />
                  781. Principles of Music
                  <br />
                  782. Vocal Music
                  <br />
                  799. Fishing &amp; Hunting
                  <br />
                  909. World History
                  <br />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

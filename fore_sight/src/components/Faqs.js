import React, { Component } from "react";
import "../css/Faqs.css";

class Faqs extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 id="faqContentHead">Common Questions</h1>
        <div id="faqs">
          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">How to place your bid on Foresight app?</p>
              <button
                className="faqIcon"
                id="faqIcon1"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer1"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus1"></i>
                <i className="glyphicon glyphicon-minus" id="minus1"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer1">
              To place a bid amount on the Foresight app - First, select the
              question and the category, then decide your foresight amount by
              adjusting the mil points.<br></br>Complete this by swiping either
              left or right based on your answer and its probability. Tap on the
              trade button, and your bid will get successfully placed.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">How to check your result on Foresight?</p>
              <button
                className="faqIcon"
                id="faqIcon2"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer2"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus2"></i>
                <i className="glyphicon glyphicon-minus" id="minus2"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer2">
              Foresight results get declared on the app and its social media
              platform around noon.
              <br /> You can check your results on the app by going to the
              winner section and seeing the final standings( Your position on
              the leader board is directly proportional to your winning amount).
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                Why am I facing a problem in placing my bid?
              </p>
              <button
                className="faqIcon"
                id="faqIcon3"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer3"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus3"></i>
                <i className="glyphicon glyphicon-minus" id="minus3"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer3">
              This problem can occur because of two main reasons :-
              <ul>
                <li>
                  Your bidding amount is more than the remaining mil points.
                </li>
                <li>
                  The probability of your answer is more than the actual mil
                  points submitted.
                </li>
              </ul>
              If the issue persists, you can directly contact us on our social
              media platforms.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                What categories are available for bidding?
              </p>
              <button
                className="faqIcon"
                id="faqIcon4"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer4"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus4"></i>
                <i className="glyphicon glyphicon-minus" id="minus4"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer4">
              There are many categories on Foresight on which you can place your
              bid.
              <br /> For instance- IPL, Fun, Crypto, and Stocks.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">How many mil points will I receive?</p>
              <button
                className="faqIcon"
                id="faqIcon5"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer5"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus5"></i>
                <i className="glyphicon glyphicon-minus" id="minus5"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer5">
              You will receive the exact amount of mil points placed on the
              bidding (It also implies that you will lose the same amount of mil
              points if your answer is incorrect).
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                Where will I receive the winning amount?
              </p>
              <button
                className="faqIcon"
                id="faqIcon6"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer6"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus6"></i>
                <i className="glyphicon glyphicon-minus" id="minus6"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer6">
              The winning amount will be credited directly to your UPI-linked
              account, and you can edit your UPI id and number by going to the
              profile section.
              <br />
              <br /> Make sure that your UPI number and ID are valid. In the
              case of incorrect UPI, the winning amount won’t get transferred to
              you. Terms and Conditions apply.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                I have lost all my Mil points. How will I continue my
                predictions?
              </p>
              <button
                className="faqIcon"
                id="faqIcon7"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer7"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus7"></i>
                <i className="glyphicon glyphicon-minus" id="minus7"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer7">
              If you have lost all your Mil Points because of wrong predictions
              in different categories, you need to wait for the weekly reset.
              <br />
              The weekly reset gives an equal opportunity for all the players on
              the Foresight app. It ensures a limited advantage for placing bids
              and predictions and provides the optimum number of Mil points.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                How many Mil Points will I get in the weekly reset?
              </p>
              <button
                className="faqIcon"
                id="faqIcon8"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer8"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus8"></i>
                <i className="glyphicon glyphicon-minus" id="minus8"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer8">
              The number of Mil Points assigned to you in the weekly reset
              depends on your performance during that week. For instance,
              players who have won more points will receive more Mil credits and
              vice versa.
              <br />
              The weekly reset is subject to change and comes with terms and
              conditions.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                I am not able to log in and facing repetitive errors.
              </p>
              <button
                className="faqIcon"
                id="faqIcon9"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer9"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus9"></i>
                <i className="glyphicon glyphicon-minus" id="minus9"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer9">
              If you are facing trouble logging into your account, it might be
              because you are using an old version of the app. Go to the play
              store and update the app to the latest version to resolve the
              issue.
              <br />
              (If the problem persists, you can try reinstalling the app from
              the play store.)
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">How can I win more on Foresight?</p>
              <button
                className="faqIcon"
                id="faqIcon10"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer10"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus10"></i>
                <i className="glyphicon glyphicon-minus" id="minus10"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer10">
              You can win more on the Foresight App by getting the basics right.
              <ul>
                <li>
                  Keep yourself updated with the latest events for correct
                  predictions.
                </li>
                <li>
                  Upgrade your game by spending more time on the app. It will
                  help you to analyze the events in various categories.
                </li>
                <li>
                  Read this Blog! (P.S. specifically curated for the big winners
                  like you.)
                </li>
              </ul>
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                Can I report bugs and discrepancies in the app?
              </p>
              <button
                className="faqIcon"
                id="faqIcon11"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer11"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus11"></i>
                <i className="glyphicon glyphicon-minus" id="minus11"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer11">
              You can always reach out to us on our designated support email.
              <br />
              Furthermore, the system of our app continuously detects and
              improves the interface.
            </p>
          </div>

          <div id="faq">
            <div id="faqQuestion">
              <p id="faqQuestionTxt">
                Do I need to have trading knowledge for using Foresight?
              </p>
              <button
                className="faqIcon"
                id="faqIcon12"
                type="button"
                data-toggle="collapse"
                data-target="#faqAnswer12"
                aria-expanded="false"
              >
                <i className="glyphicon glyphicon-plus" id="plus12"></i>
                <i className="glyphicon glyphicon-minus" id="minus12"></i>
              </button>
            </div>
            <p className="collapse faqAnswer" id="faqAnswer12">
              You don't need to be a trader or specialist for placing
              predictions on Foresight.<br/>Anyone with a general curiosity and
              great predictions game can join the app and start earning real
              rewards.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;

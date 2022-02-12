import AbstractShareButton from "./AbstractShareButton";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler";

const eventHandler = new MockEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https://www.youtube.com/rodrigobranas")
twitter.bind()
const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler,".btn-linkedin", "https://www.youtube.com/rodrigobranas")
linkedin.bind()
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler,".btn-facebook", "https://www.youtube.com/rodrigobranas")
facebook.bind()
const print: AbstractShareButton = new ShareButtonPrint(eventHandler,".btn-print")
print.bind()
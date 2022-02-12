import EventHandler from "./EventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";


export default class ShareButtonLinkedin  extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }
  createLink(): string {
      return `https://www.linkedin.com/shareArticle?url=${this.url}`;
  } 
}
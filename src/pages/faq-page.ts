import { customElement, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
import '../components/hero-block';
import '../components/markdown/remote-markdown';
import '../elements/footer-block';
import '../elements/polymer-helmet';

@customElement('faq-page')
export class FaqPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <polymer-helmet
        title="{$ heroSettings.faq.title $} | {$ title $}"
        description="{$ heroSettings.faq.metaDescription $}"
      ></polymer-helmet>

      <hero-block
        background-image="{$ heroSettings.faq.background.image $}"
        background-color="{$ heroSettings.faq.background.color $}"
        font-color="{$ heroSettings.faq.fontColor $}"
      >
        <div class="hero-title">{$ heroSettings.faq.title $}</div>
        <p class="hero-description">{$ heroSettings.faq.description $}</p>
      </hero-block>

      <remote-markdown toc path="[[source]]"></remote-markdown>

      <footer-block></footer-block>
    `;
  }

  @property({ type: String })
  source = '{$ faq $}';
}

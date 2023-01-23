import { Component, Prop, h, State, Host } from '@stencil/core';

/**
 * MediumButton web component
 *
 * <medium-button />
 */
@Component({
  tag: 'medium-button',
})
export class MediumButton {
  /**
   * Button label
   */
  @Prop() label = '';

  /**
   * Enables loading effect
   */
  @Prop({ attribute: 'loading' }) isLoading = false;

  /**
   * Enables disabled state
   */
  @Prop({ attribute: 'disabled' }) isDisabled = false;

  @State() hasHover = false;
  @State() hasFocus = false;

  render(): HTMLElement {
    return (
      <Host class={'Medium-Button'}>
        <button>
          { this.isLoading
            ? <div class="loader" />
            : ''
          }
          <div class={{ 'Medium-Button--invisible': this.isLoading }}> {this.label} </div>
        </button>
      </Host>
    );
  }
}


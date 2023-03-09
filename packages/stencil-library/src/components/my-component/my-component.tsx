import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: any;
  /**
   * The middle name
   */
  @Prop() middle: any;

  /**
   * The last name
   */
  @Prop() last: any;

  

  render() {
    return <div class='bg-red-600'>Hello, World! I'm {this.first}</div>;
  }
}

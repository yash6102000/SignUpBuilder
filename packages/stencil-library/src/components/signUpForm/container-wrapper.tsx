import { Component, h ,Prop} from '@stencil/core';
import { StyledHost } from '../../utils/helper';

@Component({
  tag: 'container-wrapper',
  shadow: false,
})
export class ContainerWrapper {
  @Prop() signUp: any;

  render() {
    return (
      <StyledHost>
        <form-wrapper></form-wrapper>;
      </StyledHost>
    );
  }
}

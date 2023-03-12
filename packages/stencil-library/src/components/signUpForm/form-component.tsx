import { Component, Prop, Watch, State, h } from '@stencil/core';

import googleIcon from '../../googleIcon.svg';
import addLogo from '../../addLogo.svg';
import starLogo from '../../star.svg';
//@ts-ignore
@Component({
  tag: 'form-component',
  shadow: true,
  styleUrl: 'form.css',
})
export class FormComponent {
  @Prop() data: any;
  @State() email: string = '';
  @Watch('data')
  handleChange(event) {
    this.email = event?.target?.value;
  }

  render() {
    const buttonData = [
      {
        buttonText: 'google',
        icon: googleIcon,
      },
      {
        buttonText: 'microsoft',
        icon: googleIcon,
      },
      {
        buttonText: 'git',
        icon: googleIcon,
      },
      {
        buttonText: 'facebook',
        icon: googleIcon,
      },
    ];
    console.log(this.data.buttons.socialButtons.fontSize, 'this.data.signUpBox.backgroundColor');
  
    return (
      <div
        class={`flex  rounded-xl ${this.data.viewPort.fullScreen && 'w-fit'}  border-text-[#8C8C8C] border ${
          this.data.theme.color === 'dark' ? 'bg-black' : this.data.theme.color === 'texture' ? 'bg-gray-600' : 'bg-white'
        }`}
      >
        {this.data.viewPort.fullScreen || this.data.viewPort.desktop ? (
          <div class={`bg-[#070930] min-w-[424px] rounded-lg   px-[50px] pb-[63px] pt-[30px]`}>
            <div class="flex flex-col gap-20 ">
              <div class="flex items-center gap-2.5">
                <span class="font-medium text-white">Add Company Logo</span>
              </div>
              <div class="max-w-[280px]">
                <h1 class="text-3xl font-medium text-white outline-none image relative" contentEditable={true}>
                  Start your journey with us.
                </h1>

                <span class="text-white text-sm outline-none image relative" contentEditable={true}>
                  Discover the world’s best community of freelancers ad business owners.
                </span>
              </div>
              <div class="flex flex-col flex-end max-w-[390px]">
                <div class="flex flex-end gap-1">
                  <img src={starLogo} alt="" />
                  <span class="text-[#1890FF]  text-xs ">View Custom Layouts</span>
                </div>

                <div class="border-text-none rounded-2xl bg-[#252BA9] flex flex-col gap-6 p-5">
                  <span class="text-white text-xs">
                    "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly."
                  </span>
                  <div class="flex gap-2 items-center">
                    <div>
                      <h4 class="text-white text-sm">Arun Raj</h4>
                      <span class="text-white text-xs">Senior Product Manger @ABSoftwares</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div
          style={{ backgroundColor: `${this.data.signUpBox.backgroundColor}`,borderWidth:`${this.data.signUpBox.boxBorder}px`,boxShadow:`${this.data.signUpBox.boxShadow}` }}
          class={`flex rounded-lg p-5 flex-col my-20 gap-10 ${this.data.viewPort.tablet ? 'w-[768px]' : null} ${
            this.data.viewPort.mobile ? 'w-[375px] ml-8 mr-8' : 'ml-10 mr-14 '
          } ${this.data.viewPort.fullScreen || this.data.viewPort.desktop ? 'w-3/5' : null} `}
        >
          <div class="flex  gap-[35px] flex-col">
            {this.data.viewPort.mobile && (
              <div class="border items-center px-2 self-center flex flex-col gap-2 rounded-[52px] w-fit py-4">
                <img class="h-5 w-5" src={addLogo} alt="" />
                <span>Add Logo</span>
              </div>
            )}

            <div class="flex items-center gap-1.5">
              <h3 class={`text-xl font-medium  text-black `} contentEditable={true}>
                Welcome to Company Name!
              </h3>
            </div>
          </div>

          <div class="flex flex-col gap-9">
            <div class={`flex gap-8 ${this.data.buttons.socialButtons.position.top ? 'flex-col-reverse' : 'flex-col'}`}>
              <div class={`flex flex-col gap-7`}>
                <div class="flex flex-col gap-2">
                  <label class={`text-black`} htmlFor="">
                    Email
                  </label>
                  <input
                    value={this.email}
                    onInput={event => this.handleChange(event)}
                    class={`border-[#D9D9D9] border-2 px-3 py-2 rounded-sm text-sm`}
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class={`text-black rounded-sm text-sm`} htmlFor="">
                    Password
                  </label>
                  <input class={`border-[#D9D9D9] border-2 px-3 py-2 rounded-sm text-sm`} placeholder="Enter your password" type="password" />
                </div>
                <button
                  style={{
                    color: `${this.data.buttons.submitButton.fontColor}`,
                    backgroundColor: `${this.data.buttons.submitButton.backgroundColor}`,
                    fontWeight: `${this.data.buttons.submitButton.fontWeight}`,
                    borderRadius: `${this.data.buttons.submitButton.borderRadius}px`,
                  }}
                  class={`bg-[#070930]  text-${this.data.buttons.submitButton.fontSize} rounded-sm py-2 text-center items-center text-white`}
                >
                  Continue
                </button>
                <div class="flex flex-col gap-1">
                  <span class={`text-xs text-gray-600 text-black`}>
                    By continuing, you agree to the{' '}
                    <a href="/" style={{ color: this.data.colors.primary }}>
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a style={{ color: this.data.colors.primary }} href="/">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
              <div class={`flex gap-9 ${this.data.buttons.socialButtons.position.top ? 'flex-col-reverse' : 'flex-col'}`}>
                <div class="flex justify-between items-center gap-2">
                  <hr class="h-px w-full bg-gray-300" /> <div class={`text-xs w-full text-gray-600 text-center text-black `}>OR SIGNUP WITH</div>{' '}
                  <hr class="h-px w-full bg-gray-300" />
                </div>
                <div class={`flex gap-3 justify-center ${this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split'?"flex-wrap":null} items-center`}>
                  {buttonData.map((data: any, index: number) => {
                    return (
                      <div
                        style={{
                          color: `${this.data.buttons.socialButtons.fontColor}`,
                          backgroundColor: `${this.data.buttons.socialButtons.backgroundColor}`,
                          fontWeight: `${this.data.buttons.socialButtons.fontWeight}`,
                          borderRadius: `${this.data.buttons.socialButtons.borderRadius}px`,
                        }}
                        class={` gap-3 ${
                          this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && buttonData.slice(-1)[0].buttonText === data.buttonText
                            ? 'border w-full py-2 flex items-center px-9 justify-center gap-1.5 text-center shadow-md items-center '
                            : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split'
                            ? 'border py-2 flex items-center px-9 justify-center w-fit gap-1.5 text-center shadow-md items-center '
                            : null
                        }`}
                      >
                        <img class="w-[18px] h-[18px]" src={data.icon} alt="" />{' '}
                        {this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && index === 3 ? (
                          <span class={` text-${this.data.buttons.socialButtons.fontSize}`}>{data.buttonText}</span>
                        ) : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' ? (
                          <span class={` text-${this.data.buttons.socialButtons.fontSize}`}>{data.buttonText}</span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-0.5">
              <span class={`text-sm text-black `}>Already have an account?</span>
              <a style={{ color: this.data.colors.primary }} href="/">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

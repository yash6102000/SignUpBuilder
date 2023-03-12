import { Component, Prop, Watch, State, h } from '@stencil/core';

import googleIcon from '../../googleIcon.svg';
import addLogo from '../../addLogo.svg';
import starLogo from '../../star.svg';
import avtar from '../../Avatar.svg';
import addCircleOutline from '../../AddCircleOutline.svg';
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

    const socialButtonState = this.data.buttons.socialButtons?.buttonState;
    const submitButtonState = this.data.buttons.submitButton?.buttonState;
    console.log(this.data.inputField.fieldState, 'l');
    return (
      <div
        class={`flex  rounded-xl ${this.data.viewPort.fullScreen && 'w-fit'}  border-text-[#8C8C8C] border ${
          this.data.theme.color === 'dark' ? 'bg-black' : this.data.theme.color === 'texture' ? 'bg-gray-600' : 'bg-white'
        }`}
      >
        {this.data.viewPort.fullScreen || this.data.viewPort.desktop ? (
          <div class={`bg-[#070930] min-w-[424px] rounded-lg  flex px-[50px] pb-[80px] pt-[30px]`}>
            <div class="flex justify-between flex-col gap-20 ">
              <div class="flex flex-col gap-20 ">
                <div>
                  {this.data.logoImage ? (
                    <img class="max-w-[100px]" src={this.data.logoImage} alt="" />
                  ) : (
                    <div class="flex items-center gap-2">
                      <img src={addCircleOutline} alt="" />
                      <span class="font-medium text-white">Add Company Logo</span>
                    </div>
                  )}
                </div>
                <div class="max-w-[280px]">
                  <h1 class="text-3xl font-medium text-white outline-none image relative" contentEditable={true}>
                    Start your journey with us.
                  </h1>

                  <span class="text-white text-sm outline-none image relative" contentEditable={true}>
                    Discover the world’s best community of freelancers ad business owners.
                  </span>
                </div>
              </div>

              <div class="flex flex-col gap-1 max-w-[390px]">
                <div class="flex justify-end  gap-1">
                  <img src={starLogo} alt="" />
                  <span class="text-[#1890FF]  text-xs ">View Custom Layouts</span>
                </div>

                <div class="border-text-none rounded-2xl bg-[#252BA9] flex flex-col gap-6 p-5">
                  <span class="text-white text-xs">
                    "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly."
                  </span>
                  <div class="flex gap-2 items-center">
                    <img src={avtar} alt="" />
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
          style={{ backgroundColor: `${this.data.signUpBox.backgroundColor}`, borderWidth: `${this.data.signUpBox.boxBorder}px`, boxShadow: `${this.data.signUpBox.boxShadow}` }}
          class={`flex rounded-lg p-5 flex-col my-[60px] gap-10 ${this.data.viewPort.tablet ? 'w-[480px]' : null} ${
            this.data.viewPort.mobile ? 'w-[375px] ml-8 mr-8' : 'ml-10 mr-14 '
          } ${this.data.viewPort.fullScreen || this.data.viewPort.desktop ? 'w-3/5' : null} `}
        >
          <div class="flex  gap-[35px] flex-col">
            {this.data.viewPort.mobile && (
              <div class="flex items-center justify-center">
                {this.data.logoImage ? (
                  <img class="max-w-[100px]" src={this.data.logoImage} alt="" />
                ) : (
                  <div class="border items-center px-2  flex flex-col gap-2 rounded-[52px] w-fit py-4">
                    <img class="h-5 w-5" src={addLogo} alt="" />
                    <span>Add Logo</span>
                  </div>
                )}
              </div>
            )}

            <div class="flex items-center gap-1.5">
              <h3 class={`text-xl font-medium  ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '} `} contentEditable={true}>
                Welcome to Company Name!
              </h3>
            </div>
          </div>

          <div class="flex flex-col gap-9">
            <div class={`flex gap-8 ${this.data.buttons.socialButtons.position.top ? 'flex-col-reverse' : 'flex-col'}`}>
              <div class={`flex flex-col gap-7`}>
                <div class="flex flex-col gap-2">
                  <label
                    class={` text-${this.data.inputField.labelFontSize}`}
                    style={{
                      color: `${this.data.inputField.labelFontColor}`,
                      fontWeight: `${this.data.inputField.labelFontWeight}`,
                    }}
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    style={{
                      color: `${this.data.inputField.fontColor}`,
                      backgroundColor: `${this.data.inputField.backgroundColor}`,
                      fontWeight: `${this.data.inputField.fontWeight}`,
                      borderWidth: `${this.data.inputField.boxBorder}px`,
                      borderRadius: `${this.data.inputField.borderRadius}px`,
                    }}
                    value={this.email}
                    onInput={event => this.handleChange(event)}
                    class={`border-[#D9D9D9] border-2 px-3 py-2 text-${this.data.inputField.fontSize} rounded-sm`}
                    placeholder={`${this.data.inputField.fieldState}`}
                    type="text"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label
                    class={` text-${this.data.inputField.labelFontSize}`}
                    style={{
                      color: `${this.data.inputField.labelFontColor}`,
                      fontWeight: `${this.data.inputField.labelFontWeight}`,
                    }}
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    style={{
                      color: `${this.data.inputField.fontColor}`,
                      backgroundColor: `${this.data.inputField.backgroundColor}`,
                      fontWeight: `${this.data.inputField.fontWeight}`,
                      borderWidth: `${this.data.inputField.boxBorder}px`,
                      borderRadius: `${this.data.inputField.borderRadius}px`,
                    }}
                    class={`border-[#D9D9D9] border-2 px-3 py-2 text-${this.data.inputField.fontSize} rounded-sm`}
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <button
                  style={{
                    color: `${submitButtonState === 'Disabled State' ? '#00000040' : this.data.buttons.submitButton.fontColor}`,
                    backgroundColor: `${submitButtonState === 'Disabled State' ? '#0000000a' : this.data.buttons.submitButton.backgroundColor}`,
                    fontWeight: `${this.data.buttons.submitButton.fontWeight}`,
                    borderRadius: `${this.data.buttons.submitButton.borderRadius}px`,
                  }}
                  class={`bg-[#070930] ${submitButtonState === 'Disabled State' ? 'cursor-not-allowed' : 'cursor-pointer hover:border-[#4096ff]'} ${
                    submitButtonState === 'Hover State' && 'border-[#4096ff]'
                  }    text-${this.data.buttons.submitButton.fontSize} rounded-sm py-2 text-center items-center text-white`}
                >
                  Continue
                </button>
                <div class="flex flex-col gap-1">
                  <span class={`text-xs text-gray-600 ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '}`}>
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
                  <hr class="h-px w-full bg-gray-300" />{' '}
                  <div class={`text-xs w-full text-gray-600 text-center ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '} `}>OR SIGNUP WITH</div>{' '}
                  <hr class="h-px w-full bg-gray-300" />
                </div>
                <div class={`flex gap-3 justify-center ${this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' ? 'flex-wrap' : null} items-center`}>
                  {buttonData.map((data: any, index: number) => {
                    return (
                      <div
                        style={{
                          color: `${socialButtonState === 'Disabled State' ? '#00000040' : this.data.buttons.socialButtons.fontColor}`,

                          backgroundColor: `${socialButtonState === 'Disabled State' ? '#0000000a' : this.data.buttons.socialButtons.backgroundColor}`,
                          fontWeight: `${this.data.buttons.socialButtons.fontWeight}`,
                          borderRadius: `${this.data.buttons.socialButtons.borderRadius}px`,
                        }}
                        class={`border px-9 py-2  shadow-md  ${socialButtonState === 'Disabled State' ? 'cursor-not-allowed' : 'cursor-pointer hover:border-[#4096ff]'}  ${
                          socialButtonState === 'Hover State' && 'border-[#4096ff]'
                        } gap-3 ${
                          this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && buttonData.slice(-1)[0].buttonText === data.buttonText
                            ? ' w-full flex items-center  justify-center gap-1.5 text-center  '
                            : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split'
                            ? '  flex items-center justify-center w-fit gap-1.5 text-center '
                            : null
                        }`}
                      >
                        <img class="w-[18px] h-[18px] max-w-none" src={data.icon} alt="" />{' '}
                        {this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && index === 3 ? (
                          <span class={` text-${this.data.buttons.socialButtons.fontSize}`}>{data.buttonText}</span>
                        ) : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' &&buttonData.length<3 ? (
                          <span class={` text-${this.data.buttons.socialButtons.fontSize}`}>{data.buttonText}</span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-0.5">
              <span class={`text-sm ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '} `}>Already have an account?</span>
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

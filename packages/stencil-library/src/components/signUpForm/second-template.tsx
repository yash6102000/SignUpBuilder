import { Component, Prop, Watch, State, h } from '@stencil/core';
import googleIcon from '../../googleIcon.svg';

//@ts-ignore
@Component({
  tag: 'second-template',
  shadow: true,
  styleUrl: 'form.css',
})
export class SecondTemplate {
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
    ];
   
    return (
      <div
        class={`  flex  rounded-xl  border-text-[#8C8C8C] border ${
          this.data.theme.color === 'dark' ? 'bg-black' : this.data.theme.color === 'texture' ? 'bg-gray-600' : 'bg-white'
        }`}
      >
        <div
          style={{ backgroundColor: `${this.data.signUpBox.backgroundColor}`, borderWidth: `${this.data.signUpBox.boxBorder}px`, boxShadow: `${this.data.signUpBox.boxShadow}` }}
          class={`${this.data.viewPort.mobile ? 'w-[375px] px-6 py-6' : 'min-w-[400px] mx-28 my-20 '} rounded-lg `}
        >
          <div class={`flex  flex-col gap-10  p-3 `}>
            <div class="flex  gap-[35px] flex-col">
              <div class="flex justify-between items-center gap-1.5">
                <h3 class={`text-xl font-medium image ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '} `}>Stealth Saas</h3>
                <span class="cursor-pointer" style={{ color: this.data.colors.primary }}>
                  register
                </span>
              </div>
            </div>

            <div class="flex flex-col  gap-9">
              <div class={`flex gap-8 flex-col`}>
                <div class={`flex flex-col gap-7`}>
                  <div class="flex flex-col gap-2">
                    <label class={` ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '} rounded-sm text-sm`} htmlFor="">
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
                    <label class={` ${this.data.signUpBox.backgroundColor === '#000000' ? 'text-white' : 'text-black '} rounded-sm text-sm`} htmlFor="">
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
                    class={`bg-[#070930]  rounded-sm py-2 text-center items-center text-white`}
                  >
                    Continue
                  </button>
                  <div class="flex flex-col gap-1">
                    <span class={`text-xs text-gray-600 `}>
                      By continuing, you agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>
                    </span>
                  </div>
                </div>
                <div class={`flex flex-col gap-9 `}>
                  <div class="flex justify-between items-center gap-2">
                    <hr class="h-px w-full bg-gray-300" /> <div class={`text-xs w-full text-gray-600 text-center  `}>OR SIGNUP WITH</div> <hr class="h-px w-full bg-gray-300" />
                  </div>
                  <div class={`flex gap-3 justify-center ${this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' ? 'flex-wrap' : null}   items-center`}>
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
                              ? 'border w-full py-2 flex  px-9 justify-center gap-1.5 text-center shadow-md items-center '
                              : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split'
                              ? 'border py-2 flex  px-9 justify-center w-fit gap-1.5 text-center shadow-md items-center '
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
                <span class={`text-sm  `}>Already have an account?</span>
                <a style={{ color: this.data.colors.primary }} href="/">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.data.viewPort.fullScreen || this.data.viewPort.desktop ? (
          <div class={`flex bg-pink-400 flex-col py-20 gap-10 w-[400px] justify-center items-center `}>
            Stealth Saas
            
          </div>
        ) : null}
      </div>
    );
  }
}

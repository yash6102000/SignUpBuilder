import { Component, Prop, Watch, State, h } from '@stencil/core';
import edit from '../../edit.svg';
import avatar from '../../Avatar.svg';
import googleIcon from '../../googleIcon.svg';
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
    this.email = event.target.value;
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
    return (
      <div
        class={`flex  rounded-xl  border-text-[#8C8C8C] border ${this.data.theme.color === 'dark' ? 'bg-black' : this.data.theme.color === 'texture' ? 'bg-gray-600' : 'bg-white'}`}
      >
        <div class={`bg-[#070930] w-2/5 rounded-lg  px-[50px] pb-[63px] pt-[30px]`}>
          <div class="flex flex-col gap-20 ">
            <div class="flex items-center gap-2.5">
              <span class="font-medium text-white">Add Company Logo</span>
            </div>
            <div class="max-w-[280px]">
              <h1 class="text-3xl font-medium text-white outline-none relative" contentEditable={true}>
                Start your journey with us. <img class="pointer absolute left-[105px] top-[50px]" src={edit} alt="" />
              </h1>

              <span class="text-white text-sm outline-none relative" contentEditable={true}>
                Discover the world’s best community of freelancers ad business owners. <img class="pointer absolute right-[-20px] top-[25px]" src={edit} alt="" />
              </span>
            </div>
            <div class="flex flex-col flex-end max-w-[390px]">
              <span class="text-[#1890FF] text-end text-xs ">View Custom Layouts</span>
              <div class="border-text-none rounded-2xl bg-[#252BA9] flex flex-col gap-6 p-5">
                <span class="text-white text-xs">
                  "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly."
                </span>
                <div class="flex gap-2 items-center">
                  <img src={avatar} alt="" />
                  <div>
                    <h4 class="text-white text-sm">Arun Raj</h4>
                    <span class="text-white text-xs">Senior Product Manger @ABSoftwares</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-3/5 flex-col pl-20 pr-14 py-20 gap-10 ">
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <h3 class={`text-xl font-medium ${this.data.theme.color === 'light' ? 'text-black' : 'text-white'}`} contentEditable={false}>
                Welcome to Company Name!
              </h3>
              <img src={edit} alt="" />
            </div>
          </div>

          <div class="flex flex-col gap-9">
            <div class={`flex gap-8 ${this.data.buttons.socialButtons.position.top ? 'flex-col-reverse' : 'flex-col'}`}>
              <div class={`flex flex-col gap-7`}>
                <div class="flex flex-col gap-2">
                  <label class={`${this.data.theme.color === 'light' ? 'text-gray-600' : 'text-white'} `} htmlFor="">
                    Email
                  </label>
                  <input
                    value={this.email}
                    onInput={event => this.handleChange(event)}
                    class={`border-[#D9D9D9] border-2 px-3 py-2 rounded-sm text-sm`}
                    placeholder="Enter your email"
                    type="text"
                  />
                  {!this.email.includes('@') && this.email.length !==0 && <div >please enter valid email</div>}
                </div>
                <div class="flex flex-col gap-2">
                  <label class={`${this.data.theme.color === 'light' ? 'text-gray-600' : 'text-white'} rounded-sm text-sm`} htmlFor="">
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
                  <span class={`text-xs text-gray-600 ${this.data.theme.color === 'light' ? 'text-black' : 'text-white'}`}>
                    By continuing, you agree to the{' '}
                    <a href="/" class="text-blue-600">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a class="text-blue-600" href="/">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
              <div class={`flex gap-9 ${this.data.buttons.socialButtons.position.top ? 'flex-col-reverse' : 'flex-col'}`}>
                <div class="flex justify-between items-center gap-2">
                  <hr class="h-px w-full bg-gray-300" />{' '}
                  <div class={`text-xs w-full text-gray-600 text-center ${this.data.theme.color === 'light' ? 'text-black' : 'text-white'} `}>OR SIGNUP WITH</div>{' '}
                  <hr class="h-px w-full bg-gray-300" />
                </div>
                <div class="flex gap-3 items-center">
                  {buttonData.map((data: any, index: number) => {
                    return (
                      <button
                        style={{
                          color: `${this.data.buttons.socialButtons.fontColor}`,
                          backgroundColor: `${this.data.buttons.socialButtons.backgroundColor}`,
                          fontWeight: `${this.data.buttons.socialButtons.fontWeight}`,
                          borderRadius: `${this.data.buttons.socialButtons.borderRadius}px`,
                        }}
                        class={`border w-full py-2 flex items-center px-9 justify-center gap-1.5 text-center shadow-md items-center text-${this.data.buttons.socialButtons.fontSize}`}
                      >
                        <img class="w-[18px] h-[18px]" src={data.icon} alt="" />{' '}
                        {this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && index === 3 ? data.buttonText : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-0.5">
              <span class={`text-sm ${this.data.theme.color === 'light' ? 'text-black' : 'text-white'} `}>Already have an account?</span>
              <a href="/" class="text-sm text-blue-600">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

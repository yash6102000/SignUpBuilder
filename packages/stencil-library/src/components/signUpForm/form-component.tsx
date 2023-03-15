import { Component, Prop, Watch, State, h } from '@stencil/core';
import 'iconify-icon';
import addLogo from '../../addLogo.svg';
import starLogo from '../../star.svg';
import avtar from '../../Avatar.svg';
import addCircleOutline from '../../AddCircleOutline.svg';
import { SignpState } from '../../interface';
import editIcon from '../../Edit.svg';
//@ts-ignore
@Component({
  tag: 'form-component',
  shadow: true,
  styleUrl: 'form.css',
})
export class FormComponent {
  @Prop() data: SignpState;
  @State() email: string = '';
  @Watch('data')
  handleChange(event) {
    this.email = event?.target?.value;
  }
  @State() onEdit = false;
  @State() onEditLoginBoxHeading = false;
  @State() layoutBoxDescription = false;
  @State() showPassword = false;

  render() {
console.log(this.email,'ye email hai')
    const socialButtonState = this.data.buttons.socialButtons?.buttonState;
    const submitButtonState = this.data.buttons.submitButton?.buttonState;
    let filterApprovelData = [];
    this.data?.userApprovel?.filter((data: any) => {
      return filterApprovelData.push(data.value);
    });

    if (this.onEditLoginBoxHeading) {
      const heading = document?.getElementById('login-box-heading');
      heading?.focus();
    }
    console.log(this.data.colors.error,'this.data.colors.error')
    return (
      <div
        class={`flex  rounded-xl   border-text-[#8C8C8C] border ${
          this.data.theme.color === 'dark' ? 'bg-black' : this.data.theme.color === 'texture' ? 'bg-gray-600' : 'bg-white'
        }`}
      >
        {this.data.viewPort.fullScreen || this.data.viewPort.desktop ? (
          <div class={`bg-[#070930] min-w-[424px] rounded-lg  px-[50px] pb-[80px] pt-[30px]`}>
            <div class="flex justify-between flex-col gap-20 ">
              <div class="flex flex-col gap-20 ">
                <div class={`${this.data.logoAlignment === 'center' ? 'flex justify-center' : this.data.logoAlignment === 'right' ? 'flex justify-end' : null}`}>
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
                  <h1
                    class={`text-3xl font-medium ${this.onEdit && 'underline underline-offset-8 outline-none transition-all duration-300 ease-in-out'}  text-white `}
                    contentEditable={this.onEdit}
                  >
                    Start your journey with us. <img onClick={() => (this.onEdit = !this.onEdit)} class="inline-block cursor-pointer w-4 h-4" src={editIcon} alt="" />
                  </h1>

                  <span
                    class={`text-white text-sm ${this.layoutBoxDescription && 'underline underline-offset-8 outline-none transition-all duration-300 ease-in-out'}`}
                    contentEditable={this.layoutBoxDescription}
                  >
                    Discover the world’s best community of freelancers ad business owners.{' '}
                    <img onClick={() => (this.layoutBoxDescription = !this.layoutBoxDescription)} class="inline-block cursor-pointer w-4 h-4" src={editIcon} alt="" />
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
          class={`flex rounded-lg p-5 flex-col py-20 gap-10 ${this.data.viewPort.tablet ? 'w-[480px]' : null} ${
            this.data.viewPort.mobile ? 'w-[375px] pl-8 pr-8' : 'pl-10 pr-14 '
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
              <h3
                class={`text-xl font-medium ${this.onEditLoginBoxHeading && 'underline underline-offset-8 outline-none transition-all duration-300 ease-in-out'}  ${
                  this.data.theme.color === 'dark' ? 'text-white' : 'text-black'
                } `}
                contentEditable={this.onEditLoginBoxHeading}
                id="login-box-heading"
                tabIndex={0}
                onMouseOut={() => this.onEditLoginBoxHeading === false}
              >
                Welcome to Company Name!
                <img
                  onClick={() => {
                    this.onEditLoginBoxHeading = !this.onEditLoginBoxHeading;
                  }}
                  class="inline-block cursor-pointer w-4 h-4"
                  src={editIcon}
                  alt=""
                />
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
                    placeholder="Enter Your Email"
                    type="text"
                    required={true}
                  />
                  {
                    !this.email?.includes('@')&&this.email?.length>0&&<span style={{ color: this.data.colors.error }}>please enter a valid email</span>
                  }
                </div>
                {this.data.emailPassLogin === 'enablePasswordLogin' && (
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
                    <div class="relative">
                      <input
                        style={{
                          color: `${this.data.inputField.fontColor}`,
                          backgroundColor: `${this.data.inputField.backgroundColor}`,
                          fontWeight: `${this.data.inputField.fontWeight}`,
                          borderWidth: `${this.data.inputField.boxBorder}px`,
                          borderRadius: `${this.data.inputField.borderRadius}px`,
                        }}
                        class={`border-[#D9D9D9] w-full border-2 px-3 py-2 text-${this.data.inputField.fontSize} rounded-sm`}
                        placeholder="Enter your password"
                        type={this.showPassword ? 'text' : 'password'}
                      />
                      <button
                        type="button"
                        class="absolute text-[#00000073] right-3 top-[11px]"
                        onClick={() => {
                          this.showPassword = !this.showPassword;
                        }}
                      >
                        {this.showPassword ? <iconify-icon  icon="mdi:eye-off-outline"></iconify-icon> : <iconify-icon icon="ic:outline-remove-red-eye"></iconify-icon>}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  style={{
                    color: `${submitButtonState === 'Disabled State' ? '#00000040' : this.data.buttons.submitButton.fontColor}`,
                    backgroundColor: `${submitButtonState === 'Disabled State' ? '#0000000a' : this.data.buttons.submitButton.backgroundColor}`,
                    fontWeight: `${this.data.buttons.submitButton.fontWeight}`,
                    borderRadius: `${this.data.buttons.submitButton.borderRadius}px`,
                  }}
                  class={`bg-[#070930] max-h-12 ${submitButtonState === 'Disabled State' ? 'cursor-not-allowed' : 'cursor-pointer hover:border-[#4096ff]'} ${
                    submitButtonState === 'Hover State' && 'border-[#4096ff]'
                  }    text-${this.data.buttons.submitButton.fontSize} rounded-sm py-2 text-center items-center text-white`}
                >
                  Continue
                </button>
                <div class="flex flex-col gap-1">
                  {filterApprovelData.length > 0 && (
                    <span class={`text-xs flex items-center gap-1 text-[#00000073] ${this.data.theme.color === 'dark' ? 'text-white' : 'text-black'}`}>
                      <span>By continuing, you agree to the</span>
                      {filterApprovelData.includes('termsOfUse') && (
                        <a href="/" style={{ color: this.data.colors.primary }}>
                          Terms of Service
                        </a>
                      )}
                      {filterApprovelData.length > 1 && <span class="text-[#00000073] text-xs">and</span>}
                      {''}
                      {filterApprovelData.includes('privacyPolicy') && (
                        <a style={{ color: this.data.colors.primary }} href="/">
                          Privacy Policy
                        </a>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div class={`flex gap-9 ${this.data.buttons.socialButtons.position.top ? 'flex-col-reverse' : 'flex-col'}`}>
                {this.data.socialLoginButton.length > 0 && (
                  <div class="flex justify-between items-center gap-2">
                    <hr class="h-px w-full bg-gray-300" /> <div class={`text-xs w-full text-gray-600 text-center  `}>OR SIGNUP WITH</div> <hr class="h-px w-full bg-gray-300" />
                  </div>
                )}

                <div
                  class={`flex flex-row-reverse gap-3 justify-center ${
                    this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' && this.data.socialLoginButton.length > 2 && 'flex-wrap'
                  } items-center`}
                >
                  {this.data.socialLoginButton.map((data: any) => {
                    return (
                      <div
                        key={data.value}
                        style={{
                          color: `${socialButtonState === 'Disabled State' ? '#00000040' : this.data.buttons.socialButtons.fontColor}`,

                          backgroundColor: `${socialButtonState === 'Disabled State' ? '#0000000a' : this.data.buttons.socialButtons.backgroundColor}`,
                          fontWeight: `${this.data.buttons.socialButtons.fontWeight}`,
                          borderRadius: `${this.data.buttons.socialButtons.borderRadius}px`,
                        }}
                        class={`border max-h-12 flex items-center shadow-md  ${socialButtonState === 'Disabled State' ? 'cursor-not-allowed' : 'cursor-pointer hover:border-[#4096ff]'}  ${
                          socialButtonState === 'Hover State' && 'border-[#4096ff]'
                        } gap-3 ${
                          this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && this.data.socialLoginButton.slice(-1)[0].label === data.label
                            ? ' w-full  flex items-center px-9 py-2  justify-center gap-1.5 text-center  '
                            : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' && this.data.socialLoginButton.length > 2
                            ? 'px-9 py-2  flex items-center justify-center w-fit gap-1.5 text-center '
                            : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' && this.data.socialLoginButton.length <= 2
                            ? 'px-9 py-2  flex items-center justify-center w-full gap-1.5 text-center '
                            : null
                        }`}
                      >
                        <iconify-icon icon={data.logo}></iconify-icon>
                        {this.data.buttons.socialButtons.layout.layoutType !== 'Equally-Split' && this.data.socialLoginButton.slice(-1)[0].label === data.label ? (
                          <span class={` text-${this.data.buttons.socialButtons.fontSize}`}>{data.label}</span>
                        ) : this.data.buttons.socialButtons.layout.layoutType === 'Equally-Split' && this.data.socialLoginButton.length < 4 ? (
                          <span class={` text-${this.data.buttons.socialButtons.fontSize}`}>{data.label}</span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-0.5">
              <span class={`text-sm ${this.data.theme.color === 'dark' ? 'text-white' : 'text-black'} `}>Already have an account?</span>
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

/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ContainerWrapper {
        "signUp": any;
    }
    interface FormComponent {
        "data": any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": any;
        /**
          * The last name
         */
        "last": any;
        /**
          * The middle name
         */
        "middle": any;
    }
}
declare global {
    interface HTMLContainerWrapperElement extends Components.ContainerWrapper, HTMLStencilElement {
    }
    var HTMLContainerWrapperElement: {
        prototype: HTMLContainerWrapperElement;
        new (): HTMLContainerWrapperElement;
    };
    interface HTMLFormComponentElement extends Components.FormComponent, HTMLStencilElement {
    }
    var HTMLFormComponentElement: {
        prototype: HTMLFormComponentElement;
        new (): HTMLFormComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "container-wrapper": HTMLContainerWrapperElement;
        "form-component": HTMLFormComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ContainerWrapper {
        "signUp"?: any;
    }
    interface FormComponent {
        "data"?: any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: any;
        /**
          * The last name
         */
        "last"?: any;
        /**
          * The middle name
         */
        "middle"?: any;
    }
    interface IntrinsicElements {
        "container-wrapper": ContainerWrapper;
        "form-component": FormComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "container-wrapper": LocalJSX.ContainerWrapper & JSXBase.HTMLAttributes<HTMLContainerWrapperElement>;
            "form-component": LocalJSX.FormComponent & JSXBase.HTMLAttributes<HTMLFormComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

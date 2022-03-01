import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue"


describe("HelloWorld.vue", () => {
     it("renders props...msg when passed", () => {
         const wrapper = mount(HelloWorld, {
             propsData:{
                msg: "Hello Friend" 
             }
         });
         expect(wrapper.text()).toContain("Hello Friend");
     });
     
});
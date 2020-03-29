import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import GraphInfo from '@/views/GraphInfo'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'



describe('GraphInfo', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(GraphInfo, {
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
            }
        });
    });  

  it('input fields render', () => {
        expect(wrapper.find('#city1').exists()).toBe(true)
        expect(wrapper.find('#checkboxSC').exists()).toBe(true)
        expect(wrapper.find('#plantType').exists()).toBe(true)
        expect(wrapper.find('#dataParameter').exists()).toBe(true)
  })

  it('click submit with empty data creating error messages', () => {
        let btn = wrapper.find('button')
        btn.trigger('click')
        console.log("Clicked submit button with empty inputs")
        expect(wrapper.find('#city1Err').exists()).toBe(true)
        console.log("City 1 parameter error created")

        expect(wrapper.find('#plantErr').exists()).toBe(true)
        console.log("Plant type parameter error created")

        expect(wrapper.find('#param1Err').exists()).toBe(true)
        console.log("Metric parameter 1 error created")
  })

  it('check second city checkbox and check if input is rendered', () => {
      let btn = wrapper.find('#checkboxSC')
      btn.trigger('click')
      expect(wrapper.find('#city2').exists()).toBe(true)
      
  })
})
import { shallowMount } from '@vue/test-utils'
import MainSearch from '@/components/MainSearch.vue'

describe('MainSearch.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MainSearch, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

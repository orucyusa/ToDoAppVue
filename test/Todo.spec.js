import { mount } from '@vue/test-utils'
import Todo from '~/components/Todo.vue'
import axios from 'axios'
import flushPromises from 'flush-promises'
jest.mock('axios')


describe('Todo.vue', () => {
    const todo = [ {
      content : 'buy some ',
      id : '11'
    },
    {
      content : 'buy some milk',
      id : '12'
    }
      ]
    // it renders correctly with given props
    test('is renders correctly with given props', async () => {
      axios.get.mockResolvedValue({
        data : todo
      })
      const wrapper = mount(Todo)
      await flushPromises()
      expect(wrapper.vm.$data.todos).toEqual(todo)
    })
    test('renders correctly', () => {
      const wrapper = mount(Todo)
      expect (wrapper.vm).toBeTruthy()
    })
    test('todo input renders correctly', () => {
      const wrapper = mount(Todo)
      const todoInput = wrapper.find('#newitem')
      expect(todoInput.attributes().placeholder).toEqual('Add to the todo list')
    })
    test('todo input connected data model', () => {
      const todoText = 'buy some milk'
      const wrapper = mount(Todo)
      const todoInput = wrapper.find('#newitem')
      todoInput.setValue(todoText)
      expect(wrapper.vm.$data.itemTitle).toEqual(todoText)
    })
    test('save function click to save button', async () => {
      const wrapper = mount(Todo)
      wrapper.setMethods({
        addItem: jest.fn()
      })
      await wrapper.find('#add').trigger('click')
      expect(wrapper.vm.addItem).toHaveBeenCalled()
    })
    test ('adding invalid to do', async () => {
      axios.post.mockResolvedValue({
        status : 400
      })
      const wrapper = mount(Todo)
      await flushPromises()
      expect(wrapper.vm.$data.todos).toEqual(todo)
    })
  }
  )
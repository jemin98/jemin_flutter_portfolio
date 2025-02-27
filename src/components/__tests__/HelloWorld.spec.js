import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
describe('HelloWorld', function () {
    it('renders properly', function () {
        var wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });
        expect(wrapper.text()).toContain('Hello Vitest');
    });
});
//# sourceMappingURL=HelloWorld.spec.js.map
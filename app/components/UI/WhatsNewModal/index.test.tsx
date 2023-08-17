import React from 'react';
import { shallow } from 'enzyme';
import WhatsNewModal from './';
import { NavigationContainer } from '@react-navigation/native';

describe('WhatsNewModal', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <NavigationContainer>
        <WhatsNewModal />
      </NavigationContainer>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import ModalRow from './components/ModalRow'
import Modal from './components/Modal'

it('renders Modal and ModalRow without crashing', () => {
  const row = renderer.create(
		<ModalRow id='name' value='' label='Name' />
	);
  let modalRowTree = row.toJSON();
	expect(modalRowTree).toMatchSnapshot();

  const modal = renderer.create(
		<Modal />
	);
  let modalTree = modal.toJSON();
	expect(modalTree).toMatchSnapshot();
});

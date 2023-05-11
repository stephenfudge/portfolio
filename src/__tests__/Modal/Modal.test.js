import { render, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal', () => {
  // test that the modal is not open when isOpen is false
  it('should not render when isOpen prop is false', () => {
    const { queryByTestId } = render(<Modal isOpen={false} closeModal={() => {}} />);
    expect(queryByTestId('modal')).toBeNull();
  });

  // test that the modal opens when isOpen is true
  it('should render when isOpen prop is true', () => {
    const { queryByTestId } = render(<Modal isOpen={true} closeModal={() => {}} />);
    expect(queryByTestId('modal')).toBeInTheDocument();
  });

  // test that the modal closes when clicked off
  it('should call closeModal function when overlay is clicked', () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(<Modal isOpen={true} closeModal={closeModal} />);
    fireEvent.click(getByTestId('overlay'));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  // test that the modal closes when the close button is clicked
  it('should call closeModal function when close button is clicked', () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(<Modal isOpen={true} closeModal={closeModal} />);
    fireEvent.click(getByTestId('close-button'));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});

import { render, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal';

// describe('Modal', () => {
//   it('should not render when isOpen prop is false', () => {
//     const { queryByTestId } = render(<Modal isOpen={false} closeModal={() => {}} />);
//     expect(queryByTestId('modal')).toBeNull();
//   });

//   it('should render when isOpen prop is true', () => {
//     const { queryByTestId } = render(<Modal isOpen={true} closeModal={() => {}} />);
//     expect(queryByTestId('modal')).toBeInTheDocument();
//   });

//   it('should call closeModal function when overlay is clicked', () => {
//     const closeModal = jest.fn();
//     const { getByTestId } = render(<Modal isOpen={true} closeModal={closeModal} />);
//     fireEvent.click(getByTestId('overlay'));
//     expect(closeModal).toHaveBeenCalledTimes(1);
//   });

//   it('should call closeModal function when close button is clicked', () => {
//     const closeModal = jest.fn();
//     const { getByTestId } = render(<Modal isOpen={true} closeModal={closeModal} />);
//     fireEvent.click(getByTestId('close-button'));
//     expect(closeModal).toHaveBeenCalledTimes(1);
//   });
// });


describe('Modal', () => {
  it('should not render when isOpen prop is false', () => {
    const { queryByTestId } = render(<Modal isOpen={false} closeModal={() => {}} />);
    expect(queryByTestId('modal')).toBeNull();
  });

  it('should render when isOpen prop is true', () => {
    const { queryByTestId } = render(<Modal isOpen={true} closeModal={() => {}} />);
    expect(queryByTestId('modal')).toBeInTheDocument();
  });

  it('should call closeModal function when overlay is clicked', () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(<Modal isOpen={true} closeModal={closeModal} />);
    fireEvent.click(getByTestId('overlay'));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it('should call closeModal function when close button is clicked', () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(<Modal isOpen={true} closeModal={closeModal} />);
    fireEvent.click(getByTestId('close-button'));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});

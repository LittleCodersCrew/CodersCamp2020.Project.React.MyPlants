import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea component render', () => {
  it('Should render with type textarea', () => {
    const testId = 'textArea';
    const testFunc = () => 'test';

    render(<TextArea text="test" id="123" name="test" onChange={testFunc} />);

    const testRender = screen.getByTestId(testId);

    expect(testRender).toBeInTheDocument();
  });
});

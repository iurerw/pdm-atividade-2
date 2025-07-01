import { render, fireEvent } from '@testing-library/react-native';
import { router } from 'expo-router';
import Main from '../components/Main';

describe('<Main />', () => {
  test('Teste de renderizacao da imagem', () => {
    const { getByTestId } = render(<Main />);
    const image = getByTestId('main-image');

    expect(image).toBeTruthy();
    expect(image.props.source).toEqual({
      uri: expect.stringContaining('data:image/jpeg;base64,'),
    });
  });
});


jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
}));

describe('<Main />', () => {
  it('Teste de navegacao => deve navegar para "/GetInfoScreen" ao clicar no botão', () => {
    const { getByText } = render(<Main />);
    const button = getByText("let's check");
    
    fireEvent.press(button);
    
    expect(router.navigate).toHaveBeenCalledWith('/GetInfoScreen');
  });
});